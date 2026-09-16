import {
  createLocalizedText,
  type LocalizedText,
} from "@/lib/locale";

const t = createLocalizedText;

export interface NavigationItem {
  href: string;
  label: LocalizedText;
}

export interface StatisticItem {
  value: LocalizedText;
  label: LocalizedText;
}

export interface CapabilityItem {
  title: LocalizedText;
  description: LocalizedText;
}

export interface SeriesItem {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  highlights: LocalizedText[];
  image: string;
  alt: LocalizedText;
  icon: "wind" | "building" | "bot" | "chef" | "heart" | "home";
}

export interface ProductItem {
  name: LocalizedText;
  model: string;
  image: string;
  alt: LocalizedText;
  summary: LocalizedText;
  features: LocalizedText[];
  category: string;
  categoryLabel: LocalizedText;
  productLine: string;
  productLineLabel: LocalizedText;
}

export interface ContactItem {
  label: LocalizedText;
  value: LocalizedText;
}

export interface FooterGroup {
  title: LocalizedText;
  items: NavigationItem[];
}

export interface CatalogSection {
  id: string;
  key: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  alt: LocalizedText;
  highlights: LocalizedText[];
  productLines: ProductLineItem[];
}

export interface ProductLineItem {
  name: string;
  label: LocalizedText;
  summary: LocalizedText;
}

export interface ShowcaseImageItem {
  image: string;
  alt: LocalizedText;
  productLine?: string;
  name?: LocalizedText;
  model?: string;
  summary?: LocalizedText;
  features?: LocalizedText[];
}

interface CatalogProductBatch {
  englishBaseName: string;
  chineseBaseName: string;
  modelPrefix: string;
  imageNames: string[];
  category: string;
  categoryLabel: LocalizedText;
  productLine: string;
  productLineLabel: LocalizedText;
  summary: LocalizedText;
  features: Array<{ en: string; zh: string }>;
}

interface DetailedCatalogProduct {
  imageName: string;
  name: { en: string; zh: string };
  model: string;
  summary: { en: string; zh: string };
  features: Array<{ en: string; zh: string }>;
  category: string;
  categoryLabel: LocalizedText;
  productLine: string;
  productLineLabel: LocalizedText;
}

export const navigationItems: NavigationItem[] = [
  { href: "/", label: t("Home", "首页") },
  { href: "/products", label: t("Products", "产品中心") },
  { href: "/about", label: t("About", "关于我们") },
  { href: "/contact", label: t("Contact", "联系我们") },
];

export const footerGroups: FooterGroup[] = [
  {
    title: t("Site Map", "网站导航"),
    items: [
      { href: "/", label: t("Home", "首页") },
      { href: "/products", label: t("Products", "产品中心") },
      { href: "/about", label: t("About", "关于我们") },
      { href: "/contact", label: t("Contact", "联系我们") },
    ],
  },
  {
    title: t("Product Categories", "产品方向"),
    items: [
      {
        href: "/products#air-treatment",
        label: t("Air Treatment", "风处理系列"),
      },
      {
        href: "/products#smart-cleaning",
        label: t("Smart Cleaning", "智能清洁系列"),
      },
      {
        href: "/products#kitchen-appliances",
        label: t("Kitchen Appliances", "厨房家电系列"),
      },
      {
        href: "/products#healthy-home",
        label: t("Healthy Home", "健康家居系列"),
      },
      {
        href: "/products#home-customization",
        label: t("Home Customization", "家居定制系列"),
      },
    ],
  },
  {
    title: t("Company", "企业信息"),
    items: [
      { href: "/about", label: t("Brand Profile", "品牌介绍") },
      { href: "/about", label: t("R&D Capability", "研发能力") },
      { href: "/about", label: t("Manufacturing Synergy", "制造协同") },
      { href: "/contact", label: t("Business Cooperation", "商务合作") },
      { href: "/contact", label: t("Global Coverage", "全球业务") },
    ],
  },
];

export const companyProfile = {
  name: t("Cumulus Smart Home", "积云家居科技"),
  fullName: t(
    "Guangdong Shunde Cumulus Smart Home Technology Co., Ltd.",
    "广东顺德积云家居科技有限公司",
  ),
  englishName: "CUMULUS SMART HOME APPLIANCE CO., LTD",
  heroTitle: t(
    "Driven by industrial design, aligned with manufacturing, built for custom development",
    "工业设计驱动，制造协同交付，支持客户化开发。",
  ),
  heroDescription: t(
    "Focused on appliance design and development in air treatment and related home solutions, supporting brand cooperation, product customization, and channel partnerships with stable execution.",
    "专注风处理与水处理相关家电设计研发，面向品牌合作、产品定制与渠道合作提供更稳定的产品解决能力。",
  ),
  introduction: t(
    "Based in Guangdong  with a stable foundation for product collaboration and long-term project delivery.",
    "位于广东，拥有设计、研发、供应链与商务团队。",
  ),
  values: [
    t("Industrial Design", "工业设计驱动"),
    t("Modular Development", "模块化开发"),
    t("Manufacturing Synergy", "制造协同"),
    t("Fast Response", "快速响应"),
    t("Customized Solutions", "客户化定制"),
  ],
};

export const statistics: StatisticItem[] = [
  {
    value: t("5 Core Series", "5 大主打品类"),
    label: t("Product catalog structure", "官网产品品类目录"),
  },
  {
    value: t("2,000+ sqm", "2000+㎡"),
    label: t("Manufacturing and coordination space", "制造与协同空间"),
  },
  {
    value: t("150+ Employees", "150+ 人"),
    label: t("Design, R&D and business team", "设计、研发与商务团队"),
  },
  {
    value: t("Global Reach", "全球化"),
    label: t("Supporting overseas and domestic markets", "覆盖海外与国内合作市场"),
  },
];

export const capabilities: CapabilityItem[] = [
  {
    title: t("Design & R&D", "设计研发"),
    description: t(
      "Industrial design, structure, and user experience developed in parallel.",
      "外观、结构与体验同步推进。",
    ),
  },
  {
    title: t("Five Product Series", "五大品类"),
    description: t(
      "Covering air treatment, smart cleaning, kitchen appliances, healthy home, and household goods solutions.",
      "覆盖风处理、智能清洁、厨房家电、健康家居与家居用品解决方案。",
    ),
  },
  {
    title: t("Manufacturing Synergy", "制造协同"),
    description: t(
      "Balancing quality, efficiency, and dependable delivery.",
      "兼顾品质、效率与稳定交付。",
    ),
  },
];

export const homeSlides: ShowcaseImageItem[] = [
  {
    image: "/images/slides/001.jpg",
    alt: t("Cumulus homepage slide visual 01", "积云家居首页轮播图 01"),
  },
  {
    image: "/images/slides/002.jpg",
    alt: t("Cumulus homepage slide visual 02", "积云家居首页轮播图 02"),
  },
  {
    image: "/images/slides/003.jpg",
    alt: t("Cumulus homepage slide visual 03", "积云家居首页轮播图 03"),
  },
  {
    image: "/images/slides/004.jpg",
    alt: t("Cumulus homepage slide visual 04", "积云家居首页轮播图 04"),
  },
  {
    image: "/images/slides/005.jpg",
    alt: t("Cumulus homepage slide visual 05", "积云家居首页轮播图 05"),
  },
];

export const seriesItems: SeriesItem[] = [
  {
    id: "air-treatment",
    title: t("Air Treatment", "风处理系列"),
    description: t(
      "Fans, air coolers, and air curtain equipment.",
      "风扇、冷风机与风幕机产品。",
    ),
    highlights: [
      t("Rechargeable Fans", "蓄电风扇"),
      t("Air Curtains", "风幕机"),
      t("Air Coolers", "冷风机"),
    ],
    image: "/images/series/001.jpg",
    alt: t("Cumulus air treatment category image", "积云家居风处理系列品类图"),
    icon: "wind",
  },
  {
    id: "smart-cleaning",
    title: t("Smart Cleaning", "智能清洁系列"),
    description: t(
      "Robot vacuums and intelligent cleaning devices.",
      "扫地机器人与清洁设备。",
    ),
    highlights: [
      t("Vacuum & Mop", "扫拖一体"),
      t("AI Voice", "AI 语音"),
      t("Auto Water Supply", "自动上下水"),
    ],
    image: "/images/series/003.jpg",
    alt: t(
      "Cumulus smart cleaning category image",
      "积云家居智能清洁系列品类图",
    ),
    icon: "bot",
  },
  {
    id: "kitchen-appliances",
    title: t("Kitchen Appliances", "厨房家电系列"),
    description: t(
      "Appliances for modern kitchen use cases.",
      "厨房场景家电产品。",
    ),
    highlights: [
      t("Air Fryers", "空气炸锅"),
      t("Ovens", "烤箱"),
      t("Coffee Machines", "咖啡机"),
    ],
    image: "/images/series/004.jpg",
    alt: t(
      "Cumulus kitchen appliance category image",
      "积云家居厨房家电系列品类图",
    ),
    icon: "chef",
  },
  {
    id: "healthy-home",
    title: t("Healthy Home", "健康家居系列"),
    description: t(
      "Air purification and healthy living products.",
      "空气净化与健康家居。",
    ),
    highlights: [
      t("Air Purification", "空气净化"),
      t("Health Monitoring", "健康监测"),
      t("Comfort Living", "舒适生活"),
    ],
    image: "/images/series/005.jpg",
    alt: t(
      "Cumulus healthy home category image",
      "积云家居健康家居系列品类图",
    ),
    icon: "heart",
  },
  {
    id: "home-customization",
    title: t("Home Customization", "家居定制系列"),
    description: t(
      "Interior space solutions and custom development.",
      "家居空间与定制方案。",
    ),
    highlights: [
      t("Space Planning", "空间配套"),
      t("Product Integration", "产品整合"),
      t("Custom Development", "客户化开发"),
    ],
    image: "/images/series/006.jpg",
    alt: t(
      "Cumulus home customization category image",
      "积云家居家居定制系列品类图",
    ),
    icon: "home",
  },
];

