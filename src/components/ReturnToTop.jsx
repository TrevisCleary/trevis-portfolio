import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function ReturnToTop() {
  const [visible, setVisible] = useState(() => window.scrollY > 160);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 160);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function returnToTop() {
    // Keep keyboard focus in the page when the button disappears.
    document.getElementById("content")?.focus({ preventScroll: true });
    // The site's CSS enables smooth scrolling and respects reduced motion.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={returnToTop}
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex min-h-11 items-center gap-2 rounded-lg border border-accent/40 bg-slate-900 px-4 py-3 text-sm font-medium text-accent shadow-lg transition-colors hover:border-accent hover:bg-slate-800 md:right-6 md:bottom-6"
    >
      <Icon name="arrowUp" size={14} />
      Return to top
    </button>
  );
}
