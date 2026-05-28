'use client';
import Link from 'next/link';

export default function MobileSection3() {
  return (
    <section className="mobile-section3">
      <div className="mobile-container">
        {/* 头部 */}
        <div className="mobile-header">
          <img src="/atb.png" alt="ATB Logo" className="mobile-logo" />
          <div className="mobile-header-text">
            <h2 className="mobile-program-title">MSc Arts Technology and Business</h2>
            <p className="mobile-school-name">香港岭南大学商学院</p>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="mobile-divider"></div>

        {/* 正文 */}
        <div className="mobile-text">
          <p className="mobile-paragraph">
            本次「折叠生境（Biotope）：交互艺术感知场」线上毕业展，是香港岭南大学商学院<strong>2025级MSc Arts Technology and Business（MSc ATB）</strong>学生跨学科学习成果的集中呈现。
          </p>
          <p className="mobile-paragraph">
            <strong>MSc ATB</strong>是香港同时涵盖艺术技术与商业领域的跨学科硕士课程，在此次线上展中，可以感受到多学科背景的学生打破传统静态陈列范式，用多元表现手法进行创作，打造的数字艺术场域。
          </p>
        </div>

        {/* 分隔线 */}
        <div className="mobile-divider"></div>

        {/* 统计数据 */}
        <div className="mobile-stats">
          <div className="mobile-stat">
            <span className="mobile-stat-number">20+</span>
            <span className="mobile-stat-label">艺术作品</span>
          </div>
          <div className="mobile-stat">
            <span className="mobile-stat-number">4</span>
            <span className="mobile-stat-label">主题展区</span>
          </div>
          <div className="mobile-stat">
            <span className="mobile-stat-number">2026</span>
            <span className="mobile-stat-label">毕业年度</span>
          </div>
        </div>

        {/* UNFOLD THE BIOTOPE 按钮 - 直接复制桌面端代码 */}
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <Link 
            href="/" 
            style={{
              textDecoration: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #B8E65C 0%, #FF8FB3 50%, #6BB3FA 100%)',
              boxShadow: '0 4px 20px rgba(184, 230, 92, 0.4), 0 8px 40px rgba(255, 143, 179, 0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(184, 230, 92, 0.5), 0 12px 50px rgba(255, 143, 179, 0.4), inset 0 1px 0 rgba(255,255,255,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(184, 230, 92, 0.4), 0 8px 40px rgba(255, 143, 179, 0.3), inset 0 1px 0 rgba(255,255,255,0.5)';
            }}
          >
            <span style={{
              fontFamily: '"HarmonyOS Sans", sans-serif',
              fontWeight: '900',
              fontSize: '1.2rem',
              lineHeight: '1',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              whiteSpace: 'nowrap',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            }}>UNFOLD THE BIOTOPE!</span>
            <span style={{
              fontSize: '1.5rem',
              color: '#ffffff',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              animation: 'bounceArrow 1.5s ease-in-out infinite',
            }}>→</span>
          </Link>
          <style>{`
            @keyframes bounceArrow {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(8px); }
            }
          `}</style>
        </div>
      </div>

      <style>{`
        .mobile-section3 {
          position: relative;
          min-height: 100vh;
          padding: 50px 20px;
          background: rgba(255, 255, 255, 0.75);
        }

        .mobile-container {
          max-width: 100%;
          margin: 0 auto;
        }

        .mobile-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 30px;
          text-align: center;
        }

        .mobile-logo {
          width: 120px;
          height: auto;
          margin-bottom: 15px;
        }

        .mobile-header-text {
          text-align: center;
        }

        .mobile-program-title {
          font-family: 'SiyinSong', 'Noto Serif SC';
          font-size: 1.1rem;
          color: #333;
          margin: 0 0 5px;
          line-height: 1.5;
        }

        .mobile-school-name {
          font-family: 'HarmonyOS Sans', 'Helvetica Neue';
          font-size: 0.9rem;
          color: #666;
          margin: 0;
        }

        .mobile-divider {
          width: 100%;
          height: 1px;
          background: #ddd;
          margin: 25px 0;
        }

        .mobile-text {
          padding: 0 5px;
        }

        .mobile-paragraph {
          font-family: 'SiyinSong', 'Noto Serif SC';
          font-size: 0.95rem;
          color: #333;
          line-height: 2;
          margin-bottom: 20px;
          text-align: justify;
        }

        .mobile-stats {
          display: flex;
          justify-content: space-around;
          padding: 20px 0;
        }

        .mobile-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mobile-stat-number {
          font-family: 'HarmonyOS Sans', 'Helvetica Neue';
          font-size: 2rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 5px;
        }

        .mobile-stat-label {
          font-family: 'SiyinSong', 'Noto Serif SC';
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
    </section>
  );
}
