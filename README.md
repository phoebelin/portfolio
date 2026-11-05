# phoebezlin.com

My personal site and portfolio — a static, framework-free set of HTML pages.

Live at https://www.phoebezlin.com

## PDF backup

`phoebe-lin-portfolio.pdf` is an offline copy of the portfolio for networks that
block the domain. It's generated from `content.js`, so after changing site copy
or images, rebuild it with:

    node tools/build-pdf.js

(Needs Node with Playwright, ffmpeg, and Python with Pillow.)
