import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Icon from "../components/Icon";
import ProjectWorkflow from "../components/ProjectWorkflow";
import SectionNavigation from "../components/SectionNavigation";
import { projectCaseStudies, projectHref } from "../data/projectCaseStudies";

const sections = [["overview", "Overview"], ["approach", "Approach"], ["workflow", "Workflow"], ["engineering", "Engineering"]];

function CaseStudyContent({ project }) {
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const related = project.related.map((slug) => projectCaseStudies.find((item) => item.slug === slug)).filter(Boolean);

  return (
    <main className="section-page max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
      <Helmet>
        <title>{`${project.title} | Trevis Cleary`}</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} | Trevis Cleary`} />
        <meta property="og:description" content={project.description} />
      </Helmet>
      <Link to="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-slate-400 hover:text-accent"><span className="rotate-180" aria-hidden="true"><Icon name="arrowRight" size={14} /></span>All projects</Link>
      <header className="mt-5 grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-start">
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">{project.title}</h1>
          <p className="mt-5 text-xl sm:text-2xl leading-relaxed text-slate-200">{project.subtitle}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">{project.description}</p>
        </div>
        <dl className="rounded-xl border border-slate-800 bg-slate-900 p-6 space-y-5">
          <div><dt className="text-sm text-slate-500">Focus</dt><dd className="mt-2 leading-relaxed text-slate-300">{project.focus}</dd></div>
          <div><dt className="text-sm text-slate-500">Project context</dt><dd className="mt-2 text-accent">{project.status}</dd></div>
        </dl>
      </header>
      <SectionNavigation sections={sections} label="Case study sections" />

      <section id="overview" tabIndex={-1} aria-labelledby="overview-heading" className="mt-10 grid md:grid-cols-2 gap-8 md:gap-12">
        <div><h2 id="overview-heading" className="text-2xl font-semibold tracking-tight">The challenge</h2><p className="mt-4 leading-relaxed text-slate-400">{project.challenge}</p></div>
        <div><h2 className="text-2xl font-semibold tracking-tight">What the work enables</h2><p className="mt-4 leading-relaxed text-slate-300">{project.result}</p></div>
      </section>
      <section id="approach" tabIndex={-1} aria-labelledby="approach-heading" className="mt-12 border-t border-slate-800 pt-8">
        <h2 id="approach-heading" className="text-2xl font-semibold tracking-tight mb-6">Design decisions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {project.approach.map(([title, description]) => <article key={title}><h3 className="text-lg font-semibold text-slate-200">{title}</h3><p className="mt-3 leading-relaxed text-slate-400">{description}</p></article>)}
        </div>
      </section>
      <section id="workflow" tabIndex={-1} aria-labelledby="workflow-heading" className="mt-12 border-t border-slate-800 pt-8">
        <h2 id="workflow-heading" className="text-2xl font-semibold tracking-tight mb-2">Workflow overview</h2>
        <p className="mb-6 text-sm text-slate-500">A simplified view of the process.</p>
        <ProjectWorkflow steps={project.workflow} />
      </section>
      <section id="engineering" tabIndex={-1} aria-labelledby="engineering-heading" className="mt-12 border-t border-slate-800 pt-8">
        <h2 id="engineering-heading" className="text-2xl font-semibold tracking-tight">Engineering notes</h2>
        <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">{project.technologies.map((tech) => <li key={tech} className="rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-300">{tech}</li>)}</ul>
        <dl className="mt-6 divide-y divide-slate-800">
          {project.engineering.map(([title, detail]) => <div key={title} className="grid md:grid-cols-[12rem_1fr] gap-2 md:gap-8 py-5"><dt className="font-semibold text-slate-200">{title}</dt><dd className="max-w-3xl leading-relaxed text-slate-400">{detail}</dd></div>)}
        </dl>
        {project.gallery ? (
          <details className="mt-5 rounded-xl border border-slate-800 p-5">
            <summary className="cursor-pointer font-medium text-slate-300 hover:text-accent">View earlier interface screenshots</summary>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">{project.galleryNote}</p>
            <div className="mt-5 grid md:grid-cols-2 gap-5">{project.gallery.map(([image, caption]) => <figure key={image}><a href={image} target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-slate-700 overflow-hidden hover:border-accent"><img src={image} alt={caption} loading="lazy" className="aspect-video w-full object-contain bg-slate-950" /></a><figcaption className="mt-3 text-sm text-slate-400">{caption} · Open image to enlarge</figcaption></figure>)}</div>
          </details>
        ) : null}
      </section>
      <aside aria-label="Related projects" className="mt-12 border-t border-slate-800 pt-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-5">Related work</h2>
        <div className="grid sm:grid-cols-2 gap-4">{related.map((item) => <Link key={item.slug} to={projectHref(item)} className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-accent/60"><span><span className="block font-semibold text-slate-200">{item.title}</span><span className="block mt-1 text-sm text-slate-500">{item.category}</span></span><span className="text-accent"><Icon name="arrowRight" size={16} /></span></Link>)}</div>
      </aside>
    </main>
  );
}

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = projectCaseStudies.find((item) => item.slug === slug);
  if (!project) return <main className="max-w-7xl mx-auto px-6 md:px-10 py-16"><Helmet><title>Project not found | Trevis Cleary</title></Helmet><h1 className="text-3xl font-semibold">Project not found</h1><Link to="/projects" className="mt-6 inline-flex min-h-11 items-center text-accent">Browse projects</Link></main>;
  return <CaseStudyContent key={project.slug} project={project} />;
}
