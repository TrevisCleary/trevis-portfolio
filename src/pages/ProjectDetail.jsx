import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { slug } = useParams();

  const projects = {
    "discharge-tracker": {
      title: "Discharge Tracker",
      description:
        "Multi-facility discharge management platform built using Power Apps, SharePoint, and Power Automate.",
      technologies: [
        "Power Apps",
        "SharePoint",
        "Power Automate",
        "PowerShell"
      ],
      overview:
        "Designed and implemented a scalable discharge workflow platform supporting operational visibility, multi-role collaboration, and discharge analytics across healthcare facilities.",
      highlights: [
        "Multi-facility operational workflows",
        "Role-based views and filtering",
        "Automated notifications and task routing",
        "Real-time analytics and reporting",
        "Workflow standardization"
      ]
    },

    "m365-automation": {
      title: "M365 Automation",
      description:
        "Automated onboarding and offboarding workflows using Microsoft Graph and PowerShell.",
      technologies: [
        "PowerShell",
        "Microsoft Graph",
        "Azure Automation",
        "Exchange Online"
      ],
      overview:
        "Built automated identity lifecycle workflows reducing manual administrative overhead and improving consistency across onboarding and offboarding operations.",
      highlights: [
        "Automated provisioning",
        "Group management",
        "MFA reset automation",
        "Exchange integration",
        "Audit logging"
      ]
    },

    "infrastructure-modernization": {
      title: "Infrastructure Modernization",
      description:
        "Healthcare infrastructure modernization initiatives focused on scalability, networking, and security.",
      technologies: [
        "Cisco Meraki",
        "Azure",
        "Networking",
        "Security Governance"
      ],
      overview:
        "Led modernization efforts across healthcare environments focused on network scalability, operational stability, and infrastructure standardization.",
      highlights: [
        "Network redesign",
        "WiFi optimization",
        "Security remediation",
        "Infrastructure standardization",
        "Operational resiliency"
      ]
    }
  };

  const project = projects[slug];

  if (!project) {
    return (
      <div className="px-10 py-20">
        <h1 className="text-5xl font-bold">
          Project Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-6">
        Featured Project
      </p>

      <h1 className="text-6xl font-bold mb-8">
        {project.title}
      </h1>

      <p className="text-xl text-slate-400 leading-relaxed max-w-4xl">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-full text-sm text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8">
          Overview
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed">
          {project.overview}
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8">
          Key Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {project.highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <p className="text-slate-300">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;