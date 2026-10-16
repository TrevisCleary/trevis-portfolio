import {
  Server,
  Workflow,
  ShieldCheck,
  Database,
  ChartNoAxesCombined,
  Network,
  ArrowUpRight
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { featuredProjects } from "../data/featuredProjects";

function Home() {
  const skills = [
    {
      icon: <Workflow size={32} />,
      title: "Automation",
      description:
        "Power Platform, PowerShell, Microsoft Graph, workflow engineering"
    },
    {
      icon: <Server size={32} />,
      title: "Infrastructure",
      description:
        "Enterprise systems, virtualization, cloud platforms, networking"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Security",
      description:
        "Governance, identity management, access control, compliance"
    },
    {
      icon: <Database size={32} />,
      title: "Data & Analytics",
      description:
        "Power BI, reporting pipelines, operational analytics"
    },
    {
      icon: <ChartNoAxesCombined size={32} />,
      title: "Leadership",
      description:
        "Strategic planning, vendor management, operational modernization"
    },
    {
      icon: <Network size={32} />,
      title: "Systems Strategy",
      description:
        "Scalable healthcare technology and operational architecture"
    }
  ];

  return (
    <main>
      <Helmet>
        <title>Trevis Cleary | Technical Leadership & Automation</title>
      </Helmet>

      <section
        className="px-6 md:px-10 py-14 md:py-20"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.3fr_0.85fr] gap-12 lg:gap-20 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold tracking-tight max-w-2xl leading-[1.12] text-balance">
              Building modern healthcare technology and operational systems.
            </h1>

            <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
              Vice President of Technical Services and Analytics focused on
              infrastructure modernization, automation engineering,
              operational technology, and scalable systems strategy.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 bg-accent text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors"
              >
                View Projects
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>

              <Link
                to="/resume"
                className="border border-slate-700 px-6 py-3 rounded-lg text-slate-200 hover:bg-slate-900 transition-colors"
              >
                Resume
              </Link>
            </div>
          </div>

          <div
            className="w-full max-w-sm mx-auto lg:mr-0"
          >
              <img
                src="/images/corp-photo-trevis.png"
                alt="Trevis Cleary"
                width={1122}
                height={1402}
                fetchPriority="high"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 md:py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight mb-8">
            Core Expertise
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6"
              >
                <div className="mb-4 text-accent" aria-hidden="true">
                  {skill.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {skill.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="px-6 md:px-10 py-14 md:py-16 border-t border-slate-800">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
        Bridging technical leadership and operational strategy.
      </h2>
    </div>

    <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
      <p>
        I specialize in building scalable operational technology,
        infrastructure modernization initiatives, automation platforms,
        and analytics systems within healthcare environments.
      </p>

      <p>
        My background combines executive leadership with hands-on
        technical implementation across infrastructure, cloud systems,
        automation engineering, reporting, and workflow modernization.
      </p>

      <p>
        Current areas of focus include operational automation,
        healthcare technology strategy, identity lifecycle management,
        analytics platforms, and modern web technologies.
      </p>
    </div>
  </div>
</section>
      <section className="px-6 md:px-10 py-14 md:py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="text-3xl font-semibold tracking-tight">
              Featured Projects
            </h2>

            <Link
              to="/projects"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                to={project.href}
                className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-accent/60 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4 group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-accent">Read case study <ArrowUpRight size={16} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

<footer className="border-t border-slate-800 px-6 md:px-10 py-10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
      <h3 className="text-xl font-semibold">
        Trevis Cleary
      </h3>

      <p className="text-slate-500 mt-2">
        Technical Leadership • Automation • Infrastructure
      </p>
    </div>

    <div className="text-slate-500 text-sm">
      © 2026 All Rights Reserved
    </div>
  </div>
</footer>
    </main>
  );
}

export default Home;
