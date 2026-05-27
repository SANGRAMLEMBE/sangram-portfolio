/* Sangram Lembe's content — pulled from resume + LinkedIn + GitHub.
   Edit values here and the portfolio updates automatically. */

window.PORTFOLIO_DATA = {
  name: { first: 'Sangram', last: 'Lembe' },
  tagline: 'AI ENGINEER · COMPUTER VISION RESEARCHER · HACKATHON FINALIST',
  subtitle: 'M.Tech Data Engineering · SRM IST Chennai',
  about: `I am an AI engineer and computer-vision researcher building production-grade
intelligent systems — from real-time CNN-Transformer hybrids for aerial
imagery to multi-agent reinforcement-learning environments that simulate
real-world crises. Currently pursuing my M.Tech in Data Engineering at SRM
IST Chennai while interning at CSIR-CSIO on UAV semantic segmentation. My
work bridges deep learning research and engineering rigour, with a recent
focus on RAG-based legal reasoning, multi-agent RL, and edge-deployed
computer vision.`,

  stats: [
    { val: '3+',  lbl: 'HACKATHONS / RESEARCH' },
    { val: '8.39', lbl: 'CGPA · M.TECH' },
    { val: 'Top 0.1%', lbl: 'META RL HACKATHON' },
  ],

  gems: [
    { icon: '🚀', title: 'Multi-Agent RL',     sub: 'Six-agent supply-chain crisis environments fine-tuned with GRPO + QLoRA on Llama-3-8B. Meta PyTorch OpenEnv Finalist.' },
    { icon: '🔮', title: 'Computer Vision',    sub: 'CNN-Transformer hybrids for UAV semantic segmentation. Pixel-wise classification under real-world shadow + scale variation.' },
    { icon: '💎', title: 'Applied ML Research', sub: 'Gold-medal research forecasting psychological well-being of 1,000 students using PCA, PSO, and stacked ensembles.' },
    { icon: '☁️', title: 'RAG & LLM Systems',  sub: 'DeepSeek-R1 legal reasoning over Indian penal codes with LangChain + FAISS, reducing hallucinations via citation-backed retrieval.' },
  ],

  experience: [
    { side: 'left',  icon: '🔮', date: 'Mar 2026 –\nPresent',
      role: 'Computer Vision Research Intern',
      co:   'CSIR-CSIO, Chennai',
      bullets: [
        'Engineered a real-time CNN-Transformer hybrid model to resolve computational bottlenecks in UAV semantic segmentation, enabling high-performance pixel-wise classification on limited hardware.',
        'Enhanced aerial object recognition accuracy by tackling scale variations and shadow-induced ambiguities through advanced global/local feature fusion techniques.',
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
      co:   'SRM IST Chennai · CGPA 8.39',
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
      desc: 'Six-agent RL environment simulating cascading supply-chain crises across India with live weather, currency, and GDELT conflict APIs — recognised as **"top 0.1% of RL developers"** by a Meta engineer. Fine-tuned **Llama-3-8B** with GRPO and Unsloth 4-bit QLoRA on A100, producing emergent agent behaviours like pre-emptive cold-storage deployment and two-turn-early geopolitical alerts.',
      tags: [['t-py','Python'],['t-pt','PyTorch'],['t-ag','Multi-Agent'],['t-re','GRPO'],['t-ll','Llama-3']],
      link: 'https://github.com/SANGRAMLEMBE/logicriasis' },

    { badge: '🥇 GOLD MEDAL · BEST RESEARCH PAPER', first: false,
      title: 'Psychological Well-being Forecasting',
      desc: 'Predictive ML model using **PCA, PSO, and stacked ensembles** to forecast mental-health challenges among 1,000 college students. Achieved up to **96.5% F1-score** with MLP + PSO-based feature optimisation. Awarded Gold Medal at SRM Research Day by the Department of Psychology.',
      tags: [['t-py','Python'],['t-pt','scikit-learn'],['t-cv','PCA'],['t-st','Streamlit']],
      link: 'https://github.com/SANGRAMLEMBE/mental_health_Project' },

    { badge: '📚 RAG + LEGAL REASONING', first: false,
      title: 'AI Legal Reasoning Assistant',
      desc: 'Legal-analysis tool using **DeepSeek R1** chain-of-thought reasoning for complex statutes. Built a **RAG pipeline with LangChain and FAISS** over penal codes (e.g. UDHR), reducing hallucinations and providing **citation-backed answers** via a Streamlit interface.',
      tags: [['t-py','Python'],['t-ra','LangChain'],['t-ch','FAISS'],['t-re','DeepSeek-R1'],['t-st','Streamlit']],
      link: 'https://github.com/SANGRAMLEMBE/ai-lawyer-with-deepseek-using-rag' },

    { badge: '🔮 DRONE COMPUTER VISION', first: false,
      title: 'Aerial Guardian',
      desc: 'Multi-object tracking system for drone footage combining **YOLOv8n + ByteTrack + ego-motion compensation**. Real-time detection and tracking that compensates for the drone\'s own motion to maintain stable object identities across frames.',
      tags: [['t-py','Python'],['t-yo','YOLOv8'],['t-dl','ByteTrack'],['t-cv','Computer Vision']],
      link: 'https://github.com/SANGRAMLEMBE/aerial-guardian' },

    { badge: '🚀 HACKATHON · GEMINI + GCP', first: false,
      title: 'VenueFlow',
      desc: 'Real-time stadium and event-venue flow analytics built for the **Prompt Wars 2026 hackathon**. **Gemini AI + Google Cloud + FastAPI** backend with a PWA front-end and WebSocket live updates for crowd, queue, and gate metrics.',
      tags: [['t-py','Python'],['t-fl','FastAPI'],['t-gp','Gemini'],['t-ra','WebSocket']],
      link: 'https://github.com/SANGRAMLEMBE/venueflow' },

    { badge: '🛍️ AI E-COMMERCE OPTIMISATION', first: false,
      title: 'ShopReady AI',
      desc: 'AI representation optimiser for Shopify merchants — built for the **Kasparro Hackathon Track 5**. Scores and improves how well a Shopify storefront surfaces to AI shopping agents across structured data, API accessibility, and semantic search.',
      tags: [['t-py','Python'],['t-st','Streamlit'],['t-ag','Agents'],['t-ra','API']],
      link: 'https://github.com/SANGRAMLEMBE/shopready-ai' },
  ],

  achievements: [
    { medal: '',   badge: '🏆 FINALIST',     badgeCls: 'bg-c', title: 'Meta PyTorch OpenEnv 2026',     org: 'Bangalore · 51K+ applicants',         desc: '48-hour in-person finale with LogiCrisis multi-agent supply-chain environment. Recognised as "top 0.1% of RL developers."', cardCls: 'cy' },
    { medal: '',   badge: '🥇 GOLD MEDAL',   badgeCls: 'bg-g', title: 'SRM Research Day · Best Paper', org: 'Department of Psychology · 2026',     desc: 'Forecasting psychological well-being of 1,000 students with PCA + PSO + stacked ensembles.', cardCls: '' },
    { medal: '',   badge: '📚 PUBLISHED',    badgeCls: 'bg-g', title: 'IJIRSET · LLM Image Classification', org: 'Pune · May 2024',               desc: 'Features-preserving blurred-image classification using LLMs. DOI 10.15680/IJIRSET.2024.1305313.', cardCls: '' },
    { medal: '',   badge: '🏆 QUALIFIER',    badgeCls: 'bg-c', title: 'Banking Support Agent · Round 1', org: 'Meta OpenEnv 2026',                 desc: 'Built fraud-dispute-resolution RL environment that qualified Round 1 of the Meta hackathon.', cardCls: 'cy' },
    { medal: '',   badge: '🎓 M.TECH',       badgeCls: 'bg-g', title: 'CGPA 8.39 / 10',                org: 'SRM IST Chennai · 2025 – 2027',       desc: 'Data Engineering specialisation — distributed systems, big-data pipelines, and deep learning.', cardCls: '' },
    { medal: '',   badge: '🎓 B.TECH',       badgeCls: 'bg-s', title: 'CGPA 8.31 / 10',                org: 'G.H. Raisoni College, Pune · 2024',  desc: 'Artificial Intelligence specialisation — strong foundation across ML, DL, and NLP.', cardCls: 'sv' },
  ],

  skills: [
    { h: 'Programming',       items: ['Python','C++','SQL','HTML','CSS'] },
    { h: 'AI / ML / DL',      items: ['PyTorch','TensorFlow','scikit-learn','LangChain','FAISS','RAG','Multi-Agent','GRPO'] },
    { h: 'LLMs & Gen AI',     items: ['Llama-3','DeepSeek-R1','Gemini','HuggingFace','Unsloth','QLoRA'] },
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
