import { ArrowLeft, ArrowUpRight, CalendarDays, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import DetailMediaCarousel from './DetailMediaCarousel';
import { profile } from '../data/portfolioData';

const iconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
  Resume: FileText,
};

const DetailLayout = ({ item, kindLabel, homeSection }) => {
  const metaLinks = [
    { label: 'Email', href: `mailto:${profile.email}` },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'GitHub', href: profile.github },
    { label: 'Resume', href: profile.resumeUrl },
  ];

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f6f3ee]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            to="/"
            state={{ scrollTo: homeSection }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

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

      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">{kindLabel}</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl">
              {item.title}
            </h1>
            <p className="mt-4 text-lg font-medium text-slate-600">{item.subtitle}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{item.description}</p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {item.timeframe}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {item.location}
              </span>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">At a glance</p>
            <p className="mt-4 text-base leading-7 text-slate-600">{item.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {item.highlights.map((highlight) => (
                <p key={highlight} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                  {highlight}
                </p>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-12">
          <DetailMediaCarousel slides={item.slides} />
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            {item.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8"
              >
                <h2 className="text-2xl font-semibold text-slate-950">{section.title}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-base leading-7 text-slate-600">
                    {paragraph}
                  </p>
                ))}

                {section.bullets?.length ? (
                  <div className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <p
                        key={bullet}
                        className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"
                      >
                        {bullet}
                      </p>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">How this fits John&apos;s work</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                This work reflects the kind of engineering John enjoys most: technically grounded projects with clear
                outcomes, strong collaboration, and systems that people can rely on.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Connect</h2>
              <div className="mt-6 space-y-3">
                {metaLinks.map(({ label, href }) => {
                  const Icon = iconMap[label];
                  const opensNewTab = !href.startsWith('mailto:');

                  return (
                    <a
                      key={label}
                      href={href}
                      target={opensNewTab ? '_blank' : undefined}
                      rel={opensNewTab ? 'noreferrer' : undefined}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white"
                    >
                      <span className="inline-flex items-center gap-3">
                        <Icon className="h-4 w-4" />
                        {label}
                      </span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default DetailLayout;
