/* =====================================================================
   SITE CONTENT: edit this file to change what the website says.
   Everything visible on the page comes from here. After editing,
   commit on GitHub and the live site updates in about a minute.
   ===================================================================== */
window.SITE = {

  /* ---------- basics ---------- */
  name: "Ekaksh Kataria",
  shortName: "EK",
  email: "ekakshkataria212@gmail.com",
  phone: "+1 (517) 944-4314",
  githubUser: "katariae",          // used for the live "on the bench" section
  githubTopic: "portfolio",        // repos with this topic are shown first
  githubHide: ["melanies_smoothies"], // repos never shown on the site
  links: {
    linkedin: "https://www.linkedin.com/in/ekaksh-kataria/",
    github: "https://github.com/katariae",
    arxiv: "https://arxiv.org/abs/2610.29685"
  },

  /* ---------- observations (projects) ----------
     Listed in the order I built them, oldest first.
     To add one: copy a block, paste it at the END, and fill it in.
     links: [["Button text", "https://..."], ...]  (can be empty)        */
  observations: [
    { t: "Agent-based economy", k: "side project · 2022",
      s: "Twenty agents saving, investing and spending on a rule-based board.",
      sub: "Simulation · evolutionary learning",
      pts: ["Built 20 rule-based agents that save, invest and consume, and studied how they interact with their environment.",
            "Added neural networks and evolutionary algorithms so agents learn; predicted final wealth with 80% accuracy versus a rules-only baseline."],
      tags: ["Python", "Simulation", "Neural networks"], links: [] },

    { t: "Optimally Emulating Smooth Functions", k: "FRIB · 2023–24 · on arXiv 2026",
      s: "A Gaussian-process emulator derived from smoothness and symmetry, plus a way to place training runs before running anything.",
      sub: "S. Pratt, O. Savchuk, E. Erdogan, E. Kataria, C. Martin, S. A. Jahan, F. Viens · arXiv:2610.29685",
      pts: ["Physics models of heavy-ion collisions can take days of CPU time per run; MCMC fits want millions of evaluations.",
            "The emulator is a polynomial with independent random coefficients, damped by a convergence parameter Λ.",
            "Requiring rotation and translation invariance makes it exactly a Gaussian process with a Gaussian kernel, and Λ is its correlation length.",
            "The expected error depends only on Λ and the training-point locations, so placement can be optimized up front. It beats random and Latin hypercube sampling.",
            "My part: the physics and the C++ emulator and MCMC code in the BAND framework at FRIB."],
      tags: ["Bayesian inference", "Gaussian processes", "MCMC", "C++"],
      links: [["Read on arXiv", "https://arxiv.org/abs/2610.29685"], ["Smooth Emulator code", "https://github.com/bandframework/bandframework/tree/main/software/SmoothEmulator"]] },

    { t: "ML moment closures", k: "MSU CMSE · 2024–25",
      s: "Neural networks that close the moment equations of a kinetic model in plasma physics.",
      sub: "Department of Computational Mathematics, Science and Engineering",
      pts: ["Reduced-order deep learning models that preserved physical conservation laws while cutting compute cost 10%.",
            "Migrated training from JAX to PyTorch and added Lipschitz-constrained layers for stability.",
            "Optuna hyperparameter search on a GPU cluster cut training time 15%."],
      tags: ["PyTorch", "JAX", "Optuna", "Scientific ML"], links: [] },

    { t: "Metadata RAG agent", k: "Credit One Bank · 2025–26",
      s: "Ask a question in plain English and get the right table, its lineage, and a link to the catalog.",
      sub: "Data Governance & Strategy Group",
      pts: ["End-to-end retrieval-augmented agent over 200 tables with 5-hop Snowflake lineage.",
            "Pinecone semantic search and Gemma 2B served on vLLM in Docker on GCP.",
            "Used by 40+ Finance and Risk users in UAT; saves about 20 minutes per lookup."],
      tags: ["RAG", "vLLM", "Pinecone", "Snowflake", "GCP"], links: [] },

    { t: "Data quality at bank scale", k: "Credit One Bank · 2025–26",
      s: "SQL tests and anomaly detection across credit, fraud and finance tables.",
      sub: "OpenMetadata · Tableau",
      pts: ["Designed SQL data quality tests and anomaly detection across 100+ credit, fraud and finance tables in OpenMetadata.",
            "Cut remediation time by 20%.",
            "Built Tableau access-control dashboards across 15 databases, which let the team revoke 30+ unauthorized permission roles."],
      tags: ["SQL", "Anomaly detection", "OpenMetadata", "Tableau"], links: [] },

    { t: "Greenfield API test automation", k: "UFCU via Tech Mahindra · 2026–now",
      s: "A pytest framework for a core banking modernization, built from zero.",
      sub: "BIAN microservices · MuleSoft · Symitar",
      pts: ["Architected pytest automation from scratch across BIAN microservices, MuleSoft APIs and the Symitar core, replacing ad-hoc Postman collections.",
            "800+ automated test cases in GitHub Actions; regression cycles went from 40 hours to 3.",
            "Built Claude skills for CI/CD integration and pull-request diff review."],
      tags: ["pytest", "GitHub Actions", "API testing", "Claude"], links: [] }
  ],

  /* ---------- orbits (experience), newest first ---------- */
  roles: [
    { id: "ufcu", short: "UFCU", t: "Software Engineer, Test Automation", org: "University Federal Credit Union, via Tech Mahindra", when: "Jul 2026 – now · remote",
      pts: ["Architecting pytest automation across BIAN microservices, MuleSoft APIs and the Symitar core.", "800+ automated tests in GitHub Actions; regression cycles cut from 40 hours to 3.", "Triaging defects in Azure DevOps with the dev team before production release.", "Building Claude skills for CI/CD integration and PR review."],
      skills: ["pytest", "API testing", "CI/CD", "GitHub Actions", "MuleSoft", "BIAN", "Azure DevOps", "Claude skills", "Python", "validation", "debugging"] },
    { id: "c1", short: "Credit One", t: "Data Scientist I", org: "Credit One Bank, Data Governance & Strategy", when: "Jul 2025 – Jun 2026 · Las Vegas",
      pts: ["Built a metadata RAG agent over 200 tables with 5-hop Snowflake lineage.", "Deployed Pinecone search and Gemma 2B on vLLM on GCP for 40+ users.", "SQL data quality tests and anomaly detection across 100+ tables; 20% faster remediation.", "Tableau access dashboards that led to revoking 30+ unauthorized roles."],
      skills: ["Python", "SQL", "Snowflake", "RAG", "LLMs", "vLLM", "Pinecone", "data quality", "anomaly detection", "statistics", "Docker", "GCP", "Tableau", "validation"] },
    { id: "cmse", short: "CMSE", t: "Machine Learning Research Assistant", org: "Michigan State University, CMSE", when: "Sep 2024 – Jul 2025 · East Lansing",
      pts: ["ML moment closures for the BGK kinetic equation in plasma physics.", "Reduced-order models that kept conservation laws and cut compute 10%.", "Moved JAX code to PyTorch; Lipschitz-constrained layers for stability.", "Optuna on a GPU cluster; 15% faster training."],
      skills: ["Python", "PyTorch", "JAX", "Optuna", "scientific ML", "reduced-order models", "GPU clusters", "scientific computing", "statistics"] },
    { id: "frib", short: "FRIB", t: "Undergraduate Research Assistant", org: "Facility for Rare Isotope Beams, MSU", when: "Jan 2023 – Mar 2024 · East Lansing",
      pts: ["NSF-funded tool that swaps slow physics simulations for fast Bayesian emulators.", "Wrote the C++ MCMC sampler and emulator training code.", "PCA input compression and core bug fixes cut run time 25%.", "Co-authored the 35-page paper, now on arXiv (2610.29685)."],
      skills: ["C++", "MCMC", "Bayesian inference", "Gaussian processes", "emulators", "PCA", "uncertainty quantification", "scientific computing", "statistics", "debugging", "research writing"] },
    { id: "msu", short: "Teaching", t: "Teaching and residence life", org: "Michigan State University", when: "Oct 2021 – Dec 2024 · East Lansing",
      pts: ["Learning assistant for physics labs with 90 students a week.", "Math TA for college algebra and trigonometry recitations.", "Physics tutor for 200+ students at CoRe.", "Resident assistant for 96 students."],
      skills: ["teaching", "explaining physics", "mentoring", "leadership", "conflict resolution", "research writing"] }
  ],

  /* ---------- trail log (hiking) ----------
     1. Put photos in the  photos/  folder (JPG, about 1600px wide, under 500 KB each).
     2. Add one block per hike below (any order; the page sorts by date).
     photos: list of photo paths; the FIRST one is the cover. [] shows a contour-map placeholder.
     date: "YYYY-MM".  elev_ft: highest point in feet (approximate is fine).  miles: distance you did, or null.
     Optional, from the trail's AllTrails page: difficulty, gain_ft (elevation gain), alltrails (link).  */
  hikes: [
    { trail: "South Rim Trail", place: "Grand Canyon National Park, AZ", date: "2025-07", elev_ft: 7000, miles: 7.5,
      note: "Rim views all the way out to the horizon.",
      // from AllTrails ("Grand Canyon Rim Trail"): full trail 12.7 mi, 567 ft gain, moderate
      difficulty: "Moderate", gain_ft: 567,
      alltrails: "https://www.alltrails.com/trail/us/arizona/grand-canyon-rim-trail--3",
      photos: ["photos/grand-canyon-1.jpg", "photos/grand-canyon-2.jpg", "photos/grand-canyon-3.jpg", "photos/grand-canyon-4.jpg"] },
      { trail: "Zion Narrows", place: "Zion National Park, UT", date: "2025-09", elev_ft: 4450, miles: 7,
      note: "Rim views all the way out to the horizon.",
      // from AllTrails ("Grand Canyon Rim Trail"): full trail 12.7 mi, 567 ft gain, moderate
      difficulty: "Moderate", gain_ft: 1617,
      alltrails: "https://www.alltrails.com/trail/us/utah/elephant-temple-via-riverside-walk",
      photos: ["photos/zion-8.jpg", "photos/zion-2.jpg", "photos/zion-3.jpg", "photos/zion-4.jpg",
               "photos/zion-5.jpg", "photos/zion-6.jpg", "photos/zion-7.jpg", "photos/zion-1.jpg"] },
    { trail: "Heart and Arch Rocks Loop", place: "Joshua Tree National Park, CA", date: "2025-11", elev_ft: 3800, miles: 2.9,
      note: "Scrambling granite boulders from midday through sunset, then stars over the Joshua trees.",
      // from AllTrails: 2.9 mi loop, 229 ft gain, moderate (White Tank area; elev_ft approximate)
      difficulty: "Moderate", gain_ft: 229,
      alltrails: "https://www.alltrails.com/trail/us/california/heart-and-arch-rocks-loop",
      photos: ["photos/joshua-tree-1.jpg", "photos/joshua-tree-2.jpg", "photos/joshua-tree-3.jpg",
               "photos/joshua-tree-4.jpg", "photos/joshua-tree-5.jpg"] },
    { trail: "Golden Canyon and Gower Gulch Loop via Zabriskie Point", place: "Death Valley National Park, CA", date: "2026-01", elev_ft: 700, miles: 6.5,
      note: "Badwater Basin reflections, sunset over the Zabriskie badlands, then a sky full of stars.",
      // from AllTrails: 6.5 mi loop, 1,069 ft gain, moderate (elev_ft approximate: Zabriskie Point)
      difficulty: "Moderate", gain_ft: 1069,
      alltrails: "https://www.alltrails.com/trail/us/california/golden-canyon-and-gower-gulch-loop-via-zabriskie-point",
      photos: ["photos/golden-canyon-1.jpg", "photos/golden-canyon-2.jpg", "photos/golden-canyon-3.jpg", "photos/golden-canyon-4.jpg",
               "photos/golden-canyon-5.jpg", "photos/golden-canyon-6.jpg", "photos/golden-canyon-7.jpg"] },
    { trail: "Mosaic Canyon Trail", place: "Death Valley National Park, CA", date: "2026-01", elev_ft: 1950, miles: 3.6,
      note: "Polished marble narrows and mosaic breccia walls, scrambling up to the boulder jam.",
      // from AllTrails: 3.6 mi out & back, 990 ft gain, moderate (elev_ft approximate)
      difficulty: "Moderate", gain_ft: 990,
      alltrails: "https://www.alltrails.com/trail/us/california/mosaic-canyon-trail",
      photos: ["photos/mosaic-canyon-1.jpg"] },
    { trail: "Navajo Loop Trail", place: "Bryce Canyon National Park, UT", date: "2026-06", elev_ft: 8000, miles: 1.6,
      note: "Storm clouds over the hoodoo amphitheater, then down through the narrow switchbacks of Wall Street.",
      // from AllTrails: 1.6 mi loop, 508 ft gain, moderate (elev_ft approximate: Sunset Point rim)
      difficulty: "Moderate", gain_ft: 508,
      alltrails: "https://www.alltrails.com/trail/us/utah/navajo-loop-trail",
      photos: ["photos/bryce-1.jpg", "photos/bryce-2.jpg", "photos/bryce-3.jpg", "photos/bryce-4.jpg",
               "photos/bryce-5.jpg", "photos/bryce-6.jpg"] },
    { trail: "Alpine Lakes, Bristlecone, and Glacier Loop", place: "Great Basin National Park, NV", date: "2026-09", elev_ft: 10678, miles: 4.86,
      note: "Alpine lakes under Wheeler Peak, sunset over the basin, the Milky Way overhead, and Lehman Caves.",
      // from my AllTrails recording (Sep 12, 2026): 4.86 mi, 902 ft gain, 2h17m moving / 3h12m total
      difficulty: "Moderate", gain_ft: 902,
      alltrails: "https://www.alltrails.com/trail/us/nevada/alpine-lakes-bristlecone-and-glacier-loop",
      photos: ["photos/great-basin-1.jpg", "photos/great-basin-2.jpg", "photos/great-basin-3.jpg", "photos/great-basin-4.jpg",
               "photos/great-basin-5.jpg", "photos/great-basin-6.jpg", "photos/great-basin-7.jpg"] },
    { trail: "Ranger Lake via Twin Lakes, Silliman Pass, and Ranger Lake Trail", place: "Sequoia National Park, CA", date: "2026-11", elev_ft: 8150, miles: 6.76,
      note: "Fresh snow and drifting fog through the giant forest.",
      // from my AllTrails recording (Nov 1, 2026): 6.76 mi, 1,453 ft gain, 4h32m moving / 5h58m total
      // elev_ft approximate: Lodgepole trailhead (~6,700 ft) + gain
      gain_ft: 1453,
      alltrails: "https://www.alltrails.com/trail/us/california/ranger-lake-via-twin-lakes-silliman-pass-and-ranger-lake-trail",
      photos: ["photos/ranger-lake-1.jpg", "photos/ranger-lake-2.jpg", "photos/ranger-lake-3.jpg", "photos/ranger-lake-4.jpg"] },
    { trail: "Yosemite Point", place: "Yosemite National Park, CA", date: "2026-11", elev_ft: 6981, miles: 5.69,
      note: "Half Dome over autumn meadows, Upper Yosemite Fall up close, then the clouds rolled in at the top.",
      // from my AllTrails recording (Nov 3, 2026): 5.69 mi, 2,979 ft gain, 5h38m moving / 8h03m total
      gain_ft: 2979,
      alltrails: "https://www.alltrails.com/trail/us/california/yosemite-point",
      photos: ["photos/yosemite-point-1.jpg", "photos/yosemite-point-2.jpg", "photos/yosemite-point-3.jpg",
               "photos/yosemite-point-4.jpg", "photos/yosemite-point-5.jpg"] }
  ]
};
