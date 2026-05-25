'use client';

export default function MobileSection1() {
  return (
    <section className="mobile-section1">
      <div className="mobile-container">
        {/* 标题区 */}
        <div className="mobile-title-section">
          <div className="mobile-about-bg">ABOUT</div>
          <h2 className="mobile-main-title">关于展览</h2>
          <div className="mobile-divider"></div>
        </div>

        {/* 生境介绍 */}
        <div className="mobile-biotope">
          <div className="mobile-biotope-title">
            <span className="mobile-cn">「生境」</span>
            <span className="mobile-en">(Biotope)</span>
          </div>
          <p className="mobile-biotope-text">是充满生命力的所在</p>
          <p className="mobile-biotope-text">是荒野中最小的生命单元</p>
        </div>

        {/* 正文区 */}
        <div className="mobile-content">
          <p className="mobile-paragraph">
            Biotope 曾是荒野中生命存续的最小单元，当艺术科技渗透进展架与纤维，我们在此构建了一个数字生境。它不仅是作品的堆叠，更是虚实交织、自我呼吸的活态场域。
          </p>
          <p className="mobile-paragraph">
            本次线上展是岭南大学商学院 2025届 ATB学生跨学科探索的一次凝结——在这里，你可以窥见：如何在数字世界里创造生命、让作品自己说话？如何在虚无的空间里，用触感、声音、光影织造出专属的生命体验？
          </p>
        </div>
      </div>

      <style jsx>{`
        .mobile-section1 {
          position: relative;
          min-height: 100vh;
          padding: 60px 20px 40px;
          background: rgba(255, 255, 255, 0.75);
        }

        .mobile-container {
          max-width: 100%;
          margin: 0 auto;
        }

        .mobile-title-section {
          text-align: center;
          margin-bottom: 40px;
        }

        .mobile-about-bg {
          font-family: 'HarmonyOS Sans';
          font-size: 4rem;
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1px #ddd;
          line-height: 0.85;
          letter-spacing: -1px;
          margin-bottom: 10px;
        }

        .mobile-main-title {
          font-family: 'SiyinSong', 'Noto Serif SC';
          font-size: 1.8rem;
          color: #333;
          margin: 0;
        }

        .mobile-divider {
          width: 60px;
          height: 2px;
          background: #333;
          margin: 20px auto;
        }

        .mobile-biotope {
          text-align: center;
          margin-bottom: 30px;
        }

        .mobile-biotope-title {
          display: flex;
          justify-content: center;
          align-items: baseline;
          gap: 5px;
          margin-bottom: 15px;
        }

        .mobile-cn {
          font-family: 'SiyinSong', 'Noto Serif SC';
          font-size: 1.5rem;
          color: #E77C49;
        }

        .mobile-en {
          font-family: 'Gentium Plus', 'Georgia';
          font-size: 1rem;
          color: #666;
          font-style: italic;
        }

        .mobile-biotope-text {
          font-family: 'SiyinSong', 'Noto Serif SC';
          font-size: 1rem;
          color: #333;
          margin: 8px 0;
          line-height: 1.8;
        }

        .mobile-content {
          padding: 0 10px;
        }

        .mobile-paragraph {
          font-family: 'SiyinSong', 'Noto Serif SC';
          font-size: 0.95rem;
          color: #333;
          line-height: 2;
          margin-bottom: 20px;
          text-align: justify;
        }
      `}</style>
    </section>
  );
}
