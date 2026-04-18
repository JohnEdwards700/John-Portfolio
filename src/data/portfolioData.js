import profileImage from '../assets/Profile_pic.jpg';
import resumePdf from '../assets/Resume_John_Updated (1).pdf';

export const profile = {
  name: 'John Edwards',
  title: 'Computer Science Student and Early-Career Software Engineer',
  location: 'Dallas, Texas',
  email: 'jtedwards@udallas.edu',
  linkedin: 'https://linkedin.com/in/john-t-edwards-jr/',
  github: 'https://github.com/JohnEdwards700',
  resumeUrl: resumePdf,
  profileImage,
  heroIntro:
    'I engineer dependable software that transforms complex backend systems into seamless user experiences.',
  heroSummary:
    'John is a University of Dallas computer science student with hands-on experience in full-stack development, CRM data operations, SQL, and machine learning experimentation. His recent work blends product-minded engineering with a strong academic foundation in algorithms, software systems, and data-driven problem solving.',
};

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'courses', label: 'Courses' },
  { id: 'contact', label: 'Contact' },
];

export const quickStats = [
  { value: '3.49', label: 'Major GPA' },
  { value: '2', label: 'internships' },
  { value: 'Top 50%', label: 'Programming contest placements' },
  //{ value: '3rd place', label: 'Regional programming competition' },
];

export const aboutParagraphs = [
  'John Edwards is a computer science student at the University of Dallas who enjoys building software that turns complex systems into clear, useful experiences. His recent work spans backend APIs, database design, CRM operations, and interactive frontend development.',
  'Across internships and academic projects, he has focused on structured data, dependable application behavior, and practical automation. That combination shows up in projects involving Go services, React interfaces, Azure SQL, MongoDB, and machine learning workflows built in Python.',
  'Outside the classroom and internship settings, John leads student organizations and competes in programming contests. Those experiences continue to sharpen his communication, discipline, and ability to break difficult problems into manageable pieces.',
];

export const education = {
  school: 'University of Dallas',
  degree: 'Bachelor of Science in Computer Science',
  timeframe: 'Aug 2022 - May 2026',
  location: 'Dallas, TX',
  gpa: '3.49 major GPA',
  summary:
    'Academic work combines software engineering fundamentals, mathematical rigor, systems thinking, and applied machine learning.',
};

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'C#', 'Go', 'SQL', 'Rust', 'C', 'MATLAB', 'Racket'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'ASP.NET', 'Node.js', 'Express'],
  },
  {
    title: 'Tools and Systems',
    items: ['Git', 'MongoDB', 'Azure SQL', 'Linux', 'FFmpeg', 'Google Apps Script', 'Slate CRM'],
  },
];

