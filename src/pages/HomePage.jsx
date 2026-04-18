import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  NotebookTabs,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ShowcaseCarousel from '../components/ShowcaseCarousel';
import {
  aboutParagraphs,
  contactLinks,
  courseGroups,
  education,
  experiences,
  navigation,
  profile,
  projects,
  quickStats,
  skillGroups,
} from '../data/portfolioData';

const iconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
  Resume: FileText,
};

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (!sectionId) {
      return;
    }

    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, [location.key, location.state]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f6f3ee]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-left text-lg font-semibold tracking-tight text-slate-950"
          >
            John Edwards
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400"
          >
            <FileText className="h-4 w-4" />
            View resume
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
                <Sparkles className="h-4 w-4" />
                Professional portfolio
              </div>

              <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl lg:text-7xl">
                {profile.title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">{profile.heroIntro}</p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{profile.heroSummary}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  <FileText className="h-4 w-4" />
                  Open resume
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400"
                >
                  Explore projects
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {quickStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-5 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
                  >
                    <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -translate-x-4 translate-y-6 rounded-[2.5rem] bg-[linear-gradient(135deg,rgba(15,23,42,0.12),rgba(20,184,166,0.18),rgba(245,158,11,0.14))]" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white p-5 shadow-[0_35px_120px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[2rem] bg-slate-100">
                  <img
                    src={profile.profileImage}
                    alt="Portrait of John Edwards"
                    className="h-[32rem] w-full object-cover object-center"
                  />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-slate-950 px-5 py-5 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">Education</p>
                    <p className="mt-3 text-xl font-semibold">{education.degree}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{education.school}</p>
                    <p className="text-sm leading-6 text-slate-300">{education.gpa}</p>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">Focus areas</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Full-stack development', 'SQL and data', 'Machine learning', 'Algorithms'].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-y border-slate-200/80 bg-white/60">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="About"
              title="A builder shaped by internships, coursework, and disciplined problem solving."
              description="The resume provides the source material. This section turns it into a readable story."
            />

            <div className="space-y-6">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}

              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.05)]">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{education.school}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-500">{education.timeframe}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{education.summary}</p>
                </div>

                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.05)]">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 text-white">
                    <NotebookTabs className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">Technical toolkit</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Languages, frameworks, and tools shaped by coursework, internships, and team projects.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['React', 'ASP.NET', 'SQL', 'C#', 'Python', 'MongoDB'].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Projects"
            title="Large technical work samples with the context recruiters actually need."
            description="Each featured project has an at-a-glance summary on the home page and a dedicated detail view with deeper context, decisions, and outcomes."
          />

          <div className="mt-10">
            <ShowcaseCarousel items={projects} collectionPath="projects" ctaLabel="Open project page" />
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 border-y border-slate-200/80 bg-white/60">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="Experience"
              title="Professional and leadership experience presented with more depth than a standard resume list."
              description="Internships, technical responsibilities, and leadership roles are organized as high-visibility narratives rather than short bullet-only entries."
            />

            <div className="mt-10">
              <ShowcaseCarousel items={experiences} collectionPath="experience" ctaLabel="Open experience page" />
            </div>
          </div>
        </section>

        <section id="courses" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Courses"
            title="Coursework grouped to show range, depth, and technical direction."
            description="Relevant existing coursework so the academic story that feels curated instead of dumped into a list."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {courseGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8"
              >
                <h3 className="text-2xl font-semibold text-slate-950">{group.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{group.description}</p>

                <div className="mt-6 space-y-4">
                  {group.courses.map((course) => (
                    <div key={course.name} className="rounded-[1.5rem] bg-slate-50 px-4 py-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                        {course.name}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{course.note}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200/80 bg-white/70">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="Skills"
              title="A structured toolkit across languages, frameworks, and development systems."
              description="Sscan the tools John uses most without losing the broader technical range shown on the resume."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)]"
                >
                  <h3 className="text-xl font-semibold text-slate-950">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 rounded-[2.5rem] bg-slate-950 px-6 py-10 text-white shadow-[0_35px_120px_rgba(15,23,42,0.22)] sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">Resume and contact</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Ready for internships, software engineering conversations, and strong technical teams.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                The resume opens in a new tab, and the portfolio now gives each major project and experience enough
                space to show what John actually contributed.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  <FileText className="h-4 w-4" />
                  Open resume
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40"
                >
                  <Mail className="h-4 w-4" />
                  Email John
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {contactLinks.map(({ label, href }) => {
                const Icon = iconMap[label];
                const opensNewTab = !href.startsWith('mailto:');

                return (
                  <a
                    key={label}
                    href={href}
                    target={opensNewTab ? '_blank' : undefined}
                    rel={opensNewTab ? 'noreferrer' : undefined}
                    className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      {label}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white px-6 py-6 text-sm text-slate-500 shadow-[0_24px_60px_rgba(15,23,42,0.05)] sm:flex-row sm:items-center sm:justify-between">
            <p>Portfolio sections: About, Projects, Experience, Courses, Skills, and resume-linked contact.</p>
            <div className="flex flex-wrap items-center gap-4 text-slate-600">
              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness className="h-4 w-4" />
                Job  ready
              </span>
              <span className="inline-flex items-center gap-2">
                <NotebookTabs className="h-4 w-4" />
                Coursework and skills
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
