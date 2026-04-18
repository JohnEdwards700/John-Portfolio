const defaultTheme = ['#0f172a', '#155e75', '#14b8a6'];

const VisualPanel = ({
  eyebrow,
  title,
  description,
  theme = defaultTheme,
  tags = [],
  className = '',
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/20 p-8 text-slate-50 shadow-[0_30px_100px_rgba(15,23,42,0.22)] ${className}`}
      style={{ background: `linear-gradient(140deg, ${theme.join(', ')})` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_38%)]" />
      <div className="absolute -right-8 top-8 h-28 w-28 rounded-full border border-white/20 bg-white/10 blur-sm" />
      <div className="absolute -bottom-10 left-8 h-36 w-36 rounded-full border border-white/15 bg-white/10 blur-sm" />
      <div className="absolute inset-x-8 bottom-10 h-px bg-white/20" />

      <div className="relative z-10 flex min-h-[18rem] flex-col justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-100/85">
            {eyebrow}
          </p>
          <h3 className="mt-4 max-w-sm text-3xl font-semibold leading-tight">{title}</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-100/80">{description}</p>
        </div>

        {tags.length ? (
          <div className="flex flex-wrap gap-2 pt-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-slate-50"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default VisualPanel;