export const projects = [
  {
    slug: 'document-management-system',
    title: 'Document Management System',
    subtitle: 'Go | React | MongoDB',
    timeframe: 'May 2025',
    location: 'Team project',
    summary:
      'Built a distributed document platform supporting upload, retrieval, updates, and deletion through a responsive React client and modular Go services.',
    description:
      'This project focused on designing a clean document lifecycle from the user interface through the API layer and into persistent storage. The result was a team-built system that balanced real-time usability with clear backend structure.',
    technologies: ['Go', 'React', 'MongoDB', 'REST APIs', 'Git'],
    highlights: [
      'Implemented RESTful APIs for document handling and service communication.',
      'Designed a MongoDB schema that supported efficient querying and document operations.',
      'Collaborated in a team of three using modular architecture and version control practices.',
    ],
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'The goal was to create a practical document workflow that users could interact with in real time while keeping the backend service layer predictable and maintainable.',
          'John contributed across the full stack, helping shape the API design, database structure, and frontend behavior needed to keep the experience intuitive for users.',
        ],
      },
      {
        title: 'Technical Decisions',
        bullets: [
          'Used Go to build lightweight REST endpoints for create, read, update, and delete operations.',
          'Structured MongoDB collections around efficient document retrieval and update patterns.',
          'Built a React interface that surfaced backend activity clearly and supported active team collaboration.',
        ],
      },
      {
        title: 'Outcome',
        paragraphs: [
          'The project demonstrated full-stack coordination across data modeling, service design, and user experience. It also reinforced how modular collaboration can keep a shared system understandable as it grows.',
        ],
      },
    ],
    slides: [
      {
        eyebrow: 'Architecture view',
        title: 'Document lifecycle flow',
        description:
          'A service layer connects the React client to Go endpoints and persistent MongoDB storage.',
        theme: ['#0f172a', '#115e59', '#34d399'],
        tags: ['API design', 'Storage', 'State flow'],
      },
      {
        eyebrow: 'Team delivery',
        title: 'Modular collaboration',
        description:
          'The system was broken into focused modules so three contributors could work in parallel without losing clarity.',
        theme: ['#111827', '#1d4ed8', '#60a5fa'],
        tags: ['Team of 3', 'Version control', 'Reusable modules'],
      },
      {
        eyebrow: 'User experience',
        title: 'Responsive document operations',
        description:
          'Frontend interactions were designed to make uploads, retrieval, and edits feel direct and understandable.',
        theme: ['#1e293b', '#7c3aed', '#c084fc'],
        tags: ['React UI', 'Feedback loops', 'CRUD'],
      },
    ],
  },
  {
    slug: 'reinforcement-learning-drone-simulation',
    title: 'Reinforcement Learning Drone Simulation',
    subtitle: 'Python | PyTorch | Stable-Baselines3',
    timeframe: 'Nov 2024',
    location: 'Research-oriented project',
    summary:
      'Trained and evaluated reinforcement learning agents for drone navigation tasks using custom reward logic, observation spaces, and policy optimization methods.',
    description:
      'This project explored how simulation-driven learning can improve autonomous navigation. John focused on the experimentation process, tuning how an agent sees the environment and what it is rewarded for during training.',
    technologies: ['Python', 'PyTorch', 'Stable-Baselines3', 'RL training', 'Experimentation'],
    highlights: [
      'Configured custom observation spaces and reward functions to improve learning behavior.',
      'Evaluated agent performance across navigation tasks and training runs.',
      'Applied policy optimization methods to improve convergence in a simulation setting.',
    ],
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'The project centered on drone navigation inside a simulated environment where performance depended on careful reward design and thoughtful control of the observation space.',
          'John used the project to strengthen both his machine learning intuition and his ability to work through experimental iteration in a disciplined way.',
        ],
      },
      {
        title: 'Technical Decisions',
        bullets: [
          'Adjusted reward functions to better align agent behavior with navigation goals.',
          'Customized observation spaces so the model received more meaningful state information.',
          'Compared training behavior across runs to understand convergence and stability.',
        ],
      },
      {
        title: 'Outcome',
        paragraphs: [
          'The result was a stronger understanding of how small design choices in reinforcement learning directly affect training quality, agent behavior, and model reliability.',
        ],
      },
    ],
    slides: [
      {
        eyebrow: 'Training loop',
        title: 'Reward shaping and convergence',
        description:
          'Navigation success improved through careful tuning of incentives and policy optimization settings.',
        theme: ['#0f172a', '#b45309', '#f59e0b'],
        tags: ['Policy updates', 'Reward design', 'Simulation'],
      },
      {
        eyebrow: 'Model iteration',
        title: 'Observation space design',
        description:
          'The project explored what information the agent needed to make better decisions while staying stable during training.',
        theme: ['#111827', '#047857', '#6ee7b7'],
        tags: ['State inputs', 'Experiments', 'Evaluation'],
      },
      {
        eyebrow: 'Applied ML',
        title: 'Autonomous navigation focus',
        description:
          'The work connects theory from machine learning to hands-on model behavior in a controlled environment.',
        theme: ['#172554', '#4f46e5', '#818cf8'],
        tags: ['Python', 'PyTorch', 'RL'],
      },
    ],
  },
  {
  slug: 'elephant-noise-cleanup',
  title: 'Elephant Noise Cleanup',
  subtitle: 'Python | librosa | Streamlit',
  timeframe: 'Apr 2026',
  location: 'Personal project',
  summary:
    'Built a Python pipeline to isolate and clean annotated elephant call recordings by estimating background noise through spectral subtraction and reconstructing denoised audio.',
  description:
    'This project focuses on the signal processing side of wildlife audio analysis. A custom pipeline crops around annotated calls, estimates background noise from surrounding frames, and applies magnitude-domain spectral subtraction to produce cleaner recordings alongside diagnostic spectrogram plots.',
  technologies: ['Python', 'librosa', 'NumPy', 'SciPy', 'Streamlit', 'matplotlib', 'soundfile', 'pandas'],
  highlights: [
    'Designed a full spectral subtraction pipeline with soft time masking and frequency-dependent noise weighting.',
    'Built a Streamlit interface for interactively exploring before-and-after spectrograms and cleaned audio outputs.',
    'Implemented three configurable noise estimation strategies: pre-call, post-call, and blended.',
  ],
  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'Field recordings of elephant calls often contain aircraft, vehicles, and other environmental noise that can obscure the call structure. This pipeline isolates each annotated call, estimates the surrounding background, and subtracts that noise from the signal to produce a cleaner version of the selected call region.',
        'John built the project to explore how spectral techniques can be applied to real-world wildlife audio, balancing noise reduction with preservation of the original call shape.',
      ],
    },
    {
      title: 'Technical Decisions',
      bullets: [
        'Implemented three noise estimation modes — pre-call, post-call, and blended — to handle asymmetric background conditions across recordings.',
        'Used magnitude-domain spectral subtraction with configurable alpha/beta controls, a noise floor, soft time masking, and frequency-band weighting.',
        'Produced diagnostic spectrogram plots alongside cleaned audio so noise reduction quality could be evaluated visually and by ear.',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The pipeline delivers cleaned WAV files and comparison spectrograms that make it straightforward to review how each noise estimation strategy performed across different call segments and recording conditions.',
      ],
    },
  ],
  slides: [
    {
      eyebrow: 'Signal processing',
      title: 'Spectral noise subtraction',
      description:
        'Magnitude-domain subtraction with soft time masking and frequency weighting reduced background noise while preserving call structure.',
      theme: ['#0a0f1e', '#0e7490', '#67e8f9'],
      tags: ['Spectral subtraction', 'Noise profiling', 'librosa'],
    },
    {
      eyebrow: 'Pipeline design',
      title: 'Three noise estimation modes',
      description:
        'Pre-call, post-call, and blended noise windows give the pipeline flexibility to handle varying background conditions across recordings.',
      theme: ['#0f1a0f', '#166534', '#86efac'],
      tags: ['Pre / post / both', 'Adaptive estimation', 'Python'],
    },
    {
      eyebrow: 'Interactive review',
      title: 'Streamlit inspection UI',
      description:
        'A Streamlit app lets you browse cleaned audio, compare spectrogram plots, and switch between noise modes without re-running the pipeline.',
      theme: ['#12091f', '#7c3aed', '#c4b5fd'],
      tags: ['Streamlit', 'Before/after view', 'Diagnostics'],
    },
  ],
},
{
  slug: '2026-sequence-pattern-discovery-research',
  title: 'Sequence Pattern Discovery (WGS Resistance Research)',
  subtitle: 'Python | ESM-2 | Transformer clustering',
  timeframe: 'Mar 2026',
  location: 'Personal research project',
  summary:
    'Analyzed bacterial whole-genome sequencing (WGS) FASTA data to explore genetic patterns linked to carbapenem resistance by generating transformer-based sequence embeddings (ESM-2) and clustering isolates to compare resistance-driven groupings.',
  description:
    'This repository investigates carbapenem resistance signals in bacterial isolates. It frames research questions around known carbapenemase genes (e.g., blaKPC/blaNDM/blaVIM/blaOXA), chromosomal vs plasmid context, and accessory mechanisms (porins/efflux/PBPs). The pipeline concept is: FASTA/WGS sequences → ESM-2 sequence embeddings → transformer-based modeling → clustering + visualization, with a companion “protein-transformer-clustering” project that provides configs, preprocessing/tokenization, training, and cluster evaluation utilities.',
  technologies: [
    'Python',
    'Jupyter Notebook',
    'Shell',
    'PyTorch',
    'ESM-2',
    'scikit-learn',
    'NumPy',
  ],
  highlights: [
    'Defined resistance-focused research questions spanning known carbapenemase genes, genomic context (chromosomal vs plasmid), and complementary mechanisms (porins/efflux/PBPs).',
    'Structured an embedding-to-clustering workflow: FASTA/WGS → ESM-2 embeddings → transformer modeling → clustering and visualization to compare resistant isolates vs background.',
    'Included a modular “protein-transformer-clustering” codebase with configs, preprocessing/tokenization, training loops, and cluster evaluation/metrics utilities.',
  ],
  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'This project analyzes bacterial WGS FASTA sequences to explore genetic patterns associated with carbapenem resistance (last-resort antibiotics). The goal is to compare resistant isolates against background samples and see how resistance determinants and sequence-level signals relate to clustering structure.',
        'John built the project as a sequence-representation and pattern-discovery study: learn embeddings from genomic/protein sequences (ESM-2), train transformer-based components, and use clustering to surface shared vs distinct resistance-related patterns.',
      ],
    },
    {
      title: 'Technical Decisions',
      bullets: [
        'Used an embedding-first approach (ESM-2) to represent sequence data before downstream clustering and visualization.',
        'Organized a dedicated subproject (“protein-transformer-clustering”) with a clear layout: configs, raw/processed data folders, core `src/` modules (data/model/training/evaluation), scripts, notebooks, and tests.',
        'Emphasized cluster evaluation with metrics/analysis utilities to interpret discovered groupings rather than treating clustering as a purely qualitative output.',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The repo provides a practical research scaffold for exploring how resistant isolates group relative to background samples using transformer-derived embeddings, and it documents resistance-focused questions to guide interpretation of clustering results and candidate determinants.',
      ],
    },
  ],
  slides: [
    {
      eyebrow: 'Genomics + ML',
      title: 'ESM-2 sequence embeddings',
      description:
        'FASTA/WGS sequences are embedded with ESM-2 to create dense representations suitable for downstream modeling and clustering-based pattern discovery.',
      theme: ['#0a0f1e', '#1f3a8a', '#93c5fd'],
      tags: ['ESM-2', 'Embeddings', 'FASTA'],
    },
    {
      eyebrow: 'Representation learning',
      title: 'Transformer clustering pipeline',
      description:
        'A transformer backbone plus projection head produces an embedding space optimized for clustering protein/sequence relationships linked to resistance patterns.',
      theme: ['#0f1a0f', '#166534', '#86efac'],
      tags: ['Transformer', 'Projection head', 'Clustering'],
    },
    {
      eyebrow: 'Analysis',
      title: 'Cluster evaluation + summaries',
      description:
        'Evaluation utilities and summary artifacts support interpreting discovered clusters and comparing resistant isolates against background samples.',
      theme: ['#12091f', '#7c3aed', '#c4b5fd'],
      tags: ['Metrics', 'Visualization', 'Cluster analysis'],
    },
  ],
}
];

