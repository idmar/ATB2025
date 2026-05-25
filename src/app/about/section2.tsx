'use client';

import { useState, useEffect } from 'react';

/* ============================================
   单词数据 - 每个卡片可以独立设置样式
   ============================================ */
const words = [
  { 
    id: 1, 
    word: '文化折叠', 
    language: 'Cultural Folding', 
    subtitle: '寻找数字艺术中的文化共鸣',
    description: '「文化折叠」是一个关于历史符号、传统工艺与多元生态的展区。在数字艺术的褶皱里，打破时空的界限，展区作品以非遗技艺、北宋市井长卷、翠鸟叙事、东方竹韵空间为切入点，融合盛唐妆饰美学的VR沉浸体验，呈现东方文化内核，开启一场历经千年与文化洗礼的古今共鸣。',
    
    /* 独立样式 */
    cardBg: '#fffffff8',              /* 卡片背景色 */
   sectionBg: '#ebb877d3',      /* ★ 整个section背景色 - 灰度橙色 */
    
    /* === 主标题样式 === */
    wordColor: '#555',           /* 主标题颜色 */
    wordSize: '4rem',          /* 主标题字号 */
    wordRight: '5.4rem',         /* 主标题距右侧距离 */
    wordTop: '4rem',           /* 主标题距顶部距离 */
    
    /* === 语言标签样式 === */
    languageColor: '#ea7e3fff',    /* 语言标签颜色 */
    languageSize: '1.3rem',       /* 语言标签字号 */
    languageRight: '5.8rem',     /* 语言标签距右侧距离 */
    languageTop: '8.8rem',        /* 语言标签距顶部距离 */
    
    /* === 副标题样式 === */
    subtitleColor: '#888',       /* 副标题颜色 */
    subtitleSize: '0.95rem',     /* 副标题字号 */
    subtitleRight: '5.8rem',     /* 副标题距右侧距离 */
    subtitleTop: '10.9rem',      /* 副标题距顶部距离 */
    
    /* === 描述文字样式 === */
    descColor: '#555',           /* 描述文字颜色 */
    descSize: '1.13rem',            /* 描述文字字号 */
    descWidth: '400px',          /* ★ 描述文字宽度（控制每行字数） */
    descLeft: '5.2rem',          /* 描述文字距左侧距离 */
    descTop: '12.6rem',            /* 描述文字距顶部距离 */
    
    /* === 背景大字独立设置（与卡片标题无关）=== */
    bgDisplayWord: 'Cultural\n        Folding',       /* ★ 加 \n 自动换行 */
    bgWordSize: '9vw',          /* 背景大字大小 */
    bgWordColor: '#ffffffff',      /* 背景大字颜色 */
    //bgOpacity: 0.85,             /* 透明度 */
    bgWordTop: '77%',            /* ★ 垂直位置（85%=左下角） */
    bgWordLeft: '35%',           /* ★ 水平靠左（15%=左下角） */
    
    /* === 卡片尺寸设置 === */
    cardWidth: '572px',         /* ★ 固定宽度 (原440px × 1.3) */
    cardHeight: '455px',         /* ★ 固定高度 (原350px × 1.3) */
    cardPadding: '5.2rem'          /* ★ 卡片内边距 (原4rem × 1.3) */
  },
  { 
    id: 2, 
    word: '感官共生', 
    language: 'Sensory Symbiosis', 
    subtitle: '在科技创新中捕捉温情',
    description: '「感官共生」展区聚焦用科技捕捉日常温情，数字像素承载创作者的情绪与偏爱。作品以情绪关怀、数字艺术、交互设计为支点，通过 NFC、AI 捕捉、虚拟形象等技术，将数据转化为可感知的日常体验，让科技与温情在此共生共鸣。',
    
    /* 独立样式 */
    cardBg: '#fffffff8',              /* 卡片背景色 */
    sectionBg: '#a8d4e8d3',        /* ★ 整个section背景色 - 暖黄色 */
    
    /* === 主标题样式 === */
    wordColor: '#555',           /* 主标题颜色 */
    wordSize: '4rem',          /* 主标题字号 */
    wordRight: '5.4rem',         /* 主标题距右侧距离 */
    wordTop: '4rem',           /* 主标题距顶部距离 */
    
    /* === 语言标签样式 === */
    languageColor: '#a8d4e8',    /* 语言标签颜色 */
    languageSize: '1.3rem',       /* 语言标签字号 */
    languageRight: '5.8rem',     /* 语言标签距右侧距离 */
    languageTop: '8.8rem',        /* 语言标签距顶部距离 */
    
    /* === 副标题样式 === */
    subtitleColor: '#888',       /* 副标题颜色 */
    subtitleSize: '0.95rem',     /* 副标题字号 */
    subtitleRight: '5.8rem',     /* 副标题距右侧距离 */
    subtitleTop: '10.9rem',      /* 副标题距顶部距离 */
    
    /* === 描述文字样式 === */
    descColor: '#555',           /* 描述文字颜色 */
    descSize: '1.13rem',            /* 描述文字字号 */
    descWidth: '400px',          /* ★ 描述文字宽度（控制每行字数） */
    descLeft: '5.2rem',          /* 描述文字距左侧距离 */
    descTop: '12.6rem',            /* 描述文字距顶部距离 */
    
    /* === 背景大字设置（与卡片2一致）=== */
    bgDisplayWord: 'Sensory\n        Symbiosis',       /* ★ 加 \n 自动换行 */
    bgWordSize: '9vw',          /* 背景大字大小 */
    bgWordColor: '#ffffffff',      /* 背景大字颜色 */
    bgOpacity: 0.95,             /* 透明度 */
    bgWordTop: '77%',            /* ★ 垂直位置 */
    bgWordLeft: '35%',           /* ★ 水平位置 */
    
    /* === 卡片尺寸设置（与卡片1一致）=== */
    cardWidth: '572px',         /* ★ 固定宽度 (原440px × 1.3) */
    cardHeight: '455px',         /* ★ 固定高度 (原350px × 1.3) */
    cardPadding: '5.2rem'          /* ★ 卡片内边距 (原4rem × 1.3) */
  },
  { 
    id: 3, 
    word: '生息幻境', 
    language: 'Vital Wonderland', 
    subtitle: '从沙漠海洋跨越到精神游牧',
    description: '「生息幻境」展区向内探索精神本心，思索自我精神内核。作品放大情绪与思想内涵，聚焦日常里容易被忽略的人文议题。游走在虚拟空间，在互动作品中体悟人生百态，收获心灵共鸣，沉浸式遇见内心深处未曾显露的自我。',
    
    /* 独立样式 */
    cardBg: '#fffffff8',              /* 卡片背景色 */
    sectionBg: '#e4b5dcd3',        /* ★ 整个section背景色 - 淡蓝色 */
    
    /* === 主标题样式 === */
    wordColor: '#555',           /* 主标题颜色 */
    wordSize: '4rem',          /* 主标题字号 */
    wordRight: '5.4rem',         /* 主标题距右侧距离 */
    wordTop: '4rem',           /* 主标题距顶部距离 */

    /* === 语言标签样式 === */
    languageColor: '#f38ee2ff',    /* 语言标签颜色 */
    languageSize: '1.3rem',       /* 语言标签字号 */
    languageRight: '5.8rem',     /* 语言标签距右侧距离 */
    languageTop: '8.8rem',        /* 语言标签距顶部距离 */
    
    /* === 副标题样式 === */
    subtitleColor: '#888',       /* 副标题颜色 */
    subtitleSize: '0.95rem',     /* 副标题字号 */
    subtitleRight: '5.8rem',     /* 副标题距右侧距离 */
    subtitleTop: '10.9rem',      /* 副标题距顶部距离 */
    
    /* === 描述文字样式 === */
    descColor: '#555',           /* 描述文字颜色 */
    descSize: '1.13rem',            /* 描述文字字号 */
    descWidth: '400px',          /* ★ 描述文字宽度（控制每行字数） */
    descLeft: '5.2rem',          /* 描述文字距左侧距离 */
    descTop: '12.6rem',            /* 描述文字距顶部距离 */
    
    /* === 背景大字设置（与卡片3一致）=== */
    bgDisplayWord: 'Vital\n   Wonderland',       /* ★ 加 \n 自动换行 */
    bgWordSize: '9vw',          /* 背景大字大小 */
    bgWordColor: '#ffffffff',      /* 背景大字颜色 */
    bgOpacity: 0.95,             /* 透明度 */
    bgWordTop: '78%',            /* ★ 垂直位置 */
    bgWordLeft: '38%',           /* ★ 水平位置 */
    
    /* === 卡片尺寸设置（与卡片1一致）=== */
    cardWidth: '572px',         /* ★ 固定宽度 (原440px × 1.3) */
    cardHeight: '455px',         /* ★ 固定高度 (原350px × 1.3) */
    cardPadding: '5.2rem'          /* ★ 卡片内边距 (原4rem × 1.3) */
  },
  { 
    id: 4, 
    word: '域外漫游', 
    language: 'Exotic Roaming', 
    subtitle: '探讨梦境与个体生命的终极话题',
    description: '「域外漫游」展区跨越地域界限，汇聚沙漠、海洋、草原与城市多样风貌。作品融合特色地域文化，囊括渔家风情、西湖美景、荒漠生态等，让数字技术与艺术相融共生，带领观者开启一场穿梭天地、虚实交织的漫游旅程。',
    
    /* 独立样式 */
    cardBg: '#fffffff8',              /* 卡片背景色 */
    sectionBg: '#b1ca79d4',        /* ★ 整个section背景色 - 淡绿色 */
    
    /* === 主标题样式 === */
    wordColor: '#555',           /* 主标题颜色 */
    wordSize: '4rem',          /* 主标题字号 */
    wordRight: '5.4rem',         /* 主标题距右侧距离 */
    wordTop: '4rem',           /* 主标题距顶部距离 */

    /* === 语言标签样式 === */
    languageColor: '#baeb50d4',    /* 语言标签颜色 */
    languageSize: '1.3rem',       /* 语言标签字号 */
    languageRight: '5.8rem',     /* 语言标签距右侧距离 */
    languageTop: '8.8rem',        /* 语言标签距顶部距离 */
    
    /* === 副标题样式 === */
    subtitleColor: '#888',       /* 副标题颜色 */
    subtitleSize: '0.95rem',     /* 副标题字号 */
    subtitleRight: '5.8rem',     /* 副标题距右侧距离 */
    subtitleTop: '10.9rem',      /* 副标题距顶部距离 */
    
    /* === 描述文字样式 === */
    descColor: '#555',           /* 描述文字颜色 */
    descSize: '1.13rem',            /* 描述文字字号 */
    descWidth: '400px',          /* ★ 描述文字宽度（控制每行字数） */
    descLeft: '5.2rem',          /* 描述文字距左侧距离 */
    descTop: '12.6rem',            /* 描述文字距顶部距离 */
    
    /* === 背景大字设置（与卡片1一致）=== */
    bgDisplayWord: 'Exotic\n      Roaming',       /* ★ 加 \n 自动换行 */
    bgWordSize: '9vw',          /* 背景大字大小 */
    bgWordColor: '#ffffffff',      /* 背景大字颜色 */
    bgOpacity: 0.95,             /* 透明度 */
    bgWordTop: '77%',            /* ★ 垂直位置 */
    bgWordLeft: '35%',           /* ★ 水平位置 */
    
    /* === 卡片尺寸设置（与卡片1一致）=== */
    cardWidth: '572px',         /* ★ 固定宽度 (原440px × 1.3) */
    cardHeight: '455px',         /* ★ 固定高度 (原350px × 1.3) */
    cardPadding: '5.2rem'          /* ★ 卡片内边距 (原4rem × 1.3) */
  },
];

