import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { Helmet } from "react-helmet-async";
import LocalPublishButton from "../components/LocalPublishButton";
import { featuredProjects } from "../data/featuredProjects";
import projectIdeas from "../data/projectIdeas.json";

function Projects() {
  const importedIdeas = projectIdeas
    .filter((idea) => idea.publish || import.meta.env.DEV)
    .map((idea) => ({
      title: idea.title,
      slug: idea.slug,
      image: idea.image || "",
      description: idea.summary || idea.description,
      href: `/projects/ideas/${idea.slug}`,
      label: idea.publish ? "Project Idea" : "Draft Idea",
      publish: idea.publish,
      sourceProjectId: idea.sourceProjectId,
      imported: true
    }));
  const projects = [
    ...featuredProjects.map((project) => ({ ...project, imported: false })),
    ...importedIdeas
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
      <Helmet>
        <title>Projects | Trevis Cleary</title>
      </Helmet>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-10">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.href}
            className="group overflow-hidden bg-slate-900 border border-slate-800 rounded-xl hover:border-accent/60 transition-colors"
          >
            <Link to={project.href} className="block">
              <div className="aspect-video bg-slate-950 border-b border-slate-800 overflow-hidden p-3">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-contain opacity-90 hover:opacity-100 transition duration-300"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-5xl font-bold text-slate-600">
                    {project.title.slice(0, 1).toUpperCase()}
                  </div>
                )}
              </div>

              <div className="p-8">
                <span className="inline-flex mb-4 rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-400">
                  {project.label}
                </span>

                <h2 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h2>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                <div
                  className="inline-flex items-center justify-center gap-3 mt-8 border border-slate-700 px-5 py-3 rounded-2xl text-sm font-semibold text-slate-200 group-hover:bg-slate-800 transition"
                >
                  View {project.label}
                  <Icon name="arrowRight" size={14} />
                </div>
              </div>
            </Link>
            {project.imported ? (
              <LocalPublishButton
                id={project.sourceProjectId || project.slug}
                published={project.publish}
                className="px-8 pb-8"
              />
            ) : null}
          </article>
        ))}
      </div>
    </main>
  );
}

export default Projects;