export const experiences = [
  {
    slug: 'crm-analyst-intern-university-of-dallas',
    title: 'CRM Analyst Intern',
    subtitle: 'University of Dallas',
    timeframe: 'Oct 2025 - Apr 2026',
    location: 'Dallas, TX',
    summary:
      'Improved admissions data workflows by writing SQL, automating repetitive processing tasks, and cleaning applicant records inside Slate CRM.',
    description:
      'This internship emphasized the operational side of software and data quality. John worked on data retrieval, workflow efficiency, and record consistency so admissions teams could act on more reliable information.',
    technologies: ['SQL', 'Slate CRM', 'Google Apps Script', 'Data cleanup', 'Workflow automation'],
    highlights: [
      'Designed and optimized SQL queries to improve data retrieval efficiency across admissions workflows.',
      'Automated processing tasks with Google Apps Script to reduce manual workload.',
      'Led data cleanup and normalization efforts that improved consistency and integrity of applicant records.',
    ],
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'John worked inside a live operational system where the quality of data affected how staff could move work forward. That required both technical execution and an understanding of how internal users interact with a CRM day to day.',
        ],
      },
      {
        title: 'Key Contributions',
        bullets: [
          'Wrote and refined SQL queries to surface admissions information more efficiently.',
          'Built automation with Google Apps Script to reduce repetitive manual processing.',
          'Improved record quality through normalization and cleanup efforts across applicant data.',
        ],
      },
      {
        title: 'Outcome',
        paragraphs: [
          'The work helped streamline admissions workflows while increasing confidence in the consistency and usability of CRM data.',
        ],
      },
    ],
    slides: [
      {
        eyebrow: 'Workflow systems',
        title: 'Admissions data visibility',
        description:
          'SQL-driven reporting and retrieval made operational information easier to access and act on.',
        theme: ['#0f172a', '#0f766e', '#2dd4bf'],
        tags: ['CRM data', 'Query tuning', 'Reporting'],
      },
      {
        eyebrow: 'Automation',
        title: 'Manual work reduced',
        description:
          'Google Apps Script automation helped remove repetitive processing steps from daily operations.',
        theme: ['#1f2937', '#1d4ed8', '#93c5fd'],
        tags: ['Scripting', 'Process improvement', 'Efficiency'],
      },
      {
        eyebrow: 'Data integrity',
        title: 'Normalized applicant records',
        description:
          'Data cleanup efforts improved record consistency and made downstream usage more dependable.',
        theme: ['#111827', '#9333ea', '#d8b4fe'],
        tags: ['Cleanup', 'Consistency', 'Operational quality'],
      },
    ],
  },
  {
    slug: 'software-developer-intern-cesolutions',
    title: 'Software Developer Intern',
    subtitle: 'CESolutions',
    timeframe: 'Jun 2025 - Apr 2026',
    location: 'Dallas, TX',
    summary:
      'Built an adult learning platform with ASP.NET and React, designed supporting APIs and Azure SQL schemas, and integrated media capture tooling for simulation-based training.',
    description:
      'This role combined product development, database modeling, and media processing. John worked on the engineering foundation needed to support structured learning content and automated content generation.',
    technologies: ['ASP.NET', 'React', 'Azure SQL', 'FFmpeg', 'API development'],
    highlights: [
      'Built a full-stack learning platform to support simulation-based training.',
      'Developed backend APIs and Azure SQL schemas for scalable structured data storage.',
      'Integrated an FFmpeg-based pipeline for screen, audio, and video capture.',
    ],
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'At CESolutions, John contributed to a product that needed both a polished user experience and a strong backend foundation. The work touched frontend workflows, backend services, database structure, and media processing.',
        ],
      },
      {
        title: 'Key Contributions',
        bullets: [
          'Built application functionality across ASP.NET and React for a training-focused platform.',
          'Designed API endpoints and Azure SQL schemas around scalable storage and retrieval needs.',
          'Integrated FFmpeg tooling so simulation content could be generated from captured media inputs.',
        ],
      },
      {
        title: 'Outcome',
        paragraphs: [
          'The internship strengthened his ability to think across the full stack, especially where application data, frontend usability, and media workflows need to work together reliably.',
        ],
      },
    ],
    slides: [
      {
        eyebrow: 'Full-stack product',
        title: 'Simulation learning platform',
        description:
          'The application joined backend services, structured content, and a React frontend for training delivery.',
        theme: ['#0f172a', '#1d4ed8', '#67e8f9'],
        tags: ['ASP.NET', 'React', 'Training UX'],
      },
      {
        eyebrow: 'Data design',
        title: 'Azure SQL schema planning',
        description:
          'Database models were structured to support scalable storage and retrieval of learning content.',
        theme: ['#111827', '#0f766e', '#6ee7b7'],
        tags: ['Azure SQL', 'Schema design', 'APIs'],
      },
      {
        eyebrow: 'Media pipeline',
        title: 'Automated content capture',
        description:
          'FFmpeg integration enabled screen, audio, and video capture to feed content generation workflows.',
        theme: ['#172554', '#7c3aed', '#c4b5fd'],
        tags: ['FFmpeg', 'Automation', 'Content generation'],
      },
    ],
  },
  {
    slug: 'president-university-of-dallas-martial-arts-club',
    title: 'Club President',
    subtitle: 'University of Dallas Martial Arts Club',
    timeframe: 'Jan 2023 - Apr 2026',
    location: 'Dallas, TX',
    summary:
      'Led club operations, organized training sessions, and sustained member engagement through consistent programming and hands-on coordination.',
    description:
      'Leadership roles matter because they show how technical discipline translates to group momentum. In this role, John balanced planning, accountability, and communication for an active student organization.',
    technologies: ['Leadership', 'Operations', 'Planning', 'Member engagement'],
    highlights: [
      'Led a student organization focused on martial arts training and discipline.',
      'Organized training sessions and managed day-to-day club operations.',
      'Maintained member engagement through consistent coordination and communication.',
    ],
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Serving as club president sharpened the same habits that support strong engineering teams: clear communication, dependable follow-through, and the ability to organize work around shared goals.',
        ],
      },
      {
        title: 'Key Contributions',
        bullets: [
          'Coordinated programming and scheduling for regular training sessions.',
          'Managed club operations and ensured continuity across member participation.',
          'Built an environment centered on discipline, consistency, and community.',
        ],
      },
    ],
    slides: [
      {
        eyebrow: 'Leadership',
        title: 'Organizing people and momentum',
        description:
          'This role reinforced how structure, consistency, and communication help groups keep moving forward.',
        theme: ['#111827', '#92400e', '#fbbf24'],
        tags: ['Planning', 'Responsibility', 'Mentorship'],
      },
      {
        eyebrow: 'Team culture',
        title: 'Training with discipline',
        description:
          'Building a strong club experience required repetition, accountability, and a clear standard for preparation.',
        theme: ['#0f172a', '#0f766e', '#5eead4'],
        tags: ['Consistency', 'Community', 'Execution'],
      },
      {
        eyebrow: 'Transferable skills',
        title: 'Leadership beyond the classroom',
        description:
          'The experience complements technical work by strengthening communication and organizational habits.',
        theme: ['#1e293b', '#be123c', '#fb7185'],
        tags: ['Communication', 'Ownership', 'Initiative'],
      },
    ],
  },
  {
    slug: 'member-programming-team-university-of-dallas',
    title: 'Member of Programming Team',
    subtitle: 'Programming Team, University of Dallas',
    timeframe: 'Oct 2023 - May 2025',
    location: 'Dallas, TX',
    summary:
      'Competed in algorithmic programming contests, solved timed problem sets, and earned top 50 percent rankings along with a third-place local award in 2024.',
    description:
      'Competitive programming pushed John to think clearly under time pressure and sharpened his command of algorithms, debugging, and problem decomposition.',
    technologies: ['Algorithms', 'Problem solving', 'Contest programming', 'Time-constrained debugging'],
    highlights: [
      'Competed in contests solving algorithmic problems under time pressure.',
      'Placed in the top 50 percent in multiple competitions.',
      'Earned a third-place local programming award in 2024.',
    ],
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Contest environments reward precision, adaptability, and strong algorithmic instincts. This experience complemented classroom work by reinforcing rapid problem solving and careful debugging.',
        ],
      },
      {
        title: 'Key Contributions',
        bullets: [
          'Solved complex programming problems in timed, competitive settings.',
          'Built comfort with algorithmic reasoning and implementation speed.',
          'Earned strong placements, including a third-place local finish in 2024.',
        ],
      },
    ],
    slides: [
      {
        eyebrow: 'Competitive problem solving',
        title: 'Algorithms under time pressure',
        description:
          'Programming contests reinforced efficient thinking, fast debugging, and clear implementation choices.',
        theme: ['#0f172a', '#1d4ed8', '#93c5fd'],
        tags: ['Contests', 'Algorithms', 'Speed'],
      },
      {
        eyebrow: 'Performance',
        title: 'Top 50 percent finishes',
        description:
          'Strong placements reflected steady progress in algorithmic reasoning and execution under constraints.',
        theme: ['#111827', '#7c2d12', '#fdba74'],
        tags: ['Ranking', 'Practice', 'Problem decomposition'],
      },
      {
        eyebrow: 'Recognition',
        title: 'Third-place local award',
        description:
          'Competition results added an external signal of persistence and technical preparation.',
        theme: ['#172554', '#6d28d9', '#c4b5fd'],
        tags: ['Award', 'Discipline', 'Growth'],
      },
    ],
  },
];

