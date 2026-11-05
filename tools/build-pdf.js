#!/usr/bin/env node
/*
  Builds phoebe-lin-portfolio.pdf, an offline backup of the site for networks
  that block phoebezlin.com.

  Everything comes from content.js, so after editing site copy or images just
  re-run:   node tools/build-pdf.js

  Needs: node + playwright (chromium), ffmpeg (for video stills), python3 with
  Pillow (to shrink screenshots so the PDF stays email-sized).
*/
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const BUILD = path.join(__dirname, ".pdf-build");
const OUT = path.join(ROOT, "phoebe-lin-portfolio.pdf");
const SITE_URL = "https://www.phoebezlin.com";

// ---- load content.js -------------------------------------------------------
const sandbox = { window: {}, Event: function () {} };
sandbox.window.dispatchEvent = () => {};
vm.runInNewContext(fs.readFileSync(path.join(ROOT, "content.js"), "utf8"), sandbox);
const SITE = sandbox.window.SITE;

// ---- assets: shrink images, grab a still from each video -------------------
fs.mkdirSync(BUILD, { recursive: true });
const MAX_W = 2000;

function prepAsset(src) {
  const abs = path.join(ROOT, src);
  if (!fs.existsSync(abs)) return null;
  const out = path.join(BUILD, src.replace(/^\//, "").replace(/[\/]/g, "_").replace(/\.\w+$/, ".jpg"));
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);
  if (!fs.existsSync(out) || fs.statSync(out).mtimeMs < fs.statSync(abs).mtimeMs) {
    let input = abs;
    if (isVideo) {
      // Take a frame ~40% in: past any intro fade, usually mid-interaction.
      const dur = parseFloat(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", abs]).toString()) || 2;
      input = out.replace(/\.jpg$/, ".frame.png");
      execFileSync("ffmpeg", ["-y", "-v", "error", "-ss", String(dur * 0.4), "-i", abs, "-frames:v", "1", input]);
    }
    execFileSync("python3", ["-c", `
import sys
from PIL import Image
im = Image.open(sys.argv[1])
if im.mode in ("RGBA", "LA", "P"):
    im = im.convert("RGBA")
    bg = Image.new("RGB", im.size, (251, 251, 249))
    bg.paste(im, mask=im.split()[-1])
    im = bg
else:
    im = im.convert("RGB")
w = int(sys.argv[3])
if im.width > w:
    im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
im.save(sys.argv[2], "JPEG", quality=84, optimize=True, progressive=True)
`, input, out, String(MAX_W)]);
    if (isVideo) fs.unlinkSync(input);
  }
  return { file: "file://" + out, isVideo };
}

// ---- tiny markdown: paragraphs, numbered lists, *italic*, [link](url) -------
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function inline(s) {
  return esc(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}
function md(s) {
  return String(s || "").trim().split(/\n\s*\n/).map((block) => {
    const lines = block.split("\n");
    if (lines.every((l) => /^\d+\.\s/.test(l))) {
      return "<ol>" + lines.map((l) => "<li>" + inline(l.replace(/^\d+\.\s/, "")) + "</li>").join("") + "</ol>";
    }
    const items = lines.filter((l) => /^\d+\.\s/.test(l));
    if (items.length && /^\d+\.\s/.test(lines[1] || "")) {
      return "<p>" + inline(lines[0]) + "</p><ol>" + lines.slice(1).map((l) => "<li>" + inline(l.replace(/^\d+\.\s/, "")) + "</li>").join("") + "</ol>";
    }
    return "<p>" + lines.map(inline).join("<br>") + "</p>";
  }).join("");
}

// ---- pages -----------------------------------------------------------------
const pages = [];
const projects = SITE.home.projects;
const host = SITE_URL.replace(/^https?:\/\//, "");

pages.push(`
<section class="page cover">
  <div class="cover-top">
    <div class="eyebrow">Portfolio · ${new Date().getFullYear()}</div>
  </div>
  <div>
    <h1 class="name">${esc(SITE.name)}</h1>
    <p class="intro">${esc(SITE.home.intro)}</p>
  </div>
  <div class="cover-foot">
    <div class="contacts">
      <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
      <a href="https://www.linkedin.com/in/phoebelin/">linkedin.com/in/phoebelin</a>
      <a href="${SITE_URL}">${host}</a>
    </div>
    <ol class="toc">
      ${projects.map((p, i) => `<li><span class="num">${String(i + 1).padStart(2, "0")}</span><span>${esc(p.title)}</span><span class="date">${esc(p.date)}</span></li>`).join("")}
    </ol>
  </div>
</section>`);

projects.forEach((p, pi) => {
  const cs = SITE.caseStudies[p.slug];
  if (!cs) return;
  const num = String(pi + 1).padStart(2, "0");
  const metaOutcome = (cs.meta || []).filter((m) => m.label !== "Outcome");
  const outcomeMeta = (cs.meta || []).find((m) => m.label === "Outcome");
  // Skip the outcome section when it just repeats the Outcome meta line.
  const showOutcome = cs.outcome && !(outcomeMeta && outcomeMeta.value.trim() === cs.outcome.trim());

  pages.push(`
<section class="page study" data-running="${num} · ${esc(p.title)}">
  <div class="study-left">
    <div class="eyebrow">${num} · ${esc(p.date)}</div>
    <h2 class="title">${esc(p.title)}</h2>
    <p class="subtitle">${esc(cs.subtitle)}</p>
    <dl class="meta">
      ${metaOutcome.map((m) => `<dt>${esc(m.label)}</dt><dd>${inline(m.value)}</dd>`).join("")}
      ${outcomeMeta ? `<dt>Outcome</dt><dd>${inline(outcomeMeta.value)}</dd>` : ""}
    </dl>
    <a class="online" href="${SITE_URL}/work/${p.slug}">${host}/work/${p.slug}</a>
  </div>
  <div class="study-right">
    <div class="label">Context</div>
    <div class="body">${md(cs.context)}</div>
    <div class="label">Key decisions</div>
    <div class="decisions">
      ${(cs.decisions || []).map((d) => `<div class="decision"><span class="dnum">${esc(d.num)}</span><div><div class="dtitle">${esc(d.title)}</div><div class="dbody">${inline(d.body)}</div></div></div>`).join("")}
    </div>
    ${showOutcome ? `<div class="outcome-block"><div class="label">Outcome &amp; learnings</div><div class="body">${md(cs.outcome)}</div></div>` : ""}
  </div>
</section>`);

  // Gallery: tiles without src reuse the home images, same as the site.
  const tiles = (cs.gallery || []).map((g, i) => {
    const src = g.src || (p.images || [])[i];
    const a = src && prepAsset(src);
    return a ? Object.assign({}, g, a) : null;
  }).filter(Boolean);

  // Group into pages: two "span 3" tiles per page, three "span 2" per page.
  const groups = [];
  let cur = null;
  tiles.forEach((t) => {
    const per = t.col === "span 2" ? 3 : t.col === "span 6" ? 1 : 2;
    if (!cur || cur.per !== per || cur.items.length >= per) { cur = { per, items: [] }; groups.push(cur); }
    cur.items.push(t);
  });
  // Don't leave a lonely half-width tile: let it go full width.
  groups.forEach((g) => { if (g.items.length === 1) g.per = 1; });

  groups.forEach((g) => {
    pages.push(`
<section class="page gallery">
  <div class="running"><span>${num} · ${esc(p.title)}</span></div>
  <div class="grid cols-${g.per}">
    ${g.items.map((t) => `
    <figure>
      <div class="frame"><img src="${t.file}"></div>
      <figcaption>${esc(t.caption || "")}${t.isVideo ? `<span class="vid">Video on site</span>` : ""}</figcaption>
    </figure>`).join("")}
  </div>
</section>`);
  });

});

const about = SITE.about;
const portrait = prepAsset("/images/portrait.jpg");
pages.push(`
<section class="page about">
  <div class="about-left">
    <div class="eyebrow">About</div>
    <p class="bio">${esc(about.bio)}</p>
    <div class="label">${esc(about.beliefsTitle)}</div>
    ${about.beliefs.map((b) => `<div class="belief"><div class="btitle">${esc(b.label)}</div><div class="bbody">${esc(b.body)}</div></div>`).join("")}
  </div>
  <div class="about-mid">
    <div class="label">Experience</div>
    ${about.roles.map((r) => `<div class="role"><span class="year">${esc(r.year)}</span><div><div class="rtitle">${esc(r.role)}</div><div class="rco">${esc(r.company)}</div></div></div>`).join("")}
    <div class="label" style="margin-top:26px">Selected writing</div>
    ${SITE.writing.entries.map((w) => `<div class="pub"><a href="${esc(w.href)}">${esc(w.title)}</a><div class="rco">${esc(w.venue)} · ${esc(w.date)}</div></div>`).join("")}
  </div>
  <div class="about-right">
    ${portrait ? `<img src="${portrait.file}">` : ""}
    <div class="contacts small">
      <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
      <a href="https://www.linkedin.com/in/phoebelin/">linkedin.com/in/phoebelin</a>
      <a href="${SITE_URL}">${host}</a>
    </div>
  </div>
</section>`);

const css = `
@page { size: 13.333in 7.5in; margin: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { font-family: 'Karla', sans-serif; color: #121210; background: #fbfbf9; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
a { color: inherit; text-decoration: none; }
.page { width: 13.333in; height: 7.5in; padding: 0.6in 0.75in; position: relative; overflow: hidden; page-break-after: always; background: #fbfbf9; }
.page:last-child { page-break-after: auto; }
.eyebrow, .label { font-size: 10.5px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.45; }
.label { margin: 0 0 12px; }
.serif, .name, .title, .dtitle, .intro, .subtitle, .bio { font-family: 'Newsreader', serif; }

.cover { display: flex; flex-direction: column; justify-content: space-between; }
.name { font-size: 64px; font-weight: 400; letter-spacing: -0.02em; margin: 0 0 22px; }
.intro { font-size: 21px; line-height: 1.5; font-weight: 300; max-width: 8.6in; margin: 0; }
.cover-foot { display: flex; justify-content: space-between; align-items: flex-end; gap: 0.6in; }
.contacts { display: flex; flex-direction: column; gap: 6px; font-size: 13px; opacity: 0.7; }
.contacts a { border-bottom: 1px solid rgba(18,18,16,0.25); align-self: flex-start; padding-bottom: 1px; }
.contacts.small { font-size: 11.5px; margin-top: 14px; }
.toc { list-style: none; margin: 0; padding: 0; min-width: 5.2in; font-size: 13px; }
.toc li { display: flex; gap: 16px; padding: 7px 0; border-top: 1px solid rgba(18,18,16,0.12); }
.toc .num, .dnum, .year { font-family: 'JetBrains Mono', monospace; font-size: 11px; opacity: 0.45; padding-top: 2px; }
.toc .date { margin-left: auto; opacity: 0.45; }

.study { display: grid; grid-template-columns: 4.6in 1fr; gap: 0.7in; }
.title { font-size: 40px; font-weight: 400; letter-spacing: -0.015em; line-height: 1.1; margin: 14px 0 12px; }
.subtitle { font-size: 17px; line-height: 1.45; font-weight: 300; opacity: 0.7; margin: 0 0 24px; }
.meta { display: grid; grid-template-columns: 0.9in 1fr; row-gap: 9px; margin: 0; padding: 16px 0; border-top: 1px solid rgba(18,18,16,0.12); border-bottom: 1px solid rgba(18,18,16,0.12); font-size: 12.5px; line-height: 1.5; }
.meta dt { font-size: 9.5px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.4; padding-top: 3px; }
.meta dd { margin: 0; opacity: 0.85; }
.meta a, .body a { border-bottom: 1px solid rgba(18,18,16,0.3); }
.online { display: inline-block; margin-top: 14px; font-family: 'JetBrains Mono', monospace; font-size: 10.5px; opacity: 0.5; }
.study-right { padding-top: 6px; }
.body { font-size: 13.5px; line-height: 1.65; opacity: 0.82; margin-bottom: 26px; }
.body p { margin: 0 0 10px; }
.body ol { margin: 0 0 10px; padding-left: 20px; }
.body.large { font-size: 17px; line-height: 1.65; max-width: 8.4in; }
.decision { display: grid; grid-template-columns: 34px 1fr; padding: 11px 0; border-top: 1px solid rgba(18,18,16,0.1); }
.dtitle { font-size: 18px; margin-bottom: 4px; }
.dbody { font-size: 12.5px; line-height: 1.6; opacity: 0.7; }

.running { position: absolute; top: 0.32in; left: 0.75in; right: 0.75in; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 600; opacity: 0.4; }
.gallery { display: flex; align-items: center; padding-top: 0.7in; padding-bottom: 0.5in; }
.grid { display: grid; gap: 0.28in; width: 100%; }
.grid.cols-1 { grid-template-columns: 1fr; }
.grid.cols-2 { grid-template-columns: 1fr 1fr; }
.grid.cols-3 { grid-template-columns: 1fr 1fr 1fr; }
figure { margin: 0; }
.frame { background: #efeee9; border-radius: 4px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
.cols-1 .frame { height: 5.6in; }
.cols-2 .frame { height: 3.75in; }
.cols-3 .frame { height: 2.5in; }
.frame img { max-width: 100%; max-height: 100%; display: block; }
figcaption { font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 0.03em; opacity: 0.6; margin-top: 9px; line-height: 1.5; }
.vid { margin-left: 10px; padding: 1px 6px; border: 1px solid rgba(18,18,16,0.3); border-radius: 999px; font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; white-space: nowrap; }
.closing { display: flex; align-items: center; }
.closing-inner { width: 100%; }
.outcome-block .body { margin-bottom: 0; }
.outcome-block { margin-top: 22px; }

.about { display: grid; grid-template-columns: 4.5in 3.6in 1fr; gap: 0.5in; }
.bio { font-size: 18px; line-height: 1.5; font-weight: 300; margin: 14px 0 26px; }
.belief { margin-bottom: 14px; }
.btitle { font-size: 13.5px; margin-bottom: 3px; }
.bbody { font-size: 11.5px; line-height: 1.6; opacity: 0.65; }
.role { display: grid; grid-template-columns: 0.6in 1fr; margin-bottom: 11px; font-size: 12.5px; }
.rtitle { line-height: 1.4; }
.rco { font-size: 11.5px; opacity: 0.55; line-height: 1.45; }
.pub { margin-bottom: 10px; font-size: 12px; line-height: 1.4; }
.pub a { border-bottom: 1px solid rgba(18,18,16,0.2); }
.about-right img { width: 100%; height: 5.2in; object-fit: cover; border-radius: 3px; display: block; }
`;

const html = `<!DOCTYPE html><html><head><meta charset="utf-8">
<title>${esc(SITE.name)} — Portfolio</title>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..400&family=Karla:wght@300..700&family=JetBrains+Mono:wght@300..500&display=swap" rel="stylesheet">
<style>${css}</style></head><body>${pages.join("\n")}</body></html>`;

const htmlPath = path.join(BUILD, "portfolio.html");
fs.writeFileSync(htmlPath, html);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + htmlPath, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  // An outcome that doesn't fit on the intro page gets its own page after
  // that project's gallery.
  await page.evaluate(() => {
    document.querySelectorAll(".study").forEach((st) => {
      const ob = st.querySelector(".outcome-block");
      if (!ob || st.scrollHeight <= st.clientHeight + 1) return;
      let last = st;
      while (last.nextElementSibling && last.nextElementSibling.classList.contains("gallery")) last = last.nextElementSibling;
      const pg = document.createElement("section");
      pg.className = "page closing";
      pg.innerHTML = '<div class="running">' + st.dataset.running + '</div><div class="closing-inner"></div>';
      ob.querySelector(".body").classList.add("large");
      pg.querySelector(".closing-inner").appendChild(ob);
      last.after(pg);
    });
  });
  // Flag any page whose content spills past its bottom edge.
  const overflow = await page.evaluate(() => [...document.querySelectorAll(".page")]
    .map((el, i) => (el.scrollHeight > el.clientHeight + 1 ? i + 1 : 0)).filter(Boolean));
  if (overflow.length) console.warn("Warning: content overflows on page(s)", overflow.join(", "));
  const count = await page.evaluate(() => document.querySelectorAll(".page").length);
  await page.pdf({ path: OUT, width: "13.333in", height: "7.5in", printBackground: true });
  await browser.close();
  const mb = (fs.statSync(OUT).size / 1048576).toFixed(1);
  console.log(`Wrote ${path.relative(ROOT, OUT)} (${count} pages, ${mb} MB)`);
})();