export default function Section2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const currentWord = words[currentIndex];

  const goLeft = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(prev => prev > 0 ? prev - 1 : words.length - 1);
    }, 400);
    setTimeout(() => {
      setIsFading(false);
    }, 900);
  };

  const goRight = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(prev => prev < words.length - 1 ? prev + 1 : 0);
    }, 400);
    setTimeout(() => {
      setIsFading(false);
    }, 900);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 37) goLeft();
      if (e.keyCode === 39) goRight();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFading]);

  return (
    <section className="section2-wrapper">
      {/* 整个section背景色动态绑定 */}
      <div 
        className="section2-home"
        style={{ background: currentWord.sectionBg }}
      >
        {/* 左侧垂直侧边栏 */}
        <div className="section2-vertical-sidebar">
          <div className="section2-vline-top"></div>
          <div className="section2-vline-bottom"></div>
          <div className="section2-vtext">Arts Technology & Business</div>
          <div className="section2-vdot"></div>
        </div>

        {/* 背景大字 - 使用动态样式 */}
        <div 
          className={`bg-word ${isFading ? 'fadeout' : ''}`} 
          id="behind"
          style={{ 
            color: currentWord.bgWordColor, 
            opacity: currentWord.bgOpacity,
            fontSize: currentWord.bgWordSize,
            top: currentWord.bgWordTop,
            left: currentWord.bgWordLeft
          }}
        >
          {/* 使用独立的背景显示文字，不联动卡片标题 */}
          {currentWord.bgDisplayWord || currentWord.word}
        </div>
        
        {/* ★ 背景空心字 EXHIBITS - 放在卡片后面 */}
        <div className="section2-hollow-bg">EXHIBITS</div>
        
        {/* 灰色层已移除 */}
        <div id="container">
          <button id="last" onClick={goLeft} />
          {/* 卡片 - 使用动态样式 */}
          <div 
            className={`${isFading ? 'fadeout' : ''}`} 
            id="card"
            style={{ 
              background: currentWord.cardBg,
              width: currentWord.cardWidth,
              height: currentWord.cardHeight,
              padding: currentWord.cardPadding
            }}
          >
            <h1 
              id="word" 
              style={{ 
                color: currentWord.wordColor,
                fontSize: currentWord.wordSize,
                right: currentWord.wordRight,
                top: currentWord.wordTop
              }}
            >{currentWord.word}</h1>
            <span 
              id="language" 
              style={{ 
                color: currentWord.languageColor,
                fontSize: currentWord.languageSize,
                right: currentWord.languageRight,
                top: currentWord.languageTop
              }}
            >{currentWord.language}</span>
            {currentWord.subtitle && <span id="subtitle" style={{ 
              color: currentWord.subtitleColor,
              fontSize: currentWord.subtitleSize,
              right: currentWord.subtitleRight,
              top: currentWord.subtitleTop
            }}>{currentWord.subtitle}</span>}
            <p 
              id="description" 
              style={{ 
                color: currentWord.descColor, 
                fontSize: currentWord.descSize,
                width: currentWord.descWidth,    /* ★ 使用宽度控制每行字数 */
                left: currentWord.descLeft,      /* ★ 距左侧距离 */
                top: currentWord.descTop         /* ★ 距顶部距离 */
              }}
            >{currentWord.description}</p>
          </div>
          <button id="next" onClick={goRight} />
        </div>
      </div>

      <style>{`
        /* ============================================
           字体声明 - 思源宋体
           ============================================ */
        @font-face {
          font-family: 'SourceHanSerif';
          src: url('/fonts/SiyinSong.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'HarmonyOS Sans';
          src: url('/fonts/HarmonyOS_Sans_Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        /* ============================================
           第一层：section2-wrapper (最外层容器)
           作用：定义整个Section的尺寸和定位
           ============================================ */
        .section2-wrapper {
          position: relative;      /* 定位基准，让子元素可以绝对定位 */
          
          /* === 尺寸控制 === */
          width: 100%;             /* ← 占满父容器宽度，100%是上限 */
          height: 100vh;           /* ← 占满一屏高度，数值增大(如120vh) = 变高 */
          
          z-index: 1;              /* 层级，数值越大越在上层 */
        }

        /* ============================================
           垂直侧边栏 - 独立样式，不影响section1
           ============================================ */
        .section2-vertical-sidebar {
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

        .section2-vline-top {
          width: 1.5px;
          height: 300px;
          background: #1a1a1a;
        }

        .section2-vline-bottom {
          width: 1px;
          height: 80px;
          background: #e0e0e0;
        }

        .section2-vtext {
          writing-mode: vertical-lr;
          text-orientation: mixed;
          font-family: "HarmonyOS Sans";
          font-size: 0.6rem;
          letter-spacing: 1px;
          color: #e0e0e0;
          line-height: 1.4;
        }

        .section2-vdot {
          width: 8px;
          height: 8px;
          background: #1a1a1a;
        }

        /* ============================================
           第二层：section2-home (背景层)
           作用：整个Section的背景色和纹理
           ============================================ */
        .section2-home {
          position: relative;      /* 定位基准 */
          
          /* === 尺寸 === */
          width: 100%;             /* ← 占满wrapper宽度 */
          height: 100%;            /* ← 占满wrapper高度，数值增大(如120%) = 超出隐藏 */
          
          /* === 背景设置 === */
          /* 背景色由JSX内联样式动态控制 */
          
          font-family: 'Libre Baskerville';
          overflow: hidden;        /* 隐藏溢出内容 */
          transition: background 0.4s;  /* 背景色过渡动画 */
        }



        #container {
          /* === 容器定位 === */
          position: relative;  /* 相对定位，作为子元素的参考 */
          left: -10px;         /* 左偏移，防止被背景文字遮挡 (原-100px × 1.3) */
          top: -26px;         /* 上偏移，防止被背景文字遮挡 (原-20px × 1.3) */
          width: 100%;         /* 宽度占满父容器 */
          max-width: 1560px;    /* ★ 最大宽度限制 (原1200px × 1.3) */
                               /*   ↓ 需要更大空间时调大这个值 */
          height: 100%;        /* 高度占满父容器 */
          /* ★ 已移除 transform: scale(1.3)，改为直接调整卡片尺寸 */
          
          /* === Flex 布局 === */
          display: flex;               /* 使用弹性布局 */
          align-items: center;         /* 垂直方向居中 */
          justify-content: flex-end;    /* ★ 水平靠右对齐 */
          flex-direction: row;         /* 子元素水平排列（左→右） */
          
          /* === 层级与对齐 === */
          z-index: 10;                 /* 层级高于背景文字 */
          margin: 0 auto;              /* 水平居中对齐 */
          
          /* === ★ 关键：箭头空间 === */
          padding: 0 26px;            /* 左右内边距，给箭头留空间 (原20px × 1.3) */
                                        /*   ↓ 箭头被裁剪时调大这个值 */
          box-sizing: border-box;       /* padding 包含在 width 内 */
        }

        /* ============================================
           背景空心字 EXHIBITS - 调整指南
           ============================================
        */
        .section2-hollow-bg {
          position: absolute;
          top: 15%;                 /* ★ 垂直位置：0%=顶部，50%=居中，100%=底部 */
          right: 51.5%;               /* ★ 水平位置：0%=最左边，50%=居中，100%=最右边 */
          font-family: "Helvetica Neue";
          font-size: 8rem;         /* ★ 字体大小 */
          font-weight: 700;        /* ★ 字体粗细：数值越小越细 */
          color: transparent;      /* ★ 必须保持 transparent 才能显示空心效果 */
          -webkit-text-stroke: 1px #ffffffff;  /* ★ 空心描边：数字越大边框越粗，颜色可改 */
          letter-spacing: -1px;    /* ★ 字母间距：负值让字母更紧凑 */
          line-height: 0.85;       /* ★ 行高：控制字母垂直间距 */
          pointer-events: none;
          z-index: 15;             /* ★ 层级：15=在卡片前面(卡片是10) */
          white-space: nowrap;     /* ★ 防止文字换行 */
          
          /* ★ 参数调整指南：
             1. 垂直位置：调整 top 值
                - top: 5% → 靠近顶部
                - top: 50% → 垂直居中
                - top: 80% → 靠近底部
             2. 水平位置：调整 right 值
                - right: 5% → 靠近右侧
                - right: 50% → 水平居中(从右边算)
                - right: 90% → 靠近左侧
             3. 字体大小：调整 font-size 值
                - font-size: 8rem → 当前大小
                - font-size: 10rem → 更大
                - font-size: 6rem → 更小
             4. 描边粗细：调整 -webkit-text-stroke 的数字
                - 1px → 细边框
                - 2px → 粗边框
             5. 描边颜色：修改 -webkit-text-stroke 的颜色值
                - #d6d4d4ff → section1的颜色
                - #e0e0e0 → 浅灰色
                - #999 → 深灰色
             6. 层级：调整 z-index 值
                - z-index: 5 → 在卡片后面
                - z-index: 15 → 在卡片前面
          */
        }

        /* ============================================
           第三层：bg-word (背景大字装饰层)
           作用：显示当前单词的大字背景装饰
           ============================================ */
        .bg-word {
          position: absolute;      /* 绝对定位，相对于section2-home */
          
          /* === 居中定位 === */
          top: 50%;                /* ← 50% = 垂直居中，数值减小(如40%) = 上移 */
          left: 50%;               /* ← 50% = 水平居中，数值减小(如40%) = 左移 */
          transform: translate(-50%, -50%);  /* 偏移修正，实现真正居中 */
          
          /* === 文字大小 === */
          font-size: 30vw;         /* ← ★ 大字大小，数值增大(如40vw) = 字变大 */
                                   /* vw = 视口宽度的百分比，30vw = 视口宽的30% */
          
          line-height: 1;          /* ← 行高，数值增大(如1.5) = 行间距变大 */
          white-space: pre;        /* 保留空格和换行符，支持 \n 换行 */
          overflow: visible;       /* ★ 允许文字超出容器显示，不裁剪 */
          pointer-events: none;    /* 不响应鼠标事件 */
          user-select: none;       /* 不可选中 */
          transition: opacity 0.4s ease;  /* 透明度过渡 */
        }

        /* 粉色大字层 - 在后面 */
        #behind {
          /* color 由 JSX 动态设置 (bgWordColor) */
          /* opacity 由 JSX 动态设置 (bgOpacity) */
          z-index: 1;              /* 层级 */
        }



        /* ============================================
           第五层：#card (白色卡片)
           作用：显示单词信息的白色卡片
           ============================================ */
        #card {
          z-index: 10;             /* 层级 */
          
          /* === 尺寸控制（固定尺寸） === */
          /* 尺寸由JSX内联样式控制，每个卡片独立设置 */
          
          /* === 外观 === */
          box-shadow: 0 50px 70px -50px rgba(0, 0, 0, 0.45), 0 50px 200px -50px rgba(0, 0, 0, 0.5);
          
          /* 卡片背景色由JSX内联样式控制，每个卡片独立设置 */
          
          position: relative;      /* ★ 设置为相对定位，作为子元素绝对定位的参考 */
          overflow: hidden;        /* 隐藏超出卡片的内容 */
          transition: all 0.4s ease;  /* 所有属性过渡动画 */
        }

        #card * {
          transition: opacity 0.4s, text-shadow 0.8s, color 0.4s, transform 0s;
          opacity: 1;
        }

        /* ============================================
           第六层：卡片内部文字样式
           ============================================ */
        
        /* 主标题 - 位置和大小由数据控制 */
        #word {
          position: absolute;       /* ★ 绝对定位 */
          font-family: 'SourceHanSerif';  /* ★ 中文使用思源宋体 */
          line-height: 1.2;        /* ← 行高，数值增大 = 行间距大 */
          margin: 0;               /* 移除margin */
          /* ★ 颜色、字号、位置由数据中的 wordColor, wordSize, wordRight, wordTop 控制 */
        }

        /* 语言标签 - 位置和大小由数据控制 */
        #language {
          position: absolute;       /* ★ 绝对定位 */
          font-style: italic;      /* 斜体 */
          margin: 0;               /* 移除margin */
          /* ★ 颜色、字号、位置由数据中的 languageColor, languageSize, languageRight, languageTop 控制 */
        }

        /* 副标题 - 位置和大小由数据控制 */
        #subtitle {
          position: absolute;       /* ★ 绝对定位 */
          font-family: 'SourceHanSerif';  /* ★ 中文使用思源宋体 */
          margin: 0;               /* 移除margin */
          letter-spacing: 0.05em;  /* ← 字间距，数值增大(如0.1em) = 字更分散 */
          /* ★ 颜色、字号、位置由数据中的 subtitleColor, subtitleSize, subtitleRight, subtitleTop 控制 */
        }

        /* 描述文字 - 位置和大小由数据控制 */
        #description {
          position: absolute;       /* ★ 绝对定位 */
          font-family: 'SourceHanSerif';  /* ★ 中文使用思源宋体 */
          line-height: 1.8;        /* ← 行高，数值增大(如2) = 行间距更大 */
          text-align: justify;     /* 两端对齐 */
          margin: 0;               /* 移除margin */
          max-height: 200px;       /* ★ 最大高度限制，防止超出卡片 */
          overflow-y: auto;        /* ★ 超出时显示滚动条 */
          /* ★ 颜色、字号、位置由数据中的 descColor, descSize, descLeft, descRight, descTop 控制 */
        }

        /* ============================================
           第七层：箭头按钮
           作用：左右切换的箭头
           原理：纯 CSS border 绘制三角形，不设置宽高
           ============================================ */
        
        /* 按钮基础样式 */
        button {
          margin: 20px;            /* ← ★ 箭头间距，数值增大 = 离卡片更远 */
          width: 0px;              /* 宽度为0，纯border显示 */
          height: 0px;             /* 高度为0 */
          z-index: 25;             /* 层级 */
          background: transparent; /* 透明背景 */
          border-radius: 0;        /* 无圆角 */
          outline: none;           /* 无轮廓 */
          border: none;            /* 无边框 */
          cursor: pointer;         /* 手型光标 */
        }

        /* 左箭头 - 向右的三角形 */
        #last {
          /* 三角形原理：上边框透明 + 下边框透明 + 右边框有色 = 向右箭头 */
          border-top: 20px solid transparent;              /* 上边框透明 */
          border-bottom: 20px solid transparent;           /* 下边框透明 */
          border-right: 20px solid rgba(255, 255, 255, 0.6); /* ← ★ 右箭头大小和颜色 */
          /* 数值增大(如30px) = 箭头更大 */
          transition: border-color 0.2s ease;               /* 颜色过渡 */
        }

        /* 左箭头悬停效果 */
        #last:hover {
          border-right-color: rgba(255, 255, 255, 0.9);     /* 悬停时更亮 */
        }

        /* 右箭头 - 向左的三角形 */
        #next {
          order: 3;              /* 确保右箭头在卡片右边 */
          /* 三角形原理：上边框透明 + 下边框透明 + 左边框有色 = 向左箭头 */
          border-top: 20px solid transparent;              /* 上边框透明 */
          border-bottom: 20px solid transparent;           /* 下边框透明 */
          border-left: 20px solid rgba(255, 255, 255, 0.6);  /* ← ★ 左箭头大小和颜色 */
          /* 数值增大(如30px) = 箭头更大 */
          transition: border-color 0.2s ease;               /* 颜色过渡 */
        }

        /* 右箭头悬停效果 */
        #next:hover {
          border-left-color: rgba(255, 255, 255, 0.9);      /* 悬停时更亮 */
        }

        #card.fadeout #word,
        #card.fadeout #language,
        #card.fadeout #subtitle {
          opacity: 0;
          color: transparent;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          transform: translateY(-200px) scale(2);
          transition: all 0.8s 0.1s, color 0.3s 0s, text-shadow 0.3s 0s;
        }

        #card.fadeout #description {
          opacity: 0;
          color: transparent;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          transform: translateY(200px) translateX(-3rem) scale(1.5);
          transition: all 0.8s 0.1s, color 0.3s 0s, text-shadow 0.3s 0s;
        }

        @media (max-width: 768px) {
          #container {
            left: 0;      /* 移动端移除偏移 */
            top: 0;       /* 移动端移除偏移 */
            width: calc(100% - 60px);
            padding: 0 30px;
            max-width: 100%;  /* 移动端最大宽度设为100% */
          }

          .bg-word {
            font-size: 25vw;
          }

          #card {
            padding: 3.25rem;   /* 原2.5rem × 1.3 */
            min-height: 286px;  /* 原220px × 1.3 */
            max-width: 455px;   /* 原350px × 1.3 */
          }

          #word {
            font-size: 2rem;
          }

          #language {
            font-size: 1.1rem;
          }

          #description {
            font-size: 1rem;
          }

          button {
            width: 50px;
            height: 50px;
          }

          #last {
            margin-right: 15px;
            border-top: 16px solid transparent;
            border-bottom: 16px solid transparent;
            border-right: 16px solid rgba(255, 255, 255, 0.6);
          }

          #next {
            margin-left: 15px;
            border-top: 16px solid transparent;
            border-bottom: 16px solid transparent;
            border-left: 16px solid rgba(255, 255, 255, 0.6);
          }
        }

        @media (max-width: 500px) {
          #container {
            left: 0;      /* 移动端移除偏移 */
            top: 0;       /* 移动端移除偏移 */
            width: calc(100% - 40px);
            padding: 0 20px;
            max-width: 100%;  /* 移动端最大宽度设为100% */
          }

          #card {
            padding: 2.34rem;   /* 原1.8rem × 1.3 */
            min-height: 234px;  /* 原180px × 1.3 */
            max-width: 364px;   /* 原280px × 1.3 */
          }

          #word {
            font-size: 1.6rem;
          }

          #language {
            font-size: 0.95rem;
          }

          #description {
            font-size: 0.9rem;
          }

          button {
            width: 40px;
            height: 40px;
          }

          #last {
            margin-right: 10px;
            border-top: 13px solid transparent;
            border-bottom: 13px solid transparent;
            border-right: 13px solid rgba(255, 255, 255, 0.6);
          }

          #next {
            margin-left: 10px;
            border-top: 13px solid transparent;
            border-bottom: 13px solid transparent;
            border-left: 13px solid rgba(255, 255, 255, 0.6);
          }
        }
      `}</style>
    </section>
  );
}