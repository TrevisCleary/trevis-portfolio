import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Projects() {
  const projects = [
  {
    title: "Discharge Tracker",
    slug: "discharge-tracker",
    image: "/images/discharge-tracker/current/02-home-review-queue.png",
    description:
      "Modern discharge review app with React, Express, PostgreSQL, Entra authentication, analytics, and a demo sandbox."
  },
  {
    title: "SNF Policy System",
    slug: "snf-policy-system",
    image: "/images/snf-policy-system/current/01-policy-registry.png",
    description:
      "Local policy and procedure registry with AI-assisted drafting, DOCX generation, SQLite storage, and SharePoint-ready publishing."
  },
  {
    title: "Weekly Clinical Compliance Reporting Automation",
    slug: "poc-weekly-compliance",
    image: "/images/poc-weekly-compliance/flow-overview.svg",
    description:
      "Hybrid Power Automate and desktop flow that runs weekly compliance reports, processes Excel output, and distributes state-specific clinical updates."
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
          <Link
            key={index}
            to={`/projects/${project.slug}`}
            className="group overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-600 hover:-translate-y-1 transition duration-300"
          >
            <div className="aspect-video bg-slate-950 border-b border-slate-800 overflow-hidden p-3">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-contain opacity-90 hover:opacity-100 transition duration-300"
              />
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">
                {project.title}
              </h2>

              <p className="text-slate-400 leading-relaxed">
                {project.description}
              </p>

              <span
                className="inline-flex items-center justify-center mt-8 border border-slate-700 px-5 py-3 rounded-2xl text-sm font-semibold text-slate-200 group-hover:bg-slate-800 transition"
              >
                View Case Study
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
