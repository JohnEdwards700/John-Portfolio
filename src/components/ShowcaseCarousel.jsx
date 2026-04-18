import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import VisualPanel from './VisualPanel';

const ShowcaseCarousel = ({ items, collectionPath, ctaLabel }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];
  const activeSlide = activeItem.slides[0];

  const step = (direction) => {
    setActiveIndex((current) => {
      const nextIndex = current + direction;

      if (nextIndex < 0) {
        return items.length - 1;
      }

      if (nextIndex >= items.length) {
        return 0;
      }

      return nextIndex;
    });
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <VisualPanel
          eyebrow={activeSlide.eyebrow}
          title={activeSlide.title}
          description={activeSlide.description}
          theme={activeSlide.theme}
          tags={activeSlide.tags}
          className="min-h-full"
        />

        <div className="flex flex-col justify-between rounded-[1.75rem] bg-slate-50 p-6 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
              <span className="rounded-full bg-white px-3 py-1 text-slate-700 shadow-sm">
                {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
              <span className="rounded-full border border-slate-200 px-3 py-1">{activeItem.subtitle}</span>
            </div>

            <h3 className="mt-6 text-3xl font-semibold text-slate-950">{activeItem.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{activeItem.summary}</p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {activeItem.timeframe}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {activeItem.location}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {activeItem.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {activeItem.highlights.map((highlight) => (
                <p
                  key={highlight}
                  className="rounded-2xl bg-white px-4 py-3 text-sm leading-6 text-slate-600 shadow-sm"
                >
                  {highlight}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => step(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300"
                aria-label="Previous item"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300"
                aria-label="Next item"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <Link
              to={`/${collectionPath}/${activeItem.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              index === activeIndex
                ? 'bg-slate-950 text-white'
                : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseCarousel;
