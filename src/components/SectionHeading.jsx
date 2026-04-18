const SectionHeading = ({ eyebrow, title, description, className = '' }) => {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
