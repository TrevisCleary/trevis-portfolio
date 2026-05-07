function Projects() {
  const projects = [
    {
      title: "Discharge Tracker",
      description:
        "Multi-facility discharge management platform built with Power Apps, SharePoint, and automation workflows."
    },
    {
      title: "M365 Provisioning Automation",
      description:
        "Automated onboarding and offboarding workflows using PowerShell and Microsoft Graph."
    },
    {
      title: "Infrastructure Modernization",
      description:
        "Healthcare infrastructure modernization initiative focused on networking, security, and scalability."
    }
  ];

  return (
    <div className="px-10 py-20">
      <h1 className="text-5xl font-bold mb-12">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-600 transition"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {project.title}
            </h2>

            <p className="text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;