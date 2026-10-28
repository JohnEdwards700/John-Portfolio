const base = import.meta.env.BASE_URL;
const profileImage = `${base}profile.jpg`;
const resumePdf = `${base}resume.pdf`;

export const profile = {
  name: 'John Edwards',
  title: 'Software Engineer',
  location: 'Dallas, Texas',
  email: 'jtedwards@udallas.edu',
  linkedin: 'https://linkedin.com/in/john-t-edwards-jr/',
  github: 'https://github.com/JohnEdwards700',
  resumeUrl: resumePdf,
  profileImage,
  heroIntro:
    'I build dependable software that connects backend systems, data, and useful user experiences.',
  heroSummary:
    'John Edwards is a software engineer with experience in full-stack development, CRM data operations, SQL, and machine-learning experimentation. His work spans backend APIs, database design, interactive interfaces, and applied research.',
};

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'courses', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const education = {
  school: 'University of Dallas',
  degree: 'Bachelor of Science in Computer Science',
  timeframe: 'Aug 2022 - May 2026',
  location: 'Dallas, TX',
  gpa: '3.49 major GPA',
};

export const contactLinks = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
  { label: 'Resume', href: profile.resumeUrl },
];
