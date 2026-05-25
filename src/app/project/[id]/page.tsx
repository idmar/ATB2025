"use client";

export const runtime = 'edge';

import { useEffect, useState, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { projects } from "@/lib/projects";

// 作品分类分组
const projectCategories = {
  "Cultural Folding": [1, 2, 3, 4, 5, 6],
  "Sensory Symbiosis": [7, 8, 9, 10, 11],
  "Vital Wonderland": [12, 13],
  "Exotic Roaming": [14, 15, 16],
};

const getCategoryById = (id: number): string => {
  for (const [category, ids] of Object.entries(projectCategories)) {
    if (ids.includes(id)) {
      return category;
    }
  }
  return "Cultural Folding";
};

const getProjectsInCategory = (id: number): typeof projects => {
  const category = getCategoryById(id);
  const projectIds = projectCategories[category as keyof typeof projectCategories];
  return projects.filter(p => projectIds.includes(p.id));
};

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [isReady, setIsReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const projectId = Number(params.id);
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    if (!project) {
      router.push("/menu");
      return;
    }
    setIsReady(true);
  }, [project, router]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll listener for showing More Projects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show More Projects when scrolled to bottom
      if (scrollPosition + windowHeight >= documentHeight - 200) {
        setShowMoreProjects(true);
      } else {
        setShowMoreProjects(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return null;
  }

  const prevProject = projects.find((p) => p.id === project.id - 1);
  const nextProject = projects.find((p) => p.id === project.id + 1);
  const relatedProjects = getProjectsInCategory(project.id).filter(p => p.id !== project.id);
  const categoryName = getCategoryById(project.id);

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <main className="min-h-screen bg-white">
      {/* Top Navigation Header - Fixed */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-700 ${
          isReady ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.location.href = '/'}
              className="text-xs tracking-[0.3em] uppercase text-black/60 font-medium hover:text-black transition-colors"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              ATB.STUDIO
            </button>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-black/20 font-mono">
                {String(project.id).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
              </span>
              <button
                onClick={openMenu}
                className="px-4 py-2 bg-black text-white text-xs tracking-[0.15em] uppercase rounded-full hover:bg-black/90 transition-colors flex items-center gap-2"
              >
                <span>Menu</span>
                <span className="flex flex-col gap-[2px]">
                  <span className="block w-3 h-[1px] bg-white" />
                  <span className="block w-3 h-[1px] bg-white" />
                  <span className="block w-3 h-[1px] bg-white" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </header>

      {/* Bottom Navigation Bar - Fixed at bottom, shows More Projects on scroll */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${showMoreProjects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.98) 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-[9px] tracking-[0.3em] uppercase text-black/40">{categoryName}</span>
              <div className="w-8 h-[1px] bg-black/20" />
              <span className="text-[9px] font-mono text-black/30">{relatedProjects.length} more</span>
            </div>
            <button
              onClick={() => router.push("/menu")}
              className="text-[9px] tracking-[0.2em] uppercase text-black/40 hover:text-black transition-colors"
            >
              All Works
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {relatedProjects.map((related) => (
              <button
                key={related.id}
                onClick={() => router.push(`/project/${related.id}`)}
                className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden group"
                style={{ backgroundColor: related.bgColor }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-mono text-lg font-bold drop-shadow-sm">
                    {String(related.id).padStart(2, "0")}
                  </span>
                  <span className="text-white/80 text-[8px] tracking-[0.2em] uppercase text-center px-2">
                    {related.title.slice(0, 10)}...
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
      </div>

      {/* Menu Panel */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative w-[90%] max-w-2xl max-h-[88vh] rounded-2xl shadow-2xl shadow-black/25 border border-black/5
            transition-all duration-500 ease-out
            ${menuOpen ? "scale-100 translate-y-0" : "scale-90 translate-y-8"}`}
          onClick={(e) => e.stopPropagation()}
          style={{ background: "linear-gradient(180deg, #fafafa 0%, #f0f0f0 30%, #e8e8e8 70%, #e0e0e0 100%)" }}
        >
          <div className="overflow-y-auto max-h-[88vh] rounded-2xl">
            <div className="p-0">
              {/* Menu Header */}
              <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-black/5 px-5 md:px-7 py-4 flex items-center justify-between">
                <span className="text-sm font-bold tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
                  ATB.STUDIO
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-black/30 font-mono tracking-wider">
                    {projects.length} WORKS
                  </span>
                  <button
                    onClick={closeMenu}
                    className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 transition-colors flex items-center justify-center group"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:rotate-90 transition-transform duration-300">
                      <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Featured Work in Menu */}
              <div className="px-5 md:px-7 pt-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] flex-1 bg-black/5" />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-black/25 font-medium">Featured</span>
                  <div className="h-[1px] flex-1 bg-black/5" />
                </div>
                <div className="relative rounded-xl overflow-hidden" style={{ backgroundColor: project.bgColor }}>
                  <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `radial-gradient(circle at 70% 30%, ${project.bgColor} 0%, transparent 60%)` }} />
                  <div className="relative p-5 md:p-7">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tighter" style={{ fontFamily: "'Georgia', serif", color: project.color }}>
                      {project.title}
                    </h2>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[10px] font-mono text-black/50">{project.year}</span>
                      <span className="text-black/20">·</span>
                      <span className="text-[10px] text-black/50">{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category-separated Works Grid */}
              <div className="px-5 md:px-7 pb-4 space-y-6">
                {/* Category 1: Cultural Folding */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[1px] bg-[#E77C49]/50" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">Cultural Folding</span>
                    <div className="flex-1 h-[1px] bg-black/10" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {projects.filter(p => [1,2,3,4,5,6].includes(p.id)).map((p) => (
                      <button
                        key={p.id}
                        onClick={() => { closeMenu(); router.push(`/project/${p.id}`); }}
                        className={`aspect-square rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center ${p.id === project.id ? "ring-2 ring-black/30" : ""}`}
                        style={{ backgroundColor: p.bgColor }}
                      >
                        <span className="text-xs font-bold text-center px-1 leading-tight" style={{ color: p.color }}>
                          {p.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category 2: Sensory Symbiosis */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[1px] bg-[#87ACDC]/50" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">Sensory Symbiosis</span>
                    <div className="flex-1 h-[1px] bg-black/10" />
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {projects.filter(p => [7,8,9,10,11].includes(p.id)).map((p) => (
                      <button
                        key={p.id}
                        onClick={() => { closeMenu(); router.push(`/project/${p.id}`); }}
                        className={`aspect-square rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center ${p.id === project.id ? "ring-2 ring-black/30" : ""}`}
                        style={{ backgroundColor: p.bgColor }}
                      >
                        <span className="text-[10px] font-bold text-center px-1 leading-tight" style={{ color: p.color }}>
                          {p.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category 3: Vital Wonderland */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[1px] bg-[#EAB8C2]/50" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">Vital Wonderland</span>
                    <div className="flex-1 h-[1px] bg-black/10" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {projects.filter(p => [12,13].includes(p.id)).map((p) => (
                      <button
                        key={p.id}
                        onClick={() => { closeMenu(); router.push(`/project/${p.id}`); }}
                        className={`aspect-square rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center ${p.id === project.id ? "ring-2 ring-black/30" : ""}`}
                        style={{ backgroundColor: p.bgColor }}
                      >
                        <span className="text-xs font-bold text-center px-1 leading-tight" style={{ color: p.color }}>
                          {p.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category 4: Exotic Roaming */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[1px] bg-[#D7E294]/50" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">Exotic Roaming</span>
                    <div className="flex-1 h-[1px] bg-black/10" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {projects.filter(p => [14,15,16].includes(p.id)).map((p) => (
                      <button
                        key={p.id}
                        onClick={() => { closeMenu(); router.push(`/project/${p.id}`); }}
                        className={`aspect-square rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center ${p.id === project.id ? "ring-2 ring-black/30" : ""}`}
                        style={{ backgroundColor: p.bgColor }}
                      >
                        <span className="text-xs font-bold text-center px-1 leading-tight" style={{ color: p.color }}>
                          {p.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Menu Footer */}
              <div className="px-5 md:px-7 py-5 border-t border-black/5">
                <div className="flex items-center justify-between text-[9px] text-black/20">
                  <span>&copy; 2024 ATB.STUDIO</span>
                  <div className="flex gap-4">
                    <span className="hover:text-black/40 cursor-pointer">Instagram</span>
                    <span className="hover:text-black/40 cursor-pointer">Email</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 md:pt-28">
        <div
          className={`mx-auto max-w-7xl px-6 md:px-10 transition-all duration-700 delay-200 ${
            isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Hero Card */}
          <div
            className="relative rounded-[2.5rem] overflow-hidden min-h-[50vh] md:min-h-[60vh] flex items-end"
            style={{ backgroundColor: project.bgColor }}
          >
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-15">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 30%, ${project.accentColor} 0%, transparent 40%),
                    radial-gradient(circle at 80% 70%, ${project.accentColor} 0%, transparent 40%),
                    repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(0,0,0,0.03) 30px, rgba(0,0,0,0.03) 31px)
                  `,
                }}
              />
            </div>

            {/* Floating number */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10">
              <span
                className="text-[clamp(4rem,10vw,10rem)] font-bold leading-none select-none"
                style={{
                  color: project.color === "#ffffff" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.06)",
                  fontFamily: "'Georgia', serif",
                }}
              >
                {String(project.id).padStart(2, "0")}
              </span>
            </div>

            {/* Badge */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10">
              <span
                className="text-xs tracking-[0.25em] uppercase bg-white/30 backdrop-blur-md px-4 py-2 rounded-full"
                style={{ color: project.color }}
              >
                {project.category}
              </span>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 p-8 md:p-14 w-full">
              <div className="max-w-3xl">
                {/* Color indicator line */}
                <div
                  className="w-16 h-1 rounded-full mb-6"
                  style={{ backgroundColor: project.accentColor }}
                />
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight"
                  style={{
                    color: project.color,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {project.title}
                </h1>
                <div className="mt-4 flex items-center gap-3">
                  <span
                    className="text-sm font-mono tracking-wider"
                    style={{ color: `${project.color}cc` }}
                  >
                    {project.year}
                  </span>
                  <span
                    className="w-4 h-[1px]"
                    style={{ backgroundColor: `${project.color}40` }}
                  />
                  <span
                    className="text-sm tracking-wider"
                    style={{ color: `${project.color}cc` }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section
        className={`py-16 md:py-20 transition-all duration-700 delay-400 ${
          isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Main Description */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs tracking-[0.3em] uppercase text-black/30">
                  About
                </span>
                <div className="h-[1px] flex-1 bg-black/10" />
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-black/70">
                {project.description}
              </p>
            </div>

            {/* Project Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs tracking-[0.3em] uppercase text-black/30">
                  Details
                </span>
                <div className="h-[1px] flex-1 bg-black/10" />
              </div>
              <div className="space-y-4 bg-[#f8f8f6] rounded-2xl p-6 md:p-8">
                {project.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: project.bgColor }}
                    />
                    <span className="text-sm text-black/60 leading-relaxed">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Color Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div
            className="rounded-[2rem] p-10 md:p-16 overflow-hidden relative"
            style={{ backgroundColor: project.accentColor + "15" }}
          >
            {/* Color Palette Boxes */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div
                className="w-20 h-20 md:w-28 md:h-28 rounded-2xl transition-transform hover:scale-110 duration-300"
                style={{ backgroundColor: project.bgColor }}
              />
              <div
                className="w-20 h-20 md:w-28 md:h-28 rounded-2xl transition-transform hover:scale-110 duration-300"
                style={{ backgroundColor: project.accentColor }}
              />
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl transition-transform hover:scale-110 duration-300 bg-[#D7E294]" />
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl transition-transform hover:scale-110 duration-300 bg-[#EAB8C2]" />
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl transition-transform hover:scale-110 duration-300 bg-[#E77C49]" />
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl transition-transform hover:scale-110 duration-300 bg-[#87ACDC]" />
            </div>
            <div className="text-center mt-6">
              <span className="text-xs tracking-[0.3em] uppercase text-black/20">
                Color Study — Project Palette
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <footer className="border-t border-black/5 mt-8 pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-8">
          <div className="flex items-center justify-between">
            <div>
              {prevProject && (
                <button
                  onClick={() => router.push(`/project/${prevProject.id}`)}
                  className="group text-left"
                >
                  <span className="text-xs tracking-[0.2em] uppercase text-black/30">
                    Previous
                  </span>
                  <p
                    className="text-sm font-medium mt-1 text-black/60 group-hover:text-black transition-colors"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {prevProject.title}
                  </p>
                </button>
              )}
            </div>

            <button
              onClick={() => router.push("/menu")}
              className="text-xs tracking-[0.2em] uppercase text-black/30 hover:text-black transition-colors"
            >
              All Works
            </button>

            <div className="text-right">
              {nextProject && (
                <button
                  onClick={() => router.push(`/project/${nextProject.id}`)}
                  className="group text-right"
                >
                  <span className="text-xs tracking-[0.2em] uppercase text-black/30">
                    Next
                  </span>
                  <p
                    className="text-sm font-medium mt-1 text-black/60 group-hover:text-black transition-colors"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {nextProject.title}
                  </p>
                </button>
              )}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
