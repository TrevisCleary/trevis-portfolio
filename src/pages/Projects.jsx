import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Icon from "../components/Icon";
import ProjectWorkflow from "../components/ProjectWorkflow";
import LocalPublishButton from "../components/LocalPublishButton";
import { projectCaseStudies, projectHref } from "../data/projectCaseStudies";
import projectIdeas from "../data/projectIdeas.json";

const categories = ["All work", "Platforms", "Clinical workflows", "Data & reporting"];

function Projects() {
  const [category, setCategory] = useState("All work");
  const projects = projectCaseStudies.filter((project) => category === "All work" || project.category === category);
  const publishedIdeas = projectIdeas.filter((idea) => idea.publish);
  const drafts = import.meta.env.DEV ? projectIdeas.filter((idea) => !idea.publish) : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  function renderIdea(idea) {
    return (
      <article key={idea.slug} className="rounded-xl border border-slate-800 p-5">
        <Link to={`/projects/ideas/${idea.slug}`} className="text-lg font-semibold text-slate-200 hover:text-accent">{idea.title}</Link>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{idea.summary || idea.description}</p>
        <LocalPublishButton id={idea.sourceProjectId || idea.slug} published={idea.publish} className="mt-4" />
      </article>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-16">
      <Helmet>
        <title>Projects | Trevis Cleary</title>
        <meta name="description" content="Healthcare and enterprise technology projects spanning clinical workflows, platform architecture, data pipelines, and operational automation." />
      </Helmet>
      <header className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-5 text-xl sm:text-2xl leading-relaxed text-slate-200">Healthcare systems built around the work.</p>
        <p className="mt-3 text-slate-400 leading-relaxed">Selected work in clinical operations, shared platforms, and reporting. Each case study covers the problem, the design decisions, and how the project is evolving.</p>
      </header>

      <div className="mt-9 border-b border-slate-800 pb-5">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`min-h-11 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${category === item ? "border-accent bg-accent text-slate-950" : "border-slate-700 text-slate-300 hover:border-accent hover:text-accent"}`}
            >{item}</button>
          ))}
        </div>
        <p role="status" className="mt-4 text-sm text-slate-500">{projects.length} {projects.length === 1 ? "case study" : "case studies"}</p>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article key={project.slug} className={`rounded-xl border border-slate-800 bg-slate-900 ${project.slug === "nexus" ? "md:col-span-2" : ""}`}>
            {project.slug === "nexus" ? (
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 text-accent"><Icon name={project.icon} size={24} /><span className="text-sm">{project.category}</span></div>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight">{project.title}</h2>
                  <p className="mt-3 text-xl leading-relaxed text-slate-200">{project.subtitle}</p>
                  <p className="mt-4 max-w-xl leading-relaxed text-slate-400">{project.description}</p>
                  <p className="mt-5 text-sm text-slate-500">{project.focus}</p>
                  <Link to={projectHref(project)} className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-accent-hover">
                    Explore Nexus <Icon name="arrowRight" size={14} />
                  </Link>
                </div>
                <div className="border-t border-slate-800 p-6 md:p-8 lg:border-t-0 lg:border-l">
                  <p className="mb-6 text-sm font-medium text-slate-300">How the platform connects the work</p>
                  <ProjectWorkflow steps={project.workflow} compact />
                </div>
              </div>
            ) : (
              <div className="flex h-full flex-col p-6 md:p-7">
                <div className="flex items-center gap-3 text-accent"><Icon name={project.icon} size={22} /><span className="text-sm">{project.category}</span></div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight">{project.title}</h2>
                <p className="mt-3 leading-relaxed text-slate-400">{project.description}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">{project.focus}</p>
                <div className="mt-auto pt-6">
                  <p className="border-t border-slate-800 pt-4 text-xs text-slate-500">{project.status}</p>
                  <Link to={projectHref(project)} aria-label={`Read ${project.title} case study`} className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover">
                    Read case study <Icon name="arrowRight" size={14} />
                  </Link>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {publishedIdeas.length ? <section className="mt-12"><h2 className="text-2xl font-semibold mb-5">More projects</h2><div className="grid md:grid-cols-2 gap-4">{publishedIdeas.map(renderIdea)}</div></section> : null}
      {drafts.length ? <details className="mt-12 rounded-xl border border-slate-800 p-5"><summary className="cursor-pointer text-sm text-slate-400">Project drafts</summary><div className="mt-5 grid md:grid-cols-2 gap-4">{drafts.map(renderIdea)}</div></details> : null}
    </main>
  );
}

export default Projects;
