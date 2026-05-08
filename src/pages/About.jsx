import {
  BarChart3,
  CircuitBoard,
  Database,
  GitBranch,
  HeartPulse,
  Network,
  Plane,
  Server,
  Workflow,
  Wrench
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function About() {
  const focusAreas = [
    {
      icon: <Workflow size={24} />,
      title: "Automation Engineering",
      description:
        "Designing practical automation that removes manual effort and improves reliability."
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Healthcare Technology",
      description:
        "Building systems that reflect the pace, constraints, and accountability of healthcare operations."
    },
    {
      icon: <Database size={24} />,
      title: "Data Architecture",
      description:
        "Structuring operational data so it can support workflows, reporting, and decision-making."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Operational Analytics",
      description:
        "Turning activity, performance, and workflow data into useful enterprise visibility."
    },
    {
      icon: <Network size={24} />,
      title: "Infrastructure Strategy",
      description:
        "Modernizing infrastructure with an emphasis on stability, scalability, and supportability."
    },
    {
      icon: <GitBranch size={24} />,
      title: "Workflow Optimization",
      description:
        "Improving the handoffs, triggers, and process paths that shape daily operations."
    },
    {
      icon: <CircuitBoard size={24} />,
      title: "Power Platform",
      description:
        "Using Power Apps, Power Automate, Dataverse, and Microsoft 365 to deliver usable systems quickly."
    },
    {
      icon: <Server size={24} />,
      title: "Enterprise Systems",
      description:
        "Connecting platforms, permissions, reporting, and operational requirements into durable systems."
    }
  ];

  const interests = [
    "Electronics",
    "Technical projects",
    "Outdoor and property work",
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
        <title>About | Trevis Cleary</title>
        <meta
          name="description"
          content="About Trevis Cleary, a technical executive focused on healthcare technology, automation, analytics, infrastructure modernization, and enterprise systems leadership."
        />
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-16 items-end"
      >
        <div>
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-6">
            About
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
            I bridge clinical reality and technical systems.
          </h1>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            My career has moved through finance technology, direct patient care,
            clinical informatics, enterprise IT, automation, analytics, and
            infrastructure leadership. That path gives me a practical view of
            both sides of healthcare technology: the people doing the work and
            the systems that either support them or slow them down.
          </p>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
              Professional Background
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              A career shaped by technology, patient care, and the space between
              them.
            </h2>
          </div>

          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              I started my career in the technical field shortly after college,
              working under a finance company and building the early foundation
              of how I think about systems, support, and operational reliability.
              After a layoff, I took a different path and transitioned into
              nursing, spending several years in direct patient care.
            </p>

            <p>
              That shift changed how I understood technology. In clinical
              environments, systems are not abstract. They affect documentation,
              communication, handoffs, compliance, workload, and the amount of
              time clinicians can spend focused on patients. Working directly in
              patient care gave me a grounded understanding of what healthcare
              teams need from their tools.
            </p>

            <p>
              I later used my technical background to move back into IT through
              healthcare, first through informatics and operational systems, then
              into automation, infrastructure modernization, analytics, and
              enterprise technology leadership. That dual experience lets me
              translate between clinical needs and technical solutions with a
              practical understanding of both domains.
            </p>

            <p>
              I am most effective in environments where clinical leaders, IT
              teams, executives, vendors, analysts, and frontline users all need
              the same systems to work well. My role is often to create shared
              understanding: what the operation needs, what the technology can
              do, and how to build something reliable enough to support both.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
            <div>
              <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
                Philosophy
              </p>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Technology should reduce friction, not add another layer of
                work.
              </h2>
            </div>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I approach technology as an operational enablement discipline.
                The goal is not to add more tools for their own sake, but to
                build systems that clarify work, standardize important
                processes, and make the right information available at the right
                time.
              </p>

              <p>
                The most rewarding challenges for me are workflow modernization
                problems: reducing labor-intensive processes, removing duplicate
                entry, improving handoffs, and giving clinicians more room to
                focus on patients instead of administrative friction.
              </p>

              <p>
                That means favoring practical automation, clean data structures,
                durable integrations, and workflows that can scale across teams
                and facilities. Good systems should make accountability easier
                to see, give leadership a more accurate view of what is
                happening, and support the people closest to the work.
              </p>

              <p>
                My leadership style is rooted in translation. I work to connect
                the clinical language of workflow, urgency, compliance, and
                patient care with the technical language of architecture,
                permissions, automation, data, and systems integration.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            Areas of Focus
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Systems, automation, data, and operational execution.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -5 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-slate-600 transition"
            >
              <div className="h-12 w-12 rounded-2xl border border-slate-700 bg-slate-950 flex items-center justify-center text-slate-300 mb-7">
                {area.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {area.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mt-4">
                {area.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
            <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
              Personal Interests
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              The same curiosity shows up outside of work.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mt-6">
              I enjoy hands-on technical work, building and repairing things,
              and spending time in places where systems are physical as much as
              digital.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {interests.map((interest) => (
              <div
                key={interest}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-xl border border-slate-700 bg-slate-950 flex items-center justify-center text-slate-300">
                  {interest === "Family travel" ? (
                    <Plane size={20} />
                  ) : (
                    <Wrench size={20} />
                  )}
                </div>

                <p className="text-slate-300 font-medium">
                  {interest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="border-t border-slate-800 pt-12">
          <p className="text-2xl md:text-3xl text-slate-300 leading-relaxed max-w-5xl">
            I care about building systems that make healthcare operations easier
            to understand, easier to manage, and more supportive of the people
            delivering care. The best technology does not pull attention away
            from patients; it clears a better path back to them.
          </p>
        </div>
      </motion.section>
    </main>
  );
}

export default About;
