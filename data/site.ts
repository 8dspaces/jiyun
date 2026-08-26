export interface NavigationItem {
  href: string;
  label: string;
}

export interface StatisticItem {
  value: string;
  label: string;
}

export interface CapabilityItem {
  title: string;
  description: string;
}

export interface SeriesItem {
  title: string;
  description: string;
  highlights: string[];
}

export interface ProductItem {
  name: string;
  model: string;
  image: string;
  alt: string;
  summary: string;
  features: string[];
  category: string;
}

export interface ContactItem {
  label: string;
  value: string;
}

export interface FooterGroup {
  title: string;
  items: NavigationItem[];
}

export const navigationItems: NavigationItem[] = [
  { href: "/", label: "首页" },
  { href: "/products", label: "产品中心" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "网站导航",
    items: [
      { href: "/", label: "首页" },
      { href: "/products", label: "产品中心" },
      { href: "/about", label: "关于我们" },
      { href: "/contact", label: "联系我们" },
    ],
  },
  {
    title: "产品方向",
    items: [
      { href: "/products", label: "风处理系列" },
      { href: "/products", label: "智能清洁系列" },
      { href: "/products", label: "厨房家电系列" },
      { href: "/products", label: "健康家居系列" },
      { href: "/products", label: "睡眠家居系列" },
    ],
  },
  {
    title: "企业信息",
    items: [
      { href: "/about", label: "品牌介绍" },
      { href: "/about", label: "研发能力" },
      { href: "/about", label: "制造协同" },
      { href: "/contact", label: "商务合作" },
      { href: "/contact", label: "全球业务" },
    ],
  },
];

export const companyProfile = {
  name: "积云家居科技",
  fullName: "广东顺德积云家居科技有限公司",
  englishName: "CUMULUS SMART HOME APPLIANCE CO., LTD",
  heroTitle: "以风处理与水处理技术为核心，打造有设计感的智能家电品牌。",
  heroDescription:
    "积云家居专注风处理与水处理相关家电设计研发，依托广东顺德制造优势、资深设计研发团队与成熟供应链体系，为客户提供兼具效率、品质与美感的产品方案。",
  introduction:
    "公司位于广东顺德，占地逾 2000 平方米，员工约 150 人，拥有设计、研发、供应链与商务团队，并与多家国际一流制造供应商保持合作。",
  values: ["快速响应", "模块化思维", "客户化定制", "环境友好", "健康生活"],
};

export const statistics: StatisticItem[] = [
  { value: "2000+㎡", label: "制造与协同空间" },
  { value: "150 人", label: "设计、研发与商务团队" },
  { value: "5 大类", label: "官网首版核心产品矩阵" },
  { value: "2 个国家", label: "资料明确覆盖美国与加拿大" },
];

export const capabilities: CapabilityItem[] = [
  {
    title: "设计与研发并重",
    description:
      "从产品外观、模块结构到功能体验，以工业设计与工程落地并行推进。",
  },
  {
    title: "客户化定制开发",
    description:
      "围绕市场需求快速响应，支持不同尺寸、功能与配置组合，满足差异化业务场景。",
  },
  {
    title: "制造协同能力",
    description:
      "依托顺德家电产业链与国际制造合作基础，兼顾效率、品质与交付稳定性。",
  },
];

export const seriesItems: SeriesItem[] = [
  {
    title: "风处理系列",
    description:
      "以风扇、风幕机、冷风机为核心，覆盖家用、商用与工业场景。",
    highlights: ["电风扇", "风幕机", "冷风机"],
  },
  {
    title: "清洁与智能家居",
    description:
      "以扫地机器人为代表，强调吸力、导航与自动化基站能力。",
    highlights: ["基础扫拖", "进阶扫拖", "AI 语音"],
  },
  {
    title: "厨房家电",
    description:
      "以咖啡机、空气炸锅、烤箱组成补充型产品矩阵，展现家居电器延展能力。",
    highlights: ["咖啡机", "空气炸锅", "烤箱"],
  },
  {
    title: "健康家居",
    description:
      "以空气净化器、体重秤为代表，延伸健康生活方式场景。",
    highlights: ["空气净化器", "体重秤", "健康监测"],
  },
  {
    title: "睡眠家居系列",
    description:
      "围绕床垫与舒眠配套场景延展，为卧室空间提供更舒适的家居产品方向。",
    highlights: ["床垫", "舒眠支撑", "卧室配套"],
  },
];

export const featuredProducts: ProductItem[] = [
  {
    name: "蓄电旗舰风扇",
    model: "CHFDS40Y-5DLK01RM",
    image: "/images/products/fan-flagship.png",
    alt: "积云家居旗舰蓄电风扇",
    summary:
      "以大风量、蓄电与快接模块为核心，兼顾家居环境中的灵活功能扩展。",
    features: ["变频电机", "4-8 小时续航", "可选灭蚊灯/加湿器/蓝牙音响"],
    category: "风处理系列",
  },
  {
    name: "商用风幕机",
    model: "CHFM-3515LY-K1",
    image: "/images/products/air-curtain.jpeg",
    alt: "积云家居风幕机产品图",
    summary:
      "面向商用入口场景，强调高效电机、静音表现与稳定的风量覆盖。",
    features: ["铝合金外壳", "16m/s 风速", "2.5-3m 安装高度"],
    category: "风处理系列",
  },
  {
    name: "扫地机器人进阶款",
    model: "JY-RD300M",
    image: "/images/products/robot-pro.png",
    alt: "积云家居进阶扫地机器人",
    summary:
      "强化自动化清洁体验，集成旋转拖地、自动上下水与更强吸力方案。",
    features: ["7000Pa 吸力", "自动上下水", "AI 语音助手"],
    category: "清洁与智能家居",
  },
  {
    name: "工业冷风机",
    model: "CHL6.0-ZM13YB05",
    image: "/images/products/air-cooler.png",
    alt: "积云家居冷风机",
    summary:
      "适合大空间降温与空气循环场景，兼顾风量、水箱容量与稳定结构设计。",
    features: ["6000m³/h 风量", "85L 水箱", "三档风速"],
    category: "风处理系列",
  },
  {
    name: "空气炸锅",
    model: "COC1.0-DD16C01",
    image: "/images/products/air-fryer.jpeg",
    alt: "积云家居空气炸锅",
    summary:
      "以简洁外观搭配日常厨房功能，形成家居电器产品矩阵的视觉补充。",
    features: ["4.5L 容量", "80-200℃ 调温", "0-60 分钟定时"],
    category: "厨房家电",
  },
  {
    name: "空气净化器",
    model: "DOD-CC10D01Y22",
    image: "/images/products/air-purifier.jpeg",
    alt: "积云家居空气净化器",
    summary:
      "聚焦颗粒物与甲醛净化能力，补充健康家居场景下的核心产品带。",
    features: ["颗粒物 CADR 600m³/h", "32-60㎡ 适用面积", "35-65dB 噪声"],
    category: "健康家居",
  },
];

export const contactItems: ContactItem[] = [
  { label: "公司名称", value: "广东顺德积云家居科技有限公司" },
  { label: "所在地", value: "广东顺德" },
  { label: "合作方向", value: "品牌合作 / 产品定制 / 渠道合作" },
  { label: "资料状态", value: "联系方式待补充，可先预留商务邮箱与电话" },
];
