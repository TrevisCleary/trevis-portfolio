import {
  Activity,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  LockKeyhole,
  MessageSquareText,
  MonitorPlay,
  ShieldCheck,
  Workflow,
  X,
  ZoomIn
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function DischargeTracker() {
  const [selectedImage, setSelectedImage] = useState(null);

  const technologies = [
    "React",
    "Vite",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Microsoft Entra ID",
    "MSAL",
    "Power Automate"
  ];

  const features = [
    {
      icon: <Workflow size={24} />,
      title: "Role-Based Review Workflow",
      description:
        "Facility, regional, VP, CNO, and admin users see actions that match their workflow responsibility."
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Discharge Review Queue",
      description:
        "Folder-style tabs, filters, sorting, status chips, deleted record recovery, and facility-scoped visibility."
    },
    {
      icon: <MessageSquareText size={24} />,
      title: "Comments And Update Log",
      description:
        "Chat-style user comments are separated from system update history for cleaner collaboration and audit review."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics Dashboard",
      description:
        "Monthly analytics include clickable metrics, supporting record tables, CSV export, thresholds, and trend context."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Admin Portal",
      description:
        "Administrative tools manage users, facilities, release notes, data sync, analytics thresholds, and demo reset."
    },
    {
      icon: <MonitorPlay size={24} />,
      title: "Demo Sandbox",
      description:
        "A launchable fictional-data environment supports portfolio walkthroughs and safe experimentation without production writes."
    }
  ];

  const stack = [
    {
      icon: <Activity size={24} />,
      name: "React + Vite",
      detail: "Responsive application shell, record workflows, analytics views, admin screens, and demo launch experience."
    },
    {
      icon: <Database size={24} />,
      name: "PostgreSQL",
      detail: "Durable storage for discharge records, comments, users, facilities, audit events, thresholds, and release notes."
    },
    {
      icon: <GitBranch size={24} />,
      name: "Express API",
      detail: "Server endpoints for bootstrap, workflow mutations, admin management, data reloads, audit, and support."
    },
    {
      icon: <LockKeyhole size={24} />,
      name: "Microsoft Entra",
      detail: "MSAL-based authentication with API scopes and role-aware application access."
    },
    {
      icon: <Download size={24} />,
      name: "SharePoint Migration",
      detail: "CSV import and reload tooling translates legacy SharePoint list extracts into normalized database records."
    },
    {
      icon: <MessageSquareText size={24} />,
      name: "Power Automate",
      detail: "HTTP-triggered notification flow routes support, demo, developer, and production failure messages."
    }
  ];

  const gallery = [
    {
      image: "/images/discharge-tracker/current/01-login-demo-launch.png",
      caption: "Login and demo launch",
      description:
        "Production users authenticate through Microsoft Entra, while portfolio viewers can launch a fictional sandbox."
    },
    {
      image: "/images/discharge-tracker/current/02-home-review-queue.png",
      caption: "Home review queue",
      description:
        "A role-aware discharge list with review tabs, lock status, record chips, and facility-scoped visibility.",
      className: "md:col-span-2"
    },
    {
      image: "/images/discharge-tracker/current/03-home-filter-sort.png",
      caption: "Filter controls",
      description:
        "Users can filter by resident, MRN, facility, discharge type, and saved preferences."
    },
    {
      image: "/images/discharge-tracker/current/04-discharge-record-detail.png",
      caption: "Discharge record detail",
      description:
        "The record view combines discharge details, review status, facility review, regional analysis, and comments.",
      className: "md:col-span-2"
    },
    {
      image: "/images/discharge-tracker/current/05-facility-review-edit.png",
      caption: "Facility review edit state",
      description:
        "Context-aware fields, required comment validation, date-time inputs, and binary selections support facility review."
    },
    {
      image: "/images/discharge-tracker/current/06-regional-vp-review.png",
      caption: "Regional VP review",
      description:
        "Regional VP users can determine avoidability, optionally lock the record, and add final comments."
    },
    {
      image: "/images/discharge-tracker/current/07-user-comments-update-log.png",
      caption: "User comments and update log",
      description:
        "Conversation notes and system updates are separated into clean, reviewable streams."
    },
    {
      image: "/images/discharge-tracker/current/08-analytics-dashboard.png",
      caption: "Analytics dashboard",
      description:
        "Monthly analytics are grouped by outcome, workflow, operational, and clinical context.",
      className: "md:col-span-2"
    },
    {
      image: "/images/discharge-tracker/current/09-analytics-drilldown.png",
      caption: "Metric drilldown",
      description:
        "Every metric opens a supporting data table with export to CSV for Excel analysis."
    },
    {
      image: "/images/discharge-tracker/current/10-admin-portal.png",
      caption: "Admin portal",
      description:
        "Administrators can manage users, facilities, release notes, thresholds, and data sync."
    },
    {
      image: "/images/discharge-tracker/current/11-demo-admin-sandbox.png",
      caption: "Demo admin sandbox",
      description:
        "Demo admin tools are functional but isolated from production data."
    },
    {
      image: "/images/discharge-tracker/current/12-mobile-record-layout.png",
      caption: "Mobile record layout",
      description:
        "The record workflow adapts to mobile with condensed headers and collapsible sections."
    }
  ];

  const impact = [
    {
      metric: "Full Stack",
      label: "Modernization",
      description:
        "Rebuilt a Power Apps workflow into an independent React, Express, and PostgreSQL application."
    },
    {
      metric: "Role Aware",
      label: "Workflow",
      description:
        "Permission-aware screens guide facility, regional, executive, and admin users through the correct review steps."
    },
    {
      metric: "Traceable",
      label: "Analytics",
      description:
        "Analytics can be drilled into the exact records behind each metric, reducing black-box reporting."
    },
    {
      metric: "Safe Demo",
      label: "Portfolio Mode",
      description:
        "A fictional-data sandbox allows screenshots, demos, and testing without exposing or changing production data."
    }
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
        <title>DC Tracker | Trevis Cleary</title>
        <meta
          name="description"
          content="Modern discharge review application with React, Express, PostgreSQL, Microsoft Entra authentication, analytics, and a demo sandbox."
        />
        <meta property="og:title" content="DC Tracker | Trevis Cleary" />
        <meta
          property="og:description"
          content="Role-based discharge review, analytics, admin tooling, and demo sandbox built with React, Express, and PostgreSQL."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70 px-6 py-12 md:px-10 md:py-16 lg:px-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.14),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.94),rgba(2,6,23,0.78))]" />

        <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-lime-300/80 text-sm mb-6">
              Healthcare Workflow Case Study
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
              DC Tracker
            </h1>

            <p className="mt-6 text-lg md:text-2xl text-slate-300 leading-relaxed max-w-4xl">
              A role-based discharge review application for facility workflow,
              regional oversight, analytics, and administrative control.
            </p>

            <p className="mt-7 text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl">
              DC Tracker began as a Power Apps solution and was converted into
              a standalone application to remove SharePoint list threshold
              constraints, reduce reliance on Dataverse, and create more room
              for custom workflow, analytics, routing, and interface design
              outside the Power Apps framework.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="bg-slate-900/80 border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-300 shadow-sm shadow-black/20"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <motion.button
            type="button"
            onClick={() => setSelectedImage(gallery[1])}
            whileHover={{ y: -5 }}
            className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-3 text-left shadow-2xl shadow-black/20"
          >
            <img
              src="/images/discharge-tracker/current/02-home-review-queue.png"
              alt="DC Tracker home review queue"
              className="rounded-2xl border border-slate-800"
            />
            <div className="flex items-center justify-between gap-4 px-3 py-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                  Featured Screen
                </p>
                <p className="mt-1 font-semibold text-slate-200">
                  Role-aware discharge review queue
                </p>
              </div>
              <ZoomIn className="text-slate-400 group-hover:text-white transition" size={20} />
            </div>
          </motion.button>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
              Short Description
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Modernizing discharge review from low-code workflow to owned application platform.
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
            <p className="text-slate-300 text-lg leading-relaxed">
              DC Tracker gives healthcare teams a focused workspace for
              reviewing resident discharges, documenting required clinical and
              operational context, tracking review progression, managing
              comments, and analyzing discharge trends over time.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
            <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
              Modernization Story
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              From Power Apps prototype to owned application platform.
            </h2>

            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              The first version proved the business workflow inside Power Apps,
              using Microsoft list-based data sources and familiar low-code
              patterns to validate the discharge review process. As the workflow
              matured, the limitations became clearer: SharePoint list
              thresholds, data-model constraints, environment coupling, and the
              difficulty of designing highly customized review, analytics, and
              administration experiences.
            </p>

            <p className="mt-5 text-slate-400 text-lg leading-relaxed">
              Rebuilding DC Tracker as a React, Express, and PostgreSQL
              application preserved the operational workflow while moving the
              system into a more flexible architecture. The converted version
              supports richer routing, better auditability, direct database
              ownership, custom analytics, a production-safe demo sandbox, and
              UI patterns that are not limited by the Power Apps canvas model.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Avoids SharePoint list threshold pressure as data grows",
              "Reduces dependency on Dataverse-specific app patterns",
              "Enables custom analytics with drilldown and CSV export",
              "Supports cleaner routing, deep links, and record-level URLs",
              "Creates a sandbox demo that is isolated from production",
              "Gives full control over layout, validation, workflow states, and admin tools"
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex gap-4"
              >
                <CheckCircle2 className="text-lime-300 shrink-0" size={22} />
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            Key Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Built around the real review workflow.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              whileHover={{ y: -5 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-slate-600 transition"
            >
              <div className="text-lime-300 mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed mt-4">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            Workflow Screenshots
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            End-to-end application walkthrough.
          </h2>
        </div>

        <div className="grid auto-rows-[280px] md:auto-rows-[320px] lg:auto-rows-[360px] md:grid-cols-2 xl:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <motion.figure
              key={item.image}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl ${item.className || ""}`}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(item)}
                className="absolute inset-0 z-10 text-left"
                aria-label={`View screenshot: ${item.caption}`}
              />

              <div className="h-full w-full bg-slate-950 p-3 md:p-4">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="h-full w-full rounded-2xl object-contain transition duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>

              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 pt-16">
                <div className="rounded-2xl border border-white/10 bg-slate-950/75 px-5 py-4 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm md:text-base font-semibold text-white">
                        {item.caption}
                      </p>
                      <p className="text-xs text-slate-400 mt-2">
                        Click to view full image
                      </p>
                    </div>
                    <ZoomIn className="mt-0.5 shrink-0 text-slate-300" size={18} />
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            Technical Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Full-stack implementation with identity, data, analytics, and automation.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {stack.map((item) => (
            <div
              key={item.name}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7"
            >
              <div className="text-lime-300 mb-5">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-slate-500 leading-relaxed mt-3 text-sm">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            Project Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-4xl">
            Better ownership, clearer workflow, and safer demos.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {impact.map((item) => (
            <article
              key={item.metric}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7"
            >
              <p className="text-2xl font-bold">{item.metric}</p>
              <p className="text-lime-300 text-sm mt-1">{item.label}</p>
              <p className="text-slate-400 leading-relaxed mt-5">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </motion.section>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.caption}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="max-h-[92vh] w-full max-w-7xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl shadow-black"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6 border-b border-slate-800 p-5 md:p-6">
              <div>
                <p className="uppercase tracking-[0.25em] text-slate-500 text-xs mb-2">
                  Workflow Screenshot
                </p>
                <h3 className="text-xl md:text-2xl font-semibold">
                  {selectedImage.caption}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="rounded-2xl border border-slate-800 p-3 text-slate-300 hover:bg-slate-900 transition"
                aria-label="Close screenshot viewer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid lg:grid-cols-[1fr_340px]">
              <div className="max-h-[68vh] overflow-auto bg-black p-3 md:p-5">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.caption}
                  className="mx-auto h-auto w-full max-w-none rounded-2xl object-contain"
                />
              </div>

              <aside className="border-t border-slate-800 p-6 lg:border-l lg:border-t-0">
                <p className="text-slate-300 leading-relaxed">
                  {selectedImage.description}
                </p>

                <a
                  href={selectedImage.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-900 transition"
                >
                  Open full image
                  <ExternalLink size={16} />
                </a>
              </aside>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}

export default DischargeTracker;
