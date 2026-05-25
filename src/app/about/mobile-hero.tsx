'use client';

import { useState, useEffect } from 'react';

export default function MobileHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="mobile-hero">
      <div className="mobile-hero-container">
        <div className={`mobile-hero-content ${loaded ? 'visible' : ''}`}>
          <h1 className="mobile-hero-title">折叠生境</h1>
          <h2 className="mobile-hero-subtitle">FOLD BIOTOPE</h2>
          <p className="mobile-hero-desc">The Boundless Interactive Perception Field</p>
          <p className="mobile-hero-info">MSc ATB 2025 线上毕业展</p>
        </div>
      </div>

      <style jsx>{`
        .mobile-hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.7);
        }

        .mobile-hero-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-hero-content {
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .mobile-hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-hero-title {
          font-family: 'SiyinSong', 'Noto Serif SC';
          font-size: 2.5rem;
          color: #333;
          margin: 0 0 10px;
        }

        .mobile-hero-subtitle {
          font-family: 'HarmonyOS Sans', 'Helvetica Neue';
          font-size: 1.1rem;
          color: #555;
          letter-spacing: 3px;
          margin: 0 0 15px;
        }

        .mobile-hero-desc {
          font-family: 'Gentium Plus', 'Georgia';
          font-size: 0.95rem;
          color: #666;
          font-style: italic;
          margin: 0 0 20px;
        }

        .mobile-hero-info {
          font-family: 'HarmonyOS Sans', 'Helvetica Neue';
          font-size: 0.85rem;
          color: #888;
          letter-spacing: 2px;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
