import {
  Server,
  Workflow,
  ShieldCheck,
  Database,
  ChartNoAxesCombined,
  Network
} from "lucide-react";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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

  const projects = [
    {
      title: "Discharge Tracker",
      description:
        "Multi-facility discharge management platform built with Power Apps, SharePoint, and automation workflows."
    },
    {
      title: "M365 Automation",
      description:
        "Automated onboarding, offboarding, and provisioning workflows using PowerShell and Microsoft Graph."
    },
    {
      title: "Infrastructure Modernization",
      description:
        "Enterprise networking and operational modernization initiatives across healthcare facilities."
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Trevis Cleary | Technical Leadership & Automation</title>
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center px-6 py-36"
      >
        <p className="uppercase tracking-[0.3em] text-slate-400 text-sm mb-6">
          Technical Leadership • Automation • Infrastructure
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-6xl leading-tight">
          Building modern healthcare technology and operational systems.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
          Vice President of Technical Services and Analytics focused on
          infrastructure modernization, automation engineering,
          operational technology, and scalable systems strategy.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <Link
            to="/projects"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
          >
            View Projects
          </Link>

          <Link
            to="/resume"
            className="border border-slate-700 px-8 py-4 rounded-2xl hover:bg-slate-900 transition"
          >
            Resume
          </Link>
        </div>
      </motion.section>

      <section className="px-8 md:px-16 py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Core Expertise
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition"
              >
                <div className="mb-6 text-slate-300">
                  {skill.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {skill.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<section className="px-8 md:px-16 py-24 border-t border-slate-900">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    <div>
      <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-6">
        About
      </p>

      <h2 className="text-5xl font-bold leading-tight">
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
      <section className="px-8 md:px-16 py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold">
              Featured Projects
            </h2>

            <Link
              to="/projects"
              className="text-slate-400 hover:text-white transition"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<footer className="border-t border-slate-900 px-8 py-12">
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
    </div>
  );
}

export default Home;
