'use client';

/* ============================================
   Footer - 页尾组件
   位置：正常跟随在 section3 下方
   内容：主办方、承办方、协办方 logo 横向排列
   ============================================ */
export default function Footer() {
  return (
    <>
      <footer className="landing2-footer">
        <div className="footer-container">
          {/* ========== 主办方 ========== */}
          <div className="footer-group">
            <span className="footer-label">主办方：</span>
            <div className="logo-group">
              {/* ★ ZB1.png - 第一个主办方logo */}
              <img src="/ZB1.png" alt="主办方1" className="footer-logo footer-logo-ZB1" />
              <div className="logo-divider"></div>  {/* ★ ZB1与ZB2之间的分隔线 */}
              {/* ★ ZB2.png - 第二个主办方logo */}
              <img src="/ZB2.png" alt="主办方2" className="footer-logo footer-logo-ZB2" />
              {/* ★ ZB3.png - 第三个主办方logo */}
              <img src="/ZB3.png" alt="主办方3" className="footer-logo footer-logo-ZB3" />
            </div>
          </div>
          
          {/* ========== 承办方 ========== */}
          <div className="footer-group">
            <span className="footer-label">承办方：</span>
            <div className="logo-group">
              {/* ★ CB.png - 承办方logo */}
              <img src="/CB.png" alt="承办方" className="footer-logo footer-logo-CB" />
            </div>
          </div>
          
          {/* ========== 协办方 ========== */}
          <div className="footer-group">
            <span className="footer-label">协办方：</span>
            <div className="logo-group">
              {/* ★ XB.png - 协办方logo */}
              <img src="/XB.png" alt="协办方" className="footer-logo footer-logo-XB" />
              {/* 国富量子艺术有限公司 */}
              <img src="/XB2.png" alt="国富量子艺术有限公司" className="footer-logo footer-logo-XB2" />
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        /* ============================================
           引入自定义字体 - SiyinSong
           ============================================ */
        @font-face {
          font-family: 'SiyinSong';                  /* ★ 字体名称：自定义名称 */
          src: url('/fonts/SiyinSong.ttf') format('truetype');  /* ★ 字体文件路径 */
          font-weight: normal;                       /* ★ 字重：正常 */
          font-style: normal;                        /* ★ 字体样式：正常 */
          font-display: swap;                        /* ★ 字体显示策略：交换显示 */
        }

        /* ============================================
           页尾容器 - .landing2-footer
           ============================================ */
        .landing2-footer {
          width: 100%;                              /* ★ 宽度：设置为100%表示占满整个屏幕宽度 */
                                                    /*   可改为具体数值如 1200px，或百分比 */
          background: #ffffff;                      /* ★ 背景颜色：白色，可改为其他颜色如 #f5f5f5 */
          padding: 1.5rem 0;                        /* ★ 上下内边距：调整footer整体高度 */
                                                    /*   格式：padding: 上边距 右边距 下边距 左边距 */
                                                    /*   示例：padding: 2rem 1rem; 表示上下2rem，左右1rem */
          border-bottom: 1px solid #000;            /* ★ 底部边框线：粗细1px，黑色实线 */
                                                    /*   调整粗细：改 1px 为 2px */
                                                    /*   调整颜色：改 #000 为 #ccc */
        }

        /* ============================================
           内容容器 - .footer-container
           ============================================ */
        .footer-container {
          max-width: 1400px;                        /* ★ 最大宽度：内容区域的最大宽度 */
                                                    /*   改小：如 1200px，内容会变窄 */
                                                    /*   改大：如 1600px，内容会变宽 */
          margin: 0 auto;                           /* ★ 水平居中：上下外边距0，左右自动 */
                                                    /*   左对齐：改为 margin: 0 0 0 auto; */
                                                    /*   右对齐：改为 margin: 0 auto 0 0; */
          padding: 0 2rem;                          /* ★ 左右内边距：内容与边缘的距离 */
                                                    /*   改大：如 0 3rem; 内容会向内缩 */
          display: flex;                            /* ★ 布局方式：flex横向排列 */
          align-items: center;                      /* ★ 垂直对齐方式：居中 */
                                                    /*   顶部对齐：改为 flex-start */
                                                    /*   底部对齐：改为 flex-end */
          justify-content: center;                  /* ★ 水平对齐方式：居中 */
                                                    /*   左对齐：改为 flex-start */
                                                    /*   右对齐：改为 flex-end */
          gap: 3rem;                                /* ★ 组之间间距：主办方、承办方、协办方之间的距离 */
                                                    /*   改大：如 4rem; 间距变大 */
                                                    /*   改小：如 2rem; 间距变小 */
          flex-wrap: wrap;                          /* ★ 自动换行：屏幕变窄时自动换行 */
        }

        /* ============================================
           每组容器（标签+logo） - .footer-group
           ============================================ */
        .footer-group {
          display: flex;                            /* ★ 标签与logo同行显示 */
          align-items: center;                      /* ★ 垂直居中对齐 */
                                                    /*   顶部对齐：flex-start */
                                                    /*   底部对齐：flex-end */
          gap: 0.5rem;                             /* ★ 标签与logo之间的间距 */
                                                    /*   改大：如 1rem; 间距变大 */
        }

        /* ============================================
           标签样式 - .footer-label (如"主办方："、"承办方：")
           ============================================ */
        .footer-label {
          font-size: 1.15rem;                        /* ★ 字体大小：0.9rem 约等于 14.4px */
                                                    /*   放大：如 1rem / 1.2rem */
                                                    /*   缩小：如 0.8rem / 0.75rem */
          font-family: 'SiyinSong';  /* ★ 字体样式：思源宋体 */
          font-weight: 500;                        /* ★ 字重：粗细程度 */
                                                    /*   更粗：600 / 700 / bold */
                                                    /*   更细：400 / normal / 300 */
          color: #000;                             /* ★ 字体颜色：黑色 */
                                                    /*   灰色：#333 / #666 / #999 */
                                                    /*   其他颜色：#E77C49（橙色）等 */
          white-space: nowrap;                      /* ★ 不换行：标签保持在同一行 */
          /* ★ 如需调整标签位置，可添加以下属性： */
          /* margin-top: 10px;    向上移动 */
          /* margin-bottom: 10px; 向下移动 */
          /* margin-left: 10px;   向右移动 */
          /* margin-right: 10px;  向左移动 */
        }

        /* ============================================
           Logo组容器 - .logo-group
           ============================================ */
        .logo-group {
          display: flex;                            /* ★ Logo横向排列 */
          align-items: center;                      /* ★ 垂直居中 */
          gap: 1rem;                               /* ★ Logo之间的间距 */
                                                    /*   放大：1.5rem */
                                                    /*   缩小：0.5rem */
        }

        /* ============================================
           Logo之间的分隔线 - .logo-divider
           ============================================ */
        .logo-divider {
          width: 1px;                              /* ★ 分隔线宽度：1px */
                                                   /*   改宽：2px */
          height: 25px;                            /* ★ 分隔线高度 */
                                                   /*   改高：30px / 改矮：20px */
          background-color: #ddd;                  /* ★ 分隔线颜色：灰色 */
                                                   /*   改颜色：#000（黑色）/ #ccc（浅灰） */
          flex-shrink: 0;                          /* ★ 不缩小 */
        }

        /* ============================================
           Logo 图片样式 - .footer-logo (所有logo共用的基础样式)
           ============================================ */
        .footer-logo {
          height: 42px;                             /* ★ Logo高度：控制图片大小（所有logo默认值） */
                                                    /*   放大：50px / 60px */
                                                    /*   缩小：35px / 30px */
          width: auto;                              /* ★ 宽度自动：保持图片比例 */
                                                    /*   如需固定宽度：改为具体值如 100px */
          object-fit: contain;                      /* ★ 图片适应方式：保持完整比例 */
                                                    /*   cover：覆盖容器，可能裁剪 */
                                                    /*   fill：拉伸填满，可能变形 */
          opacity: 0.95;                            /* ★ 透明度：默认稍透明 */
                                                    /*   完全不透明：1 */
                                                    /*   更透明：0.8 / 0.5 */
          transition: opacity 0.3s ease;            /* ★ 悬停过渡效果 */
        }

        .footer-logo:hover {
          opacity: 1;                               /* ★ 鼠标悬停时完全不透明 */
        }

        /* ============================================
           ZB1.png - 第一个主办方logo 单独样式
           ============================================ */
        .footer-logo-ZB1 {
          /* ★ 以下属性可单独调整 ZB1.png */
          height: 33px;        /*调整高度（覆盖默认值） */
          /* width: auto;         调整宽度 */
          /* margin-top: 0;       向上移动（正值向上，负值向下） */
          /* margin-bottom: 0;    向下移动 */
          /* margin-left: 0;      向右移动 */
          /* margin-right: 0;     向左移动 */
          //transform: scale(0.8);  /* 放大/缩小 */（如 scale(1.1) 放大1.1倍）
        }

        /* ============================================
           ZB2.png - 第二个主办方logo 单独样式
           ============================================ */
        .footer-logo-ZB2 {
          /* ★ 以下属性可单独调整 ZB2.png */
          height: 33px;        /*调整高度（覆盖默认值） */
          /* width: auto;         调整宽度 */
          /* margin-top: 0;       向上移动 */
          /* margin-bottom: 0;    向下移动 */
          /* margin-left: 0;      向右移动 */
          /* margin-right: 0;     向左移动 */
          //transform: scale(0.75); 放大/缩小
        }

        /* ============================================
           ZB3.png - 第三个主办方logo 单独样式
           ============================================ */
        .footer-logo-ZB3 {
          /* ★ 以下属性可单独调整 ZB3.png */
           height: 33px;        /*调整高度（覆盖默认值） */
          /* width: auto;         调整宽度 */
          /* margin-top: 0;       向上移动 */
           margin-bottom: -0.2rem;   /* 向下移动 */
          /* margin-left: 0;      向右移动 */
          /* margin-right: 0;     向左移动 */
          //transform: scale(0.8);  /* 放大/缩小 */
        }

        /* ============================================
           CB.png - 承办方logo 单独样式
           ============================================ */
        .footer-logo-CB {
          /* ★ 以下属性可单独调整 CB.png */
          height: 35px;        /*调整高度（覆盖默认值） */
          /* width: auto;         调整宽度 */
          /* margin-top: 0;       向上移动 */
          /* margin-bottom: 0;    向下移动 */
          /* margin-left: 0;      向右移动 */
          /* margin-right: 0;     向左移动 */
          /* transform: scale(1); 放大/缩小 */
        }

        /* ============================================
           XB.png - 协办方logo 单独样式
           ============================================ */
        .footer-logo-XB {
          /* ★ 以下属性可单独调整 XB.png */
          height: 35px;        /*调整高度（覆盖默认值） */
          /* width: auto;         调整宽度 */
          /* margin-top: 0;       向上移动 */
           margin-bottom: 0.2rem;  /*  向下移动 */
          /* margin-left: 0;      向右移动 */
          /* margin-right: 0;     向左移动 */
          /* transform: scale(1); 放大/缩小 */
        }

        /* ============================================
           XB2.png - 国富量子艺术有限公司logo 单独样式
           ============================================ */
        .footer-logo-XB2 {
          /* ★ 以下属性可单独调整 XB2.png */
          height: 35px;           /* 调整高度 */
          margin-bottom: 0.2rem;  /* 向下移动 */
          margin-left: 1rem;      /* 与前一个logo保持间距 */
        }

        /* ============================================
           协办方文字样式 - .footer-text-partner
           ============================================ */
        .footer-text-partner {
          font-size: 0.9rem;                         /* 字体大小 */
          font-family: 'SiyinSong';                  /* 字体样式：思源宋体 */
          font-weight: 500;                          /* 字重 */
          color: #333;                               /* 字体颜色：深灰色 */
          white-space: nowrap;                       /* 不换行 */
          margin-bottom: 0.2rem;                     /* 向下对齐 */
        }

        /* ============================================
           响应式设计（根据屏幕宽度自动调整）
           ============================================ */
        @media (max-width: 1024px) {
          .footer-container {
            gap: 2rem;                              /* 中等屏幕：组间距缩小 */
          }
          
          .footer-logo {
            height: 36px;                           /* 中等屏幕：Logo缩小 */
          }
        }

        @media (max-width: 768px) {
          .landing2-footer {
            padding: 1rem 0;                        /* 平板：footer高度减小 */
          }
          
          .footer-container {
            padding: 0 1rem;                        /* 平板：左右边距减小 */
            gap: 1.5rem;                            /* 平板：组间距减小 */
          }
          
          .footer-label {
            font-size: 0.85rem;                     /* 平板：标签字号减小 */
          }
          
          .footer-logo {
            height: 32px;                           /* 平板：Logo缩小 */
          }
          
          .logo-group {
            gap: 0.8rem;                            /* 平板：Logo间距减小 */
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            gap: 1rem;                              /* 手机：组间距减小 */
          }
          
          .footer-label {
            font-size: 0.8rem;                      /* 手机：标签字号减小 */
          }
          
          .footer-logo {
            height: 26px;                           /* 手机：Logo缩小 */
          }
          
          .logo-group {
            gap: 0.6rem;                            /* 手机：Logo间距减小 */
          }
        }
      `}</style>
    </>
  );
}
