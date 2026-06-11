import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import projectIdeas from "../data/projectIdeas.json";

function visibleIdeas() {
  return projectIdeas.filter((idea) => idea.publish || import.meta.env.DEV);
}

function ProjectIdeaDetail() {
  const { slug } = useParams();
  const idea = visibleIdeas().find((item) => item.slug === slug);

  if (!idea) {
    return (
      <main className="max-w-5xl mx-auto px-8 py-24">
        <Helmet>
          <title>Project Idea Not Found | Trevis Cleary</title>
        </Helmet>
        <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-6">
          Project Idea
        </p>
        <h1 className="text-5xl font-bold">Project idea not found.</h1>
        <Link to="/projects" className="inline-flex mt-10 text-slate-300 hover:text-white">
          Back to projects
        </Link>
      </main>
    );
  }

  const tags = Array.isArray(idea.tags) ? idea.tags : [];
  const acceptance = Array.isArray(idea.publicationChecklist) ? idea.publicationChecklist : [];

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24">
      <Helmet>
        <title>{idea.title} | Project Idea | Trevis Cleary</title>
        <meta name="description" content={idea.summary || idea.description} />
      </Helmet>

      <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-6">
        Imported Project Idea
      </p>

      <div className="grid lg:grid-cols-[1fr_320px] gap-10">
        <section>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {!idea.publish ? (
              <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200">
                Draft
              </span>
            ) : null}
            <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
              {idea.framework || "Project"}
            </span>
            <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
              {idea.audience || "portfolio"}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {idea.title}
          </h1>

          <p className="mt-8 text-xl text-slate-300 leading-relaxed">
            {idea.summary || idea.description}
          </p>

          {idea.description && idea.description !== idea.summary ? (
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              {idea.description}
            </p>
          ) : null}

          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Portfolio Angle</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {idea.portfolioAngle || "Needs manual review before this becomes a public case study."}
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Publication Checklist</h2>
            <div className="grid gap-4">
              {acceptance.length ? acceptance.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-300">
                  {item}
                </div>
              )) : (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-400">
                  Needs manual review.
                </div>
              )}
            </div>
          </section>
        </section>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold">Source Snapshot</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-slate-500">Source project</dt>
                <dd className="text-slate-200">{idea.sourceProjectId}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Lifecycle phase</dt>
                <dd className="text-slate-200">{idea.lifecyclePhase || "Needs manual review"}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Imported</dt>
                <dd className="text-slate-200">{idea.importedAt || "Needs manual review"}</dd>
              </div>
            </dl>
          </div>

          {tags.length ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-semibold">Tags</h2>
              <div className="flex flex-wrap gap-2 mt-5">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-950 px-3 py-2 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {idea.blogSlug ? (
            <Link
              to={`/blog/${idea.blogSlug}`}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-700 px-5 py-4 text-sm font-semibold text-slate-200 hover:bg-slate-900 transition"
            >
              View blog draft
            </Link>
          ) : null}
        </aside>
      </div>
    </main>
  );
}

export default ProjectIdeaDetail;
