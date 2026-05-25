'use client';

export default function Section1() {
  return (
    <section className="section1-home">
      <div className="layout-wrapper">
        {/* 左侧垂直侧边栏 */}
        <div className="vertical-sidebar">
          <div className="vertical-line-top"></div>
          <div className="vertical-line-bottom"></div>
          <div className="vertical-text">
            Arts Technology & Business
          </div>
          <div className="vertical-dot"></div>
        </div>

        {/* 主内容区 */}
        <div className="main-content">
          {/* 左侧标题区 */}
          <div className="left-column">
            <div className="title-wrapper">
              {/* 背景空心 ABOUT */}
              <div className="about-bg">ABOUT</div>
              
              {/* 主标题 */}
              <h2 className="main-title">关于展览</h2>
              
              {/* 分隔线 */}
              <div className="divider"></div>
            </div>
            
            {/* 生境子容器 - 可整体移动 */}
            <div className="biotope-container">
              {/* 标题容器 - 可调整整个标题行的位置 */}
              <div className="biotope-title-wrapper">
                <h3 className="biotope-title-cn">「生境」</h3>
                <h3 className="biotope-title-en">(Biotope)</h3>
              </div>
              <p className="biotope-text">是充满生命力的所在，</p>
              <p className="biotope-text">是荒野中最小的生命单元。</p>
            </div>
          </div>

          {/* 右侧正文区 */}
          <div className="right-column">
            <div className="right-content-inner">
              <p className="paragraph">
                Biotope 曾是荒野中生命存续的最小单元，当艺术科技渗透进展架与纤维，我们在此构建了一个数字生境。它不仅是作品的堆叠，更是虚实交织、自我呼吸的活态场域。
              </p>
              <p className="paragraph">
                本次展览以「折叠生境」为策展线索，将多元创作归纳为四大展区。每一次空间的 "折叠与展开"，都是一次新生境的开启，让风格迥异的作品在统一叙事中交织共生。
              </p>
              <p className="paragraph">
                作为 MSc ATB 毕业展览，我们打破静态陈列范式，以艺术与科技互为表里的创作，在这片数字生境中，生长出毕业创作的全新形态。
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&display=swap');

        /* 引入思源宋体 TTF 字体 */
        @font-face {
          font-family: 'SiyinSong';
          src: url('/fonts/SiyinSong.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'HarmonyOS Sans';
          src: url('/fonts/HarmonyOS_Sans_Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        .section1-home {
          background: rgba(255, 255, 255, 0.7);
          padding: 80px 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .layout-wrapper {
          display: flex;
          max-width: 1200px;
          width: 100%;
          position: relative;
          align-items: center;      /* 子元素垂直居中 */
          min-height: 80vh;         /* 设置最小高度，确保有足够空间居中 */
        }

        /* ============================================
           垂直侧边栏 - 手动调整指南
           ============================================ */

        /* 
         * 1. 整个侧边栏的上下左右位置移动
         * 调整方法：修改以下属性
         * - margin-top: 向下移动（正值）/ 向上移动（负值）
         * - margin-left: 向右移动（正值）/ 向左移动（负值）
         * - padding: 内边距调整
         */
        .vertical-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;              /* 元素之间的间距 */
          padding: 0 24px;        /* 左右内边距（上 右 下 左） */
          flex-shrink: 0;
          /* 位置微调示例： */
          /* margin-top: -80px; */ /* 向下移动80px */
          margin-left: -60px; /* 向左移动60px */
        }

        /* 
         * 2. 上段粗线调整
         * - width: 线条粗细（px）
         * - height: 线条长度（px）
         * - background: 线条颜色
         */
        .vertical-line-top {
          width: 1.5px;             /* 线条粗细：1.5px */
          height: 300px;          /* 线条长度：300px */
          background: #1a1a1a;    /* 线条颜色：纯黑 */
        }

        /* 
         * 3. 下段细线调整
         * - width: 线条粗细（px）
         * - height: 线条长度（px）
         * - background: 线条颜色
         */
        .vertical-line-bottom {
          width: 1px;             /* 线条粗细：1px */
          height: 80px;           /* 线条长度：80px */
          background: #e0e0e0;    /* 线条颜色：浅灰 */
        }

        /* 
         * 4. 垂直文字调整
         * - font-size: 文字大小
         * - letter-spacing: 字母间距
         * - color: 文字颜色
         */
        .vertical-text {
          writing-mode: vertical-lr;
          text-orientation: mixed;
          font-family: "HarmonyOS Sans";
          font-size: 0.6rem;      /* 文字大小 */
          letter-spacing: 1px;    /* 字母间距 */
          color: #cccccc;         /* 文字颜色 */
          line-height: 1.4;
        }

        /* 
         * 5. 底部黑色方块调整
         * - width/height: 方块大小
         * - background: 方块颜色
         */
        .vertical-dot {
          width: 8px;             /* 方块宽度 */
          height: 8px;            /* 方块高度 */
          background: #1a1a1a;    /* 方块颜色 */
        }

        /* 主内容区 */
        .main-content {
          display: flex;
          flex: 1;
          align-items: flex-start;   /* 改成顶部对齐，左右互不影响 */
          padding-right: 40px;
          margin-left: 60px;       /* 整体右移 */
        }

        /* 左侧标题区 */
        .left-column {
          position: relative;
          margin-left: -30px;      /* 左侧标题区单独左移 */
          flex-shrink: 0;          /* 左侧宽度固定，不收缩 */
          width: 45%;              /* 左侧固定宽度 */
        }

        .title-wrapper {
          position: relative;
          margin-bottom: 60px;
        }

        /* ============================================
           空心字 ABOUT - 调整指南
           ============================================ */
        .about-bg {
          position: absolute;
          top: -50px;              /* 垂直位置：正值向下，负值向上 */
          left: 4px;             /* 水平位置：正值向右，负值向左 */
          font-family: "Helvetica Neue";
          font-size: 8rem;  /* 字体大小 */
          font-weight: 700;        /* 字体粗细：数值越小越细 */
          color: transparent;      /* 必须保持 transparent 才能显示空心效果 */
          -webkit-text-stroke: 1px #d6d4d4ff;  /* 空心描边：数字越大边框越粗 */
          letter-spacing: -1px;    /* 字母间距：负值让字母更紧凑 */
          line-height: 0.85;       /* 行高：控制字母垂直间距 */
          pointer-events: none;
          z-index: 0;
        }

        /* ============================================
           中文标题 "关于展览" - 调整指南
           ============================================ */
        .main-title {
          position: relative;
          font-family: 'SiyinSong';
          font-size: 5rem;  /* 字体大小 */
          font-weight: 500;        /* 字体粗细：700=粗体 */
          color: #1a1a1a;          /* 字体颜色 */
          margin-top: 100px;        /* 往下移动：数值越大越靠下 */
          margin-bottom: 1px;     /* 距下方分隔线的距离 */
          z-index: 1;              /* 层级：必须大于0才能叠加在空心字上面 */
        }

        /* ============================================
           水平分隔线 - 调整指南
           ============================================ */
        .divider {
          width: 30%;             /* 线条长度：100%=横跨整个容器 */
          height: 1px;             /* 线条粗细：数值越大越粗 */
          background: #1a1a1a;     /* 线条颜色 */
          margin-top: 8px;        /* 距上方标题的距离 */
        }

        /* ============================================
           【生境子容器】 - 可整体移动
           ============================================ */
        .biotope-container {
          margin-top: 166px;        /* 垂直位置：正值向下，负值向上 */
          margin-left: -10px;          /* 水平位置：正值向右，负值向左 */
          margin-right: 0;         /* 右侧间距 */
          padding: 0;              /* 内边距 */
        }

        /* ============================================
           【标题容器】- 控制「生境」和「(Biotope)」的整体位置
           ============================================ */
        .biotope-title-wrapper {
          margin-bottom: 3px;     /* 容器下方间距：控制标题行与下方正文的距离 */
          margin-left: 0;           /* 水平位置：正值向右，负值向左 */
        }

        /* ============================================
           元素1：「生境」 - 中文标题
           ============================================ */
        .biotope-title-cn {
          font-family: 'SiyinSong';
          font-size: 1.6rem;       /* 字体大小：数值越大字越大 */
          font-weight: 400;        /* 字体粗细：400=正常，700=粗体 */
          color: #1a1a1a;          /* 字体颜色 */
          letter-spacing: 0.05em;  /* 字间距：数值越大间距越大 */
          display: inline;
          margin-right: 0px;       /* 与右边英文的间距 */
        }

        /* ============================================
           元素2：(Biotope) - 英文标题
           ============================================ */
        .biotope-title-en {
          font-family: "Noto Serif SC";
          font-size: 0.9rem;       /* 字体大小：数值越大字越大 */
          font-weight: 300;        /* 字体粗细：400=正常，700=粗体 */
          color: #68805eff;          /* 字体颜色 */
          letter-spacing: 0.01em;  /* 字间距：数值越大间距越大 */
          display: inline;
        }

        /* ============================================
           元素3、4：正文段落
           「是充满生命力的所在，」和「是荒野中最小的生命单元。」
           ============================================ */
        .biotope-text {
          font-family: 'SiyinSong';
          font-size: 1.1rem;         /* 字体大小：数值越大字越大 */
          font-weight: 400;        /* 字体粗细：400=正常，700=粗体 */
          color: #2a2a2aff;          /* 字体颜色 */
          letter-spacing: 0.03em;  /* 字间距：数值越大字之间距离越大 */
          line-height: 1;          /* 行高：数值越大行间距越大，建议1.8-2.2 */
          margin-bottom: 10px;     /* 段落间距：两段正文之间的距离 */
          margin-left: 14px;       /* 整体右移：数值越大越往右移（不要用空格，用这个） */
        }

        /* ============================================
           右侧正文区 - 只需要调整这里两个参数
           ============================================ */
        .right-column {
          padding-top: 40px;       /* 顶部内边距（上下位置） */
          flex: 1;                 /* 右侧占满剩余空间 */
          margin-left: 20px;       /* 左右之间的基础间距（不要动） */
        }

        /* 右侧文本框 - 只控制这两个参数即可 */
        .right-content-inner {
          width: 110%;              /* 【文本框宽度】：数值越大，一行字数越多 */
          margin-left: 0px;       /* 【文本框左右位置】：数值越大越靠右 */
          margin-top: 1px;         /* 【文本框上下位置】：数值越大越靠下 */
        }

        .paragraph {
          font-family: 'SiyinSong';
          font-size: clamp(0.9rem, 2vw, 1.4rem);  /* 字体大小 */
          line-height: 2;          /* 行高：建议1.8-2.2之间 */
          color: #444444;          /* 文字颜色 */
          margin-bottom: 58px;     /* 段落之间的间距 */
          text-align: justify;     /* 文本对齐：justify=两端对齐 */
          letter-spacing: 0.05em;  /* 字间距：数值越大间距越大 */
        }

        .paragraph:last-child {
          margin-bottom: 0;
        }

        /* ============================================
           响应式（已禁用）
           ============================================ */
        /*
        @media (max-width: 1024px) {
          .section1-home {
            padding: 60px 0;
          }

          .main-content {
            grid-template-columns: 1fr;
            gap: 40px;
            padding-right: 24px;
          }

          .right-column {
            padding-top: 20px;
          }

          .about-bg {
            font-size: clamp(5rem, 18vw, 8rem);
            top: -35px;
          }

          .main-title {
            margin-top: 30px;
            font-size: clamp(2rem, 8vw, 3rem);
          }

          .divider {
            margin-top: 16px;
          }

          .biotope-section {
            margin-top: 36px;
          }
        }

        @media (max-width: 768px) {
          .section1-home {
            padding: 40px 0;
          }

          .vertical-sidebar {
            padding: 0 12px;
          }

          .vertical-line-top {
            height: 120px;
          }

          .vertical-line-bottom {
            height: 40px;
          }

          .about-bg {
            font-size: clamp(4rem, 22vw, 6rem);
            top: -25px;
            letter-spacing: -2px;
          }

          .main-title {
            margin-top: 20px;
          }

          .main-content {
            padding-right: 16px;
          }
        }
        */
      `}</style>
    </section>
  );
}
