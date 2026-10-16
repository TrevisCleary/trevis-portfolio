import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ReturnToTop from "./components/ReturnToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectIdeaDetail from "./pages/ProjectIdeaDetail";
import DischargeTracker from "./pages/projects/DischargeTracker";
import SNFPolicySystem from "./pages/projects/SNFPolicySystem";
import POCWeeklyCompliance from "./pages/projects/POCWeeklyCompliance";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-3 focus:text-slate-950">
          Skip to content
        </a>
        <Navbar />

        <div id="content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ideas/:slug" element={<ProjectIdeaDetail />} />
          <Route path="/projects/discharge-tracker" element={<DischargeTracker />} />
          <Route path="/projects/snf-policy-system" element={<SNFPolicySystem />} />
          <Route path="/projects/poc-weekly-compliance" element={<POCWeeklyCompliance />} />
          <Route path="/blog/*" element={<Navigate to="/projects" replace />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <ReturnToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
