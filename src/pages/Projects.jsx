import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Projects() {
  const projects = [
  {
    title: "Discharge Tracker",
    slug: "discharge-tracker",
    description:
      "Modern discharge review app with React, Express, PostgreSQL, Entra authentication, analytics, and a demo sandbox."
  },
  {
    title: "SNF Policy System",
    slug: "snf-policy-system",
    description:
      "Local policy and procedure registry with AI-assisted drafting, DOCX generation, SQLite storage, and SharePoint-ready publishing."
  }
];

  return (
    <div className="px-10 py-20">
      <Helmet>
        <title>Projects | Trevis Cleary</title>
      </Helmet>

      <h1 className="text-5xl font-bold mb-12">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-600 hover:-translate-y-1 transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {project.title}
            </h2>

            <p className="text-slate-400 leading-relaxed">
              {project.description}
            </p>

            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center justify-center mt-8 border border-slate-700 px-5 py-3 rounded-2xl text-sm font-semibold text-slate-200 hover:bg-slate-800 transition"
            >
              View Case Study
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
