import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LocalPublishButton from "../components/LocalPublishButton";
import blogPosts from "../data/blogPosts.json";

function visiblePosts() {
  return blogPosts.filter((post) => post.publish || import.meta.env.DEV);
}

function BlogPost() {
  const { slug } = useParams();
  const post = visiblePosts().find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="max-w-5xl mx-auto px-8 py-24">
        <Helmet>
          <title>Blog Post Not Found | Trevis Cleary</title>
        </Helmet>
        <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-6">
          Blog
        </p>
        <h1 className="text-5xl font-bold">Blog post not found.</h1>
        <Link to="/blog" className="inline-flex mt-10 text-slate-300 hover:text-white">
          Back to blog
        </Link>
      </main>
    );
  }

  const sections = Array.isArray(post.sections) ? post.sections : [];
  const tags = Array.isArray(post.tags) ? post.tags : [];
  const aiReviewNotes = Array.isArray(post.aiReviewNotes) ? post.aiReviewNotes : [];

  return (
    <main className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-24">
      <Helmet>
        <title>{post.title} | Trevis Cleary</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-6">
        Blog
      </p>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        {!post.publish ? (
          <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200">
            Draft
          </span>
        ) : null}
        <span className="text-slate-500">{post.date || "Needs review"}</span>
      </div>

      <LocalPublishButton
        kind="blog"
        id={post.sourceProjectId || post.projectSlug || post.slug}
        published={post.publish}
        className="mb-8 max-w-xs"
      />

      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        {post.title}
      </h1>
      <p className="mt-8 text-xl text-slate-300 leading-relaxed">
        {post.excerpt}
      </p>

      <article className="mt-14 space-y-12">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-3xl font-bold mb-5">{section.heading}</h2>
            <p className="text-lg text-slate-400 leading-relaxed whitespace-pre-line">
              {section.body}
            </p>
          </section>
        ))}
      </article>

      <section className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">AI Draft Review</h2>
            <p className="mt-2 text-slate-500">
              {post.aiMessage || "No AI generation has been run for this post."}
            </p>
          </div>
          <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            {post.aiStatus || "not generated"}
          </span>
        </div>
        {aiReviewNotes.length ? (
          <div className="mt-6 grid gap-3">
            {aiReviewNotes.map((note) => (
              <div key={note} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300">
                {note}
              </div>
            ))}
          </div>
        ) : null}
      </section>

      {tags.length ? (
        <div className="mt-14 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {post.projectSlug ? (
        <Link
          to={`/projects/ideas/${post.projectSlug}`}
          className="inline-flex mt-12 rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-900 transition"
        >
          View project draft
        </Link>
      ) : null}
    </main>
  );
}

export default BlogPost;
