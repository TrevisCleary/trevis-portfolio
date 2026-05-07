function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-32">
      <p className="uppercase tracking-[0.3em] text-slate-400 text-sm mb-6">
        Technical Leadership • Automation • Infrastructure
      </p>

      <h1 className="text-6xl font-bold max-w-5xl leading-tight">
        Building modern healthcare technology and operational systems.
      </h1>

      <p className="mt-8 text-xl text-slate-400 max-w-3xl leading-relaxed">
        Vice President of Technical Services and Analytics focused on
        infrastructure modernization, automation engineering,
        operational technology, and scalable systems strategy.
      </p>

      <div className="flex gap-6 mt-12">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
          View Projects
        </button>

        <button className="border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-900 transition">
          Resume
        </button>
      </div>
    </main>
  );
}

export default Home;