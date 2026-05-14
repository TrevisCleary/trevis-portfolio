import {
  AlertTriangle,
  CalendarClock,
  ClipboardCheck,
  FileSpreadsheet,
  MailCheck,
  MonitorCog,
  Route,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function POCWeeklyCompliance() {
  const technologies = [
    "Power Automate",
    "Power Automate Desktop",
    "Office 365 Outlook",
    "OneDrive for Business",
    "Excel",
    "Browser Automation"
  ];

  const flowSteps = [
    {
      icon: <CalendarClock size={24} />,
      title: "Scheduled Run",
      description:
        "A weekly cloud flow starts the reporting process on a fixed cadence so compliance communication is not dependent on a manual reminder."
    },
    {
      icon: <MonitorCog size={24} />,
      title: "Desktop Report Execution",
      description:
        "An attended desktop flow signs into a clinical reporting portal, selects the required facility scope, and generates seven-day compliance extracts."
    },
    {
      icon: <FileSpreadsheet size={24} />,
      title: "Excel Data Processing",
      description:
        "Downloaded report files are opened, read, and transformed into structured HTML rows for state-level reporting."
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Threshold Highlighting",
      description:
        "Daily and grand-total percentages are evaluated against a 95 percent target, with below-target values emphasized for follow-up."
    },
    {
      icon: <MailCheck size={24} />,
      title: "State-Specific Distribution",
      description:
        "The cloud flow combines generated table content with standardized introduction and recommendation blocks before sending separate state emails."
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Failure Notification",
      description:
        "A high-importance failure path routes an alert if the final email chain fails, is skipped, or times out."
    }
  ];

  const architecture = [
    {
      label: "Trigger",
      value: "Weekly",
      detail: "Recurrence-based cloud automation"
    },
    {
      label: "Runtime",
      value: "Hybrid",
      detail: "Cloud orchestration plus attended desktop flow"
    },
    {
      label: "Output",
      value: "3 Emails",
      detail: "State-specific compliance distributions"
    },
    {
      label: "Target",
      value: "95%",
      detail: "Grand-total compliance threshold"
    }
  ];

  const outcomes = [
    "Standardized a recurring clinical compliance communication that previously depended on manual report execution and formatting.",
    "Separated state audiences while preserving a consistent message, goal, and recommended corrective actions.",
    "Used generated HTML tables to make below-target facilities and daily gaps easier to identify in the email body.",
    "Added operational failure alerting so missed automation runs could be investigated instead of silently dropping."
  ];

  const safeguards = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Sensitive Data Scrubbed",
      description:
        "Portfolio framing omits internal email addresses, tenant identifiers, machine names, facility details, and credential material."
    },
    {
      icon: <Route size={22} />,
      title: "Maintainability Notes",
      description:
        "The export exposes where selectors, download paths, and report names create brittle dependencies that should be documented or modernized."
    },
    {
      icon: <Workflow size={22} />,
      title: "Modernization Candidate",
      description:
        "The flow is a strong candidate for replacing UI automation with direct reporting APIs or a controlled data export pipeline if available."
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
        <title>Weekly Clinical Compliance Reporting Automation | Trevis Cleary</title>
        <meta
          name="description"
          content="Power Automate and Power Automate Desktop case study for weekly clinical compliance report generation, threshold highlighting, and state-specific email distribution."
        />
        <meta
          property="og:title"
          content="Weekly Clinical Compliance Reporting Automation | Trevis Cleary"
        />
        <meta
          property="og:description"
          content="Hybrid cloud and desktop automation for weekly compliance report execution, Excel processing, and state-specific distribution."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center"
      >
        <div>
          <p className="text-emerald-300 text-sm font-semibold uppercase tracking-[0.24em] mb-4">
            Power Platform Case Study
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Weekly Clinical Compliance Reporting Automation
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            A hybrid Power Automate workflow that runs a desktop reporting process, processes
            seven-day compliance extracts, builds state-specific email bodies, and routes weekly
            clinical compliance updates with failure alerting.
          </p>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-emerald-950/20">
          <img
            src="/images/poc-weekly-compliance/flow-overview.svg"
            alt="Scrubbed workflow diagram for the weekly compliance automation"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 grid md:grid-cols-4 gap-4">
        {architecture.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="text-2xl font-bold text-emerald-200 mb-1">{item.value}</div>
            <div className="text-sm font-semibold text-slate-200 mb-3">{item.label}</div>
            <p className="text-sm text-slate-400 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Automation Story</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            The export shows a scheduled cloud flow acting as the orchestrator and a Power Automate
            Desktop flow doing the work that required an interactive browser session. The desktop
            flow launches the reporting workflow, scopes facilities, downloads Excel output, reads
            the compliance values, and generates reusable email-body fragments. The cloud flow then
            wraps that generated content with standard guidance and sends separate distributions for
            each state audience.
          </p>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Workflow Breakdown</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {flowSteps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-200">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Operational Impact</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            The value of this automation is not only that it sends email. It turns a recurring
            reporting chore into a controlled operating rhythm: report execution, threshold review,
            consistent recommendations, state-level routing, and exception visibility.
          </p>
        </div>
        <div className="space-y-4">
          {outcomes.map((outcome) => (
            <div key={outcome} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-slate-300 leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Portfolio Handling</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {safeguards.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-4 text-emerald-200">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

export default POCWeeklyCompliance;
