import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Resume() {
  const capabilities = [
    "Enterprise Program Leadership (80+ healthcare facilities)",
    "Data Architecture, Transformation, and Reporting",
    "Power Platform (Power Apps, Power Automate)",
    "Automation (PowerShell, APIs, Microsoft Graph)",
    "PointClickCare Optimization and Integration",
    "Cross-Functional Leadership (Clinical, IT, Executive)",
    "Vendor and System Integration Management"
  ];

  const experience = [
    {
      company: "Infinity Healthcare Consulting",
      location: "Remote",
      timeframe: "Aug 2019 - Present",
      roles: [
        {
          title: "Vice President, Technical Services and Data Analytics",
          timeframe: "Jan 2025 - Present"
        },
        {
          title: "Director, Information Technology",
          timeframe: "Aug 2022 - Jan 2025"
        },
        {
          title: "Director, Business Development",
          timeframe: "Feb 2021 - Aug 2022"
        },
        {
          title: "Regional Manager, Business Development",
          timeframe: "May 2019 - Feb 2021"
        }
      ],
      bullets: [
        "Lead enterprise IT infrastructure budgeting and strategic cost optimization initiatives resulting in double-digit annualized savings.",
        "Lead enterprise technology and data initiatives across 80+ healthcare facilities.",
        "Architect centralized data pipelines for scalable clinical, financial, and operational reporting.",
        "Deliver Power Platform and automation solutions using PowerShell, APIs, and Microsoft Graph to improve efficiency and reliability.",
        "Establish data governance and reporting standards across enterprise systems.",
        "Serve as PointClickCare SME for optimization, integration, and reporting.",
        "Translate business requirements into scalable technical solutions.",
        "Manage vendor relationships and system integrations across platforms."
      ]
    },
    {
      company: "WellSky",
      location: "Remote",
      timeframe: "Nov 2023 - Jan 2025",
      roles: [
        {
          title: "Project Manager, Clinical Solutions",
          timeframe: "Nov 2023 - Jan 2025"
        }
      ],
      bullets: [
        "Led delivery of clinical software initiatives across enterprise clients, managing scope, timelines, and stakeholders.",
        "Built Power BI KPI dashboards with direct database integration for real-time operational visibility.",
        "Managed DevOps lifecycle including releases, deployments, and production support.",
        "Translated clinical and operational needs into scalable reporting and analytics solutions.",
        "Coordinated Agile project workflows using Jira and Azure DevOps, partnering with development, QA, and operational teams to manage sprint delivery, issue tracking, releases, and production support."
      ]
    },
    {
      company: "Experience.Care",
      location: "Remote",
      timeframe: "Jul 2021 - Jul 2022",
      roles: [
        {
          title: "Project Manager, Financial Solutions",
          timeframe: "Jul 2021 - Jul 2022"
        }
      ],
      bullets: [
        "Delivered financial application implementations across multiple healthcare clients.",
        "Coordinated cross-functional teams to ensure successful deployment and client adoption.",
        "Led data validation and reconciliation to maintain financial accuracy during transitions.",
        "Supported portfolio transition to new organization with minimal service disruption."
      ]
    },
    {
      company: "Care Centers Management",
      location: "Johnson City, TN",
      timeframe: "Feb 2021 - Jul 2021",
      roles: [
        {
          title: "Director, Clinical Informatics",
          timeframe: "Feb 2021 - Jul 2021"
        }
      ],
      bullets: [
        "Led clinical systems and reporting strategy across multiple facilities.",
        "Standardized data collection and reporting processes to improve consistency and visibility.",
        "Partnered with clinical leadership to align workflows with operational and regulatory needs.",
        "Improved documentation and reporting to support survey readiness and performance tracking."
      ]
    },
    {
      company: "The Waters of Johnson City",
      location: "Johnson City, TN",
      timeframe: "May 2017 - May 2019",
      roles: [
        {
          title: "Clinical Informatics & Health Information Coordinator",
          timeframe: "May 2017 - May 2019"
        }
      ],
      bullets: [
        "Supported EHR implementation and optimization, improving clinical documentation accuracy and workflow efficiency.",
        "Acted as liaison between nursing staff and IT, translating clinical needs into system improvements and training initiatives.",
        "Provided frontline clinical support while driving adoption of technology solutions to enhance patient care and compliance."
      ]
    }
  ];

  const education = [
    "B.S., Computer Science - East Tennessee State University, July 2016",
    "Nursing - Tennessee College of Applied Technology, December 2010",
    "A.S., Computer Science & Finance - Northeast State Community College, May 2004",
    "High School Diploma - Dobyns-Bennett High School, May 2002"
  ];

  const additionalExperience = [
    "Clinical Nursing Experience (Floor Nurse; ventilator care and high-acuity patient support)",
    "IT Support & Infrastructure (Help Desk support, hardware deployment, and facility technology assessments)"
  ];

  const interests = [
    "Automation and system design",
    "Electronics and technical projects",
    "Outdoor and property work in Southwestern North Carolina",
    "Family travel"
  ];

  const sectionAnimation = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.45 },
    viewport: { once: true, margin: "-80px" }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
      <Helmet>
        <title>Resume | Trevis Cleary</title>
      </Helmet>

      <motion.header
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
      >
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-5">
            Executive Resume
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Trevis Cleary
          </h1>

          <p className="mt-5 text-xl text-slate-400">
            Tennessee, United States
          </p>
        </div>

        <a
          href="/Resume_Trevis_Cleary.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
        >
          <Download size={20} />
          Download Resume
        </a>
      </motion.header>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="grid lg:grid-cols-[0.8fr_1.4fr] gap-10 lg:gap-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
              Professional Summary
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Enterprise healthcare technology leadership.
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
            <p className="text-slate-300 text-lg leading-relaxed">
              Vice President of Technical Services and Data Analytics with 10+
              years leading enterprise healthcare technology initiatives across
              80+ facilities. Subject Matter Expert in PointClickCare with
              experience in data architecture, automation, and system
              integration. Proven ability to deliver scalable reporting and
              workflow solutions supporting clinical and operational
              performance.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
              Core Capabilities
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Strategic, technical, and operational strengths.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {capabilities.map((capability) => (
            <motion.div
              key={capability}
              whileHover={{ y: -4 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl px-5 py-5 text-slate-300 leading-relaxed hover:border-slate-600 transition"
            >
              {capability}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="mt-20 md:mt-24">
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            Experience
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Healthcare technology and analytics leadership.
          </h2>
        </div>

        <div className="space-y-8">
          {experience.map((employer, index) => (
            <motion.article
              key={employer.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7 md:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {employer.company}
                  </h3>

                  <p className="text-slate-500 mt-2">
                    {employer.location}
                  </p>
                </div>

                <p className="text-slate-400 font-medium">
                  {employer.timeframe}
                </p>
              </div>

              <div className="mt-8 grid gap-4">
                {employer.roles.map((role) => (
                  <div
                    key={`${employer.company}-${role.title}`}
                    className="border border-slate-800 rounded-2xl px-5 py-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h4 className="text-lg md:text-xl font-semibold">
                        {role.title}
                      </h4>

                      <p className="text-slate-500 text-sm md:text-base">
                        {role.timeframe}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <ul className="mt-8 space-y-4 text-slate-400 leading-relaxed">
                {employer.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <div className="mt-20 md:mt-24 grid lg:grid-cols-2 gap-8">
        <motion.section
          {...sectionAnimation}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-7 md:p-10"
        >
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            Education
          </p>

          <h2 className="text-3xl font-bold mb-8">
            Academic Background
          </h2>

          <ul className="space-y-4 text-slate-400 leading-relaxed">
            {education.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          {...sectionAnimation}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-7 md:p-10"
        >
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            Additional Experience
          </p>

          <h2 className="text-3xl font-bold mb-8">
            Clinical and Technical Foundations
          </h2>

          <ul className="space-y-4 text-slate-400 leading-relaxed">
            {additionalExperience.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>

      <motion.section {...sectionAnimation} className="mt-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-7 md:p-10">
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            Interests
          </p>

          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="border border-slate-800 rounded-full px-5 py-3 text-slate-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default Resume;
