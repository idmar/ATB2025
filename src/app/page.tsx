"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/projects";
import BackgroundAnimations from "@/components/BackgroundAnimations";

export default function HomePage() {
  const router = useRouter();
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    setIsReady(true);
  }, []);

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

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const getAccentBg = (i: number) => {
    const colors = ["#D7E294", "#EAB8C2", "#E77C49", "#87ACDC"];
    return colors[i % 4];
  };

  const featured = projects[featuredIndex];

  // Staggered layout: define different card sizes
  // Each entry: { id: projectId, colSpan, rowSpan }
  const staggeredLayout = projects.map((p, i) => {
    // Create a staggered pattern
    if (i % 5 === 0) return { id: p.id, colSpan: "col-span-2" as const, rowSpan: "row-span-2" as const, aspect: "aspect-[3/4]" as const };
    if (i % 5 === 4) return { id: p.id, colSpan: "col-span-2" as const, rowSpan: "row-span-1" as const, aspect: "aspect-[3/1.5]" as const };
    return { id: p.id, colSpan: "col-span-1" as const, rowSpan: "row-span-1" as const, aspect: "aspect-[3/4]" as const };
  });

  return (
    <main className="relative w-full min-h-screen bg-white">
      {/* Background Floating Animations (provides scroll height + floating images) */}
      <BackgroundAnimations menuOpen={menuOpen} />

      {/* Fixed foreground content */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto w-full flex flex-col items-center justify-center">
      {/* =========================================
         背景装饰 - 图片版本 (当前禁用)
         如需启用：取消此段注释，注释下方文字版本
         ========================================= 
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <Image
          src="/atb.png"
          alt="ATB"
          width={900}
          height={600}
          className="w-[clamp(400px,60vw,900px)] h-auto opacity-[0.5]"
          style={{ objectFit: 'contain' }}
          unoptimized
        />
      </div>
      */}

      {/* =========================================
         背景装饰 - 文字版本 (当前启用)
         如需切换到图片版本：注释此段，取消上方图片版本的注释
         ========================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="text-[clamp(12rem,25vw,28rem)] font-bold text-black/[0.02] tracking-tighter leading-none"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          ATB
        </span>
      </div>
      

      {/* Color dots decoration */}
      <div className="absolute top-16 left-16 w-28 h-28 rounded-full bg-[#D7E294] opacity-30 blur-2xl" />
      <div className="absolute bottom-20 right-24 w-36 h-36 rounded-full bg-[#EAB8C2] opacity-30 blur-2xl" />
      <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-[#87ACDC] opacity-20 blur-xl" />
      <div className="absolute bottom-1/3 left-1/5 w-16 h-16 rounded-full bg-[#E77C49] opacity-20 blur-xl" />

      {/* Center Card - slim navbar */}
      <div
        className={`relative max-w-lg w-[85%] mx-auto transition-all duration-700 ${
          isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="rounded-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#E8F594] via-[#F5B8C8] to-[#97BDFC] shadow-lg shadow-black/10">
          <div className="flex items-center justify-between gap-4">
            {/* 折叠生境按钮 */}
            <button
              onClick={() => router.push('/about')}
              className="group relative flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-black text-white text-xs md:text-sm font-medium tracking-[0.15em] uppercase
                transition-all duration-300 hover:scale-105 active:scale-95
                shadow-[0_0_12px_2px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.4)]"
            >
              <span className="relative z-10 flex flex-col gap-[3px]">
                <span className="block w-3.5 h-[1.5px] bg-white" />
                <span className="block w-3.5 h-[1.5px] bg-white" />
                <span className="block w-3.5 h-[1.5px] bg-white" />
              </span>
              <span className="relative z-10">折叠生境</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D7E294] via-[#EAB8C2] to-[#87ACDC] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            {/* ATB.STUDIO 居中 */}
            <div className="flex items-center">
              <h1
                className="text-base md:text-lg font-bold tracking-tight text-black"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                ATB.STUDIO
              </h1>
            </div>

            {/* Menu 按钮 */}
            <button
              onClick={openMenu}
              className="group relative flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-black text-white text-xs md:text-sm font-medium tracking-[0.15em] uppercase
                transition-all duration-300 hover:scale-105 active:scale-95
                shadow-[0_0_12px_2px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.4)]"
            >
              <span className="relative z-10">Menu</span>
              <span className="relative z-10 flex flex-col gap-[3px]">
                <span className="block w-3.5 h-[1.5px] bg-white" />
                <span className="block w-3.5 h-[1.5px] bg-white" />
                <span className="block w-3.5 h-[1.5px] bg-white" />
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D7E294] via-[#EAB8C2] to-[#87ACDC] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom left 
      <div className="absolute bottom-8 left-8 text-xs text-black/20 tracking-wider font-mono">
        &copy; 2024 / 2025
      </div>*/}

      {/* Bottom right 
      <div className="absolute bottom-8 right-8 flex items-center gap-2 text-xs text-black/20 tracking-wider">
        <span className="w-6 h-[1px] bg-black/20" />
        <span className="font-mono text-[10px]">ATB</span>
      </div>*/}

      {/* ===== MAGAZINE-STYLE MENU OVERLAY ===== */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
      </div>

      {/* Panel */}
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
          style={{
            background: "linear-gradient(180deg, #fafafa 0%, #f0f0f0 30%, #e8e8e8 70%, #e0e0e0 100%)"
          }}
        >
          {/* ========== SCROLLABLE CONTENT ========== */}
          <div className="overflow-y-auto max-h-[88vh] rounded-2xl">
            <div className="p-0">
              {/* ---- HEADER ---- */}
              <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-black/5 px-5 md:px-7 py-4 flex items-center justify-between">
                <span
                  className="text-sm font-bold tracking-tight"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
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

              {/* ---- FEATURED SHOWCASE ---- */}
              <div className="px-5 md:px-7 pt-6 pb-4">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] flex-1 bg-black/5" />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-black/25 font-medium">Featured Work</span>
                  <div className="h-[1px] flex-1 bg-black/5" />
                </div>

                {/* Featured Card */}
                <div className="relative rounded-xl overflow-hidden" style={{ backgroundColor: getAccentBg(featuredIndex) }}>
                  <div className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: `radial-gradient(circle at 70% 30%, ${getAccentBg(featuredIndex)} 0%, transparent 60%),
                        repeating-linear-gradient(-45deg, transparent, transparent 25px, rgba(0,0,0,0.03) 25px, rgba(0,0,0,0.03) 26px)`,
                    }}
                  />

                  <div className="relative p-5 md:p-7 flex flex-col md:flex-row md:items-end md:justify-between gap-4 min-h-[160px]">
                    <div>
                      {/* Decorative vertical label */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-6 bg-black/20 rounded-full" />
                        <span className="text-[8px] tracking-[0.35em] uppercase text-black/40 font-medium">Selected</span>
                      </div>
                      <h2
                        className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter leading-tight text-black"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {featured.title}
                      </h2>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[10px] font-mono tracking-wider text-black/50">{featured.year}</span>
                        <span className="text-black/20">·</span>
                        <span className="text-[10px] tracking-wider text-black/50">{featured.category}</span>
                      </div>
                      <p className="mt-2 text-[11px] text-black/40 leading-relaxed max-w-md line-clamp-2">
                        {featured.description}
                      </p>
                    </div>

                    {/* Right side: number pagination + action */}
                    <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-2">
                      {/* Number carousel */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setFeaturedIndex((featuredIndex - 1 + projects.length) % projects.length)}
                          className="w-5 h-5 rounded-full bg-black/10 hover:bg-black/20 transition-colors flex items-center justify-center"
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M5.5 1.5L3 4L5.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <div className="flex items-center gap-1">
                          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                            <button
                              key={i}
                              onClick={() => setFeaturedIndex(i)}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                i === featuredIndex
                                  ? "bg-black scale-125"
                                  : "bg-black/20 hover:bg-black/40"
                              }`}
                            />
                          ))}
                        </div>
                        <button
                          onClick={() => setFeaturedIndex((featuredIndex + 1) % projects.length)}
                          className="w-5 h-5 rounded-full bg-black/10 hover:bg-black/20 transition-colors flex items-center justify-center"
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M2.5 1.5L5 4L2.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          closeMenu();
                          router.push(`/project/${featured.id}`);
                        }}
                        className="text-[10px] tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors flex items-center gap-1 group"
                      >
                        View Project
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---- ALL WORKS SECTION ---- */}
              <div className="px-5 md:px-7 pb-4">
                {/* Section label */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-black/30" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-medium">Works</span>
                  <div className="flex-1 h-[1px] bg-black/10" />
                  <span className="text-[10px] font-mono text-black/20">{projects.length}</span>
                </div>

                {/* Irregular Grid Layout - Inspired by Twomuch style */}
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -left-2 w-16 h-16 rounded-full bg-[#D7E294]/30 blur-xl" />
                  <div className="absolute top-1/2 -right-4 w-20 h-20 rounded-full bg-[#EAB8C2]/30 blur-xl" />

                  {/* Main irregular grid */}
                  <div className="grid grid-cols-4 gap-2 md:gap-3">
                    {/* Row 1 - varying sizes */}
                    <button
                      className="col-span-2 row-span-2 aspect-[3/4] rounded-lg bg-[#D7E294] hover:bg-[#E8F594] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/1`); }}
                    >
                      <span className="text-black/70 font-bold text-sm md:text-base text-center px-2">东方钿语</span>
                      <div className="w-4 h-[2px] bg-black/30 mt-2 group-hover:w-6 transition-all" />
                    </button>
                    <button
                      className="col-span-1 row-span-1 aspect-square rounded-lg bg-[#EAB8C2] hover:bg-[#F5B8C8] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/2`); }}
                    >
                      <span className="text-black/70 font-bold text-xs text-center px-1">汴河序</span>
                    </button>
                    <button
                      className="col-span-1 row-span-1 aspect-square rounded-lg bg-[#87ACDC] hover:bg-[#97BDFC] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/3`); }}
                    >
                      <span className="text-black/70 font-bold text-[10px] text-center px-1 leading-tight">云脉藏纹</span>
                    </button>

                    {/* Row 2 */}
                    <button
                      className="col-span-1 row-span-1 aspect-square rounded-lg bg-[#E77C49] hover:bg-[#F78C59] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/4`); }}
                    >
                      <span className="text-white font-bold text-xs text-center px-1">朱翠</span>
                    </button>
                    <button
                      className="col-span-1 row-span-1 aspect-square rounded-lg bg-[#D7E294] hover:bg-[#E8F594] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/5`); }}
                    >
                      <span className="text-black/70 font-bold text-xs text-center px-1">竹韵千年</span>
                    </button>
                    <button
                      className="col-span-2 row-span-1 aspect-[3/2] rounded-lg bg-[#EAB8C2] hover:bg-[#F5B8C8] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/6`); }}
                    >
                      <span className="text-black/70 font-bold text-sm text-center px-2">唐宫往事</span>
                    </button>

                    {/* Row 3 */}
                    <button
                      className="col-span-1 row-span-2 aspect-[3/4] rounded-lg bg-[#87ACDC] hover:bg-[#97BDFC] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/7`); }}
                    >
                      <span className="text-white font-bold text-sm md:text-base text-center px-2">Warm Weave</span>
                      <div className="w-4 h-[2px] bg-white/50 mt-2 group-hover:w-6 transition-all" />
                    </button>
                    <button
                      className="col-span-1 row-span-1 aspect-square rounded-lg bg-[#E77C49] hover:bg-[#F78C59] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/8`); }}
                    >
                      <span className="text-white font-bold text-xs text-center px-1">movestep</span>
                    </button>
                    <button
                      className="col-span-1 row-span-1 aspect-square rounded-lg bg-[#D7E294] hover:bg-[#E8F594] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/9`); }}
                    >
                      <span className="text-black/70 font-bold text-xs text-center px-1">我的版画师</span>
                    </button>
                    <button
                      className="col-span-1 row-span-1 aspect-square rounded-lg bg-[#EAB8C2] hover:bg-[#F5B8C8] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/10`); }}
                    >
                      <span className="text-black/70 font-bold text-xs text-center px-1">AI智能衣橱</span>
                    </button>

                    {/* Row 4 */}
                    <button
                      className="col-span-2 row-span-1 aspect-[3/2] rounded-lg bg-[#87ACDC] hover:bg-[#97BDFC] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/11`); }}
                    >
                      <span className="text-white font-bold text-sm text-center px-2">花伴</span>
                    </button>
                    <button
                      className="col-span-1 row-span-1 aspect-square rounded-lg bg-[#E77C49] hover:bg-[#F78C59] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/12`); }}
                    >
                      <span className="text-white font-bold text-xs text-center px-1 leading-tight">dream land</span>
                    </button>
                    <button
                      className="col-span-1 row-span-1 aspect-square rounded-lg bg-[#D7E294] hover:bg-[#E8F594] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/13`); }}
                    >
                      <span className="text-black/70 font-bold text-xs text-center px-1 leading-tight">生命循环</span>
                    </button>

                    {/* Row 5 - accent block */}
                    <button
                      className="col-span-3 row-span-2 aspect-[3/2] rounded-lg bg-black hover:bg-black/90 transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/14`); }}
                    >
                      <span className="text-white font-bold text-base md:text-lg text-center px-2">咸水谣 · 海上集</span>
                      <div className="w-8 h-[2px] bg-white/50 mt-2 group-hover:w-10 transition-all" />
                    </button>
                    <button
                      className="col-span-1 row-span-2 aspect-[3/4] rounded-lg bg-[#EAB8C2] hover:bg-[#F5B8C8] transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/15`); }}
                    >
                      <span className="text-black/70 font-bold text-sm text-center px-1">西湖入境</span>
                    </button>

                    {/* Row 6 */}
                    <button
                      className="col-span-4 row-span-1 aspect-[4/1] rounded-lg bg-[#87ACDC] hover:bg-[#97BDFC] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/16`); }}
                    >
                      <span className="text-white font-bold text-sm text-center">归青</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* ---- FOOTER ---- */}
              <div className="px-5 md:px-7 py-5 mt-3 border-t border-black/5">
                <div className="flex items-center justify-between text-[9px] text-black/20 tracking-wider">
                  <span>&copy; 2024 / 2025 ATB.STUDIO</span>
                  <span className="flex items-center gap-3">
                    <span className="hover:text-black/40 transition-colors cursor-pointer">Instagram</span>
                    <span className="hover:text-black/40 transition-colors cursor-pointer">Email</span>
                    <span className="hover:text-black/40 transition-colors cursor-pointer">Behance</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </main>
  );
}
