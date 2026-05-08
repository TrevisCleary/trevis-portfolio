import {
  Activity,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Database,
  ExternalLink,
  FileSearch,
  Gauge,
  GitBranch,
  Layers,
  LineChart,
  LockKeyhole,
  Network,
  Power,
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
    "Power Apps",
    "Dataverse",
    "SharePoint",
    "Power Automate",
    "PowerShell",
    "Microsoft Graph",
    "Tenant User Sync",
    "Permission Management"
  ];

  const features = [
    {
      icon: <ClipboardList size={24} />,
      title: "Discharge Workflow Management",
      description:
        "Centralized discharge tracking across facility, regional, and enterprise operational views."
    },
    {
      icon: <Activity size={24} />,
      title: "Clinical Triggers",
      description:
        "Structured triggers surface clinical and operational signals that require timely follow-up."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Metrics Reporting",
      description:
        "Reporting views support trend analysis, performance review, and leadership visibility."
    },
    {
      icon: <Network size={24} />,
      title: "Regional Analysis",
      description:
        "Multi-facility filtering helps regional leaders compare activity, bottlenecks, and outcomes."
    },
    {
      icon: <FileSearch size={24} />,
      title: "Audit Tracking",
      description:
        "Operational audit trails improve accountability and make workflow history easier to review."
    },
    {
      icon: <Workflow size={24} />,
      title: "Automated Routing",
      description:
        "Power Automate workflows coordinate notifications, status changes, and recurring process tasks."
    },
    {
      icon: <LockKeyhole size={24} />,
      title: "Tenant User & Permission Sync",
      description:
        "Microsoft Graph and automation routines align tenant users, roles, and application permissions with operational access needs."
    },
    {
      icon: <Database size={24} />,
      title: "External Data Ingest",
      description:
        "Automated ingest patterns support data movement from external systems into structured reporting and workflow layers."
    }
  ];

  const stack = [
    {
      icon: <Power size={24} />,
      name: "Power Apps",
      detail: "Responsive operational interface for facility and regional users."
    },
    {
      icon: <Database size={24} />,
      name: "Dataverse",
      detail: "Structured enterprise data layer for workflow entities, reporting relationships, and governed operational records."
    },
    {
      icon: <Layers size={24} />,
      name: "SharePoint",
      detail: "Supporting document, list, and collaboration layer for operational workflow artifacts."
    },
    {
      icon: <GitBranch size={24} />,
      name: "Power Automate",
      detail: "Workflow orchestration for alerts, process steps, system ingest, and data movement."
    },
    {
      icon: <Workflow size={24} />,
      name: "PowerShell",
      detail: "Administrative automation for repeatable support, scheduled maintenance, and external system processing."
    },
    {
      icon: <LockKeyhole size={24} />,
      name: "Microsoft Graph",
      detail: "Microsoft 365 integration for tenant user synchronization, permission management, and identity-aware automation."
    },
    {
      icon: <BarChart3 size={24} />,
      name: "External Reporting",
      detail: "Reporting-ready data structures for operational analytics, regional views, and enterprise visibility."
    }
  ];

  const gallery = [
    {
      image: "/images/discharge-tracker/dashboard.png",
      caption: "Enterprise discharge metrics dashboard",
      description:
        "Executive-level dashboard view summarizing discharge activity, performance indicators, and operational trends for leadership review.",
      className: "md:col-span-2 md:row-span-2"
    },
    {
      image: "/images/discharge-tracker/metrics.png",
      caption: "Operational discharge analytics",
      description:
        "Metrics-focused reporting view used to evaluate discharge volume, workflow status, and operating patterns across the platform.",
      className: ""
    },
    {
      image: "/images/discharge-tracker/regional-analysis.png",
      caption: "Regional clinical review workflow",
      description:
        "Regional analysis screen designed to help clinical and operational leaders review discharge activity across assigned facilities.",
      className: ""
    },
    {
      image: "/images/discharge-tracker/clinical-trigger.png",
      caption: "Clinical trigger categorization",
      description:
        "Clinical trigger view supporting structured categorization, review, and follow-up for discharge-related clinical signals.",
      className: ""
    },
    {
      image: "/images/discharge-tracker/record-view.png",
      caption: "Detailed discharge workflow management",
      description:
        "Detailed record view for managing discharge status, workflow context, audit fields, and operational follow-up details.",
      className: "md:col-span-2"
    },
    {
      image: "/images/discharge-tracker/total-discharges.png",
      caption: "Multi-facility reporting visibility",
      description:
        "Multi-facility reporting screen providing visibility into discharge totals and patterns across the enterprise footprint.",
      className: ""
    }
  ];

  const impact = [
    {
      metric: "80+",
      label: "Healthcare Facilities Supported",
      title: "80+ Healthcare Facilities Supported",
      description:
        "Designed for enterprise-scale discharge visibility across a broad multi-facility healthcare environment.",
      icon: <Network size={24} />
    },
    {
      metric: "Multi-Role",
      label: "Workflow Management",
      title: "Multi-Role Workflow Management",
      description:
        "Supports coordinated workflows for facility, regional, clinical, operational, and administrative stakeholders.",
      icon: <Workflow size={24} />
    },
    {
      metric: "Centralized",
      label: "Operational Reporting",
      title: "Centralized Operational Reporting",
      description:
        "Consolidates discharge activity into structured views for daily management and leadership review.",
      icon: <BarChart3 size={24} />
    },
    {
      metric: "Enterprise",
      label: "Analytics Visibility",
      title: "Enterprise Analytics Visibility",
      description:
        "Improves access to external reporting, discharge trends, regional comparisons, and operational performance signals.",
      icon: <LineChart size={24} />
    },
    {
      metric: "Standardized",
      label: "Discharge Tracking",
      title: "Standardized Discharge Tracking",
      description:
        "Creates consistent workflow structure, status management, and discharge record handling across locations.",
      icon: <CheckCircle2 size={24} />
    },
    {
      metric: "Regional",
      label: "Oversight & Audit Tracking",
      title: "Regional Oversight & Audit Tracking",
      description:
        "Provides regional teams with review pathways, audit history, and clearer accountability for follow-up.",
      icon: <FileSearch size={24} />
    },
    {
      metric: "Tenant",
      label: "User Sync & Permissions",
      title: "Tenant User Sync & Permission Management",
      description:
        "Uses Microsoft tenant data and role-aware automation to keep application access aligned with operational responsibility.",
      icon: <LockKeyhole size={24} />
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
        <title>Discharge Tracker | Trevis Cleary</title>
        <meta
          name="description"
          content="Enterprise healthcare discharge management platform supporting operational workflows, analytics, and regional oversight across 80+ healthcare facilities."
        />
        <meta
          property="og:title"
          content="Discharge Tracker | Trevis Cleary"
        />
        <meta
          property="og:description"
          content="Enterprise healthcare discharge management platform supporting operational workflows, analytics, and regional oversight across 80+ healthcare facilities."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70 px-6 py-12 md:px-10 md:py-16 lg:px-12"
      >
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.04, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-28 h-80 w-80 rounded-full bg-slate-700/20 blur-3xl"
        />

        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.18, 0.32, 0.18], scale: [1.04, 1, 1.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-36 -left-28 h-96 w-96 rounded-full bg-cyan-950/30 blur-3xl"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.12),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,0.72))]" />

        <div className="relative grid lg:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-14 items-stretch">
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-6"
            >
              Healthcare Systems Case Study
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-5xl">
                Discharge Tracker
              </h1>

              <p className="mt-6 text-lg md:text-2xl text-slate-300 leading-relaxed max-w-4xl">
                Enterprise discharge management for clinical workflow,
                regional oversight, and operational analytics.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-7 text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl"
            >
              A production healthcare platform supporting discharge workflows,
              Dataverse-backed operational data, Microsoft tenant user sync,
              permission management, external reporting, automated system
              ingest, and analytics across 80+ healthcare facilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="bg-slate-900/80 border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-300 shadow-sm shadow-black/20"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 md:p-9 flex flex-col justify-between shadow-2xl shadow-black/20 backdrop-blur"
          >
            <div>
              <div className="h-12 w-12 rounded-2xl bg-white text-black flex items-center justify-center mb-8">
                <Gauge size={24} />
              </div>

              <p className="uppercase tracking-[0.25em] text-slate-500 text-xs mb-4">
                System Purpose
              </p>

              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Built for operational clarity at enterprise scale.
              </h2>

              <p className="mt-5 text-slate-400 leading-relaxed">
                The platform gives clinical, regional, executive, and
                administrative teams a shared view of discharge activity while
                preserving accountability through structured Dataverse records,
                tenant-aware permissions, and audit history.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {impact.slice(0, 2).map((item) => (
                <div
                  key={item.metric}
                  className="border border-slate-800 rounded-2xl bg-slate-950/50 p-5"
                >
                  <p className="text-2xl md:text-3xl font-bold">
                    {item.metric}
                  </p>

                  <p className="text-slate-500 text-sm mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
              Business Problem
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Discharge visibility was fragmented across facilities and roles.
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
            <p className="text-slate-300 text-lg leading-relaxed">
              Healthcare discharge workflows require coordination between
              clinical, facility, regional, operational, and administrative
              teams. Without a centralized platform, leaders lacked consistent
              visibility into status, triggers, reporting, permissions, external
              data feeds, and follow-up activity across a large multi-facility
              environment.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
            <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
              Solution Overview
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              A Dataverse-backed Power Platform application for daily
              operations, tenant-aware access, and leadership analytics.
            </h2>

            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              Discharge Tracker combines a Power Apps front end, Dataverse data
              model, SharePoint operational support layer, Power Automate
              workflows, and administrative automation using PowerShell and
              Microsoft Graph. The result is a practical operating system for
              discharge management that syncs tenant users, manages permissions,
              ingests data from other systems, and produces enterprise-ready
              reporting.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Role-aware operational views",
              "Tenant user sync and permission management",
              "Automated ingest from external systems",
              "Structured discharge status tracking",
              "Metrics and regional reporting",
              "Audit-ready workflow history"
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex gap-4"
              >
                <CheckCircle2 className="text-slate-300 shrink-0" size={22} />
                <p className="text-slate-300">
                  {item}
                </p>
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
            Designed for clinical operations and executive oversight.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              whileHover={{ y: -5 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-slate-600 transition"
            >
              <div className="text-slate-300 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

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
            Technology Stack
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Microsoft platform foundation with governed data, identity-aware
            automation, and reporting architecture.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
            >
              <div className="text-slate-300 mb-5">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {item.name}
              </h3>

              <p className="text-slate-500 leading-relaxed mt-3 text-sm">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
              Screenshot Gallery
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Platform Screens
            </h2>
          </div>

          <p className="text-slate-500 max-w-xl leading-relaxed">
            A focused look at the operational dashboards, clinical workflows,
            and reporting views that support discharge management across the
            platform.
          </p>
        </div>

        <div className="grid auto-rows-[280px] md:auto-rows-[320px] lg:auto-rows-[360px] md:grid-cols-2 xl:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <motion.figure
              key={item.image}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl ${item.className}`}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(item)}
                className="absolute inset-0 z-10 text-left"
                aria-label={`View full screenshot: ${item.caption}`}
              />

              <div className="h-full w-full bg-slate-950 p-3 md:p-4">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="h-full w-full rounded-2xl object-contain transition duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-5 pt-16">
                <figcaption className="rounded-2xl border border-white/10 bg-slate-950/75 px-5 py-4 backdrop-blur">
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
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 md:mt-24">
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            Operational Impact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-4xl">
            Improved visibility, workflow consistency, and reporting discipline.
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed max-w-3xl mt-5">
            The platform creates a consistent operating model for discharge
            management by combining workflow execution, tenant-aware access,
            external data ingest, audit tracking, and leadership reporting in
            one production system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {impact.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -5 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7 md:p-8 hover:border-slate-600 transition"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="h-12 w-12 rounded-2xl border border-slate-700 bg-slate-950 flex items-center justify-center text-slate-300">
                  {item.icon}
                </div>

                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-bold">
                    {item.metric}
                  </p>

                  <p className="text-slate-500 text-sm mt-1">
                    {item.label}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-8">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mt-4">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
                  Platform Screen
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
