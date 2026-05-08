import { Download } from "lucide-react";

function Resume() {
  const experience = [
    {
      title: "Vice President of Technical Services and Analytics",
      company: "Infinity Healthcare Consulting",
      timeframe: "2025 – Present",
      description:
        "Leading infrastructure modernization, operational technology strategy, automation engineering, analytics initiatives, and enterprise systems management across healthcare environments."
    },
    {
      title: "Director of Information Technology",
      company: "Infinity Healthcare Consulting",
      timeframe: "2022 – 2025",
      description:
        "Directed infrastructure operations, systems administration, vendor management, cybersecurity initiatives, and multi-site technology strategy."
    },
    {
      title: "Director of Business Development",
      company: "Infinity Healthcare Consulting",
      timeframe: "2021 – 2022",
      description:
        "Led operational technology alignment, analytics initiatives, and strategic growth efforts across healthcare consulting operations."
    }
  ];

  const skills = [
    "Power Platform",
    "PowerShell",
    "Microsoft Graph",
    "Azure",
    "SharePoint",
    "Power BI",
    "Infrastructure Strategy",
    "Automation Engineering",
    "Networking",
    "Security Governance",
    "Operational Analytics",
    "Healthcare IT"
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 py-24">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            Resume
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Technical leadership with operational focus.
          </h1>
        </div>

<a
  href="/Resume_Trevis_Cleary.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
>
  <Download size={20} />

  Download Resume
</a>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10">
          Executive Summary
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
          <p className="text-slate-400 text-lg leading-relaxed">
            Technology executive specializing in healthcare infrastructure,
            operational systems, automation engineering, analytics,
            and scalable technology strategy. Experienced leading
            modernization initiatives across enterprise environments
            while maintaining hands-on technical implementation capabilities.
          </p>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10">
          Core Competencies
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-slate-900 border border-slate-800 px-5 py-3 rounded-full text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-12">
          Professional Experience
        </h2>

        <div className="space-y-10">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {job.title}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    {job.company}
                  </p>
                </div>

                <div className="text-slate-500">
                  {job.timeframe}
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mt-8 text-lg">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;