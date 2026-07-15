/* Portfolio content — projects, experience, skills, certifications */

window.PORTFOLIO_DATA = {
  name: { first: 'Sangram', last: 'Lembe' },
  tagline: 'COMPUTER VISION RESEARCHER · AI ENGINEER · STATE OF THE ART ON UAVID',
  subtitle: 'M.Tech Data Engineering · SRM IST Chennai',
  about: `I build AI systems that have to survive contact with the real world —
drones that read the ground beneath them, legal assistants that cite the
law instead of inventing it, agents that negotiate cascading crises. At
CSIR-CSIO, my model DroneSegNet set a new state of the art for UAV
semantic segmentation on the UAVid benchmark, and the work is now under
review at ACCV 2026 as a first-author paper. What drives my research is
the gap between a benchmark number and a deployable system: models that
hold up under altitude and domain shift, retrieval that never fabricates
a citation, and accuracy that fits a real compute budget. Currently
pursuing my M.Tech in Data Engineering at SRM IST Chennai.`,

  stats: [
    { val: '76.18%', lbl: 'SOTA mIoU · UAVID' },
    { val: '8.80', lbl: 'CGPA · M.TECH' },
    { val: 'Top 0.1%', lbl: 'META RL HACKATHON' },
  ],

  gems: [
    { icon: '🚀', title: 'Multi-Agent RL',     sub: 'Six-agent supply-chain crisis environments fine-tuned with GRPO + QLoRA on Llama-3-8B. Meta PyTorch OpenEnv Finalist.' },
    { icon: '🔮', title: 'Computer Vision',    sub: 'State-of-the-art UAV semantic segmentation — 76.18% mIoU on UAVid with a PVT-v2 CNN-Transformer hybrid. First-author paper submitted to ACCV 2026.' },
    { icon: '💎', title: 'Applied ML Research', sub: 'Gold-medal research forecasting psychological well-being of 1,000 students using PCA, PSO, and stacked ensembles.' },
    { icon: '☁️', title: 'RAG & LLM Systems',  sub: 'Fully local, era-aware legal RAG over 17 Indian statutes — hallucinated citations cut from 31.7% to 0% via post-generation citation verification.' },
  ],

  experience: [
    { side: 'left',  icon: '🔮', date: 'Mar 2026 –\nPresent',
      role: 'Computer Vision Research Intern',
      co:   'CSIR-CSIO, Chennai',
      bullets: [
        'Set a new state of the art on the UAVid benchmark with DroneSegNet, a PVT-v2 CNN-Transformer hybrid for UAV semantic segmentation — 76.18% mIoU across 8 classes, ahead of the previous best of 75.49%. First-author paper under review at ACCV 2026.',
        'Rare, small objects are where aerial segmentation fails — addressed this with a multi-term training objective (OHEM cross-entropy, Dice, boundary, and a self-supervised cross-scale consistency term) plus 12-pass test-time augmentation.',
        'Systematic ablations produced the key insight: pretraining domain and altitude match drive accuracy more than model scale — yielding a deployment variant within 0.20 mIoU of the flagship at 2.2× lower compute.',
      ] },
    { side: 'right', icon: '🤖', date: 'Apr 2026',
      role: 'Meta PyTorch OpenEnv Finalist',
      co:   'Bangalore · LogiCrisis',
      bullets: [
        'Built a six-agent RL environment simulating cascading supply-chain crises across India with live weather, currency, and GDELT conflict APIs.',
        'Recognised as "top 0.1% of RL developers" by a Meta engineer after qualifying from 51K+ applicants for the 48-hour in-person finale.',
        'Fine-tuned Llama-3-8B using GRPO with Unsloth 4-bit QLoRA on A100 — emergent pre-emptive cold-storage deployment and two-turn-early geopolitical alerts.',
      ] },
    { side: 'left',  icon: '⚙️', date: 'Jul 2023 –\nJan 2024',
      role: 'Python Developer Intern',
      co:   'Flourisense, Pune',
      bullets: [
        'Developed an Applicant Tracking System using Node.js and Sequelize ORM to efficiently model and manage candidate data.',
        'Implemented and tested scalable RESTful APIs using Postman to ensure seamless communication between front-end and back-end systems.',
      ] },
    { side: 'right', icon: '🎓', date: '2025 – 2027',
      role: 'M.Tech in Data Engineering',
      co:   'SRM IST Chennai · CGPA 8.80',
      bullets: [
        'Coursework in distributed systems, big-data pipelines, and deep learning.',
        'Research focus: multi-agent reinforcement learning + computer vision for real-world deployment.',
      ] },
    { side: 'left',  icon: '🏫', date: '2020 – 2024',
      role: 'B.Tech in Artificial Intelligence',
      co:   'G.H. Raisoni College of Engineering, Pune · CGPA 8.31',
      bullets: [
        'Foundation in ML, deep learning, NLP, and computer vision.',
        'Published in IJIRSET on feature-preserving blurred image classification using LLMs (DOI 10.15680/IJIRSET.2024.1305313).',
      ] },
  ],

  projects: [
    { badge: '🏆 META PYTORCH OPENENV FINALIST · APR 2026', first: true,
      title: 'LogiCrisis',
      desc: 'A six-agent reinforcement-learning environment where supply-chain crises cascade across India, driven by live weather, currency, and GDELT conflict data. Fine-tuning **Llama-3-8B with GRPO** produced emergent behaviour the reward never explicitly asked for — pre-emptive cold-storage deployment, geopolitical alerts two turns early. Rated **"top 0.1% of RL developers"** by a Meta engineer; selected for the 48-hour Bangalore finale from **51K+ applicants**.',
      tags: [['t-py','Python'],['t-pt','PyTorch'],['t-ag','Multi-Agent'],['t-re','GRPO'],['t-ll','Llama-3']],
      link: 'https://github.com/SANGRAMLEMBE/logicriasis' },

    { badge: '🔬 NEW STATE OF THE ART · UAVID · ACCV 2026', first: false,
      title: 'DroneSegNet',
      desc: 'Aerial segmentation is hard because the ground truth literally shifts with altitude, shadow, and scale. DroneSegNet — a PVT-v2 CNN-Transformer hybrid — reached **76.18% mIoU on UAVid, a new state of the art** past the previous best of 75.49%. The deeper finding came from ablations: pretraining domain and altitude match drive accuracy far more than model scale, which yielded a variant within 0.20 mIoU of the flagship at **2.2× lower compute**. First-author paper under review at **ACCV 2026**; built at CSIR-CSIO.',
      tags: [['t-py','Python'],['t-pt','PyTorch'],['t-cv','Computer Vision'],['t-dl','PVT-v2'],['t-yo','UAVid']],
      link: 'https://github.com/SANGRAMLEMBE' },

    { badge: '⚖️ LEGAL RAG · 0% HALLUCINATED CITATIONS', first: false,
      title: 'Nyaya-RAG',
      desc: 'India replaced its criminal codes in 2024 — IPC became BNS — and most legal AI tools still don\'t know it. Nyaya-RAG is a fully local RAG system over **17 Indian statutes** that tags every chunk by legal era and maps sections across the transition. A post-generation verifier checks every cited section against the corpus before answering, cutting hallucinated citations from **31.7% to 0%** on a 150-question gold set (recall@10 = 1.00, MRR = 0.92). Runs entirely offline — vLLM + Qwen2.5-14B, BGE-M3, Qdrant, zero external APIs.',
      tags: [['t-py','Python'],['t-ra','vLLM'],['t-ch','Qdrant'],['t-re','Qwen2.5'],['t-ll','BGE-M3']],
      link: 'https://github.com/SANGRAMLEMBE/Nyaya-RAG' },

    { badge: '🥇 GOLD MEDAL · BEST RESEARCH PAPER', first: false,
      title: 'Psychological Well-being Forecasting',
      desc: 'Can you see a mental-health crisis coming in the data early enough to intervene? Built a predictive model over survey data from **1,000 college students** using PCA, PSO-based feature optimisation, and stacked ensembles — reaching up to **96.5% F1**, enabling early identification of at-risk students. Awarded the **Gold Medal for Best Research Paper** at SRM Research Day by the Department of Psychology.',
      tags: [['t-py','Python'],['t-pt','scikit-learn'],['t-cv','PCA'],['t-st','Streamlit']],
      link: 'https://github.com/SANGRAMLEMBE/mental_health_Project' },

    { badge: '🏆 RANK 17 / 45,000 ALL INDIA · GOOGLE PROMPT WARS', first: false,
      title: 'Greenprint',
      desc: 'A carbon-footprint platform that treats the calculation as science, not vibes — every emission factor is source-cited (DEFRA, EPA, IEA, IPCC AR6), and a short questionnaire becomes a ranked action plan with **per-action CO₂e savings** plus live UK grid-intensity signals for timing energy-heavy tasks. Engineered to production standards: Next.js with strict TypeScript, a pure calculation engine at **~100% test coverage**, **WCAG 2.2 AA** accessibility, and local-first privacy. **Ranked 17th of 45,000 entries across India** — top 0.04% — in Google Prompt Wars.',
      tags: [['t-py','Next.js'],['t-st','TypeScript'],['t-cv','Tailwind'],['t-ra','Playwright']],
      link: 'https://github.com/SANGRAMLEMBE/greenprint' },

    { badge: '🔮 DRONE COMPUTER VISION', first: false,
      title: 'Aerial Guardian',
      desc: 'Multi-object tracking system for drone footage combining **YOLOv8n + ByteTrack + ego-motion compensation**. Real-time detection and tracking that compensates for the drone\'s own motion to maintain stable object identities across frames.',
      tags: [['t-py','Python'],['t-yo','YOLOv8'],['t-dl','ByteTrack'],['t-cv','Computer Vision']],
      link: 'https://github.com/SANGRAMLEMBE/aerial-guardian' },

    { badge: '🚀 RANK 39 / 42,000 ALL INDIA · GOOGLE PROMPT WARS', first: false,
      title: 'VenueFlow',
      desc: 'Real-time stadium and event-venue flow analytics — **Gemini AI + Google Cloud + FastAPI** backend with a PWA front-end and WebSocket live updates for crowd, queue, and gate metrics. **Placed 39th of 42,000 entries across India** — top 0.1% — in the Google Prompt Wars 2026 hackathon.',
      tags: [['t-py','Python'],['t-fl','FastAPI'],['t-gp','Gemini'],['t-ra','WebSocket']],
      link: 'https://github.com/SANGRAMLEMBE/venueflow' },

    { badge: '🛍️ AI E-COMMERCE OPTIMISATION', first: false,
      title: 'ShopReady AI',
      desc: 'AI representation optimiser for Shopify merchants — built for the **Kasparro Hackathon Track 5**. Scores and improves how well a Shopify storefront surfaces to AI shopping agents across structured data, API accessibility, and semantic search.',
      tags: [['t-py','Python'],['t-st','Streamlit'],['t-ag','Agents'],['t-ra','API']],
      link: 'https://github.com/SANGRAMLEMBE/shopready-ai' },
  ],

  achievements: [
    { medal: '',   badge: '📄 ACCV 2026',    badgeCls: 'bg-c', title: 'First-Author Paper · DroneSegNet', org: 'CSIR-CSIO · Submitted 2026',       desc: 'New state of the art on UAVid — 76.18% mIoU, surpassing the prior best of 75.49%. CNN-Transformer (PVT-v2) for UAV semantic segmentation.', cardCls: 'cy' },
    { medal: '',   badge: '🏆 FINALIST',     badgeCls: 'bg-c', title: 'Meta PyTorch OpenEnv 2026',     org: 'Bangalore · 51K+ applicants',         desc: '48-hour in-person finale with LogiCrisis multi-agent supply-chain environment. Recognised as "top 0.1% of RL developers."', cardCls: 'cy' },
    { medal: '',   badge: '🥇 GOLD MEDAL',   badgeCls: 'bg-g', title: 'SRM Research Day · Best Paper', org: 'Department of Psychology · 2026',     desc: 'Forecasting psychological well-being of 1,000 students with PCA + PSO + stacked ensembles.', cardCls: '' },
    { medal: '',   badge: '📚 PUBLISHED',    badgeCls: 'bg-g', title: 'IJIRSET · LLM Image Classification', org: 'Pune · May 2024',               desc: 'Features-preserving blurred-image classification using LLMs. DOI 10.15680/IJIRSET.2024.1305313.', cardCls: '' },
    { medal: '',   badge: '🏆 QUALIFIER',    badgeCls: 'bg-c', title: 'Banking Support Agent · Round 1', org: 'Meta OpenEnv 2026',                 desc: 'Built fraud-dispute-resolution RL environment that qualified Round 1 of the Meta hackathon.', cardCls: 'cy' },
    { medal: '',   badge: '🎓 M.TECH',       badgeCls: 'bg-g', title: 'CGPA 8.80 / 10',                org: 'SRM IST Chennai · 2025 – 2027',       desc: 'Data Engineering specialisation — distributed systems, big-data pipelines, and deep learning.', cardCls: '' },
    { medal: '',   badge: '🎓 B.TECH',       badgeCls: 'bg-s', title: 'CGPA 8.31 / 10',                org: 'G.H. Raisoni College, Pune · 2024',  desc: 'Artificial Intelligence specialisation — strong foundation across ML, DL, and NLP.', cardCls: 'sv' },
  ],

  skills: [
    { h: 'Programming',       items: ['Python','C++','SQL','HTML','CSS'] },
    { h: 'AI / ML / DL',      items: ['PyTorch','TensorFlow','scikit-learn','CNNs','Vision Transformers (PVT-v2)','Semantic Segmentation','GRPO','Mixed Precision'] },
    { h: 'LLMs & Gen AI',     items: ['RAG','vLLM','Qdrant','BGE-M3','BM25 / Hybrid Retrieval','LangChain','FAISS','Llama-3','Qwen2.5','HuggingFace','QLoRA','LLM Evaluation'] },
    { h: 'Visualisation',     items: ['Matplotlib','Plotly','Pandas','NumPy'] },
    { h: 'Tools & Workflow',  items: ['Git','VS Code','PyCharm','Anaconda','Jupyter','n8n','Postman','Canva'] },
    { h: 'Backend & APIs',    items: ['Node.js','Sequelize','FastAPI','Streamlit','REST'] },
  ],

  certifications: [
    { iss: 'NVIDIA',                name: 'Fundamentals of Deep Learning',                            meta: 'Certified · 2025' },
    { iss: 'Techobytes · IIT Madras', name: 'Generative & Agentic AI · 40-Hour Bootcamp',              meta: '5 days · IIT Madras Research Park' },
    { iss: 'SRM University',        name: 'Lab to Market · Entrepreneurship Workshop',                meta: '2 days · Directorate of Entrepreneurship' },
    { iss: 'NPTEL',                 name: 'The Joy of Computing Using Python',                        meta: '8 weeks · 2023' },
    { iss: 'IJIRSET',               name: 'Publication · LLM Image Classification',                   meta: 'May 2024 · DOI' },
    { iss: 'Meta · PyTorch',        name: 'OpenEnv Hackathon Finalist',                               meta: 'Apr 2026' },
    { iss: 'GitHub',                name: 'Active Open-Source Contributor',                           meta: '@SANGRAMLEMBE' },
    { iss: 'LinkedIn',              name: 'Active Network · 500+ Connections',                        meta: 'sangram-lembe' },
  ],

  inspiration: [
    { init: 'BG', sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥', text: '"You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction."', who: 'Bhagavad Gita', role: 'Chapter 2, Verse 47 · On focused effort' },
    { init: 'CL', text: '"Failures, repeated failures, are finger posts on the road to achievement. One fails forward toward success."', who: 'C. S. Lewis', role: 'On perseverance through setbacks' },
    { init: 'SC', text: '"The key is in not spending time, but in investing it."', who: 'Stephen R. Covey', role: 'On time as compounding capital' },
  ],

  contactEmail: 'sangramlembe9696@gmail.com',
  social: {
    github:   'https://github.com/SANGRAMLEMBE',
    linkedin: 'https://www.linkedin.com/in/sangram-lembe-56262320a/',
    substack: 'https://substack.com/@sangramlembe',
    medium:   'https://medium.com/@sangramlembe9696',
  },
};
