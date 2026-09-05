/* All site copy lives here. Edit the values; every page updates.
   Keep the keys and the quotes — change only what's inside the quotes.
   Add or remove items in a [ ... ] list to add or remove entries. */

window.SITE = {

  name: "Phoebe Lin",
  email: "phoebe.lin93@gmail.com",
  footerNote: "Designed by me, made with AI",

  home: {
    intro: "Currently, I design agentic workflows to help creators grow and scale their games as businesses at Roblox. Before that, I designed for K-12 education at Chan Zuckerberg Initiative. As a designer, I'm interested in how we design for uncertainty and learning in the era of AI. I'm good at taking complex, ambiguous spaces, and turning it into things that are intuitive and simple.",
    // shots = how many image placeholders sit under each project
    projects: [
      { slug: "agentic-hub", title: "Roblox Agentic Creator Hub", date: "Aug 2026", shots: 3, teaser: "I led design for Agentic Hub, a new way for creators to create and scale their games with agents. I defined the chat UI on web, unified interactions across Studio and mobile, and shipped features like Canvas, multi-conversations, \"thinking\", Q&A, and more." },
      { slug: "analytics", title: "Roblox Analytics & Observability", date: "Mar 2026", shots: 3, teaser: "I created the data visualization system 0 to 1 and scaled it for all teams at Roblox to adopt. Our team built out a full analytics suite, complete with customizable dashboards and observability, becoming one of the most beloved teams by our creators." },
      { slug: "zhorai", title: "Zhorai", date: "Oct 2025", shots: 3, teaser: "I founded a K-12 AI literacy platform that utilizes novel conversational agent interactions to engage learners with basic AI concepts and provides scaffolded opportunities to create with AI. Ran a pilot program with 10+ families and initiated partnerships with schools." },
      { slug: "summit", title: "CZI Summit Learning Platform", date: "Feb 2025", shots: 3, teaser: "I co-led the rearchitecture of our learning platform to accommodate any type of curricula and assessments." },
      { slug: "self-directed", title: "CZI Self-Directed Learning", date: "Feb 2025", shots: 3, teaser: "I was founding designer on a new product bet where we explored how to empower students to take charge of their own learning. We created an interest exploration tool that exposed students to new fields and ideas, and then connected established interests to skills they practiced in class." }
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
        blurb: "A study of how AI curriculum can be integrated into existing Math/ELA/Science subjects"
      },
      {
        title: "A design framework for designing AI learning experiences for K-12",
        date: "Sep 2020",
        venue: "arXiv",
        authors: "With Jessica Van Brummelen and Xiaofei Zhou",
        blurb: "A synthesis for how to design effective learning experiences that teach AI concepts"
      },
      {
        title: "Zhorai: Designing a conversational agent for children to explore machine learning concepts",
        date: "Apr 2020",
        venue: "AAAI 2020",
        authors: "With Jessica Van Brummelen, Galit Lukin, Randi Williams, and Cynthia Braezeal",
        blurb: "A pre-LLM era proof-of-concept for how conversational agents can teach AI"
      },
      {
        title: "Proxy tasks and subjective measures can be misleading in evaluating explainable AI systems",
        date: "Mar 2020",
        venue: "IUI 2020",
        authors: "With Zana Buçinca, Krzysztof Z Gajos, and Elena L Glassman",
        blurb: "Won Honorable Mention; a study of how existing methods fall short of evaluating AI systems"
      }
    ]
  },

  /* One case study per project slug above. Copy a whole block and change the
     slug key to give another project its own page. Any project without a
     matching key falls back to the first study here. */
  caseStudies: {

  "agentic-hub": {
    title: "Agentic Hub",
    subtitle: "A workspace where creators brief an agent, watch it work, and keep the final call on every change.",
    nextTitle: "Creator Payouts",

    context: "Creators ran their games as businesses with tools built for hobby projects. Every pricing change meant hand-editing the same six screens. The agent could do that work — the question was how much a creator would let it do unattended.",
    outcome: "12k studios ran an agent task in the first quarter; 71% reviewed the diff before accepting. Trust came from the diff being legible, not the model being right. Given the time again, I'd have tested the review surface first.",
    // shorter versions shown on phones
    contextShort: "Creators ran their games as businesses with tools built for hobby projects. Every pricing change meant hand-editing the same six screens.",
    outcomeShort: "12k studios ran an agent task in the first quarter; 71% reviewed the diff before accepting. Trust came from the diff being legible, not the model being right.",

    meta: [
      { label: "Role", value: "Lead product designer" },
      { label: "Team", value: "1 designer, 4 engineers, 1 PM" },
      { label: "Timeline", value: "Jan – Aug 2026" },
      { label: "Outcome", value: "Shipped to 12k studios" }
    ],

    decisions: [
      { num: "01", title: "The agent proposes; the creator commits.", body: "Direct edits with undo tested badly — every tester hit undo inside ten minutes. A proposed diff cost one click and bought the feature its credibility." },
      { num: "02", title: "Show the work, not the confidence.", body: "Confidence scores read as promises. A plain list of what the agent looked at answered the same question without a claim we couldn't keep." },
      { num: "03", title: "One task at a time, on purpose.", body: "Parallel runs were easy to build and brutal to read. Serial runs made the log legible and made rollback mean something." }
    ],

    /* Gallery: col = how many of 6 columns wide, ratio = image shape.
       Add or remove a line to add or remove an image. */
    gallery: [
      { col: "span 4", ratio: "16 / 10", caption: "01 — Run log, mid-task", wide: "1" },
      { col: "span 2", ratio: "3 / 4", caption: "02 — Task brief" },
      { col: "span 2", ratio: "1 / 1", caption: "03 — Diff review" },
      { col: "span 2", ratio: "1 / 1", caption: "04 — Accept / revise" },
      { col: "span 2", ratio: "1 / 1", caption: "05 — Empty state" },
      { col: "span 3", ratio: "16 / 10", caption: "06 — Pricing pass" },
      { col: "span 3", ratio: "16 / 10", caption: "07 — Localization pass" },
      { col: "span 2", ratio: "3 / 4", caption: "08 — Mobile check" },
      { col: "span 4", ratio: "16 / 9", caption: "09 — Explorations, cut", wide: "1" }
    ]
  }

  }
};

window.dispatchEvent(new Event("site-content"));