/**
 * 根据扩展产品图批量生成产品卡数据，避免手写大量重复条目。
 *
 * @param batch 批量产品配置。
 * @returns 返回扩展产品卡数据列表。
 */
function createCatalogProducts(batch: CatalogProductBatch): ProductItem[] {
  return batch.imageNames.map((imageName, index) => {
    const serial = String(index + 1).padStart(2, "0");

    return {
      name: t(batch.englishBaseName, batch.chineseBaseName),
      model: `${batch.modelPrefix}-${serial}`,
      image: `/images/products/catalog/${imageName}`,
      alt: t(
        `${batch.englishBaseName} ${serial}`,
        `${batch.chineseBaseName} ${serial}`,
      ),
      summary: batch.summary,
      features: batch.features.map((feature) => t(feature.en, feature.zh)),
      category: batch.category,
      categoryLabel: batch.categoryLabel,
      productLine: batch.productLine,
      productLineLabel: batch.productLineLabel,
    };
  });
}

/**
 * 根据逐图配置生成产品卡数据，适用于每张图片拥有独立名称、型号与卖点的场景。
 *
 * @param items 逐图产品配置列表。
 * @returns 返回逐图生成后的产品卡数据。
 */
function createDetailedCatalogProducts(
  items: DetailedCatalogProduct[],
): ProductItem[] {
  return items.map((item) => ({
    name: t(item.name.en, item.name.zh),
    model: item.model,
    image: `/images/products/catalog/${item.imageName}`,
    alt: t(item.name.en, item.name.zh),
    summary: t(item.summary.en, item.summary.zh),
    features: item.features.map((feature) => t(feature.en, feature.zh)),
    category: item.category,
    categoryLabel: item.categoryLabel,
    productLine: item.productLine,
    productLineLabel: item.productLineLabel,
  }));
}

