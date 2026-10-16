import { useState } from "react";

const contentApiBaseUrl = import.meta.env.VITE_PORTFOLIO_CONTENT_API_URL || "http://127.0.0.1:4306";

function LocalPublishButton({ id, published, className = "" }) {
  const [isPublished, setIsPublished] = useState(Boolean(published));
  const [status, setStatus] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  if (!import.meta.env.DEV || !id) {
    return null;
  }

  const nextPublished = !isPublished;
  const label = isPublished ? "Unpublish" : "Publish Draft";

  async function handlePublishClick(event) {
    event.preventDefault();
    event.stopPropagation();
    setIsSaving(true);
    setStatus("");

    try {
      const response = await fetch(`${contentApiBaseUrl}/api/projects/${encodeURIComponent(id)}/publish`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ publish: nextPublished })
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Unable to update publish state.");
      }

      setIsPublished(result.publish);
      setStatus(result.publish ? "Marked for publish." : "Returned to draft.");
    } catch (error) {
      setStatus(`${error.message} Run npm.cmd run dev:content.`);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={handlePublishClick}
        disabled={isSaving}
        className="inline-flex w-full items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-400/20 disabled:cursor-wait disabled:opacity-60"
      >
        {isSaving ? "Saving..." : label}
      </button>
      {status ? (
        <p className="mt-3 text-sm text-slate-400" role="status">
          {status}
        </p>
      ) : null}
    </div>
  );
}

export default LocalPublishButton;
