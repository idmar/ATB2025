'use client';

import { useState } from 'react';

const sections = [
  {
    id: 1,
    title: '文化折叠',
    subtitle: 'Cultural Folding',
    desc: '寻找数字艺术中的文化共鸣',
    content: '「文化折叠」是一个关于历史符号、传统工艺与多元生态的展区。在数字艺术的褶皱里，打破时空的界限，展区作品以非遗技艺、北宋市井长卷、翠鸟叙事、东方竹韵空间为切入点，融合盛唐妆饰美学的VR沉浸体验，呈现东方文化内核，开启一场历经千年与文化洗礼的古今共鸣。',
    color: '#ebb877d3'
  },
  {
    id: 2,
    title: '感官共生',
    subtitle: 'Sensory Symbiosis',
    desc: '在科技创新中捕捉温情',
    content: '「感官共生」展区聚焦用科技捕捉日常温情，数字像素承载创作者的情绪与偏爱。作品以情绪关怀、数字艺术、交互设计为支点，通过 NFC、AI 捕捉、虚拟形象等技术，将数据转化为可感知的日常体验，让科技与温情在此共生共鸣。',
    color: '#a8d4e8d3'
  },
  {
    id: 3,
    title: '生命奇境',
    subtitle: 'Vital Wonderland',
    desc: '以诗意的视角探索生命',
    content: '「生命奇境」展区聚焦用艺术科技探索生命与意识的议题，以诗意的视角探索生命的多种形式与可能性。作品涵盖人工智能创作、生命系统模拟、人机交互体验等主题，邀请观众思考生命、意识与技术的关系，在数字世界体验生命的奥秘。',
    color: '#eab8c2d3'
  },
  {
    id: 4,
    title: '异境漫游',
    subtitle: 'Exotic Roaming',
    desc: '在虚实交融间探索未知',
    content: '「异境漫游」展区以沉浸式体验为核心，带你在虚拟与现实之间穿梭。通过 VR、AR、数字孪生等技术，构建奇幻的数字世界，让观众体验异次元的感官之旅，打破现实边界，探索无限可能。',
    color: '#d7e294d3'
  }
];

export default function MobileSection2() {
  const [active, setActive] = useState(1);

  return (
    <section className="mobile-section2">
      {/* 标题 */}
        <div className="mobile-section2-header">
          <h2 className="mobile-section2-title">展区介绍</h2>
          <p className="mobile-section2-subtitle">Four Exhibition Sections</p>
        </div>

      {/* 展区卡片列表 */}
      <div className="mobile-cards">
        {sections.map((sec) => (
          <div
            key={sec.id}
            className="mobile-card"
            style={{ background: sec.color }}
            onClick={() => setActive(sec.id === active ? 0 : sec.id)}
          >
            <div className="mobile-card-header">
              <h3 className="mobile-card-title">{sec.title}</h3>
              <span className="mobile-card-subtitle">{sec.subtitle}</span>
            </div>
            <p className="mobile-card-desc">{sec.desc}</p>
            {active === sec.id && (
              <div className="mobile-card-content">
                <p>{sec.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .mobile-section2 {
          position: relative;
          min-height: 100vh;
          padding: 40px 20px;
          background: rgba(255, 255, 255, 0.75);
        }

        .mobile-section2-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .mobile-section2-title {
          font-family: 'SiyinSong', 'Noto Serif SC';
          font-size: 1.8rem;
          color: #333;
          margin: 0 0 10px;
        }

        .mobile-section2-subtitle {
          font-family: 'HarmonyOS Sans', 'Helvetica Neue';
          font-size: 1rem;
          color: #888;
          letter-spacing: 2px;
          margin: 0;
        }

        .mobile-cards {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .mobile-card {
          border-radius: 12px;
          padding: 20px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .mobile-card:hover {
          transform: translateY(-2px);
        }

        .mobile-card-header {
          margin-bottom: 10px;
        }

        .mobile-card-title {
          font-family: 'SiyinSong', 'Noto Serif SC';
          font-size: 1.3rem;
          color: #333;
          margin: 0 0 5px;
        }

        .mobile-card-subtitle {
          font-family: 'HarmonyOS Sans', 'Helvetica Neue';
          font-size: 0.85rem;
          color: #666;
          letter-spacing: 1px;
        }

        .mobile-card-desc {
          font-family: 'SiyinSong', 'Noto Serif SC';
          font-size: 0.9rem;
          color: #555;
          margin: 0 0 10px;
        }

        .mobile-card-content {
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: 15px;
          animation: fadeIn 0.3s ease;
        }

        .mobile-card-content p {
          font-family: 'SiyinSong', 'Noto Serif SC';
          font-size: 0.9rem;
          color: #444;
          line-height: 1.8;
          margin: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