export const courseGroups = [
  {
    title: 'Foundations and Theory',
    description:
      'Mathematical rigor and computational reasoning that support stronger implementation choices.',
    courses: [
      {
        name: 'Algorithms',
        note: 'Focus on design strategies, runtime analysis, and efficient problem solving.',
      },
      {
        name: 'Theory of Computation',
        note: 'Formal languages, automata, and the boundaries of what systems can compute.',
      },
      {
        name: 'Discrete Structures',
        note: 'Proofs, counting, induction, graphs, and early data structures in Java.',
      },
      {
        name: 'Advanced Discrete Structures',
        note: 'Heaps, maps, linked structures, probability, and deeper proof techniques.',
      },
    ],
  },
  {
    title: 'Software and Systems',
    description:
      'Coursework that translates directly into product engineering, architecture, and maintainable code.',
    courses: [
      {
        name: 'Software Engineering',
        note: 'Designing, organizing, and shipping software collaboratively with long-term maintainability in mind.',
      },
      {
        name: 'Databases',
        note: 'Relational modeling, query design, normalization, and data integrity.',
      },
      {
        name: 'Networking and Cryptography',
        note: 'Core communication protocols, security concepts, and data protection principles.',
      },
      {
        name: 'Programming Languages',
        note: 'Interpreter design, language models, memory representation, and implementation tradeoffs.',
      },
    ],
  },
  {
    title: 'Applied Computing',
    description:
      'Practical classes that connect theory to implementation across machine learning and foundational programming.',
    courses: [
      {
        name: 'Introduction to Computer Science',
        note: 'Functional programming, recursion, data structures, and test-driven problem solving in Racket.',
      },
      {
        name: 'Machine Learning',
        note: 'Supervised and unsupervised methods, feature engineering, and model-building in Python.',
      },
    ],
  },
];

export const contactLinks = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
  { label: 'Resume', href: profile.resumeUrl },
];
