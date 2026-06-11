import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      label: idea.publish ? "Project Idea" : "Draft Idea"
    }));
  const projects = [...featuredProjects, ...importedIdeas];

  return (
    <div className="px-10 py-20">
      <Helmet>
        <title>Projects | Trevis Cleary</title>
      </Helmet>

      <h1 className="text-5xl font-bold mb-12">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.href}
            to={project.href}
            className="group overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-600 hover:-translate-y-1 transition duration-300"
          >
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

              <span
                className="inline-flex items-center justify-center mt-8 border border-slate-700 px-5 py-3 rounded-2xl text-sm font-semibold text-slate-200 group-hover:bg-slate-800 transition"
              >
                View {project.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
