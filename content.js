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
    //   The extension in the path MUST match the real file — use .png for
    //   images and .mp4 for videos (a .png path won't find a .jpg file).
    //   shots = fallback count of placeholders when a project has no images yet.
    projects: [
      { slug: "agentic-hub", title: "Roblox Agentic Creator Hub", date: "Aug 2026", shots: 3, images: ["/images/work/agentic-hub/1.mp4", "/images/work/agentic-hub/2.png", "/images/work/agentic-hub/3.png"], teaser: "I led design for Agentic Hub, a new way for creators to create and scale their games with agents. I defined the chat UI on web, unified interactions across Studio and mobile, and shipped features like Canvas, multi-conversations, \"thinking\", Q&A, and more." },
      { slug: "analytics", title: "Roblox Analytics Platform", date: "Mar 2026", shots: 3, images: ["/images/work/analytics/1.mp4", "/images/work/analytics/2.png", "/images/work/analytics/3.png"], teaser: "I created the data visualization system 0 to 1 and scaled it for all teams at Roblox to adopt. Our team built out a full analytics suite, complete with customizable dashboards, observability, and experimentation, becoming one of the most beloved teams by our creators." },
      { slug: "zhorai", title: "Zhorai", date: "Dec 2024", shots: 3, images: ["/images/work/zhorai/1.mp4", "/images/work/zhorai/2.png", "/images/work/zhorai/3.mp4"], teaser: "I founded a K-12 AI literacy platform that utilizes novel conversational agent interactions to engage learners with basic AI concepts and provides scaffolded opportunities to create with AI. Ran a pilot program with 10+ families and initiated partnerships with schools." },
      { slug: "summit", title: "CZI Summit Learning Platform", date: "Feb 2025", shots: 3, images: ["/images/work/summit/1.png", "/images/work/summit/2.png", "/images/work/summit/3.png"], teaser: "I co-led the rearchitecture of our learning platform to accommodate any type of curricula and assessments." },
      { slug: "self-directed", title: "CZI Self-Directed Learning", date: "Feb 2025", shots: 3, images: ["/images/work/self-directed/1.mp4", "/images/work/self-directed/2.png", "/images/work/self-directed/3.png"], teaser: "I was founding designer on a new product bet where we explored how to empower students to take charge of their own learning. We created an interest exploration tool that exposed students to new fields and ideas, and then connected established interests to skills they practiced in class." }
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
      { label: "Résumé", href: "/phoebe-lin-resume.pdf" },
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

  /* One case study per project slug above. To add another: copy a whole block,
     change the slug key, and create a page file at /work/<slug>/index.html (copy
     an existing one and edit its <title>/meta). nextTitle + nextSlug set the
     "Next" link at the bottom — nextSlug is the slug it points to. Any project
     without a matching key here falls back to the first study. */
  caseStudies: {

  "agentic-hub": {
    title: "Agentic Hub",
    subtitle: "A new interaction model for Roblox creators to create and scale their games with agents",
    nextTitle: "Roblox Analytics Platform",
    nextSlug: "analytics",

    context: "Today, running a business on Roblox requires a lot of manual, repetitive work, ranging from liveops management to safety and compliance. Our vision is to make Hub the place where studios can run their business with a team of humans and AI agents working side by side.",
    outcome: "Rolled out as a Creator beta with 40% stickiness and 80% positive rating. Recommendations led to downstream +7.2% lift in monetization features.",

    meta: [
      { label: "Role", value: "Product design lead" },
      { label: "Team", value: "1 designer, 4 engineers, 1 PM" },
      { label: "Timeline", value: "Jan – Aug 2026" },
      { label: "Outcome", value: "Rolled out as a Creator beta with 40% stickiness and 80% positive rating. Recommendations led to downstream +7.2% lift in monetization features." }
    ],

    decisions: [
      { num: "01", title: "The agent works; the creator leads", body: "How do we balance agents working autonomously towards a goal while surfacing important decisions appropriately for creator approval?" },
      { num: "02", title: "Safety and oversight at its core", body: "When agents make mistakes, how do we surface them to the creator in a way that is easy to understand and action on? How do we prevent hallucinations and give creators the ability to audit and develop within a safe ecosystem?" },
      { num: "03", title: "Vertically integrated context", body: "How do we capture value that leans into the strengths of the Roblox ecosystem?" }
    ],

    /* Gallery: col = how many of 6 columns wide, ratio = image shape,
       caption = the little label under it, src = the image OR video file.
       A tile with NO src reuses this project's work-page images in order — so
       the first three tiles below inherit the home images (1.png–3.png); upload
       those once, in /images/work/agentic-hub/, and they show in both places.
       For the other tiles, drop files in /images/work/agentic-hub/gallery/ and
       point src at them. .mp4/.webm/.mov files autoplay on a silent loop, like a
       gif; a tile with no file yet shows a plain placeholder box. Add or remove
       a line to add or remove a tile.
       Layout is landscape-first: span 6 = full-width, span 3 = half, span 2 =
       third; keep ratio at 16/10 or 16/9 for landscape shots. */
    gallery: [
      { col: "span 3", ratio: "16 / 10", caption: "01 — Chat UI on web" },
      { col: "span 3", ratio: "16 / 10", caption: "02 — A still of the chat UI on web" },
      { col: "span 3", ratio: "16 / 10", caption: "03 — Build on mobile" },
      { col: "span 3", ratio: "16 / 10", caption: "04 — Analytics in Build", src: "/images/work/agentic-hub/gallery/04.png" },
      { col: "span 2", ratio: "16 / 10", caption: "05 — Concept of landing page with unified ledger", src: "/images/work/agentic-hub/gallery/05.png" },
      { col: "span 2", ratio: "16 / 10", caption: "06 — Concept of multiplayer prompting", src: "/images/work/agentic-hub/gallery/06.png" },
      { col: "span 2", ratio: "16 / 10", caption: "07 — Concept of scheduled cron jobs", src: "/images/work/agentic-hub/gallery/07.png" },
      //{ col: "span 3", ratio: "16 / 10", caption: "08 — Mobile check", src: "/images/work/agentic-hub/gallery/08.png" },
      //{ col: "span 3", ratio: "16 / 10", caption: "09 — Explorations, cut", src: "/images/work/agentic-hub/gallery/09.png" }
    ]
  },

  "analytics": {
    title: "Roblox Analytics Platform",
    subtitle: "A 0 to 1 journey of how we built out a full product suite of analytics, observability, and experimentation tools for Roblox creators",
    nextTitle: "Zhorai",
    nextSlug: "zhorai",

    context: "Many creators still struggle to separate signal from noise while growing their games. Our vision was to deliver a trusted analyst that can help creators understand, diagnose, and act quickly. We accomplished this through 3 pillars: (1) comprehensive performance observability, (2) flexible data exploration, customization, and experimentation, and (3) AI-driven insights and frictionless analytics.",
    outcome: "To give you a glimpse into our launch outcomes:\n1. 20k+ games adopted custom dashboards within the first week of launch\n2. 10.6% of top games and almost 800 games ran experiments with an average +5.6% lift in playtime in H2 '25.\n3. Analytics insights led to downstream +7.3% lift in Studio usage and +8.7% lift in publish days.\n\nSo many learnings, but at the end of the day, I'm immensely proud of this team and thank our creator community for their feedback and support.",

    meta: [
      { label: "Role", value: "Product design lead" },
      { label: "Team", value: "1 designer, 20 engineers, 3 PMs" },
      { label: "Timeline", value: "Nov 2023 - Sep 2026" },
      { label: "Outcome", value: "We grew weekly usage to over 90% of our top creators. Our products added +0.93% lift in total Robux spent in H1 of 2026 alone, which translates to ~$24M in business value." }
    ],

    decisions: [
      { num: "01", title: "Turn data into insights into action", body: "First we build the data pipelines, then we layer insights on top. How do we provide the right recommendations at the right time to help creators focus on the highest ROI opportunities?" },
      { num: "02", title: "The power to diagnose regressions and assess impact", body: "Observability enables creators to triangulate the root cause of a regression. Experiments allow creators to A/B test differentials in the game experience. How does each MVP ladder into a coherent vision?" },
      { num: "03", title: "A  horizontal design system for data viz", body: "How do we design the atoms, molecules, and organisms of data viz that enable modular construction? And how do we set up the processes and framework that allow any team at Roblox to plug in and build fast?" }
    ],

    /* Gallery: same rules as agentic-hub. The first three tiles have no src, so
       they reuse this project's work-page images (/images/work/analytics/
       1.png–3.png). For the rest, drop files in /images/work/analytics/gallery/
       and point src at them. .mp4/.webm/.mov autoplay on a silent loop. */
    gallery: [
      { col: "span 3", ratio: "16 / 10", caption: "01 — Observability platform" },
      { col: "span 3", ratio: "16 / 10", caption: "02 — Landing page for all games" },
      { col: "span 3", ratio: "16 / 10", caption: "03 — Explore and/or add a metric to a dashboard" },
      { col: "span 3", ratio: "16 / 10", caption: "04 — Edit mode on a customizable dashboard", src: "/images/work/analytics/gallery/04.png" },
      { col: "span 2", ratio: "16 / 10", caption: "05 — Hover state for our chart types", src: "/images/work/analytics/gallery/05.png" },
      { col: "span 2", ratio: "16 / 10", caption: "06 — Annotations provide creators with context", src: "/images/work/analytics/gallery/06.mp4" },
      { col: "span 2", ratio: "16 / 10", caption: "07 — Communicating confidence for an experiment result", src: "/images/work/analytics/gallery/07.mp4" },
      { col: "span 3", ratio: "16 / 10", caption: "08 — Supported other projects like topline/GWM metrics", src: "/images/work/analytics/gallery/08.png" },
      { col: "span 3", ratio: "16 / 10", caption: "09 — Everything shown on this montage is also mobile-optimized", src: "/images/work/analytics/gallery/09.png" }
    ]
  },

  "zhorai": {
    title: "Zhorai",
    subtitle: "A K-12 AI literacy platform to create with and explore AI and machine learning concepts",
    nextTitle: "CZI Summit Learning Platform",
    nextSlug: "summit",

    context: "AI literacy has become a critical skill for children to navigate this new era of the internet, and yet few resources exist to scaffold this learning. Zhorai takes a two-pronged approach with interactive lessons and a creative studio.",
    outcome: "*\"I want to teach Zhorai more. I want to teach Zhorai things like my favorite color is blue.\"* These kinds of student testimonials really keep me going. As this is truly still a work in progress, I'm constantly learning and actively developing this project.",

    meta: [
      { label: "Role", value: "Founding designer and creator" },
      { label: "Team", value: "Solo" },
      { label: "Timeline", value: "Jan - Dec 2024" },
      { label: "Outcome", value: "Piloted with 10+ families where we saw high engagement and evidence of learning." }
    ],

    decisions: [
      { num: "01", title: "Conversation as an interface", body: "Voice as a modality is familiar and a low barrier to entry. How do we design the flow of the learning arc to accommodate multiple conversational pathways?" },
      { num: "02", title: "Embedding creativity and learning science", body: "How do we design the learning activities to be fun while also adhering to learning principles, such as cognitive load, trial and error, and scaffolded curricula?" },
      { num: "03", title: "How to scale (still a WIP)", body: "When we ran the pilots, we facilitated the learning experience in person. Million dollar question: how do we implement a self-directed version at scale?" }
    ],

    /* Gallery: same rules as agentic-hub. The first three tiles have no src, so
       they reuse this project's work-page images (/images/work/analytics/
       1.png–3.png). For the rest, drop files in /images/work/analytics/gallery/
       and point src at them. .mp4/.webm/.mov autoplay on a silent loop. */
    gallery: [
      { col: "span 3", ratio: "16 / 10", caption: "01 — Talking to Zhorai and observing what Zhorai knows about ecosystems (understanding AI mental models)" },
      { col: "span 3", ratio: "16 / 10", caption: "02 — Teaching Zhorai about animals (how AI learns from data)" },
      { col: "span 3", ratio: "16 / 10", caption: "03 — Student checks for understanding" },
      { col: "span 3", ratio: "16 / 10", caption: "04 — Pippy, another learning activity about identifying bad data", src: "/images/work/zhorai/gallery/04.mp4" },
      { col: "span 2", ratio: "16 / 10", caption: "05 — Utilizing mindmaps to visualize Zhorai's brain (how data is represented)", src: "/images/work/zhorai/gallery/05.png" },
      { col: "span 2", ratio: "16 / 10", caption: "06 — Introducing a basic bar chart to visualize how AI makes decisions", src: "/images/work/zhorai/gallery/06.png" },
      { col: "span 2", ratio: "16 / 10", caption: "07 — Post-activity reflection about AI ethics", src: "/images/work/zhorai/gallery/07.png" },
      //{ col: "span 3", ratio: "16 / 10", caption: "08 — TODO caption", src: "/images/work/zhorai/gallery/08.png" },
      //{ col: "span 3", ratio: "16 / 10", caption: "09 — TODO caption", src: "/images/work/zhorai/gallery/09.png" }
    ]
  },

  "summit": {
    title: "CZI Summit Learning Platform",
    subtitle: "A rearchitecture of our learning platform to accommodate any type of curricula and assessments",
    nextTitle: "CZI Self-Directed Learning",
    nextSlug: "self-directed",

    context: "After an org-wide strategy shift, the Summit Learning Platform was finally ready for a redesign that was long overdue. The core instructional and projects flow were clunky, and the new platform needed to accommodate any type of curricula and assessments. We came up with six novel IA approaches, and prioritized two with engineering to move forward with. ",
    outcome: "Building the Summit Learning Platform brought together diverse expertise, including design, research, product, eng, learning scientists, and educators. Together, we landed on a new model that we had high conviction for.",

    meta: [
      { label: "Role", value: "Senior product designer" },
      { label: "Team", value: "2 designers, 2 researchers, 1 PM, 1 eng lead" },
      { label: "Timeline", value: "2021" },
      { label: "Outcome", value: "Conducted countless educator and student interviews, iterated a ton, designed an MVP, ultimately the platform was sunset. Still lots of learnings!" }
    ],

    decisions: [
      { num: "01", title: "Any curriculum, one platform", body: "How do we let schools bring their own curricula and assessments without fragmenting the experience for teachers and students?" },
      { num: "02", title: "Evaluating IA models", body: "The curriulum model organizes information based on curriculum structure and prioritizes helping teachers understand student progress and identify differentiation opportunities. The mode-based model organizes based on what the user is doing in the moment, and prioritizes by JTBDs. How do we evaluate the tradeoffs for each?" },
    
    ],

    /* Gallery: same rules as agentic-hub. The first three tiles have no src, so
       they reuse this project's work-page images (/images/work/summit/
       1.png–3.png). For the rest, drop files in /images/work/summit/gallery/
       and point src at them. .mp4/.webm/.mov autoplay on a silent loop. */
    gallery: [
      { col: "span 3", ratio: "16 / 10", caption: "01 — Educator Home" },
      { col: "span 3", ratio: "16 / 10", caption: "02 — Courses page" },
      { col: "span 3", ratio: "16 / 10", caption: "03 — IA model based on curriculum structure" },
      { col: "span 3", ratio: "16 / 10", caption: "04 — IA based on user modes", src: "/images/work/summit/gallery/04.png" },
      //{ col: "span 2", ratio: "16 / 10", caption: "05 — TODO caption", src: "/images/work/summit/gallery/05.png" },
      //{ col: "span 2", ratio: "16 / 10", caption: "06 — TODO caption", src: "/images/work/summit/gallery/06.png" },
      //{ col: "span 2", ratio: "16 / 10", caption: "07 — TODO caption", src: "/images/work/summit/gallery/07.png" },
      { col: "span 3", ratio: "16 / 10", caption: "05 — How the curriculum model shows up in low-fi", src: "/images/work/summit/gallery/08.mp4" },
      { col: "span 3", ratio: "16 / 10", caption: "06 — How the curriculum model shows up in low-fi", src: "/images/work/summit/gallery/09.png" }
    ]
  },

  "self-directed": {
    title: "CZI Self-Directed Learning",
    subtitle: "A new product bet exploring how to empower students to take charge of their own learning",
    nextTitle: "Agentic Hub",
    nextSlug: "agentic-hub",

    context: "As founding designer on a new product bet, we explored how to empower students to take charge of their own learning. We built an interest exploration tool that exposed students to new fields and ideas, then connected established interests to the skills they practiced in class.",
    outcome: "The collaboration with GripTape brought a new lens to the work because our value was to amplify them and their work. Co-designing with them and their student leadership panel was such a joy.",

    meta: [
      { label: "Role", value: "Founding designer" },
      { label: "Team", value: "1 Designer, 1 PM, 1 Eng lead" },
      { label: "Timeline", value: "2020 - 2021" },
      { label: "Outcome", value: "This exploration turned into a product collaboration with [GripTape](https://www.griptape.org/), a CZI program partner, where we worked with them to scale their offering of empowering young people to pursue their own passion through a self-initiated project." }
    ],

    decisions: [
      { num: "01", title: "Exploring to find interests", body: "How do we expose students to new fields and ideas in a way that sparks genuine curiosity rather than overwhelming them?" },
      { num: "02", title: "From interest to skill", body: "How do we connect an established interest to the concrete skills a student practices in class?" },
      { num: "03", title: "Expanding GripTape", body: "How do we establish solid co-design processes while balancing the CZI-grantee relationship? How do we identify their bottlenecks and remove obstacles for them?" }
    ],

    /* Gallery: same rules as agentic-hub. The first three tiles have no src, so
       they reuse this project's work-page images (/images/work/self-directed/
       1.png–3.png). For the rest, drop files in /images/work/self-directed/gallery/
       and point src at them. .mp4/.webm/.mov autoplay on a silent loop. */
    gallery: [
      { col: "span 3", ratio: "16 / 10", caption: "01 — Educator view in medium-fi" },
      { col: "span 3", ratio: "16 / 10", caption: "02 — Student view in medium-fi" },
      { col: "span 3", ratio: "16 / 10", caption: "03 — Educator view of students page" },
      { col: "span 3", ratio: "16 / 10", caption: "04 — Student view of activity", src: "/images/work/self-directed/gallery/04.mp4" },
      //{ col: "span 2", ratio: "16 / 10", caption: "05 — TODO caption", src: "/images/work/self-directed/gallery/05.png" },
      //{ col: "span 2", ratio: "16 / 10", caption: "06 — TODO caption", src: "/images/work/self-directed/gallery/06.png" },
      //{ col: "span 2", ratio: "16 / 10", caption: "07 — TODO caption", src: "/images/work/self-directed/gallery/07.png" },
      //{ col: "span 3", ratio: "16 / 10", caption: "08 — TODO caption", src: "/images/work/self-directed/gallery/08.png" },
      //{ col: "span 3", ratio: "16 / 10", caption: "09 — TODO caption", src: "/images/work/self-directed/gallery/09.png" }
    ]
  }

  }
};

window.dispatchEvent(new Event("site-content"));
