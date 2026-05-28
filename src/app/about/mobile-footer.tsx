'use client';

export default function MobileFooter() {
  return (
    <footer className="mobile-footer">
      <div className="mobile-footer-container">
        {/* 主办方 */}
        <div className="mobile-footer-group">
          <span className="mobile-footer-label">主办方：</span>
          <div className="mobile-logo-column">
            <img src="/ZB1.png" alt="主办方1" className="mobile-footer-logo" />
            <img src="/ZB2.png" alt="主办方2" className="mobile-footer-logo" />
            <img src="/ZB3.png" alt="主办方3" className="mobile-footer-logo" />
          </div>
        </div>

        {/* 承办方 */}
        <div className="mobile-footer-group">
          <span className="mobile-footer-label">承办方：</span>
          <div className="mobile-logo-row">
            <img src="/CB.png" alt="承办方" className="mobile-footer-logo" />
          </div>
        </div>

        {/* 协办方 */}
        <div className="mobile-footer-group">
          <span className="mobile-footer-label">协办方：</span>
          <div className="mobile-footer-xb">
            <img src="/XB.png" alt="协办方" className="mobile-footer-logo" />
            <img src="/XB2.png" alt="国富量子艺术有限公司" className="mobile-footer-logo mobile-footer-logo-xb2" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .mobile-footer {
          position: relative;
          background: rgba(255, 255, 255, 0.85);
          padding: 30px 20px;
          border-bottom: 1px solid #000;
        }

        .mobile-footer-container {
          max-width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mobile-footer-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }

        .mobile-footer-label {
          font-family: 'SiyinSong';
          font-size: 0.9rem;
          color: #333;
          margin-bottom: 10px;
        }

        .mobile-logo-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .mobile-logo-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .mobile-footer-logo {
          height: 35px;
          opacity: 0.9;
        }

        .mobile-logo-divider {
          width: 1px;
          height: 25px;
          background: #ccc;
        }

        .mobile-footer-xb {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .mobile-footer-logo-xb2 {
          height: 35px;           /* 调整高度 */
          margin-top: 0;          /* 与前一个logo保持间距 */
        }

        .mobile-footer-text {
          font-family: 'SiyinSong';
          font-size: 0.8rem;
          color: #333;
          white-space: nowrap;
        }
      `}</style>
    </footer>
  );
}
