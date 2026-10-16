import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import SectionNavigation from "../components/SectionNavigation";

const sections = [
  ["overview", "Overview"],
  ["career-path", "Career path"],
  ["expertise", "Expertise"],
  ["how-i-work", "How I work"],
  ["beyond-work", "Beyond work"],
];

const career = [
  {
    title: "Technology foundations",
    description: "Finance technology built my foundation in systems, support, and operational reliability.",
  },
  {
    title: "Direct patient care",
    description: "Nursing showed me how documentation, handoffs, and technology affect the time available for patients.",
  },
  {
    title: "Healthcare technology leadership",
    description: "Clinical informatics led to enterprise IT, automation, analytics, and infrastructure leadership.",
  },
];

const expertise = [
  {
    icon: "workflow",
    title: "Automation & workflows",
    description: "Practical automation with Power Apps, Power Automate, Dataverse, and Microsoft 365.",
  },
  {
    icon: "database",
    title: "Data & analytics",
    description: "Clean data structures and reporting that turn daily operations into useful insight.",
  },
  {
    icon: "network",
    title: "Infrastructure & systems",
    description: "Reliable platforms, permissions, and integrations that scale across teams and facilities.",
  },
  {
    icon: "healthcare",
    title: "Healthcare technology",
    description: "Systems grounded in clinical workflows, compliance, and the needs of frontline teams.",
  },
];

const principles = [
  ["Start with the work", "Understand the workflow, then reduce duplicate entry, manual steps, and difficult handoffs."],
  ["Create shared understanding", "Connect clinicians, technical teams, executives, and vendors around a clear operational goal."],
  ["Build for the long term", "Favor maintainable automation, durable integrations, and systems that can grow with the organization."],
  ["Make accountability visible", "Give teams clear responsibilities and leaders an accurate view of what is happening."],
];

function About() {
  return (
    <main className="section-page max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-16">
      <Helmet>
        <title>About | Trevis Cleary</title>
        <meta
          name="description"
          content="Trevis Cleary connects clinical experience and technical leadership through healthcare systems, automation, analytics, and infrastructure."
        />
      </Helmet>

      <header>
        <h1 className="max-w-4xl text-4xl sm:text-5xl font-semibold tracking-tight leading-tight text-balance">
          I bridge clinical reality and technical systems.
        </h1>
      </header>

      <SectionNavigation sections={sections} label="About sections" />

      <section id="overview" tabIndex={-1} aria-labelledby="overview-heading" className="mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-12 items-center">
        <div>
          <h2 id="overview-heading" className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            My career spans technology, nursing, and healthcare leadership. That
            experience helps me connect the people delivering care with the
            systems that support them.
          </p>
          <p className="mt-3 leading-relaxed text-slate-400">
            Today, I lead technical services and analytics, combining enterprise
            strategy with hands-on work in automation, data, and infrastructure.
          </p>
        </div>
        <blockquote className="border-l-2 border-accent bg-slate-900 rounded-r-xl p-6 text-xl sm:text-2xl font-medium leading-relaxed text-slate-200">
          Good technology gives people more room to focus on patients.
        </blockquote>
      </section>

      <section id="career-path" tabIndex={-1} aria-labelledby="career-heading" className="mt-12 border-t border-slate-800 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <h2 id="career-heading" className="text-2xl font-semibold tracking-tight">Career path</h2>
          <Link to="/resume#experience" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover">
            Full experience <Icon name="arrowRight" size={14} />
          </Link>
        </div>
        <ol className="grid md:grid-cols-3 gap-6 md:gap-8">
          {career.map((step, index) => (
            <li key={step.title} className="relative border-l border-slate-700 pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-5">
              <span aria-hidden="true" className="absolute -left-1 top-1.5 h-2 w-2 rounded-full bg-accent md:left-0 md:-top-1" />
              <p className="text-sm font-medium text-accent mb-2">{["Foundation", "Perspective", "Leadership"][index]}</p>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-400">{step.description}</p>
            </li>
          ))}
        </ol>
        <details className="mt-6 rounded-lg border border-slate-800 bg-slate-900">
          <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-slate-300 hover:text-accent">Read more about the transition into healthcare</summary>
          <div className="px-5 pb-5 max-w-4xl space-y-3 text-slate-400 leading-relaxed">
            <p>
              After starting in finance technology, a layoff led me to nursing
              and several years in direct patient care. I saw how systems shape
              documentation, communication, workload, and the time clinicians
              have for patients.
            </p>
            <p>
              I returned to technology through healthcare informatics and
              operational systems. That experience still guides how I translate
              clinical needs into technical decisions.
            </p>
          </div>
        </details>
      </section>

      <section id="expertise" tabIndex={-1} aria-labelledby="expertise-heading" className="mt-12 border-t border-slate-800 pt-8">
        <h2 id="expertise-heading" className="text-2xl font-semibold tracking-tight mb-6">Expertise</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {expertise.map((area) => (
            <article key={area.title} className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5">
              <span className="text-accent mt-1"><Icon name={area.icon} size={22} /></span>
              <div>
                <h3 className="text-lg font-semibold">{area.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-400">{area.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="how-i-work" tabIndex={-1} aria-labelledby="approach-heading" className="mt-12 border-t border-slate-800 pt-8">
        <h2 id="approach-heading" className="text-2xl font-semibold tracking-tight mb-6">How I work</h2>
        <dl className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {principles.map(([title, description]) => (
            <div key={title}>
              <dt className="text-lg font-semibold">{title}</dt>
              <dd className="mt-2 text-slate-400 leading-relaxed">{description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="beyond-work" tabIndex={-1} aria-labelledby="personal-heading" className="mt-12 rounded-xl border border-slate-800 bg-slate-900 p-6 md:p-8">
        <h2 id="personal-heading" className="text-2xl font-semibold tracking-tight">Beyond work</h2>
        <p className="mt-3 max-w-3xl text-slate-400 leading-relaxed">
          The same curiosity carries into electronics, hands-on technical
          projects, and outdoor and property work. Family travel gives me time
          to step away and explore.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2"><Icon name="tools" size={16} />Building and repairing</span>
          <span className="inline-flex items-center gap-2"><Icon name="travel" size={16} />Family travel</span>
        </div>
      </section>
    </main>
  );
}

export default About;
