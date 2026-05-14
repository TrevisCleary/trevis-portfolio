import {
  Bot,
  Database,
  Download,
  FileArchive,
  FileCheck2,
  FileText,
  FolderSync,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  ZoomIn
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function SNFPolicySystem() {
  const [selectedImage, setSelectedImage] = useState(null);

  const technologies = [
    "React",
    "Node.js",
    "SQLite",
    "OpenAI",
    "Anthropic",
    "JSZip",
    "PDF.js",
    "Power Automate"
  ];

  const features = [
    {
      icon: <FileArchive size={24} />,
      title: "Policy Registry",
      description:
        "Centralized policy tracking for department, document type, category, status, revision, dates, and publish state."
    },
    {
      icon: <Sparkles size={24} />,
      title: "AI-Assisted Drafting",
      description:
        "Users can generate standardized policy content from prompts or source text while keeping provider keys server-side."
    },
    {
      icon: <FileText size={24} />,
      title: "Document Import",
      description:
        "Existing DOCX and PDF policy files can be imported, parsed, and converted into editable registry entries."
    },
    {
      icon: <Workflow size={24} />,
      title: "Auto Ingest",
      description:
        "Completed policies can be added to the registry without forcing a full rewrite through the AI generation flow."
    },
    {
      icon: <FolderSync size={24} />,
      title: "SharePoint Publishing",
      description:
        "Completed Word documents and companion metadata JSON files are written to OneDrive-synced SharePoint folders."
    },
    {
      icon: <Layers3 size={24} />,
      title: "Structured Editing",
      description:
        "Saved policies open into focused metadata, description, revision, and section editing panels."
    }
  ];

  const stack = [
    {
      icon: <FileCheck2 size={24} />,
      name: "React Static App",
      detail:
        "A lightweight browser interface handles the registry, generator, ingest workflow, and policy editor."
    },
    {
      icon: <Database size={24} />,
      name: "Node + SQLite",
      detail:
        "The local server persists registry data, custom departments, categories, metadata, and generated policy records."
    },
    {
      icon: <Bot size={24} />,
      name: "AI Provider Proxy",
      detail:
        "OpenAI and Anthropic requests are proxied through the server so API keys never reach the browser."
    },
    {
      icon: <Download size={24} />,
      name: "DOCX Generation",
      detail:
        "A custom OpenXML builder uses JSZip to create standardized downloadable Word documents."
    },
    {
      icon: <FileText size={24} />,
      name: "PDF And DOCX Parsing",
      detail:
        "PDF.js and document extraction utilities support importing and auto-ingesting existing source material."
    },
    {
      icon: <ShieldCheck size={24} />,
      name: "SharePoint Metadata",
      detail:
        "Publishing writes metadata JSON for Power Automate to keep document library fields aligned."
    }
  ];

  const gallery = [
    {
      image: "/images/snf-policy-system/current/01-policy-registry.png",
      caption: "Policy registry",
      description:
        "A central workspace for tracking policy documents, departments, categories, revision status, and publish state.",
      className: "md:col-span-2"
    },
    {
      image: "/images/snf-policy-system/current/02-new-document-source.png",
      caption: "New document source",
      description:
        "Users can describe a new policy or paste existing policy text before moving into generation settings."
    },
    {
      image: "/images/snf-policy-system/current/03-metadata-ai-options.png",
      caption: "Metadata and AI options",
      description:
        "The generation setup captures document identity, department, category, revision, status, provider, and writing framework.",
      className: "md:col-span-2"
    },
    {
      image: "/images/snf-policy-system/current/04-auto-ingest-workflow.png",
      caption: "Auto ingest workflow",
      description:
        "Completed documents can be mapped into the registry without being rewritten through the generator."
    },
    {
      image: "/images/snf-policy-system/current/05-policy-editor.png",
      caption: "Policy editor",
      description:
        "Saved policy records can be edited section by section with metadata and revision controls."
    },
    {
      image: "/images/snf-policy-system/current/06-bulk-publish-selection.png",
      caption: "Bulk publish selection",
      description:
        "Multiple policies can be selected for batch publishing to the SharePoint output folders."
    }
  ];

  const outcomes = [
    {
      metric: "Local First",
      label: "Workflow",
      description:
        "Runs as a focused local app with durable SQLite state and server-side AI provider access."
    },
    {
      metric: "Structured",
      label: "Registry",
      description:
        "Turns scattered policy documents into a searchable registry with consistent metadata."
    },
    {
      metric: "AI Assisted",
      label: "Drafting",
      description:
        "Supports document generation and metadata suggestions without exposing API secrets to the browser."
    },
    {
      metric: "SharePoint Ready",
      label: "Publishing",
      description:
        "Outputs Word files and metadata JSON for downstream library automation."
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
        <title>SNF Policy System | Trevis Cleary</title>
        <meta
          name="description"
          content="Local skilled nursing policy registry and AI-assisted document generation system with SQLite, Node.js, DOCX output, and SharePoint publishing."
        />
        <meta property="og:title" content="SNF Policy System | Trevis Cleary" />
        <meta
          property="og:description"
          content="Policy registry, AI-assisted drafting, document import, DOCX generation, and SharePoint-ready publishing."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center"
      >
        <div>
          <p className="text-cyan-300 text-sm font-semibold uppercase tracking-[0.24em] mb-4">
            Case Study
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            SNF Policy System
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            A local policy and procedure registry for skilled nursing documentation, combining document import,
            AI-assisted drafting, structured editing, SQLite persistence, and SharePoint-ready publishing.
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

        <button
          type="button"
          onClick={() => setSelectedImage(gallery[0])}
          className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-950/20"
        >
          <img
            src={gallery[0].image}
            alt={gallery[0].caption}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/65 px-4 py-2 text-sm text-slate-100 backdrop-blur">
            <ZoomIn size={16} /> View workflow
          </span>
        </button>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20 grid md:grid-cols-4 gap-4">
        {outcomes.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="text-2xl font-bold text-cyan-200 mb-1">{item.metric}</div>
            <div className="text-sm font-semibold text-slate-200 mb-3">{item.label}</div>
            <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Development Story</h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            This application started as a practical need to make policy and procedure work less dependent on
            disconnected files, manual document formatting, and one-off metadata handling. The finished workflow
            gives staff a structured registry, supports AI drafting where it helps, and keeps final Word documents
            aligned with SharePoint library automation.
          </p>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-4 text-cyan-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Workflow Screenshots</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {gallery.map((item) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setSelectedImage(item)}
              className={`group text-left overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 hover:border-cyan-700/70 transition ${item.className || ""}`}
            >
              <div className="relative overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full aspect-video object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-4 right-4 rounded-full bg-black/60 p-2 text-slate-100 opacity-0 group-hover:opacity-100 transition">
                  <ZoomIn size={18} />
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{item.caption}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Technical Stack</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {stack.map((item) => (
            <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-4 text-cyan-300">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
              <p className="text-slate-400 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full border border-slate-700 bg-slate-950/90 p-3 text-slate-100 hover:bg-slate-800 transition"
            onClick={() => setSelectedImage(null)}
            aria-label="Close screenshot"
          >
            <X size={22} />
          </button>
          <div
            className="max-w-6xl w-full rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedImage.image} alt={selectedImage.caption} className="w-full max-h-[78vh] object-contain bg-slate-950" />
            <div className="p-5 border-t border-slate-800">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.caption}</h3>
              <p className="text-slate-400">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default SNFPolicySystem;
