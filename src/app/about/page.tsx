'use client';

import { useState, useEffect } from 'react';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Footer from './footer';
import MobileHero from './mobile-hero';
import MobileSection1 from './mobile-section1';
import MobileSection2 from './mobile-section2';
import MobileSection3 from './mobile-section3';
import MobileFooter from './mobile-footer';
import MobileBackground from './MobileBackground';

// CSS Filter Animation Hero Page
// 模仿 animated-hero-css-filters 的结构，白色背景版本

export default function Landing2Page() {
  // ========== 所有钩子都在组件最顶层 ==========
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ========== 移动端版本 ==========
  if (isMobile) {
    return (
      <>
        <MobileBackground />
        <MobileHero />
        <MobileSection1 />
        <MobileSection2 />
        <MobileSection3 />
        <MobileFooter />
      </>
    );
  }

  return (
    <>
      {/* ========== 全局背景层（所有区域共享，固定不动）========== */}
      <div className="global-background">
        {/* 渐变背景层 */}
        <div className="bg-gradient" />
        {/* 滤镜动画层 A - 20秒循环 */}
        <div className="filter-layer filter-layer-a" />
        {/* 滤镜动画层 B - 10秒循环 */}
        <div className="filter-layer filter-layer-b" />
      </div>

      {/* ========== 各内容区域层（每个区域独立容器，互不影响）========== */}
      
      {/* ========== 区域 1: Hero 首屏 ========== */}
      <section className="hero-section-wrapper">
        <div className="hero-page-container">
          {/* 标题内容 - 折叠生境 - 随滚动上移 */}
          <div 
            className={`form ${loaded ? 'visible' : ''}`}
            style={{ transform: `skewY(-5deg) translateY(calc(10% - ${scrollY * 0.5}px)) scale(0.94)` }}
          >
            <div className="form-inner">
              <div className="form-content-wrapper">
                {/* 主标题 */}
                <h1 className="main-title">折叠生境</h1>
                
                {/* 英文标题 */}
                <h2 className="english-title">FOLD BIOTOPE</h2>
                
                {/* 副标题 */}
                <p className="subtitle">The Boundless Interactive Perception Field</p>
                
                {/* 信息栏 */}
                <p className="info">MSc ATB 2025 线上毕业展</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ========== 自定义字体引入 ========== */
        @font-face {
          font-family: 'Gentium Plus';
          src: url('/fonts/GentiumPlus-Italic.ttf');
          font-style: italic;
        }

        @font-face {
          font-family: 'HarmonyOS Sans';
          src: url('/fonts/HarmonyOS_Sans_Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        /* ========== 全局背景层（所有区域共享）========== */
        .global-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        /* ========== 区域容器包装层（确保每个区域独立）========== */
        .hero-section-wrapper {
          position: relative;
          width: 100%;
          z-index: 1;
        }
        
        /* ========== Hero 首屏（内容容器）========== */
        .hero-page-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* 背景图 */
        .bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/BG2.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .filter-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 25%;
          height: 25%;
          background-color: transparent;
          pointer-events: none;
        }

        .filter-layer-a {
          animation: filterAnimA 20s ease infinite;
        }

        .filter-layer-b {
          animation: filterAnimB 10s ease infinite;
        }

        @keyframes filterAnimA {
          0% {
            width: 25%;
            height: 25%;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: hsla(10, 95%, 55%, 0.65);  /* 鲜艳橙色 - 饱和度提高 */
          }
          12.49% {
            left: 0;
          }
          12.5% {
            width: 100%;
            left: unset;
            background-color: hsla(210, 95%, 75%, 0.65);  /* 明亮蓝色 - 饱和度提高 */
          }
          25% {
            width: 25%;
            height: 25%;
            background-color: hsla(352, 100%, 85%, 0.65);  /* 明亮粉色 - 已最大饱和度 */
          }
          37.49% {
            top: 0;
            bottom: 0;
          }
          37.5% {
            top: unset;
            height: 100%;
            background-color: hsla(61, 90%, 78%, 0.65);  /* 黄绿色 - 饱和度提高 */
          }
          50% {
            width: 25%;
            height: 25%;
            background-color: hsla(10, 95%, 55%, 0.65);  /* 鲜艳橙色 */
          }
          62.49% {
            left: unset;
            right: 0;
          }
          62.5% {
            right: unset;
            width: 100%;
            height: 100%;
            background-color: hsla(210, 95%, 75%, 0.65);  /* 明亮蓝色 */
          }
          74.9% {
            top: unset;
            bottom: 0;
          }
          75% {
            width: 25%;
            height: 25%;
            background-color: hsla(352, 100%, 85%, 0.65);  /* 明亮粉色 */
          }
          87.49% {
            top: unset;
            bottom: 0;
          }
          87.5% {
            height: 100%;
            top: 0;
            background-color: hsla(61, 90%, 78%, 0.65);  /* 黄绿色 */
          }
          100% {
            width: 25%;
            height: 25%;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: hsla(10, 95%, 55%, 0.65);  /* 鲜艳橙色 */
          }
        }

        @keyframes filterAnimB {
          0% {
            width: 25%;
            height: 25%;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: hsla(61, 90%, 78%, 0.65);  /* 黄绿色 */
          }
          12.49% {
            top: 0;
          }
          12.5% {
            height: 100%;
            top: unset;
            background-color: hsla(10, 95%, 55%, 0.65);  /* 鲜艳橙色 */
          }
          25% {
            width: 25%;
            height: 25%;
            background-color: hsla(210, 95%, 75%, 0.65);  /* 明亮蓝色 */
          }
          37.49% {
            left: 0;
            right: 0;
          }
          37.5% {
            left: unset;
            width: 100%;
            background-color: hsla(352, 100%, 85%, 0.65);  /* 明亮粉色 */
          }
          50% {
            width: 25%;
            height: 25%;
            background-color: hsla(61, 90%, 78%, 0.65);  /* 黄绿色 */
          }
          62.49% {
            top: unset;
            bottom: 0;
          }
          62.5% {
            top: 0;
            height: 100%;
            background-color: hsla(10, 95%, 55%, 0.65);  /* 鲜艳橙色 */
          }
          74.9% {
            bottom: unset;
            right: 0;
          }
          75% {
            width: 25%;
            height: 25%;
            left: unset;
            background-color: hsla(210, 95%, 75%, 0.65);  /* 明亮蓝色 */
          }
          87.49% {
            left: unset;
            right: 0;
          }
          87.5% {
            width: 100%;
            left: 0;
            background-color: hsla(352, 100%, 85%, 0.65);  /* 明亮粉色 */
          }
          100% {
            width: 25%;
            height: 25%;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: hsla(61, 90%, 78%, 0.65);  /* 黄绿色 */
          }
        }
        
        /* ========== 折叠展开表单样式 - 来自 folded-paper-login-form ========== */
        
        /* 表单容器 - 折叠效果核心 */
        .form {
          position: relative;
          width: 85%;
          max-width: 480px;
          margin: 0 auto;
          
          /* 折叠动画：初始倾斜状态 */
          transform: skewY(-5deg) translateY(10%) scale(0.94);
          transition: box-shadow 350ms cubic-bezier(0.075, 0.82, 0.165, 1), transform 350ms cubic-bezier(0.075, 0.82, 0.165, 1);
          /* 底部投影增强立体感 */
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.15),
            0 8px 20px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        /* 悬浮时：展开状态 */
        .form:hover, .form:focus-within {
          transform: skewY(0) translateY(10%) scale(1);
          box-shadow: 
            0 30px 80px rgba(0, 0, 0, 0.2),
            0 10px 30px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        /* 左侧折叠角 */
        .form::before {
          content: "";
          position: absolute;
          pointer-events: none;
          background: linear-gradient(135deg, #e0e0e0 0%, #d0d0d0 50%, #c5c5c5 100%);
          width: 30%;
          height: 100%;
          top: 0;
          right: calc(100% - 1px);
          transform-origin: 100% 100%;
          transform: skewY(-35deg) scaleX(-1);
          transition: background 350ms ease, transform 350ms cubic-bezier(0.075, 0.82, 0.165, 1);
          z-index: -1;
          /* 折叠角阴影 - 模拟纸张厚度和光影 */
          box-shadow: 
            inset -5px 0 20px rgba(0, 0, 0, 0.15),
            inset 2px 0 5px rgba(255, 255, 255, 0.3),
            2px 2px 10px rgba(0, 0, 0, 0.1);
        }

        /* 右侧折叠角 */
        .form::after {
          content: "";
          position: absolute;
          pointer-events: none;
          background: linear-gradient(225deg, #e0e0e0 0%, #d0d0d0 50%, #c5c5c5 100%);
          width: 30%;
          height: 100%;
          top: 0;
          left: calc(100% - 0px);
          transform-origin: 0 0;
          transform: skewY(-35deg) scaleX(-1);
          transition: background 350ms ease, transform 350ms cubic-bezier(0.075, 0.82, 0.165, 1);
          z-index: 2;
          /* 折叠角阴影 - 模拟纸张厚度和光影 */
          box-shadow: 
            inset 5px 0 20px rgba(0, 0, 0, 0.15),
            inset -2px 0 5px rgba(255, 255, 255, 0.3),
            -2px 2px 10px rgba(0, 0, 0, 0.1);
        }

        /* 悬浮时：折叠角展开 */
        .form:hover::before, .form:focus-within::before {
          background: white;
          transform: skewY(0);
          box-shadow: none;
        }

        .form:hover::after, .form:focus-within::after {
          background: white;
          transform: skewY(0);
          box-shadow: none;
        }

        /* 标题容器内部 */
        .form-inner {
          padding: 3rem 2rem;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
          z-index: 1;
          text-align: center;
          box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.02);
        }

        /* 文字内容块 - 左对齐但整体居中 */
        .form-content-wrapper {
          display: inline-block;
          text-align: left;
        }

        /* 文字内容块 - 居中对齐 */
        .form-content {
          max-width: 90%;
          margin: 0 auto;
        }

        .form-inner > * + * {
          margin-top: 1rem;
        }

        /* ============================================
           【元素1】主标题 - 折叠生境
           修改说明：直接修改下面的值即可
           ============================================ */
        h1.main-title {
          /* 字体：改引号内的名称，如 'SimSun', 'Microsoft YaHei' */
          font-family: 'Noto Serif SC', Georgia, serif;
          
          /* 字体大小：clamp(最小值, 响应式, 最大值)，直接改数字
             例如：clamp(2.5rem, 8vw, 5rem) 会更小 */
          font-size: clamp(3rem, 10vw, 6rem);
          
          /* 字体粗细：100-900，数值越大越粗
             常用值：400=正常，600=中等粗，700=粗体，900=特粗 */
          font-weight: 700;
          
          /* 字体颜色：十六进制颜色值或颜色名称
             例如：#ff0000=红色，#000000=黑色，#ffffff=白色 */
          color: #1a1a1a;
          
          /* 行高：控制文字上下间距，建议1.0-1.5之间 */
          line-height: 1.1;
          
          /* 【垂直位置】上边距：数值越大越靠下
             0=紧贴顶部，正值向下移，负值向上移 */
          margin-top: 0;
          
          /* 与下方英文标题的距离：数值越大间距越大 */
          margin-bottom: 0.5rem;
          
          /* 字间距：数值越大字之间距离越大 */
          letter-spacing: 0.03em;
        }

        /* ============================================
           【元素2】英文标题 - FOLD BIOTOPE
           修改说明：直接修改下面的值即可
           ============================================ */
        h2.english-title {
          /* 字体 */
          font-family: 'HarmonyOS Sans';
          
          /* 字体大小 */
          font-size: clamp(0.875rem, 2vw, 1.25rem);
          
          /* 字体粗细 */
          font-weight: 700;
          
          /* 字体颜色 */
          color: #1a1a1a;
          
          /* 字母间距：数值越大越松散 */
          letter-spacing: 0.25em;
          
          /* 强制大写（保持不变即可） */
          text-transform: uppercase;
          
          /* 【垂直位置】与下方副标题的距离 */
          margin-bottom: 1.5rem;
          
          /* 如需调整垂直位置，添加这行：
             margin-top: 1rem;  /* 正值向下移，负值向上移 */
          */
        }

        /* ============================================
           【元素3】副标题 - The Boundless Interactive...
           修改说明：直接修改下面的值即可
           ============================================ */
        p.subtitle {
          /* 字体 */
          font-family: 'Gentium Plus';
          
          /* 字体大小 */
          font-size: clamp(0.75rem, 1.5vw, 1rem);
          
          /* 字体颜色 */
          color: #666;
          
          /* 斜体：italic=斜体，normal=正常 */
          font-style: italic;
          
          /* 字母间距 */
          letter-spacing: 0.1em;
          
          /* 【垂直位置】与下方信息栏的距离 */
          margin-bottom: 1rem;
          
          /* 如需调整垂直位置，添加这行：
             margin-top: 0.5rem;  /* 正值向下移，负值向上移 */
          */
        }

        /* ============================================
           【元素4】信息栏 - MSc ATB 2025 线上毕业展
           修改说明：直接修改下面的值即可
           ============================================ */
        p.info {
          /* 字体 */
          font-family: 'HarmonyOS Sans';
          
          /* 字体大小 */
          font-size: clamp(0.625rem, 1.2vw, 0.875rem);
          
          /* 字体颜色 */
          color: #999;
          
          /* 字母间距 */
          letter-spacing: 0.15em;
          
          /* 【垂直位置】与上方副标题的距离（通过上内边距） */
          padding-top: 1rem;
          
          /* 分隔线：1px=粗细，solid=实线，#eee=颜色 */
          border-top: 1px solid #eee;
          
          /* 如需调整垂直位置，修改 padding-top 的值：
             padding-top: 0.5rem;  /* 数值越小越靠上 */
          */
        }

        /* ============================================
           【整体容器位置调整】
           如果想让整个文字区域在白色卡片内上下移动
           修改 .form-inner 的 padding-top 和 padding-bottom
           ============================================ */
        /* .form-inner {
             padding-top: 3rem;    /* 顶部内边距：数值越大整体越靠下 */
             padding-bottom: 3rem; /* 底部内边距 */
           } */

        /* 右箭头按钮 */
        .arrow-button {
          position: absolute;
          bottom: 2rem;
          right: -10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 1;
          opacity: 0;
          border: none;
          background: transparent;
          padding: 0;
        }

        .form:hover .arrow-button,
        .form:focus-within .arrow-button {
          opacity: 1;
          right: 3rem;
        }

        .arrow-button:hover {
          transform: translateX(4px);
        }

        .arrow-icon {
          font-size: 1.25rem;
          color: #1a1a1a;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .arrow-button:hover .arrow-icon {
          color: #666;
        }

        .hero-nav {
          position: absolute;
          bottom: 40px;
          display: flex;
          gap: 32px;
          z-index: 2;
        }

        .nav-link {
          font-size: 14px;
          color: #888;
          text-decoration: none;
          letter-spacing: 0.08em;
          padding: 12px 24px;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          background: #1a1a1a;
          color: white;
          border-color: #1a1a1a;
        }

        @media (max-width: 780px) {
          figure { max-width: 90%; padding: 28px; }
          figcaption { font-size: 14px; padding-left: 16px; }
          .hero-nav { flex-direction: column; gap: 12px; bottom: 24px; }
          .nav-link { text-align: center; }
        }
      `}</style>

      {/* ========== 区域 2: 代码创作区（Section1）========== */}
      <Section1 />

      {/* ========== 区域 3: 白色背景区（Section2）========== */}
      <Section2 />

      {/* ========== 区域 4: 第三个区域（Section3）========== */}
      <Section3 />

      {/* ========== 页尾 ========== */}
      <Footer />
    </>
  );
}
