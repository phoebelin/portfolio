/* All site copy lives here. Edit the values; every page updates.
   Keep the keys and the quotes — change only what's inside the quotes.
   Add or remove items in a [ ... ] list to add or remove entries. */

window.SITE = {

  name: "Phoebe Lin",
  email: "phoebe.lin93@gmail.com",
  footerNote: "Designed by me, made with AI",

  home: {
    intro: "Currently, I design agentic workflows to help creators grow and scale their games as businesses at Roblox. Before that, I designed for K-12 education at Chan Zuckerberg Initiative. As a designer, I'm interested in how we design for uncertainty and learning in the era of AI. I'm good at taking complex, ambiguous spaces, and turning it into things that are intuitive and simple.",
    // images = the picture OR video files shown under each project (also opened
    //   in the lightbox). Drop files in /images/work/<slug>/ and list them here
    //   in the order you want. .mp4/.webm/.mov files autoplay on a silent loop,
    //   like a gif. Any slot with no file yet shows a plain placeholder box.
    //   shots = fallback count of placeholders when a project has no images yet.
    projects: [
      { slug: "agentic-hub", title: "Roblox Agentic Creator Hub", date: "Aug 2026", shots: 3, images: ["/images/work/agentic-hub/1.mp4", "/images/work/agentic-hub/2.jpg", "/images/work/agentic-hub/3.jpg"], teaser: "I led design for Agentic Hub, a new way for creators to create and scale their games with agents. I defined the chat UI on web, unified interactions across Studio and mobile, and shipped features like Canvas, multi-conversations, \"thinking\", Q&A, and more." },
      { slug: "analytics", title: "Roblox Analytics & Observability", date: "Mar 2026", shots: 3, images: ["/images/work/analytics/1.jpg", "/images/work/analytics/2.jpg", "/images/work/analytics/3.jpg"], teaser: "I created the data visualization system 0 to 1 and scaled it for all teams at Roblox to adopt. Our team built out a full analytics suite, complete with customizable dashboards and observability, becoming one of the most beloved teams by our creators." },
      { slug: "zhorai", title: "Zhorai", date: "Oct 2025", shots: 3, images: ["/images/work/zhorai/1.jpg", "/images/work/zhorai/2.jpg", "/images/work/zhorai/3.jpg"], teaser: "I founded a K-12 AI literacy platform that utilizes novel conversational agent interactions to engage learners with basic AI concepts and provides scaffolded opportunities to create with AI. Ran a pilot program with 10+ families and initiated partnerships with schools." },
      { slug: "summit", title: "CZI Summit Learning Platform", date: "Feb 2025", shots: 3, images: ["/images/work/summit/1.jpg", "/images/work/summit/2.jpg", "/images/work/summit/3.jpg"], teaser: "I co-led the rearchitecture of our learning platform to accommodate any type of curricula and assessments." },
      { slug: "self-directed", title: "CZI Self-Directed Learning", date: "Feb 2025", shots: 3, images: ["/images/work/self-directed/1.jpg", "/images/work/self-directed/2.jpg", "/images/work/self-directed/3.jpg"], teaser: "I was founding designer on a new product bet where we explored how to empower students to take charge of their own learning. We created an interest exploration tool that exposed students to new fields and ideas, and then connected established interests to skills they practiced in class." }
    ]
  },

  about: {
    bio: "I'm a product designer based in the bay area. I'm good at taking complex, ambiguous spaces, and turning it into things that are intuitive and simple. I thrive in collaborative teams. ",
    photoCaption: "2026",
    beliefsTitle: "MY BELIEFS IN A NUTSHELL",
    beliefs: [
      {
        label: "Assess impact",
        body: "I'm driven by knowing how and how much our work impacts humans -- both positively and negatively, and then working towards progress. I bias towards action by asking what is the smallest experiment we can run to get us closer to our goals?"
      },
      {
        label: "Collaborate thoughtfully",
        body: "Everyone brings their expertise to the table, and nothing easy is accomplished alone. My collaboration style is thoughtful and inclusive by asking who are the voices that need to be represented that aren't, and how do we bring our users and the broader organization along with us?"
      },
      {
        label: "Make the hard decisions",
        body: "Hard decisions are hard, but someone needs to make them. Failure is not a wrong decision, but rather not learning at all. I often ask what information and hypotheses do we have at hand, what tradeoffs are we making, and what can we learn from this decision?"
      }
    ],
    links: [
      { label: "Résumé", href: "#" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/phoebelin/" },
      { label: "Email", href: "mailto:phoebe.lin93@gmail.com" }
    ],
    roles: [
      { role: "Design Lead / Staff Product Designer", company: "Roblox", year: "2023" },
      { role: "Senior Product Designer", company: "Chan Zuckerberg Initiative, Education", year: "2020" },
      { role: "Human-Computer Interaction Researcher", company: "Harvard / MIT Media Lab", year: "2018" },
      { role: "Product Designer", company: "SchoolCity (Acq by Illuminate Education)", year: "2017" }
    ]
  },

  writing: {
    intro: "Writing I'm particularly proud of",
    entries: [
      {
        title: "Engaging teachers to co-design integrated AI curriculum for K-12 classrooms",
        date: "May 2021",
        venue: "CHI 2021",
        authors: "With Jessica Van Brummelen",
        blurb: "A study of how AI curriculum can be integrated into existing Math/ELA/Science subjects",
        href: "https://dl.acm.org/doi/pdf/10.1145/3411764.3445377"
      },
      {
        title: "A design framework for designing AI learning experiences for K-12",
        date: "Sep 2020",
        venue: "arXiv",
        authors: "With Jessica Van Brummelen and Xiaofei Zhou",
        blurb: "A synthesis for how to design effective learning experiences that teach AI concepts",
        href: "https://arxiv.org/pdf/2009.10228"
      },
      {
        title: "Zhorai: Designing a conversational agent for children to explore machine learning concepts",
        date: "Apr 2020",
        venue: "AAAI 2020",
        authors: "With Jessica Van Brummelen, Galit Lukin, Randi Williams, and Cynthia Braezeal",
        blurb: "A pre-LLM era proof-of-concept for how conversational agents can teach AI",
        href: "https://ojs.aaai.org/index.php/AAAI/article/view/7061"
      },
      {
        title: "Proxy tasks and subjective measures can be misleading in evaluating explainable AI systems",
        date: "Mar 2020",
        venue: "IUI 2020",
        authors: "With Zana Buçinca, Krzysztof Z Gajos, and Elena L Glassman",
        blurb: "Won Honorable Mention; a study of how existing methods fall short of evaluating AI systems",
        href: "https://dl.acm.org/doi/pdf/10.1145/3377325.3377498"
      }
    ]
  },

  /* One case study per project slug above. Copy a whole block and change the
     slug key to give another project its own page. Any project without a
     matching key falls back to the first study here. */
  caseStudies: {

  "agentic-hub": {
    title: "Agentic Hub",
    subtitle: "A new interaction model for Roblox creators to create and scale their games with agents",
    nextTitle: "Roblox Analytics & Observability",

    context: "Today, running a business on Roblox requires a lot of manual, repetitive work, ranging from liveops management to safety and compliance. Our vision is to make Hub the place where studios can run their business with a team of humans and AI agents working side by side.",
    outcome: "Rolled out as a Creator beta with 40% stickiness and 80% positive rating. Recommendations led to downstream +7.2% lift in monetization features.",

    meta: [
      { label: "Role", value: "Product design lead" },
      { label: "Team", value: "1 designer, 4 engineers, 1 PM" },
      { label: "Timeline", value: "Jan – Aug 2026" },
      { label: "Outcome", value: "Rolled out as a Creator beta with 40% stickiness and 80% positive rating. Recommendations led to downstream +7.2% lift in monetization features." }
    ],

    decisions: [
      { num: "01", title: "The agent works; the creator leads", body: "How do we balance agents working autonomously towards a goal while surfacing important decisions appropriately for creator approvel?" },
      { num: "02", title: "A unified audit ledger", body: "When agents make mistakes, how do we surface them to the creator in a way that is easy to understand and action on?" },
      { num: "03", title: "Vertically integrated context", body: "How do we capture value that leans into the strengths of the Roblox ecosystem?" }
    ],

    /* Gallery: col = how many of 6 columns wide, ratio = image shape,
       caption = the little label under it, src = the image OR video file.
       A tile with NO src reuses this project's work-page images in order — so
       the first three tiles below inherit the home images (1.jpg–3.jpg); upload
       those once, in /images/work/agentic-hub/, and they show in both places.
       For the other tiles, drop files in /images/work/agentic-hub/gallery/ and
       point src at them. .mp4/.webm/.mov files autoplay on a silent loop, like a
       gif; a tile with no file yet shows a plain placeholder box. Add or remove
       a line to add or remove a tile.
       Layout is landscape-first: span 6 = full-width, span 3 = half, span 2 =
       third; keep ratio at 16/10 or 16/9 for landscape shots. */
    gallery: [
      { col: "span 3", ratio: "16 / 10", caption: "01 — Run log, mid-task" },
      { col: "span 3", ratio: "16 / 10", caption: "02 — Task brief" },
      { col: "span 3", ratio: "16 / 10", caption: "03 — Diff review" },
      { col: "span 3", ratio: "16 / 10", caption: "04 — Accept / revise", src: "/images/work/agentic-hub/gallery/04.jpg" },
      { col: "span 2", ratio: "16 / 10", caption: "05 — Empty state", src: "/images/work/agentic-hub/gallery/05.jpg" },
      { col: "span 2", ratio: "16 / 10", caption: "06 — Pricing pass", src: "/images/work/agentic-hub/gallery/06.jpg" },
      { col: "span 2", ratio: "16 / 10", caption: "07 — Localization pass", src: "/images/work/agentic-hub/gallery/07.jpg" },
      { col: "span 3", ratio: "16 / 10", caption: "08 — Mobile check", src: "/images/work/agentic-hub/gallery/08.jpg" },
      { col: "span 3", ratio: "16 / 10", caption: "09 — Explorations, cut", src: "/images/work/agentic-hub/gallery/09.jpg" }
    ]
  }

  }
};

window.dispatchEvent(new Event("site-content"));
