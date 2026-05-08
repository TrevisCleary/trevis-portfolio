import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-24">
      <Helmet>
        <title>Contact | Trevis Cleary</title>
      </Helmet>

      <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-6">
        Contact
      </p>

      <h1 className="text-6xl font-bold mb-8 leading-tight">
        Let’s connect.
      </h1>

      <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
        I’m always interested in conversations around healthcare
        technology, automation, infrastructure modernization,
        operational systems, and technical leadership opportunities.
      </p>

      <div className="flex flex-wrap gap-6 mt-16">
        <a
          href="https://www.linkedin.com/in/trevis-cleary-78250088/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-slate-900 border border-slate-800 hover:border-slate-600 transition rounded-2xl px-8 py-5"
        >
          <FaLinkedin size={24} />

          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/TrevisCleary"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-slate-900 border border-slate-800 hover:border-slate-600 transition rounded-2xl px-8 py-5"
        >
          <FaGithub size={24} />

          <span>GitHub</span>
        </a>

        <a
          href="mailto:connect@treviscleary.com"
          className="flex items-center gap-4 bg-white text-black hover:opacity-90 transition rounded-2xl px-8 py-5 font-semibold"
        >
          <FaEnvelope size={20} />

          <span>Email</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
