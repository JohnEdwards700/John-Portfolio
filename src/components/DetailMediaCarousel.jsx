import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VisualPanel from './VisualPanel';

const DetailMediaCarousel = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const step = (direction) => {
    setActiveIndex((current) => {
      const nextIndex = current + direction;

      if (nextIndex < 0) {
        return slides.length - 1;
      }

      if (nextIndex >= slides.length) {
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              Visual narrative
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-950">{activeSlide.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{activeSlide.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {activeSlide.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
            <span className="text-sm font-medium text-slate-500">
              Slide {activeIndex + 1} of {slides.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => step(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {slides.map((slide, index) => (
          <button
            key={`${slide.title}-${slide.eyebrow}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              index === activeIndex
                ? 'bg-slate-950 text-white'
                : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
            }`}
          >
            {slide.eyebrow}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DetailMediaCarousel;
