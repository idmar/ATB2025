export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  color: string;
  bgColor: string;
  accentColor: string;
  details: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "东方钿语",
    category: "Cultural Folding",
    year: "2024",
    description: "探索东方传统首饰工艺与现代设计的融合，展现千年文化的传承与创新。",
    color: "#1a1a1a",
    bgColor: "#D7E294",
    accentColor: "#87ACDC",
    details: [
      "融合传统金工技艺与当代设计理念",
      "深入研究东方首饰文化的历史脉络",
      "运用现代材料重新诠释经典纹样",
      "作品被多家博物馆收藏展出"
    ],
    images: []
  },
  {
    id: 2,
    title: "汴河序",
    category: "Cultural Folding",
    year: "2024",
    description: "以北宋汴河为灵感，通过数字艺术重现千年古运河的繁华景象。",
    color: "#ffffff",
    bgColor: "#E77C49",
    accentColor: "#EAB8C2",
    details: [
      "基于历史文献的严谨考证",
      "运用3D建模还原宋代建筑风貌",
      "沉浸式体验展现汴河两岸生活",
      "荣获文化遗产数字化创新奖"
    ],
    images: []
  },
  {
    id: 3,
    title: "云脉藏纹·猫守千年",
    category: "Cultural Folding",
    year: "2024",
    description: "将传统云纹与猫咪形象结合，讲述一段跨越千年的守护故事。",
    color: "#1a1a1a",
    bgColor: "#EAB8C2",
    accentColor: "#D7E294",
    details: [
      "深入研究云纹的历史演变",
      "猫咪形象赋予传统纹样新生命",
      "插画与动画相结合的叙事方式",
      "在多个艺术展览中展出"
    ],
    images: []
  },
  {
    id: 4,
    title: "朱翠",
    category: "Cultural Folding",
    year: "2023",
    description: "以朱砂与翡翠为灵感，探索东方色彩哲学在现代设计中的表达。",
    color: "#1a1a1a",
    bgColor: "#87ACDC",
    accentColor: "#E77C49",
    details: [
      "研究中国传统色彩体系",
      "朱砂红与翡翠绿的色彩实验",
      "应用于品牌视觉与产品设计",
      "获国际色彩设计大奖"
    ],
    images: []
  },
  {
    id: 5,
    title: "竹韵千年",
    category: "Cultural Folding",
    year: "2024",
    description: "以竹子为载体，展现东方文化中竹的品格与美学意境。",
    color: "#1a1a1a",
    bgColor: "#D7E294",
    accentColor: "#EAB8C2",
    details: [
      "实地考察竹林生态与竹文化",
      "竹材工艺的现代创新应用",
      "可持续设计理念的实践",
      "作品入选绿色设计年鉴"
    ],
    images: []
  },
  {
    id: 6,
    title: "唐宫往事",
    category: "Cultural Folding",
    year: "2023",
    description: "通过视觉叙事重现唐代宫廷生活，展现盛唐文化的辉煌。",
    color: "#ffffff",
    bgColor: "#E77C49",
    accentColor: "#87ACDC",
    details: [
      "参考大量唐代历史文献与文物",
      "复原唐代服饰与建筑细节",
      "互动式体验让历史鲜活起来",
      "被故宫博物院数字馆收录"
    ],
    images: []
  },
  {
    id: 7,
    title: "Warm Weave",
    category: "Sensory Symbiosis",
    year: "2024",
    description: "探索编织工艺与温度感知的关系，创造温暖的触觉体验。",
    color: "#1a1a1a",
    bgColor: "#87ACDC",
    accentColor: "#D7E294",
    details: [
      "研究编织纹理对温度感知的影响",
      "运用智能温控材料",
      "人机交互的温度反馈设计",
      "在米兰设计周展出"
    ],
    images: []
  },
  {
    id: 8,
    title: "movestep",
    category: "Sensory Symbiosis",
    year: "2023",
    description: "通过运动与声音的交互，探索身体与环境的感官共鸣。",
    color: "#ffffff",
    bgColor: "#EAB8C2",
    accentColor: "#E77C49",
    details: [
      "动作捕捉技术实时生成音乐",
      "探索舞蹈与声音的边界",
      "沉浸式互动装置体验",
      "获新媒体艺术创新奖"
    ],
    images: []
  },
  {
    id: 9,
    title: "我的版画师",
    category: "Sensory Symbiosis",
    year: "2024",
    description: "AI辅助的版画创作，探索传统工艺与人工智能的协作。",
    color: "#1a1a1a",
    bgColor: "#D7E294",
    accentColor: "#87ACDC",
    details: [
      "训练AI学习传统版画技法",
      "人机共创的艺术实验",
      "保留手工制作的温度感",
      "作品被现代美术馆收藏"
    ],
    images: []
  },
  {
    id: 10,
    title: "AI智能衣橱",
    category: "Sensory Symbiosis",
    year: "2023",
    description: "基于AI的智能穿搭系统，实现个性化与时尚的完美平衡。",
    color: "#1a1a1a",
    bgColor: "#E77C49",
    accentColor: "#EAB8C2",
    details: [
      "深度学习分析穿搭趋势",
      "个性化推荐算法",
      "虚拟试衣技术",
      "获智能时尚科技奖"
    ],
    images: []
  },
  {
    id: 11,
    title: "花伴",
    category: "Sensory Symbiosis",
    year: "2023",
    description: "以花卉为媒介，探索人与自然的情感连接与感官体验。",
    color: "#1a1a1a",
    bgColor: "#87ACDC",
    accentColor: "#D7E294",
    details: [
      "研究花卉的视觉与嗅觉语言",
      "互动装置展现花的生命周期",
      "治愈系艺术体验",
      "在多个城市巡回展出"
    ],
    images: []
  },
  {
    id: 12,
    title: "dream land 梦境之地",
    category: "Vital Wonderland",
    year: "2024",
    description: "构建一个超现实的梦境世界，探索潜意识与想象力的边界。",
    color: "#1a1a1a",
    bgColor: "#EAB8C2",
    accentColor: "#E77C49",
    details: [
      "收集梦境素材与灵感",
      "超现实主义的视觉表达",
      "沉浸式VR体验",
      "获数字艺术创作金奖"
    ],
    images: []
  },
  {
    id: 13,
    title: "生命循环·生息相续",
    category: "Vital Wonderland",
    year: "2024",
    description: "展现生命的循环往复，探索自然界的生生不息之美。",
    color: "#ffffff",
    bgColor: "#D7E294",
    accentColor: "#87ACDC",
    details: [
      "研究生态系统的循环机制",
      "动态视觉呈现生命过程",
      "环保理念的视觉传达",
      "作品被联合国环境署收录"
    ],
    images: []
  },
  {
    id: 14,
    title: "咸水谣 · 海上集",
    category: "Exotic Roaming",
    year: "2023",
    description: "以海洋文化为背景，讲述海边的传说与渔民的生活故事。",
    color: "#1a1a1a",
    bgColor: "#E77C49",
    accentColor: "#EAB8C2",
    details: [
      "实地采风记录渔民生活",
      "海洋文化的深度挖掘",
      "传统渔歌的现代演绎",
      "获民俗文化传承奖"
    ],
    images: []
  },
  {
    id: 15,
    title: "西湖入境",
    category: "Exotic Roaming",
    year: "2024",
    description: "以西湖为灵感，探索江南水乡的诗意与美学意境。",
    color: "#1a1a1a",
    bgColor: "#87ACDC",
    accentColor: "#D7E294",
    details: [
      "深入研究西湖文化历史",
      "水墨风格的现代诠释",
      "四季变化的视觉呈现",
      "作品被杭州美术馆收藏"
    ],
    images: []
  },
  {
    id: 16,
    title: "归青",
    category: "Exotic Roaming",
    year: "2024",
    description: "探索回归自然的心路历程，寻找内心的宁静与平和。",
    color: "#ffffff",
    bgColor: "#EAB8C2",
    accentColor: "#E77C49",
    details: [
      "极简主义的设计语言",
      "自然材料的运用",
      "冥想与禅意的视觉表达",
      "获东方美学设计奖"
    ],
    images: []
  }
];