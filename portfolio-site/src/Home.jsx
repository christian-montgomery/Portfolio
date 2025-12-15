export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-indigo-400">Christian Montgomery</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-8">
          Software Engineering graduate focused on full-stack development,
          cloud systems, and real-world problem solving.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-slate-500 hover:bg-slate-800 transition"
          >
            Contact
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">BeBot Analytics Platform</h3>
            <p className="text-slate-300">
              Full-stack system using Spring Boot, React, Azure SQL, and
              computer vision to analyze beach cleanup data.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">When2Meet Scheduler</h3>
            <p className="text-slate-300">
              Real-time scheduling app with heatmap visualization and WebSockets.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-800 py-10 text-center text-slate-500">
        © {new Date().getFullYear()} Christian Montgomery
      </footer>
    </div>
  );
}