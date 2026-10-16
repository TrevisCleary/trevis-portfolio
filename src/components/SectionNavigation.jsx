import { useEffect, useRef } from "react";

export default function SectionNavigation({ sections, label }) {
  const navigationRef = useRef(null);

  useEffect(() => {
    const navigation = navigationRef.current;
    const page = navigation.closest("main");
    const header = document.querySelector('nav[aria-label="Main navigation"]');
    const updateOffsets = () => {
      page.style.setProperty("--site-nav-height", `${header.getBoundingClientRect().height}px`);
      page.style.setProperty("--section-nav-height", `${navigation.getBoundingClientRect().height}px`);
    };
    updateOffsets();
    const observer = new ResizeObserver(updateOffsets);
    observer.observe(header);
    observer.observe(navigation);

    // Resolve direct section links after the page and its navigation mount.
    const sectionId = window.location.hash.slice(1);
    const frame = requestAnimationFrame(() => {
      if (sections.some(([id]) => id === sectionId)) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "instant" });
      }
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [sections]);

  return (
    <nav
      ref={navigationRef}
      aria-label={label}
      className="sticky top-[var(--site-nav-height,5.25rem)] z-30 mt-10 flex flex-col gap-2 rounded-xl border border-slate-700 bg-slate-950 p-3 shadow-sm lg:flex-row lg:items-center lg:gap-5"
    >
      <p className="px-2 text-xs font-medium text-slate-500">On this page</p>
      <div className="grid grid-cols-3 gap-1 sm:flex sm:flex-wrap">
        {sections.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className="inline-flex min-h-11 items-center justify-center rounded-md px-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-900 hover:text-accent sm:px-4"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