const coreFeaturedProducts: ProductItem[] = [
  {
    name: t("Flagship Rechargeable Fan", "蓄电旗舰风扇"),
    model: "CHFDS40Y-5DLK01RM",
    image: "/images/products/fan-flagship.jpg",
    alt: t("Cumulus flagship rechargeable fan", "积云家居旗舰蓄电风扇"),
    summary: t(
      "Built around strong airflow, battery backup, and modular quick-connect expansion for flexible home applications.",
      "以大风量、蓄电与快接模块为核心，兼顾家居场景中的灵活功能扩展。",
    ),
    features: [
      t("Inverter motor", "变频电机"),
      t("4-8 hour runtime", "4-8 小时续航"),
      t("Modular quick-connect expansion", "模块快接扩展"),
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "蓄电风扇",
    productLineLabel: t("Rechargeable Fans", "蓄电风扇"),
  },
  {
    name: t("Touchscreen Rechargeable Pedestal Fan", "触屏蓄电落地扇"),
    model: "CHFDS35Y-5A0101",
    image: "/images/products/fan-rechargeable.jpg",
    alt: t(
      "Cumulus touchscreen rechargeable pedestal fan",
      "积云家居触屏蓄电落地扇",
    ),
    summary: t(
      "Features a touchscreen panel and pre-assembled base, combining battery backup, angle adjustment, and flexible placement.",
      "采用触屏显示与预组装底盘设计，兼顾蓄电使用、角度调节与灵活摆放需求。",
    ),
    features: [
      t("5 blades", "5 风叶"),
      t("8 speed levels", "8 档风速"),
      t("Touchscreen display", "触屏显示"),
      t("180° horizontal oscillation", "180° 水平送风"),
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "蓄电风扇",
    productLineLabel: t("Rechargeable Fans", "蓄电风扇"),
  },
  {
    name: t("Classic Pedestal Fan", "经典落地风扇"),
    model: "CHFS40-4ADC0301",
    image: "/images/products/fan-standard.jpg",
    alt: t("Cumulus classic pedestal fan", "积云家居经典落地风扇"),
    summary: t(
      "Covers standard residential airflow needs with optional battery and inverter configurations in 16-inch and 18-inch sizes.",
      "覆盖家用基础送风场景，提供蓄电与变频配置选择，并支持 16 寸与 18 寸规格。",
    ),
    features: [
      t("Inverter or fixed-speed options", "变频/定频可选"),
      t("6-7 hour runtime", "6-7 小时续航"),
      t("3 speed levels", "3 档风速"),
      t("16/18 inch options", "16/18 寸可选"),
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "落地风扇",
    productLineLabel: t("Pedestal Fans", "落地风扇"),
  },
  {
    name: t("Retro Metal Fan", "复古金属风扇"),
    model: "CHFS40-4D0401",
    image: "/images/products/fan-retro-metal.jpg",
    alt: t("Cumulus retro metal fan", "积云家居复古金属风扇"),
    summary: t(
      "Combines a full-metal build with retro styling for spaces that value both appearance and daily cooling performance.",
      "以全金属材质与复古造型为核心，适合兼顾视觉风格与日常送风的空间场景。",
    ),
    features: [
      t("Full-metal construction", "全金属材质"),
      t("Retro design", "复古设计"),
      t("3 speed levels", "3 档风速"),
      t("12-18 inch options", "12-18 寸可选"),
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "复古金属风扇",
    productLineLabel: t("Retro Metal Fans", "复古金属风扇"),
  },
  {
    name: t("Industrial Wall Fan", "工业挂壁扇"),
    model: "CHBS65-3D0101",
    image: "/images/products/fan-wall-industrial.jpg",
    alt: t("Cumulus industrial wall fan", "积云家居工业挂壁扇"),
    summary: t(
      "Designed for industrial and large-space directional airflow, with emphasis on inverter performance and low temperature rise.",
      "面向工业与大空间定向送风场景，强调工业变频方案与稳定低温升表现。",
    ),
    features: [
      t("Industrial inverter drive", "工业变频"),
      t("Low temperature rise", "极小温升"),
      t("3 speed levels", "3 档风速"),
      t("26/30 inch options", "26/30 寸可选"),
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "工业挂壁扇",
    productLineLabel: t("Industrial Wall Fans", "工业挂壁扇"),
  },
  {
    name: t("Commercial Air Curtain", "商用风幕机"),
    model: "CHFM-3515LY-K1",
    image: "/images/products/air-curtain.jpg",
    alt: t("Cumulus commercial air curtain", "积云家居风幕机产品图"),
    summary: t(
      "Designed for commercial entrances with a focus on high-efficiency motors, low-noise operation, and stable air coverage.",
      "面向商用入口场景，强调高效电机、静音表现与稳定的风量覆盖。",
    ),
    features: [
      t("Aluminum alloy housing", "铝合金外壳"),
      t("16m/s air speed", "16m/s 风速"),
      t("2.5-3m installation height", "2.5-3m 安装高度"),
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "离心风幕机",
    productLineLabel: t("Centrifugal Air Curtains", "离心风幕机"),
  },
  {
    name: t("Crossflow Air Curtain", "贯流风幕机"),
    model: "CHFM-1209GY-V1",
    image: "/images/products/air-curtain-crossflow.jpg",
    alt: t("Cumulus crossflow air curtain", "积云家居贯流风幕机"),
    summary: t(
      "Built with a slim all-metal anti-rust body for continuous operation at commercial entrances, balancing airflow coverage and control convenience.",
      "采用全金属超薄防锈机身，适合商用入口连续运行场景，兼顾风量覆盖与便捷控制。",
    ),
    features: [
      t("11m/s air speed", "11m/s 风速"),
      t("1400m³/h airflow", "1400m³/h 风量"),
      t("Remote and button control", "遥控/按键可控"),
      t("2.5-3m installation height", "2.5-3m 安装高度"),
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "贯流风幕机",
    productLineLabel: t("Crossflow Air Curtains", "贯流风幕机"),
  },
  {
    name: t("Advanced Robot Vacuum Mop", "扫地机器人进阶款"),
    model: "JY-RD300M",
    image: "/images/products/robot-pro.jpg",
    alt: t("Cumulus advanced robot vacuum", "积云家居进阶扫地机器人"),
    summary: t(
      "Enhances automated cleaning with rotating mops, auto water supply and drainage, and stronger suction performance.",
      "强化自动化清洁体验，集成旋转拖地、自动上下水与更强吸力方案。",
    ),
    features: [
      t("7000Pa suction", "7000Pa 吸力"),
      t("Automatic water supply and drainage", "自动上下水"),
      t("AI voice assistant", "AI 语音助手"),
    ],
    category: "智能清洁系列",
    categoryLabel: t("Smart Cleaning", "智能清洁系列"),
    productLine: "进阶扫拖机器人",
    productLineLabel: t("Advanced Robot Vacuum Mops", "进阶扫拖机器人"),
  },
  {
    name: t("Entry Robot Vacuum Mop", "扫拖机器人基础款"),
    model: "JY-RD100",
    image: "/images/products/robot-vacuum-visual-03.jpg",
    alt: t("Cumulus entry robot vacuum", "积云家居扫拖机器人基础款"),
    summary: t(
      "Focused on everyday floor cleaning with vacuum-and-mop operation, automatic charging, and low-noise performance.",
      "聚焦家庭日常地面清洁，提供扫拖一体、自动回充与低噪运行的基础智能清洁体验。",
    ),
    features: [
      t("4000Pa suction", "4000Pa 吸力"),
      t("Gyroscope navigation", "陀螺仪导航"),
      t("4200mAh battery", "4200mAh 电池"),
      t("40dB operating noise", "40dB 运行噪音"),
    ],
    category: "智能清洁系列",
    categoryLabel: t("Smart Cleaning", "智能清洁系列"),
    productLine: "基础扫拖机器人",
    productLineLabel: t("Entry Robot Vacuum Mops", "基础扫拖机器人"),
  },
  {
    name: t("85L Air Cooler", "85L 冷风机"),
    model: "CHL6.0-ZM13YB05",
    image: "/images/products/air-cooler-85l.jpg",
    alt: t("Cumulus 85L air cooler", "积云家居 85L 冷风机"),
    summary: t(
      "Built for large-space cooling and circulation with evaporative cooling media and a dynamic LCD display.",
      "面向大空间降温与空气循环场景，采用湿帘蒸发芯降温并配备动态 LCD 灯显。",
    ),
    features: [
      t("6000m³/h airflow", "6000m³/h 风量"),
      t("85L tank", "85L 水箱"),
      t("0.5-10 hour timer", "0.5-10 小时定时"),
      t("300W power", "300W 功率"),
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "冷风机",
    productLineLabel: t("Air Coolers", "冷风机"),
  },
  {
    name: t("30L Air Cooler", "30L 冷风机"),
    model: "CHL2.5-ZM13YB03",
    image: "/images/products/air-cooler-30l.jpg",
    alt: t("Cumulus 30L air cooler", "积云家居 30L 冷风机"),
    summary: t(
      "Suitable for small to medium spaces with dynamic LCD display, remote control, and ion-based air care support.",
      "适合中小空间移动降温使用，支持动态 LCD 显示、遥控操作与负离子空气卫士功能。",
    ),
    features: [
      t("2500m³/h airflow", "2500m³/h 风量"),
      t("30L tank", "30L 水箱"),
      t("0.5-7.5 hour timer", "0.5-7.5 小时定时"),
      t("Three-side evaporative cooling", "三面湿帘降温"),
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "冷风机",
    productLineLabel: t("Air Coolers", "冷风机"),
  },
  {
    name: t("60L Air Cooler", "60L 冷风机"),
    model: "CHL4.0-ZM13YB04",
    image: "/images/products/air-cooler-60l.jpg",
    alt: t("Cumulus 60L air cooler", "积云家居 60L 冷风机"),
    summary: t(
      "Upgrades airflow, water tank capacity, and long-duration timer support for extended cooling sessions.",
      "强化风量、水箱容量与长时间定时能力，适合更长时段的场景降温需求。",
    ),
    features: [
      t("4000m³/h airflow", "4000m³/h 风量"),
      t("60L tank", "60L 水箱"),
      t("1-24 hour timer", "1-24 小时定时"),
      t("Dry-run protection", "缺水保护"),
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "冷风机",
    productLineLabel: t("Air Coolers", "冷风机"),
  },
  {
    name: t("Air Fryer", "空气炸锅"),
    model: "COC1.0-DD16C01",
    image: "/images/products/air-fryer.jpg",
    alt: t("Cumulus air fryer", "积云家居空气炸锅"),
    summary: t(
      "A compact kitchen appliance with a clean look, adding everyday cooking functionality to the product portfolio.",
      "以简洁外观搭配日常厨房功能，形成家居电器产品矩阵的视觉补充。",
    ),
    features: [
      t("4.5L capacity", "4.5L 容量"),
      t("80-200°C temperature control", "80-200℃ 调温"),
      t("0-60 minute timer", "0-60 分钟定时"),
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "空气炸锅",
    productLineLabel: t("Air Fryers", "空气炸锅"),
  },
  {
    name: t("Capsule Coffee Machine", "胶囊咖啡机"),
    model: "COF2.0-EE16Y02",
    image: "/images/products/coffee-machine.jpg",
    alt: t("Cumulus capsule coffee machine", "积云家居胶囊咖啡机"),
    summary: t(
      "Designed for premium coffee occasions with stable extraction temperature, quiet operation, and a milk frothing system.",
      "围绕精品咖啡场景打造的小家电产品，强调恒温萃取、静音表现与奶泡系统组合。",
    ),
    features: [
      t("20BAR pressure", "20BAR 压力"),
      t("Milk frothing system", "奶泡系统"),
      t("92°C constant-temperature extraction", "92° 恒温萃取"),
      t("850W power", "850W 功率"),
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "咖啡机",
    productLineLabel: t("Coffee Machines", "咖啡机"),
  },
  {
    name: t("Built-In Oven", "嵌入式烤箱"),
    model: "VOV-KX05G03",
    image: "/images/products/oven-built-in.jpg",
    alt: t("Cumulus built-in oven", "积云家居嵌入式烤箱"),
    summary: t(
      "Uses triple insulation and electronic temperature control for home baking and integrated kitchen applications.",
      "采用三层隔热结构与电子控温方案，适合家庭烘焙与厨房嵌入式应用场景。",
    ),
    features: [
      t("40L capacity", "40L 容量"),
      t("1800W power", "1800W 功率"),
      t("28-230°C temperature control", "28-230℃ 温控"),
      t("Touch control", "触摸式操控"),
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "烤箱",
    productLineLabel: t("Ovens", "烤箱"),
  },
  {
    name: t("Air Purifier", "经典空气净化器"),
    model: "DOD-CC10D01Y22",
    image: "/images/products/air-purifier.jpg",
    alt: t("Cumulus air purifier", "积云家居空气净化器"),
    summary: t(
      "Focused on particulate and formaldehyde purification to support healthy home living scenarios.",
      "聚焦颗粒物与甲醛净化能力，补充健康家居场景下的核心产品带。",
    ),
    features: [
      t("Particle CADR 600m³/h", "颗粒物 CADR 600m³/h"),
      t("32-60㎡ coverage", "32-60㎡ 适用面积"),
      t("35-65dB noise", "35-65dB 噪声"),
    ],
    category: "健康家居系列",
    categoryLabel: t("Healthy Home", "健康家居系列"),
    productLine: "空气净化器",
    productLineLabel: t("Air Purifiers", "空气净化器"),
  },
  // {
  //   name: t("Smart Body Composition Scale", "智能体脂秤"),
  //   model: "JOJ-TZ11A01",
  //   image: "/images/products/body-scale.jpg",
  //   alt: t(
  //     "Cumulus smart body composition scale",
  //     "积云家居智能体脂秤",
  //   ),
  //   summary: t(
  //     "Designed for home wellness monitoring with multi-metric body data, LED display, and USB charging.",
  //     "聚焦家庭基础健康监测，支持多项身体数据识别、LED 显示与 USB 充电使用。",
  //   ),
  //   features: [
  //     t("32 body data metrics", "32 项数据监测"),
  //     t("180-day battery life", "180 天续航"),
  //     t("0.2-150KG weighing range", "0.2-150KG 称重范围"),
  //     t("LED display", "LED 显示"),
  //   ],
  //   category: "健康家居系列",
  //   categoryLabel: t("Healthy Home", "健康家居系列"),
  //   productLine: "体重秤",
  //   productLineLabel: t("Scales", "体重秤"),
  // },
];

const additionalCatalogProductBatches: CatalogProductBatch[] = [
  // {
  //   englishBaseName: "Air Cooler",
  //   chineseBaseName: "冷风机",
  //   modelPrefix: "ACC",
  //   imageNames: [
  //     "air-cooler-visual-01.jpg",
  //     "air-cooler-visual-02.jpg",
  //     "air-cooler-visual-03.jpg",
  //     "air-cooler-visual-04.jpg",
  //     "air-cooler-visual-05.jpg",
  //     "air-cooler-visual-06.jpg",
  //   ],
  //   category: "风处理系列",
  //   categoryLabel: t("Air Treatment", "风处理系列"),
  //   productLine: "冷风机",
  //   productLineLabel: t("Air Coolers", "冷风机"),
  //   summary: t(
  //     "An expanded air cooler selection focused on space cooling and flexible airflow coverage.",
  //     "面向场景降温与灵活送风覆盖的冷风机扩展产品图款。",
  //   ),
  //   features: [
  //     { en: "Evaporative cooling", zh: "蒸发降温" },
  //     { en: "Large-area airflow", zh: "大范围送风" },
  //     { en: "Mobile cooling scenes", zh: "移动降温场景" },
  //   ],
  // },
  {
    englishBaseName: "Robot Vacuum Mop",
    chineseBaseName: "扫拖机器人",
    modelPrefix: "RVE",
    imageNames: [
      // "robot-vacuum-visual-01.jpg",
      "robot-vacuum-visual-02.jpg",
    ],
    category: "智能清洁系列",
    categoryLabel: t("Smart Cleaning", "智能清洁系列"),
    productLine: "基础扫拖机器人",
    productLineLabel: t("Entry Robot Vacuum Mops", "基础扫拖机器人"),
    summary: t(
      "Entry robot vacuum and mop visuals for routine home floor cleaning needs.",
      "面向家庭日常地面清洁需求的基础扫拖机器人扩展图款。",
    ),
    features: [
      { en: "Vacuum and mop in one", zh: "扫拖一体" },
      { en: "Daily home cleaning", zh: "日常家庭清洁" },
      { en: "Automatic recharge support", zh: "自动回充支持" },
    ],
  },
  {
    englishBaseName: "Advanced Robot Vacuum Mop",
    chineseBaseName: "进阶扫拖机器人",
    modelPrefix: "RVA",
    imageNames: [
      // "robot-vacuum-visual-03.jpg",
      // "robot-vacuum-visual-04.jpg",
      "robot-vacuum-visual-05.jpg",
    ],
    category: "智能清洁系列",
    categoryLabel: t("Smart Cleaning", "智能清洁系列"),
    productLine: "进阶扫拖机器人",
    productLineLabel: t("Advanced Robot Vacuum Mops", "进阶扫拖机器人"),
    summary: t(
      "Advanced robot vacuum visuals oriented toward stronger suction and higher automation levels.",
      "面向更强吸力与更高自动化体验的进阶扫拖机器人扩展图款。",
    ),
    features: [
      { en: "Enhanced suction", zh: "强化吸力" },
      { en: "Smarter route planning", zh: "智能路径规划" },
      { en: "Integrated dock solutions", zh: "集成基站方案" },
    ],
  },
  // {
  //   englishBaseName: "Industrial Wall Fan",
  //   chineseBaseName: "工业挂壁扇",
  //   modelPrefix: "IWF",
  //   imageNames: ["wall-fan-visual-01.jpg"],
  //   category: "风处理系列",
  //   categoryLabel: t("Air Treatment", "风处理系列"),
  //   productLine: "工业挂壁扇",
  //   productLineLabel: t("Industrial Wall Fans", "工业挂壁扇"),
  //   summary: t(
  //     "Wall-mounted airflow equipment suited to industrial and large-space ventilation scenarios.",
  //     "适用于工业与大空间通风送风场景的挂壁扇扩展图款。",
  //   ),
  //   features: [
  //     { en: "Wall-mounted structure", zh: "挂壁结构" },
  //     { en: "Directional airflow", zh: "定向送风" },
  //     { en: "Large-space use", zh: "适配大空间" },
  //   ],
  // },
  // {
  //   englishBaseName: "Pedestal Fan",
  //   chineseBaseName: "落地风扇",
  //   modelPrefix: "PFS",
  //   imageNames: [
  //     "electric-fan-visual-01.jpg",
  //     "pedestal-fan-visual-01.jpg",
  //     "pedestal-fan-visual-02.jpg",
  //     "pedestal-fan-visual-03.jpg",
  //   ],
  //   category: "风处理系列",
  //   categoryLabel: t("Air Treatment", "风处理系列"),
  //   productLine: "落地风扇",
  //   productLineLabel: t("Pedestal Fans", "落地风扇"),
  //   summary: t(
  //     "A broader pedestal fan selection for residential and light commercial airflow scenarios.",
  //     "面向家用与轻商用送风场景的落地风扇扩展图款。",
  //   ),
  //   features: [
  //     { en: "Multiple blade options", zh: "多风叶方案" },
  //     { en: "Flexible control types", zh: "多控制方式" },
  //     { en: "Household cooling scenes", zh: "家用送风场景" },
  //   ],
  // },
  // {
  //   englishBaseName: "Retro Metal Fan",
  //   chineseBaseName: "复古金属风扇",
  //   modelPrefix: "RMF",
  //   imageNames: [
  //     "retro-metal-fan-visual-01.jpg",
  //     "retro-metal-fan-visual-02.jpg",
  //     "retro-metal-fan-visual-03.jpg",
  //   ],
  //   category: "风处理系列",
  //   categoryLabel: t("Air Treatment", "风处理系列"),
  //   productLine: "复古金属风扇",
  //   productLineLabel: t("Retro Metal Fans", "复古金属风扇"),
  //   summary: t(
  //     "Retro metal fan visuals emphasizing appearance, texture, and desktop-to-floor versatility.",
  //     "强调外观质感与多场景摆放适配的复古金属风扇扩展图款。",
  //   ),
  //   features: [
  //     { en: "Metal body finish", zh: "金属机身质感" },
  //     { en: "Retro styling", zh: "复古外观" },
  //     { en: "Decorative airflow solution", zh: "兼顾装饰与送风" },
  //   ],
  // },
  // {
  //   englishBaseName: "Centrifugal Air Curtain",
  //   chineseBaseName: "离心风幕机",
  //   modelPrefix: "CAC",
  //   imageNames: [
  //     "air-curtain-visual-01.jpg",
  //     "air-curtain-visual-02.jpg",
  //   ],
  //   category: "风幕系列",
  //   categoryLabel: t("Air Curtains", "风幕系列"),
  //   productLine: "离心风幕机",
  //   productLineLabel: t("Centrifugal Air Curtains", "离心风幕机"),
  //   summary: t(
  //     "An expanded centrifugal air curtain range for commercial entry and airflow isolation projects.",
  //     "面向商用入口与空气隔离项目的离心风幕机扩展图款。",
  //   ),
  //   features: [
  //     { en: "Commercial entrance use", zh: "商用入口应用" },
  //     { en: "Stable airflow curtain", zh: "稳定风幕覆盖" },
  //     { en: "Multiple installation spans", zh: "多安装跨度" },
  //   ],
  // },
  // {
  //   englishBaseName: "Crossflow Air Curtain",
  //   chineseBaseName: "贯流风幕机",
  //   modelPrefix: "XAC",
  //   imageNames: [
  //     "air-curtain-visual-03.jpg",
  //     "air-curtain-visual-04.jpg",
  //   ],
  //   category: "风幕系列",
  //   categoryLabel: t("Air Curtains", "风幕系列"),
  //   productLine: "贯流风幕机",
  //   productLineLabel: t("Crossflow Air Curtains", "贯流风幕机"),
  //   summary: t(
  //     "Crossflow air curtain visuals balancing quiet operation and continuous doorway coverage.",
  //     "兼顾连续入口覆盖与更平稳运行表现的贯流风幕机扩展图款。",
  //   ),
  //   features: [
  //     { en: "Crossflow structure", zh: "贯流结构" },
  //     { en: "Continuous doorway coverage", zh: "连续入口覆盖" },
  //     { en: "Smooth running noise", zh: "平稳运行噪声" },
  //   ],
  // },
];

const detailedCatalogProducts: ProductItem[] = createDetailedCatalogProducts([
  {
    imageName: "air-fryer-visual-01.jpg",
    name: {
      en: "Knob Touch Air Fryer",
      zh: "触控空气炸锅",
    },
    model: "AFR-KT01",
    summary: {
      en: "An air fryer that combines knob control and a touch panel for fast, flexible everyday cooking.",
      zh: "结合旋钮控制与触控面板的空气炸锅，适合高效灵活的日常烹饪场景。",
    },
    features: [
      { en: "Knob control and touch panel", zh: "旋钮控制与触控面板" },
      { en: "360-degree rapid hot air circulation", zh: "360 度高速热风循环" },
      { en: "Non-stick removable basket", zh: "可拆卸不粘炸篮" },
      { en: "Multiple frying presets", zh: "多种烹饪预设程序" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "空气炸锅",
    productLineLabel: t("Air Fryers", "空气炸锅"),
  },
  {
    imageName: "air-fryer-visual-02.jpg",
    name: {
      en: "Drawer Basket Air Fryer",
      zh: "带抽屉空气炸锅",
    },
    model: "AFR-DB02",
    summary: {
      en: "A cream-and-black countertop air fryer with front knob control, top touch icons, and a pull-out non-stick basket.",
      zh: "奶白黑配色台式空气炸锅，前置旋钮与顶部触控结合，搭配抽拉式不粘炸篮。",
    },
    features: [
      { en: "Front rotary knob", zh: "前置旋钮调节" },
      { en: "Top touch control panel", zh: "顶部触控面板" },
      { en: "Pull-out non-stick basket", zh: "抽拉式不粘炸篮" },
      { en: "Compact countertop form", zh: "紧凑台面机身" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "空气炸锅",
    productLineLabel: t("Air Fryers", "空气炸锅"),
  },
  {
    imageName: "air-fryer-visual-03.jpg",
    name: {
      en: "Dual Window Air Fryer",
      zh: "双视窗空气炸锅",
    },
    model: "AFR-DW03",
    summary: {
      en: "A dual-window air fryer designed for visible cooking, large-capacity frying, and fast hot-air circulation.",
      zh: "具备双可视窗口的大容量空气炸锅，兼顾可视化烹饪与高速热风循环表现。",
    },
    features: [
      { en: "Dual viewing windows", zh: "双可视窗口" },
      { en: "360-degree rapid hot air circulation", zh: "360 度高速热风循环" },
      { en: "Large non-stick removable basket", zh: "大容量可拆卸不粘炸篮" },
      { en: "Multiple cooking presets", zh: "多烹饪预设程序" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "空气炸锅",
    productLineLabel: t("Air Fryers", "空气炸锅"),
  },
  {
    imageName: "built-in-oven-01.jpg",
    name: {
      en: "French Double-Door Built-In Oven",
      zh: "对开门嵌入式烤箱",
    },
    model: "BIO-FD01",
    summary: {
      en: "A built-in oven with French double doors, seamless cabinet integration, and a large illuminated cavity.",
      zh: "采用法式对开门设计的嵌入式烤箱，可无缝融入现代橱柜，并配备大容量照明炉腔。",
    },
    features: [
      { en: "French double-door design", zh: "法式对开门设计" },
      { en: "Seamless built-in integration", zh: "无缝嵌入式安装" },
      { en: "Large cavity with interior light", zh: "大容量炉腔与内置照明" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "烤箱",
    productLineLabel: t("Ovens", "烤箱"),
  },
  {
    imageName: "built-in-oven-02.jpg",
    name: {
      en: "Retro Countertop Convection Oven",
      zh: "复古台式烤箱",
    },
    model: "BIO-RT02",
    summary: {
      en: "A retro cream-style countertop convection oven with golden trim and multiple modes for baking, roasting, air frying, and fermenting.",
      zh: "复古奶油风台式热风烤箱，搭配金色饰边，支持烘焙、烘烤、空气炸与发酵等多种模式。",
    },
    features: [
      { en: "Retro cream body with gold trim", zh: "复古奶油风机身与金边装饰" },
      { en: "Built-in convection fan", zh: "内置热风循环风扇" },
      { en: "Even heating performance", zh: "均匀受热表现" },
      { en: "Multiple cooking modes", zh: "多种烹饪模式" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "烤箱",
    productLineLabel: t("Ovens", "烤箱"),
  },
  {
    imageName: "built-in-oven-03.jpg",
    name: {
      en: "Stainless Built-In Convection Oven",
      zh: "不锈钢嵌入式烤箱",
    },
    model: "BIO-SC03",
    summary: {
      en: "A built-in convection oven with a stainless steel frame, tinted glass door, and 360-degree hot air for even multi-rack baking.",
      zh: "不锈钢边框搭配黑玻门的嵌入式热风烤箱，支持 360 度热风循环与多层同烤均匀受热。",
    },
    features: [
      { en: "Stainless steel frame", zh: "不锈钢边框" },
      { en: "Tinted glass door", zh: "黑玻门设计" },
      { en: "360-degree convection airflow", zh: "360 度热风循环" },
      { en: "Even multi-rack baking", zh: "多层同烤受热均匀" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "烤箱",
    productLineLabel: t("Ovens", "烤箱"),
  },
  {
    imageName: "built-in-oven-04.jpg",
    name: {
      en: "Cream French Double-Door Oven",
      zh: "法式对开门烤箱",
    },
    model: "BIO-CF04",
    summary: {
      en: "An elegant cream oven featuring French double doors, gold trim, a built-in oven light, and wide viewing windows.",
      zh: "优雅奶油风烤箱，采用法式对开门与金色饰条，配备内置炉灯和大面积可视窗。",
    },
    features: [
      { en: "French double-door layout", zh: "法式对开门布局" },
      { en: "Cream body with gold trim", zh: "奶白机身搭配金色饰条" },
      { en: "Built-in oven light", zh: "内置炉灯" },
      { en: "Large viewing windows", zh: "大面积可视窗" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "烤箱",
    productLineLabel: t("Ovens", "烤箱"),
  },
  {
    imageName: "built-in-oven-08.jpg",
    name: {
      en: "Digital Built-In Convection Oven",
      zh: "数显嵌入式烤箱",
    },
    model: "BIO-DT08",
    summary: {
      en: "A modern built-in convection oven with a black glass door, digital touch controls, and an internal light for real-time cooking observation.",
      zh: "现代简约嵌入式热风烤箱，配备黑玻门、数字触控面板与内置炉灯，便于实时观察烹饪状态。",
    },
    features: [
      { en: "Modern built-in design", zh: "现代嵌入式设计" },
      { en: "Black glass door", zh: "黑玻门外观" },
      { en: "Digital touch control panel", zh: "数字触控面板" },
      { en: "Built-in observation light", zh: "内置观察炉灯" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "烤箱",
    productLineLabel: t("Ovens", "烤箱"),
  },
  {
    imageName: "capsule-coffee-machine-01.jpg",
    name: {
      en: "Compact Cream Capsule Coffee Machine",
      zh: "紧凑胶囊咖啡机",
    },
    model: "CCM-CC01",
    summary: {
      en: "A compact cream-white capsule coffee machine with instant heating and a detachable drip tray for quick countertop use.",
      zh: "奶白小巧胶囊咖啡机，支持即热出水，并配备可拆卸接水盘，适合紧凑台面场景。",
    },
    features: [
      { en: "Minimalist cream-white design", zh: "极简奶白小巧造型" },
      { en: "Instant heating system", zh: "即热技术" },
      { en: "Hot water ready in seconds", zh: "秒速出热水" },
      { en: "Detachable drip tray", zh: "可拆卸接水盘" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "咖啡机",
    productLineLabel: t("Coffee Machines", "咖啡机"),
  },
  {
    imageName: "capsule-coffee-machine-02.jpg",
    name: {
      en: "One-Touch Espresso Capsule Machine",
      zh: "一键胶囊咖啡机",
    },
    model: "CCM-OE02",
    summary: {
      en: "A one-touch capsule coffee machine designed for rich crema espresso, with capsule compatibility and removable water components.",
      zh: "一键操作的胶囊咖啡机，可萃取带绵密油脂的意式咖啡，并支持胶囊适配与可拆卸水箱结构。",
    },
    features: [
      { en: "One-touch brewing", zh: "一键萃取" },
      { en: "Rich espresso with crema", zh: "浓郁意式咖啡油脂" },
      { en: "Compatible with coffee capsules", zh: "适配咖啡胶囊" },
      { en: "Removable water tank and drip tray", zh: "可拆卸水箱与接水盘" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "咖啡机",
    productLineLabel: t("Coffee Machines", "咖啡机"),
  },
  {
    imageName: "capsule-coffee-machine-03.jpg",
    name: {
      en: "Matte Black Slim Capsule Coffee Machine",
      zh: "哑光黑纤薄胶囊咖啡机",
    },
    model: "CCM-MB03",
    summary: {
      en: "A slim vertical capsule coffee machine in matte black with rose-gold accents and high-pressure extraction for rich crema.",
      zh: "纤薄立式哑光黑胶囊咖啡机，搭配玫瑰金饰条，支持高压萃取与绵密咖啡油脂表现。",
    },
    features: [
      { en: "Slim vertical matte black body", zh: "纤薄立式哑光黑机身" },
      { en: "Rose-gold accent details", zh: "玫瑰金轻奢饰条" },
      { en: "One-touch operation", zh: "一键操作" },
      { en: "High-pressure crema extraction", zh: "高压萃取油脂" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "咖啡机",
    productLineLabel: t("Coffee Machines", "咖啡机"),
  },
  {
    imageName: "capsule-coffee-machine-05.jpg",
    name: {
      en: "Cream Minimalist Capsule Coffee Machine",
      zh: "极简胶囊咖啡机",
    },
    model: "CCM-CM05",
    summary: {
      en: "A cream minimalist capsule coffee machine with orange accents, a flip-top loading lid, and a removable drip tray for easy maintenance.",
      zh: "奶白极简胶囊咖啡机，点缀橙色细节，采用翻盖式装仓设计，并配备可拆卸接水盘。",
    },
    features: [
      { en: "Cream minimalist appearance", zh: "奶白极简外观" },
      { en: "Orange accent details", zh: "橙色细节点缀" },
      { en: "Flip-top capsule lid", zh: "翻盖式胶囊仓盖" },
      { en: "Easy-clean drip tray", zh: "易清洗接水盘" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "咖啡机",
    productLineLabel: t("Coffee Machines", "咖啡机"),
  },
  {
    imageName: "capsule-coffee-machine-07.jpg",
    name: {
      en: "Dual Group Capsule Coffee Machine",
      zh: "复古胶囊咖啡机",
    },
    model: "CCM-DG07",
    summary: {
      en: "A retro cream capsule coffee machine with dual independent group heads for simultaneous brewing and professional crema extraction.",
      zh: "奶白复古胶囊咖啡机，配备双独立冲煮头，可同时萃取两杯咖啡并呈现专业油脂表现。",
    },
    features: [
      { en: "Dual independent group heads", zh: "双独立冲煮头" },
      { en: "Simultaneous dual-cup brewing", zh: "支持双杯同时萃取" },
      { en: "Retro cream styling", zh: "奶白复古造型" },
      { en: "Professional high-pressure extraction", zh: "专业高压萃取" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "咖啡机",
    productLineLabel: t("Coffee Machines", "咖啡机"),
  },
  {
    imageName: "capsule-coffee-machine-08.jpg",
    name: {
      en: "Drawer Storage Capsule Coffee Machine",
      zh: "抽屉收纳胶囊咖啡机",
    },
    model: "CCM-DS08",
    summary: {
      en: "A compact capsule coffee machine with built-in drawer storage, one-touch brewing, and high-pressure extraction in a space-saving form.",
      zh: "内置抽拉式胶囊收纳抽屉的紧凑型咖啡机，支持一键萃取与高压出脂，兼顾台面节省。",
    },
    features: [
      { en: "Built-in pull-out capsule drawer", zh: "内置抽拉式胶囊抽屉" },
      { en: "One-touch brewing", zh: "一键萃取" },
      { en: "High-pressure crema extraction", zh: "高压油脂萃取" },
      { en: "Compact countertop footprint", zh: "紧凑台面占位" },
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "咖啡机",
    productLineLabel: t("Coffee Machines", "咖啡机"),
  },
  {
    imageName: "home-air-purifier-03.jpg",
    name: {
      en: "Smart Display Air Purifier",
      zh: "智能显示空气净化器",
    },
    model: "HAP-SD03",
    summary: {
      en: "A low-noise home air purifier that helps remove PM2.5, dust, pollen, smoke, and pet odors for bedrooms and living rooms.",
      zh: "低噪运行的家用空气净化器，可有效滤除 PM2.5、粉尘、花粉、烟雾与宠物异味，适合卧室与客厅。",
    },
    features: [
      {
        en: "Captures PM2.5, dust, pollen, smoke and pet odors effectively",
        zh: "有效滤除 PM2.5、粉尘、花粉、烟雾和宠物异味",
      },
      {
        en: "Low noise, ideal for bedrooms and living rooms",
        zh: "低噪工作，适合卧室、客厅",
      },
      {
        en: "Simple single button for easy use",
        zh: "单键操作，简单易用",
      },
    ],
    category: "健康家居系列",
    categoryLabel: t("Healthy Home", "健康家居系列"),
    productLine: "空气净化器",
    productLineLabel: t("Air Purifiers", "空气净化器"),
  },
  {
    imageName: "home-air-purifier-05.jpg",
    name: {
      en: "Compact Rounded Air Purifier",
      zh: "轻巧圆角空气净化器",
    },
    model: "HAP-CR05",
    summary: {
      en: "A compact rounded air purifier with front intake mesh, top controls, and a soft illuminated trim for personal clean-air spaces.",
      zh: "轻巧圆角空气净化器，采用前置进风网面与顶部控制设计，并以柔和灯带强化个人净化空间氛围。",
    },
    features: [
      { en: "Rounded compact body", zh: "圆角紧凑机身" },
      { en: "Front intake mesh", zh: "前置进风网面" },
      { en: "Top control interface", zh: "顶部控制界面" },
      { en: "Soft ambient light trim", zh: "柔和氛围灯带" },
    ],
    category: "健康家居系列",
    categoryLabel: t("Healthy Home", "健康家居系列"),
    productLine: "空气净化器",
    productLineLabel: t("Air Purifiers", "空气净化器"),
  },
  {
    imageName: "home-air-purifier-06.jpg",
    name: {
      en: "Low-Profile Desktop Air Purifier",
      zh: "长条台式空气净化器",
    },
    model: "HAP-LD06",
    summary: {
      en: "A compact elongated air purifier that efficiently removes PM2.5, dust, and odors while refreshing surrounding air without taking up much desk space.",
      zh: "长条小巧空气净化器，可高效滤除 PM2.5、粉尘与异味，并快速净化周边空气，节省桌面空间。",
    },
    features: [
      {
        en: "Captures PM2.5, dust and unwanted odors efficiently",
        zh: "高效滤除 PM2.5、粉尘与异味",
      },
      {
        en: "Compact long shape, saves your desk space",
        zh: "长条小巧机身，节省桌面空间",
      },
      {
        en: "Refresh surrounding air quickly",
        zh: "快速净化周边空气",
      },
    ],
    category: "健康家居系列",
    categoryLabel: t("Healthy Home", "健康家居系列"),
    productLine: "空气净化器",
    productLineLabel: t("Air Purifiers", "空气净化器"),
  },
  {
    imageName: "home-air-purifier-07.jpg",
    name: {
      en: "Slim Tower Air Purifier",
      zh: "塔式空气净化器",
    },
    model: "HAP-ST07",
    summary: {
      en: "A slim space-saving air purifier that circulates fresh air quickly while matching a wide range of home interiors with low power consumption.",
      zh: "纤薄节省空间的空气净化器，可快速循环净化空气，适配多种家装风格，并具备低功耗表现。",
    },
    features: [
      {
        en: "Circulates fresh air quickly",
        zh: "快速循环净化空气",
      },
      {
        en: "Space-saving, matches home decor",
        zh: "节省空间，适配各类家装",
      },
      {
        en: "Energy-saving, low power consumption",
        zh: "节能省电，低功耗",
      },
    ],
    category: "健康家居系列",
    categoryLabel: t("Healthy Home", "健康家居系列"),
    productLine: "空气净化器",
    productLineLabel: t("Air Purifiers", "空气净化器"),
  },
  {
    imageName: "body-scale-01.jpg",
    name: {
      en: "Round Black Glass Scale",
      zh: "圆形体脂秤",
    },
    model: "BCS-RG01",
    summary: {
      en: "A round black glass body scale with a compact digital display for simple daily weight measurement.",
      zh: "圆形黑玻机身搭配紧凑数显窗口，适合日常体重测量的家用体脂秤。",
    },
    features: [
      { en: "Round glass platform", zh: "圆形玻璃秤面" },
      { en: "Compact digital display", zh: "紧凑数字显示" },
      { en: "Daily weight tracking", zh: "日常体重记录" },
    ],
    category: "健康家居系列",
    categoryLabel: t("Healthy Home", "健康家居系列"),
    productLine: "体重秤",
    productLineLabel: t("Scales", "体重秤"),
  },
  {
    imageName: "body-scale-02.jpg",
    name: {
      en: "Black Square Body Composition Scale",
      zh: "体脂秤",
    },
    model: "BCS-BS02",
    summary: {
      en: "A body composition scale that measures weight, body fat, and other indicators with accurate sensors and a sturdy anti-slip surface.",
      zh: "可测量体重、体脂等多项身体指标的体脂秤，搭配灵敏传感器与坚固防滑表面，适合日常家庭健康测量。",
    },
    features: [
      {
        en: "Measures weight, body fat and other body indicators",
        zh: "测量体重、体脂等多项身体指标",
      },
      {
        en: "Sensitive sensors deliver accurate readings",
        zh: "灵敏传感器，测量数据精准",
      },
      {
        en: "Sturdy and anti-slip surface, safe to stand",
        zh: "坚固防滑钢化玻璃，站立安全",
      },
    ],
    category: "健康家居系列",
    categoryLabel: t("Healthy Home", "健康家居系列"),
    productLine: "体脂秤",
    productLineLabel: t("Scales", "体重秤"),
  },
  {
    imageName: "body-scale-03.jpg",
    name: {
      en: "White Body Composition Scale",
      zh: "方形体脂秤",
    },
    model: "BCS-WS03",
    summary: {
      en: "A minimalist body composition scale that syncs data to a mobile app automatically and delivers stable, accurate readings with a clear hidden LED display.",
      zh: "简约体脂秤支持蓝牙连接 APP 自动记录健康数据，并提供稳定精准的测量表现与清晰隐藏式 LED 读数。",
    },
    features: [
      {
        en: "Auto-sync data to mobile app for health record",
        zh: "蓝牙连接 APP，自动记录健康数据",
      },
      {
        en: "Delivers stable and accurate measurements",
        zh: "精准传感，测量稳定",
      },
      {
        en: "Clear reading, elegant minimalist look",
        zh: "隐藏 LED 屏，读数清晰，外观简约",
      },
    ],
    category: "健康家居系列",
    categoryLabel: t("Healthy Home", "健康家居系列"),
    productLine: "体重秤",
    productLineLabel: t("Scales", "体重秤"),
  },
  {
    imageName: "body-scale-04.jpg",
    name: {
      en: "Slim Glass Body Composition Scale",
      zh: "轻薄玻璃体脂秤",
    },
    model: "BCS-SG04",
    summary: {
      en: "A slim body composition scale that powers on when stepped on, supports multiple body metrics, and provides stable, accurate readings with automatic power saving.",
      zh: "轻薄体脂秤支持上秤即开机与自动关机省电，可测量体重、体脂、BMI 等多项数据，并提供稳定精准读数。",
    },
    features: [
      {
        en: "Step to power on, auto-off for power saving",
        zh: "上秤即开机，自动关机省电",
      },
      {
        en: "Measure weight, body fat, BMI and more",
        zh: "测量体重、体脂、BMI 等多项数据",
      },
      {
        en: "Ensure accurate and stable reading",
        zh: "高精度传感，读数稳定精准",
      },
    ],
    category: "健康家居系列",
    categoryLabel: t("Healthy Home", "健康家居系列"),
    productLine: "体重秤",
    productLineLabel: t("Scales", "体重秤"),
  },
]);

const additionalCatalogProducts: ProductItem[] =
  additionalCatalogProductBatches
    .flatMap(createCatalogProducts)
    .concat(detailedCatalogProducts);

export const catalogSections: CatalogSection[] = [
  {
    id: "air-treatment",
    key: "风处理系列",
    title: t("Air Treatment", "风处理系列"),
    description: t(
      "A product range built around airflow, air curtains, circulation, and space cooling needs.",
      "围绕送风、风幕隔离、循环送风与场景降温需求打造的产品系列。",
    ),
    image: "/images/series/001.jpg",
    alt: t("Cumulus air treatment catalog image", "积云家居风处理系列目录图"),
    highlights: [
      t("Air circulation", "循环送风"),
      t("Commercial entrances", "商用入口"),
      t("Battery-powered applications", "蓄电应用"),
      t("Space cooling", "场景降温"),
    ],
    productLines: [
      {
        name: "蓄电风扇",
        label: t("Rechargeable Fans", "蓄电风扇"),
        summary: t(
          "Core airflow products for home use and flexible mobile scenarios.",
          "面向家居与灵活移动场景的核心送风产品。",
        ),
      },
      {
        name: "落地风扇",
        label: t("Pedestal Fans", "落地风扇"),
        summary: t(
          "Multiple household pedestal fan options for conventional indoor cooling.",
          "覆盖多规格家用落地送风与常规室内使用需求。",
        ),
      },
      {
        name: "复古金属风扇",
        label: t("Retro Metal Fans", "复古金属风扇"),
        summary: t(
          "A distinctive fan line featuring metal construction and retro styling.",
          "以金属材质与复古外观为特色的风处理产品线。",
        ),
      },
      {
        name: "工业挂壁扇",
        label: t("Industrial Wall Fans", "工业挂壁扇"),
        summary: t(
          "Directional airflow solutions for large spaces and industrial environments.",
          "针对大空间与工业环境的定向送风方案。",
        ),
      },
      {
        name: "冷风机",
        label: t("Air Coolers", "冷风机"),
        summary: t(
          "Balancing cooling, airflow, and large-area circulation performance.",
          "兼顾降温、送风与大空间空气循环表现。",
        ),
      },
      {
        name: "离心风幕机",
        label: t("Centrifugal Air Curtains", "离心风幕机"),
        summary: t(
          "Suitable for commercial entrances and high-traffic openings.",
          "适用于商用入口与高频通行空间。",
        ),
      },
      {
        name: "贯流风幕机",
        label: t("Crossflow Air Curtains", "贯流风幕机"),
        summary: t(
          "Balancing airflow coverage with smoother operating noise performance.",
          "兼顾风量覆盖与更平稳的运行噪声表现。",
        ),
      },
    ],
  },
  {
    id: "smart-cleaning",
    key: "智能清洁系列",
    title: t("Smart Cleaning", "智能清洁系列"),
    description: t(
      "A product range focused on home cleaning and smart automation.",
      "面向家庭清洁与智能联动需求的产品系列。",
    ),
    image: "/images/series/003.jpg",
    alt: t(
      "Cumulus smart cleaning catalog image",
      "积云家居智能清洁目录图",
    ),
    highlights: [
      t("Vacuum & mop", "扫拖一体"),
      t("Auto integration", "自动集成"),
      t("Smart interaction", "智能交互"),
    ],
    productLines: [
      {
        name: "基础扫拖机器人",
        label: t("Entry Robot Vacuum Mops", "基础扫拖机器人"),
        summary: t(
          "An entry product line covering everyday floor cleaning needs.",
          "覆盖家庭日常地面清洁的基础产品带。",
        ),
      },
      {
        name: "进阶扫拖机器人",
        label: t("Advanced Robot Vacuum Mops", "进阶扫拖机器人"),
        summary: t(
          "Enhanced suction, path planning, and mopping performance.",
          "强化吸力、路径规划与拖地表现。",
        ),
      },
      {
        name: "自动基站方案",
        label: t("Auto Docking Solutions", "自动基站方案"),
        summary: t(
          "Extends to auto dust collection, water supply, and a more complete automated experience.",
          "承接自动集尘、上下水与更完整自动化体验。",
        ),
      },
    ],
  },
  {
    id: "kitchen-appliances",
    key: "厨房家电系列",
    title: t("Kitchen Appliances", "厨房家电系列"),
    description: t(
      "A kitchen appliance range for modern home cooking scenarios.",
      "面向家庭烹饪场景的厨房电器产品系列。",
    ),
    image: "/images/series/004.jpg",
    alt: t(
      "Cumulus kitchen appliance catalog image",
      "积云家居厨房家电目录图",
    ),
    highlights: [
      t("Efficient cooking", "高效烹饪"),
      t("Minimal design", "简约设计"),
      t("Versatile functions", "多样功能"),
    ],
    productLines: [
      {
        name: "空气炸锅",
        label: t("Air Fryers", "空气炸锅"),
        summary: t(
          "Focused on daily cooking efficiency and simple kitchen use.",
          "聚焦日常烹饪效率与简洁厨房场景。",
        ),
      },
      {
        name: "烤箱",
        label: t("Ovens", "烤箱"),
        summary: t(
          "Supports diversified baking and family cooking needs.",
          "承接多样化烘焙与家庭料理需求。",
        ),
      },
      {
        name: "咖啡机",
        label: t("Coffee Machines", "咖啡机"),
        summary: t(
          "Extends the portfolio into premium lifestyle small appliances.",
          "补足精品生活方式场景中的小家电表达。",
        ),
      },
    ],
  },
  {
    id: "healthy-home",
    key: "健康家居系列",
    title: t("Healthy Home", "健康家居系列"),
    description: t(
      "A product range focused on air purification and healthier living.",
      "围绕空气净化与健康生活需求打造的产品系列。",
    ),
    image: "/images/series/005.jpg",
    alt: t(
      "Cumulus healthy home catalog image",
      "积云家居健康家居目录图",
    ),
    highlights: [
      t("Air purification", "空气净化"),
      t("Health management", "健康管理"),
      t("Comfort environment", "舒适环境"),
    ],
    productLines: [
      {
        name: "空气净化器",
        label: t("Air Purifiers", "空气净化器"),
        summary: t(
          "Built around healthier air and comfortable breathing experiences.",
          "围绕空气健康与舒适呼吸体验展开。",
        ),
      },
      {
        name: "体重秤",
        label: t("Scales", "体重秤"),
        summary: t(
          "Extends into basic home health monitoring equipment.",
          "延展到基础健康监测类家居设备。",
        ),
      },
      {
        name: "舒适环境设备",
        label: t("Comfort Environment Devices", "舒适环境设备"),
        summary: t(
          "Supports a broader healthy-home product portfolio.",
          "补充更完整的健康家居产品线。",
        ),
      },
    ],
  },
  {
    id: "home-customization",
    key: "家居定制系列",
    title: t("Home Customization", "家居定制系列"),
    description: t(
      "A household goods lineup covering storage, cleaning, hanging, and daily organization needs.",
      "围绕收纳、清洁、悬挂与日常整理场景的家居用品系列。",
    ),
    image: "/images/series/006.jpg",
    alt: t(
      "Cumulus home customization catalog image",
      "积云家居家居定制目录图",
    ),
    highlights: [
      t("Storage organization", "收纳整理"),
      t("Daily household items", "日用家居"),
      t("Lightweight plastic goods", "轻量塑胶用品"),
    ],
    productLines: [
      {
        name: "储存箱",
        label: t("Storage Boxes", "储存箱"),
        summary: t(
          "Storage box products for household sorting and organized placement.",
          "用于家庭分类收纳与整齐摆放的储存箱产品。",
        ),
      },
      {
        name: "储物架",
        label: t("Storage Racks", "储物架"),
        summary: t(
          "Rack solutions for everyday storage and space organization.",
          "面向日常置物与空间整理场景的储物架产品。",
        ),
      },
      {
        name: "垃圾桶",
        label: t("Trash Bins", "垃圾桶"),
        summary: t(
          "Trash bin products for home cleanup and neat waste management.",
          "面向家庭清洁与垃圾整理场景的垃圾桶产品。",
        ),
      },
      {
        name: "塑料刷",
        label: t("Plastic Brushes", "塑料刷"),
        summary: t(
          "Lightweight plastic brush items for daily cleaning needs.",
          "面向日常清洁需求的轻量塑料刷类用品。",
        ),
      },
      {
        name: "塑料夹",
        label: t("Plastic Clips", "塑料夹"),
        summary: t(
          "Plastic clip products for fastening, sorting, and daily household use.",
          "适用于固定、整理与日常居家使用的塑料夹类产品。",
        ),
      },
      {
        name: "塑料挂钩",
        label: t("Plastic Hooks", "塑料挂钩"),
        summary: t(
          "Hook products for hanging and easy-access daily storage.",
          "面向悬挂收纳与便捷取用场景的塑料挂钩产品。",
        ),
      },
      {
        name: "塑料衣架",
        label: t("Plastic Hangers", "塑料衣架"),
        summary: t(
          "Plastic hanger products for clothing display and everyday organization.",
          "用于衣物悬挂与日常整理的塑料衣架产品。",
        ),
      },
      {
        name: "纸巾盒",
        label: t("Tissue Boxes", "纸巾盒"),
        summary: t(
          "Tissue box products for tabletop organization and convenient access.",
          "面向台面整理与便捷取纸场景的纸巾盒产品。",
        ),
      },
    ],
  },
];

export const homeCustomizationShowcaseImages: ShowcaseImageItem[] = [
  {
    image: "/images/customization/storage-box-01.jpg",
    alt: t("Cumulus storage box product", "积云家居储存箱产品图"),
    productLine: "储存箱",
    name: t("Storage Box", "储存箱"),
    model: "HC-SB-01",
    summary: t(
      "Storage box design for home sorting, categorized placement, and efficient daily organization.",
      "面向家庭分类收纳、分区摆放与日常高效整理场景的储存箱产品。",
    ),
    features: [
      t("Storage organization", "分类收纳"),
      t("Household use", "家居使用"),
      t("Lightweight structure", "轻量结构"),
    ],
  },
  {
    image: "/images/customization/storage-rack-01.jpg",
    alt: t("Cumulus storage rack product", "积云家居储物架产品图"),
    productLine: "储物架",
    name: t("Storage Rack", "储物架"),
    model: "HC-SR-01",
    summary: t(
      "Storage rack solution for countertop organization and improved everyday space efficiency.",
      "适用于台面置物、分层整理与提升日常空间利用率的储物架产品。",
    ),
    features: [
      t("Layered storage", "分层置物"),
      t("Daily organization", "日常整理"),
      t("Space efficiency", "空间利用"),
    ],
  },
  {
    image: "/images/customization/trash-bin-01.jpg",
    alt: t("Cumulus trash bin product 01", "积云家居垃圾桶产品图 01"),
    productLine: "垃圾桶",
    name: t("Open-Top Trash Bin", "开口垃圾桶"),
    model: "HC-TB-01",
    summary: t(
      "Open-top trash bin designed for convenient waste disposal in daily household cleaning scenes.",
      "适合家庭日常清洁与便捷取放垃圾场景的开口式垃圾桶产品。",
    ),
    features: [
      t("Easy disposal", "便捷投放"),
      t("Household cleaning", "家庭清洁"),
      t("Neat appearance", "整洁外观"),
    ],
  },
  // {
  //   image: "/images/customization/trash-bin-02.jpg",
  //   alt: t("Cumulus trash bin product 02", "积云家居垃圾桶产品图 02"),
  //   productLine: "垃圾桶",
  //   name: t("Lidded Trash Bin", "带盖垃圾桶"),
  //   model: "HC-TB-02",
  //   summary: t(
  //     "Lidded trash bin for more enclosed waste management and cleaner tabletop or floor placement.",
  //     "适合更封闭垃圾收纳与台面、地面整洁摆放需求的带盖垃圾桶产品。",
  //   ),
  //   features: [
  //     t("Lidded structure", "带盖结构"),
  //     t("Cleaner placement", "整洁摆放"),
  //     t("Daily waste sorting", "日常垃圾整理"),
  //   ],
  // },
  // {
  //   image: "/images/customization/plastic-brush-01.jpg",
  //   alt: t("Cumulus plastic brush product 01", "积云家居塑料刷产品图 01"),
  //   productLine: "塑料刷",
  //   name: t("Compact Plastic Brush", "紧凑塑料刷"),
  //   model: "HC-PB-01",
  //   summary: t(
  //     "Compact plastic brush for routine cleaning and targeted scrubbing in everyday household use.",
  //     "适用于日常清洁与局部刷洗需求的紧凑型塑料刷产品。",
  //   ),
  //   features: [
  //     t("Routine cleaning", "日常清洁"),
  //     t("Compact grip", "紧凑手持"),
  //     t("Targeted scrubbing", "局部刷洗"),
  //   ],
  // },
  {
    image: "/images/customization/plastic-brush-02.jpg",
    alt: t("Cumulus plastic brush product 02", "积云家居塑料刷产品图 02"),
    productLine: "塑料刷",
    name: t("Long-Handle Plastic Brush", "长柄塑料刷"),
    model: "HC-PB-02",
    summary: t(
      "Long-handle plastic brush suited to extended reach and more efficient household cleaning tasks.",
      "适合更长触达距离与高频家务清洁场景的长柄塑料刷产品。",
    ),
    features: [
      t("Extended reach", "长距离触达"),
      t("Cleaning efficiency", "清洁效率"),
      t("Household scenes", "家务场景"),
    ],
  },
  {
    image: "/images/customization/plastic-clip-01.jpg",
    alt: t("Cumulus plastic clip product 01", "积云家居塑料夹产品图 01"),
    productLine: "塑料夹",
    name: t("Utility Plastic Clip", "多用塑料夹"),
    model: "HC-PC-01",
    summary: t(
      "Utility plastic clip for fastening, sealing, and lightweight home organization tasks.",
      "适用于固定、封口与轻量居家整理需求的多用塑料夹产品。",
    ),
    features: [
      t("Fastening support", "固定支撑"),
      t("Lightweight use", "轻量使用"),
      t("Daily organization", "日常整理"),
    ],
  },
  {
    image: "/images/customization/plastic-clip-02.jpg",
    alt: t("Cumulus plastic clip product 02", "积云家居塑料夹产品图 02"),
    productLine: "塑料夹",
    name: t("Laundry Plastic Clip", "晾晒塑料夹"),
    model: "HC-PC-02",
    summary: t(
      "Plastic clip format oriented toward clothes drying, temporary hanging, and simple home fixation.",
      "面向衣物晾晒、临时悬挂与基础居家固定需求的塑料夹产品。",
    ),
    features: [
      t("Laundry support", "晾晒支持"),
      t("Simple fixation", "基础固定"),
      t("Home utility", "家居实用"),
    ],
  },
  {
    image: "/images/customization/plastic-hook-01.jpg",
    alt: t("Cumulus plastic hook product", "积云家居塑料挂钩产品图"),
    productLine: "塑料挂钩",
    name: t("Plastic Wall Hook", "塑料挂钩"),
    model: "HC-PH-01",
    summary: t(
      "Plastic wall hook for easy hanging, daily access, and light household storage support.",
      "适用于悬挂收纳、便捷取用与轻量家居整理的塑料挂钩产品。",
    ),
    features: [
      t("Wall hanging", "墙面悬挂"),
      t("Easy access", "便捷取用"),
      t("Light storage", "轻量收纳"),
    ],
  },
  {
    image: "/images/customization/plastic-hanger-01.jpg",
    alt: t("Cumulus plastic hanger product 01", "积云家居塑料衣架产品图 01"),
    productLine: "塑料衣架",
    name: t("Slim Plastic Hanger", "轻型塑料衣架"),
    model: "HC-PHGR-01",
    summary: t(
      "Slim plastic hanger for daily garment hanging, wardrobe organization, and lightweight display.",
      "适用于日常衣物悬挂、衣柜整理与轻量展示需求的塑料衣架产品。",
    ),
    features: [
      t("Garment hanging", "衣物悬挂"),
      t("Wardrobe organization", "衣柜整理"),
      t("Lightweight design", "轻型设计"),
    ],
  },
  // {
  //   image: "/images/customization/plastic-hanger-02.jpg",
  //   alt: t("Cumulus plastic hanger product 02", "积云家居塑料衣架产品图 02"),
  //   productLine: "塑料衣架",
  //   name: t("Wide-Shoulder Plastic Hanger", "宽肩塑料衣架"),
  //   model: "HC-PHGR-02",
  //   summary: t(
  //     "Wide-shoulder hanger variant designed to support more stable clothing display and organization.",
  //     "面向更稳定衣物支撑与整齐陈列需求的宽肩塑料衣架产品。",
  //   ),
  //   features: [
  //     t("Stable support", "稳定支撑"),
  //     t("Clothing display", "衣物陈列"),
  //     t("Everyday organization", "日常整理"),
  //   ],
  // },
  {
    image: "/images/customization/tissue-box-01.jpg",
    alt: t("Cumulus tissue box product 01", "积云家居纸巾盒产品图 01"),
    productLine: "纸巾盒",
    name: t("Rectangular Tissue Box", "方形纸巾盒"),
    model: "HC-TS-01",
    summary: t(
      "Rectangular tissue box for cleaner tabletop organization and convenient everyday paper access.",
      "适用于台面整洁摆放与日常便捷取纸需求的方形纸巾盒产品。",
    ),
    features: [
      t("Tabletop organization", "台面整理"),
      t("Convenient access", "便捷取纸"),
      t("Clean appearance", "整洁外观"),
    ],
  },
  {
    image: "/images/customization/tissue-box-02.jpg",
    alt: t("Cumulus tissue box product 02", "积云家居纸巾盒产品图 02"),
    productLine: "纸巾盒",
    name: t("Compact Tissue Box", "紧凑纸巾盒"),
    model: "HC-TS-02",
    summary: t(
      "Compact tissue box format for smaller spaces and more flexible household placement.",
      "适合小空间摆放与灵活家居配置需求的紧凑型纸巾盒产品。",
    ),
    features: [
      t("Compact footprint", "紧凑占位"),
      t("Flexible placement", "灵活摆放"),
      t("Household use", "居家使用"),
    ],
  },
];

/**
 * 将家居定制图片数据转换为正式产品卡数据，确保其与其他系列共用同一套展示链路。
 *
 * @param items 家居定制图片与补充说明数据。
 * @returns 返回可直接用于代表产品区的家居定制产品列表。
 */
function createHomeCustomizationProducts(
  items: ShowcaseImageItem[],
): ProductItem[] {
  return items.map((item) => ({
    name:
      item.name ?? {
        en: "Home Customization Product",
        zh: "家居定制产品",
      },
    model: item.model ?? "",
    image: item.image,
    alt: item.alt,
    summary:
      item.summary ?? {
        en: "Household goods product information is being organized.",
        zh: "家居用品产品资料正在整理中。",
      },
    features:
      item.features ?? [
        t("Household use", "家居使用"),
        t("Daily organization", "日常整理"),
        t("Custom support", "定制支持"),
      ],
    category: "家居定制系列",
    categoryLabel: t("Home Customization", "家居定制系列"),
    productLine: item.productLine ?? "",
    productLineLabel: item.name ?? {
      en: "Household Goods",
      zh: "家居用品",
    },
  }));
}

const homeCustomizationFeaturedProducts: ProductItem[] =
  createHomeCustomizationProducts(homeCustomizationShowcaseImages);

export const featuredProducts: ProductItem[] = [
  ...coreFeaturedProducts,
  ...additionalCatalogProducts,
  ...homeCustomizationFeaturedProducts,
];

export const contactItems: ContactItem[] = [
  {
    label: t("Company Name", "公司名称"),
    value: t(
      "Guangdong Shunde Cumulus Smart Home Technology Co., Ltd.",
      "广东顺德积云家居科技有限公司",
    ),
  },
  {
    label: t("Phone", "联系电话"),
    value: t("+086 17722562043", "+086 17722562043"),
  },
  {
    label: t("Email", "邮箱"),
    value: t("john.zhong@cumulushome.com", "john.zhong@cumulushome.com"),
  },
  {
    label: t("Address", "公司地址"),
    value: t(
      "Huajin Shuntai Industrial Park, No. 2 Huajin Street, Nantou Town, Zhongshan, Guangdong, China",
      "广东省中山市南头镇华津街2号广东华津顺泰工业园",
    ),
  },
  {
    label: t("Cooperation Scope", "合作方向"),
    value: t(
      "Brand cooperation / Product customization / Channel partnership / Home customization",
      "品牌合作 / 产品定制 / 渠道合作 / 家居定制",
    ),
  },
];
