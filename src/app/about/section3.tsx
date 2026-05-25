'use client';

/* ============================================
   Section 3 - 专业介绍区域
   设计风格：简约高级（参考用户提供的排版）
   ============================================ */
export default function Section3() {
  return (
    <section className="section3-wrapper">
      <div className="section3-home">
        {/* ★ 云雾遮罩层 - 移到这里，相对于整个屏幕定位 */}
        <div className="content-cloud-mask"></div>
        
        {/* 左侧垂直侧边栏（复制自 section2） */}
        <div className="section3-vertical-sidebar">
          <div className="section3-vline-top"></div>
          <div className="section3-vline-bottom"></div>
          <div className="section3-vtext">Arts Technology & Business</div>
          <div className="section3-vdot"></div>
        </div>

        {/* 主内容区域 */}
        <div className="section3-content">
          
          {/* ★ 顶部区域：Logo + 专业名称 */}
          <div className="section3-header">
            <div className="header-left">
              {/* ★ Logo 图片 - 使用 public 目录下的 atb.png */}
              <img src="/atb.png" alt="ATB Logo" className="logo-square" />
            </div>
            <div className="header-right">
              <h2 className="program-title">MSc Arts Technology and Business</h2>
              <p className="school-name">香港岭南大学商学院</p>
            </div>
          </div>

          {/* ★ 分隔线 */}
          <div className="section3-divider"></div>

          {/* ★ 正文区域 */}
          <div className="section3-text-container">
            <p className="section3-paragraph">
              本次「折叠生境（Biotope）：交互艺术感知场」线上毕业展，是香港岭南大学商学院<strong>2025级MSc Arts Technology and Business（MSc ATB）</strong>学生跨学科学习成果的集中呈现。
            </p>
            <p className="section3-paragraph">
              <strong>MSc ATB</strong>是香港同时涵盖艺术技术与商业领域的跨学科硕士课程，在此次线上展中，可以感受到多学科背景的学生打破传统静态陈列范式，用多元表现手法进行创作，打造的数字艺术场域。
            </p>
          </div>

          {/* ★ 分隔线 */}
          <div className="section3-divider"></div>

          {/* ★ 统计数据区域 */}
          <div className="section3-stats">
            <div className="stat-item">
              <span className="stat-number">16+</span>
              <span className="stat-label">艺术作品</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">主题展区</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2025</span>
              <span className="stat-label">毕业年度</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ========== 自定义字体引入 ========== */
        @font-face {
          font-family: 'HarmonyOS Sans';
          src: url('/fonts/HarmonyOS_Sans_Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        /* ============================================
           第一层：section3-wrapper (最外层容器)
           ============================================ */
        .section3-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
          z-index: 1;
        }

        /* ============================================
           第二层：section3-home (背景层)
           ============================================ */
        .section3-home {
          position: relative;
          width: 100%;
          height: 100%;
          font-family: 'HarmonyOS Sans';
        }

        /* ============================================
           垂直侧边栏 - 复制自 section2
           ============================================ */
        .section3-vertical-sidebar {
          position: absolute;
          left: 7px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 0 24px;
          z-index: 20;
        }

        .section3-vline-top {
          width: 1.5px;
          height: 300px;
          background: #1a1a1a;
        }

        .section3-vline-bottom {
          width: 1px;
          height: 80px;
          background: #e0e0e0;
        }

        .section3-vtext {
          writing-mode: vertical-lr;
          text-orientation: mixed;
          font-family: "HarmonyOS Sans";
          font-size: 0.6rem;
          letter-spacing: 1px;
          color: #cccccc;
          line-height: 1.4;
        }

        .section3-vdot {
          width: 8px;
          height: 8px;
          background: #1a1a1a;
        }

        /* ============================================
           主内容区域 - 居中对齐
           ============================================ */
        .section3-content {
          position: relative;
          top: 60%;
          transform: translateY(-50%);
          z-index: 10;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 100px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 100vh;
        }

        /* ============================================
           内容区域云雾遮罩层 - 椭圆形边缘羽化效果
           参考 island 项目实现方式：使用 mask-image 实现羽化边缘
           ============================================ */
        .content-cloud-mask {
          /* ★ 定位方式：绝对定位，配合 transform 居中 */
          position: absolute;
          top: 50%;           /* ★ 垂直位置：0%=顶部，50%=垂直居中，100%=底部 */
          left: 50%;          /* ★ 水平位置：0%=左侧，50%=水平居中，100%=右侧 */
          transform: translate(-50%, -50%); /* 配合 top/left:50% 实现完美居中 */
          
          /* ★ 遮罩尺寸：控制羽化区域的整体大小 */
          width: 85%;         /* ★ 横向宽度：值越大，横向覆盖范围越广 */
          height: 90%;        /* ★ 纵向高度：值越大，纵向覆盖范围越广 */
          
          pointer-events: none; /* 允许鼠标穿透，不影响交互 */
          z-index: -1;         /* 置于内容下方 */
          
          /* ★ 遮罩背景色：RGB(248,250,248) 是柔和的米白色，0.85是透明度 */
          background: rgba(248, 250, 248);
          
          /* ★ mask-image 羽化遮罩核心语法 */
          /* 格式：radial-gradient(ellipse 横向半径% 纵向半径% at 中心点X% 中心点Y%, 不透明色 保留范围%, 透明色 羽化结束%) */
          /* - ellipse：椭圆形状 */
          /* - 85%：横向羽化半径（控制左右边缘羽化范围） */
          /* - 70%：纵向羽化半径（控制上下边缘羽化范围） */
          /* - at 50% 50%：羽化中心点位置（水平% 垂直%） */
          /* - black 35%：中心35%范围完全保留（不透明） */
          /* - transparent 75%：从35%到75%是渐变羽化区域，75%以外完全透明 */
          //-webkit-mask-image: radial-gradient(ellipse 85% 70% at 50% 50%, black 35%, transparent 75%);
          mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 35%, transparent 80%);
          
          /* ★ 参数调整指南：
             1. 横向羽化范围：调整第一个百分比（85%）
                - 值越大，左右边缘羽化越宽（羽化越柔和）
                - 值越小，左右边缘羽化越窄（羽化越生硬）
             2. 纵向羽化范围：调整第二个百分比（70%）
                - 值越大，上下边缘羽化越宽（羽化越柔和）
                - 值越小，上下边缘羽化越窄（羽化越生硬）
             3. 中心保留区域：调整 black 后面的百分比（35%）
                - 值越大，中心不透明区域越大
                - 值越小，中心不透明区域越小
             4. 羽化过渡范围：调整 transparent 后面的百分比（75%）
                - 值越大，羽化过渡越平缓
                - 值越小，羽化过渡越急促
             5. 遮罩位置：调整 top/left 的百分比
                - top: 30% → 整体上移
                - top: 70% → 整体下移
                - left: 30% → 整体左移
                - left: 70% → 整体右移
           */
        }

        /* ============================================
           顶部区域：Logo + 专业名称
           ============================================ */
        .section3-header {
          display: flex;
          align-items: center;   /* ★ 垂直对齐：center=居中，flex-start=顶部，flex-end=底部 */
          gap: 1rem;            /* ★ Logo与"MSc Art Technology and Business"之间的间距 */
          margin-bottom: -1rem;  /* ★ 整个顶部区域与下方分隔线的间距 */
        }

        .header-left {
          flex-shrink: 0; /* 防止Logo被压缩 */
        }

        /* ★ ★ ★ Logo图片（ATB标志）★ ★ ★ */
        .logo-square {
          width: 90px;   /* 修改：调大=放大Logo，调小=缩小Logo */
          height: 90px;  /* 修改：保持正方形 */
          border-radius: 8px; /* 修改：圆角大小 */
          object-fit: contain; /* 修改：图片适应方式 */
        }

        .header-right {
          text-align: left; /* ★ Logo右侧文字区域的对齐方式 */
        }

        /* ★ ★ ★ 主标题："MSc Art Technology and Business" ★ ★ ★ */
        .program-title {
          font-size: 1.2rem;      /* 修改：字号大小 */
          font-weight: 500;       /* 修改：字重（400=常规，500=中等，700=粗体） */
          color: #1a1a1a;         /* 修改：文字颜色 */
          letter-spacing: 0.01em; /* 修改：字间距 */
          margin: 0 0 0.2rem 0;  /* 修改：与下方"香港岭南大学商学院"的间距 */
          /* ★ 左右位置调整：
             - margin-left: 0;    默认位置（紧挨着Logo）
             - margin-left: 1rem; 向右移动1rem
             - margin-left: -0.5rem; 向左移动0.5rem
          */
          margin-left: -0.6rem;          /* 修改：向左/右移动标题（正值=右移，负值=左移） */
        }

        /* ★ ★ ★ 副标题："香港岭南大学商学院" ★ ★ ★ */
        .school-name {
          font-size: 0.85rem; /* 修改：字号大小 */
          color: #888;        /* 修改：文字颜色 */
          margin: 0;          /* 修改：外边距 */
          margin-left: -0.6rem;
        }

        /* ============================================
           分隔线（标题与正文之间的横线）
           ============================================ */
        .section3-divider {
          width: 100%;
          max-width: 400px;  /* 修改：分隔线最大宽度 */
          height: 1px;       /* 修改：分隔线粗细 */
          background: #e5e5e5; /* 修改：分隔线颜色 */
          margin: 1.5rem 0;  /* 修改：分隔线与上下内容的间距 */
        }

        /* ============================================
           正文区域（两段专业介绍文字）
           ============================================ */
        .section3-text-container {
          margin-bottom: 0.5rem; /* 修改：正文区域与下方分隔线的间距 */
          width: 100%;
        }

        /* ★ ★ ★ 正文段落："本次折叠生境..." 和 "MSc ATB是香港..." ★ ★ ★ */
        .section3-paragraph {
          font-size: 0.9rem;      /* 修改：字号大小 */
          width: 90%;             /* 修改：段落宽度（文本框宽度） */
          margin-left: auto;      /* ★ 左侧自动留白，实现水平居中 */
          margin-right: auto;     /* ★ 右侧自动留白，实现水平居中 */
          line-height: 1.8;       /* 修改：行高（值越大，行间距越大） */
          color: #555;            /* 修改：文字颜色 */
          margin-bottom: 1rem;    /* 修改：两个段落之间的间距 */
          text-align: justify;     /* 修改：对齐方式（两端对齐） */
          text-indent: 2em;        /* 修改：首行缩进（2个汉字宽度） */
        }

        .section3-paragraph:last-child {
          margin-bottom: 0; /* 最后一段不需要底部间距 */
        }

        .section3-paragraph strong {
          font-weight: 600; /* 加粗强调 */
          color: #1a1a1a;
        }

        /* ============================================
           统计数据区域（三个数字：16+、4、2025）
           ============================================ */
        .section3-stats {
          display: flex;
          justify-content: space-around; /* ★ 三个项目均匀分布 */
          width: 100%;
          margin: 1rem 0;              /* ★ 统计区域与上方分隔线的间距 */
          padding: 1.5rem 0;           /* ★ 统计区域内部上下内边距 */
        }

        .stat-item {
          display: flex;
          flex-direction: column; /* ★ 数字在上，标签在下 */
          align-items: center;    /* ★ 水平居中 */
          gap: 0.4rem;           /* ★ 数字与标签之间的间距 */
        }

        /* ★ ★ ★ 统计数字："16+"、"4"、"2025" ★ ★ ★ */
        .stat-number {
          font-size: 3rem;        /* 修改：数字字号（越大越醒目） */
          font-weight: 700;       /* 修改：字重（700=粗体） */
          color: #1a1a1a;         /* 修改：数字颜色 */
          letter-spacing: -0.05em; /* 修改：字间距（负数=紧凑） */
        }

        /* ★ ★ ★ 统计标签："艺术作品"、"主题展区"、"毕业年度" ★ ★ ★ */
        .stat-label {
          font-size: 0.8rem;      /* 修改：标签字号 */
          color: #999;            /* 修改：标签颜色 */
          letter-spacing: 0.05em; /* 修改：字间距 */
        }

        /* ============================================
           响应式设计
           ============================================ */
        @media (max-width: 1024px) {
          .section3-content {
            padding: 60px 40px 60px 80px;
            max-width: 100%;
          }

          .stat-number {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .section3-content {
            padding: 60px 20px 60px 60px;
          }

          .section3-header {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            text-align: center;
          }

          .header-right {
            text-align: center;
          }

          .logo-square {
            width: 70px;
            height: 70px;
          }

          .section3-stats {
            flex-direction: column;
            gap: 1.2rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
