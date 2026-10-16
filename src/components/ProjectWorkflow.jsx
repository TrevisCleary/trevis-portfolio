import Icon from "./Icon";

export default function ProjectWorkflow({ steps, compact = false }) {
  return (
    <ol className={compact ? "space-y-4" : "grid md:grid-cols-3 gap-4"} aria-label="Workflow steps">
      {steps.map(([title, description], index) => (
        <li key={title} className={compact ? "flex gap-3" : "rounded-xl border border-slate-800 bg-slate-900 p-5"}>
          <span aria-hidden="true" className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 text-xs font-semibold text-accent ${compact ? "mt-0.5" : "mb-4"}`}>
            {index + 1}
          </span>
          <div>
            <h3 className="font-semibold text-slate-200">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">{description}</p>
            {compact && index < steps.length - 1 ? <span className="inline-block mt-3 rotate-90 text-slate-600" aria-hidden="true"><Icon name="arrowRight" size={12} /></span> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
