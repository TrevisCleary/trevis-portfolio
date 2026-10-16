import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { Helmet } from "react-helmet-async";
import LocalPublishButton from "../components/LocalPublishButton";
import blogPosts from "../data/blogPosts.json";

function visiblePosts() {
  return blogPosts
    .filter((post) => post.publish || import.meta.env.DEV)
    .sort((left, right) => String(right.date || "").localeCompare(String(left.date || "")));
}

function Blog() {
  const posts = visiblePosts();

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
      <Helmet>
        <title>Blog | Trevis Cleary</title>
        <meta
          name="description"
          content="Project notes and technical writeups from Trevis Cleary on healthcare technology, automation, analytics, and operational systems."
        />
      </Helmet>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
        Project notes and implementation stories.
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-slate-400 leading-relaxed">
        Notes on healthcare technology, automation, and building useful systems.
      </p>

      <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {posts.length ? posts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-7 hover:border-slate-600 hover:-translate-y-1 transition duration-300"
          >
            <Link to={`/blog/${post.slug}`} className="block">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {!post.publish ? (
                  <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
                    Draft
                  </span>
                ) : null}
                <span className="inline-flex items-center gap-2 text-sm text-slate-500"><Icon name="calendar" size={14} />{post.date || "Needs review"}</span>
              </div>
              <h2 className="text-2xl font-semibold leading-snug group-hover:text-white">
                {post.title}
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-slate-200">
                {post.publish ? "Read article" : "Read draft"}
                <Icon name="arrowRight" size={14} />
              </span>
            </Link>
            <LocalPublishButton
              kind="blog"
              id={post.sourceProjectId || post.projectSlug || post.slug}
              published={post.publish}
              className="mt-6"
            />
          </article>
        )) : (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-slate-400">
            Notes are on the way. In the meantime, <Link to="/projects" className="text-accent underline underline-offset-4">explore selected projects</Link>.
          </div>
        )}
      </div>
    </main>
  );
}

export default Blog;
