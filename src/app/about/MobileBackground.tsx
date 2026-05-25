"use client";

import { useEffect, useState } from 'react';

export default function MobileBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(scrollY, 3000) / 3000;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 粉色色块 - 左下 - 小尺寸 */}
      <div 
        className="absolute z-10 rounded-[25px]"
        style={{ 
          top: `${50 + progress * 25}%`, 
          left: `${8 + Math.sin(progress * Math.PI) * 10}%`, 
          width: '28vw',
          height: '35vw',
          background: '#EAB8C2',
          transform: `rotate(${-8 + progress * 18}deg)`,
          boxShadow: '0 12px 40px rgba(234, 184, 194, 0.5)',
        }}
      />

      {/* 绿色色块 - 右上 - 中等尺寸 */}
      <div 
        className="absolute z-20 rounded-[30px]"
        style={{ 
          top: `${8 + progress * 30}%`, 
          right: `${10 + Math.sin(progress * Math.PI * 0.8) * 12}%`, 
          width: '36vw',
          height: '46vw',
          background: '#D7E294',
          transform: `rotate(${15 - progress * 25}deg)`,
          boxShadow: '0 16px 48px rgba(215, 226, 148, 0.55)',
        }}
      />

      {/* 橙色色块 - 右下 - 大尺寸 */}
      <div 
        className="absolute z-30 rounded-[35px]"
        style={{ 
          top: `${55 + progress * 20}%`, 
          left: `${48 + Math.sin(progress * Math.PI * 1.2) * 14}%`, 
          width: '42vw',
          height: '54vw',
          background: '#E77C49',
          transform: `rotate(${-18 + progress * 35}deg)`,
          boxShadow: '0 20px 60px rgba(231, 124, 73, 0.6)',
        }}
      />

      {/* 蓝色色块 - 左上 - 超大尺寸 */}
      <div 
        className="absolute z-15 rounded-[40px]"
        style={{ 
          top: `${5 + progress * 48}%`, 
          right: `${45 + Math.sin(progress * Math.PI * 0.6) * 16}%`, 
          width: '48vw',
          height: '62vw',
          background: '#87ACDC',
          transform: `rotate(${18 - progress * 38}deg)`,
          boxShadow: '0 22px 65px rgba(135, 172, 220, 0.6)',
        }}
      />
    </div>
  );
}
