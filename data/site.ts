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
        href: "/products#commercial-airflow",
        label: t("Air Curtains", "风幕系列"),
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
    "Industrial design driven. Manufacturing aligned. Ready for custom development.",
    "工业设计驱动，制造协同交付，支持客户化开发。",
  ),
  heroDescription: t(
    "Focused on appliance design and development in air treatment and related home solutions, supporting brand cooperation, product customization, and channel partnerships with stable execution.",
    "专注风处理与水处理相关家电设计研发，面向品牌合作、产品定制与渠道合作提供更稳定的产品解决能力。",
  ),
  introduction: t(
    "Based in Shunde, with teams across design, research and development, supply chain coordination, and business support.",
    "位于广东顺德，拥有设计、研发、供应链与商务团队。",
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
    value: t("6 Core Products", "6 大主打产品"),
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
    title: t("Six Product Series", "六大品类"),
    description: t(
      "A clear catalog structure for efficient browsing and selection.",
      "目录清晰，便于快速浏览。",
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
    image: "/images/slides/001.jfif",
    alt: t("Cumulus homepage slide visual 01", "积云家居首页轮播图 01"),
  },
  {
    image: "/images/slides/002.jfif",
    alt: t("Cumulus homepage slide visual 02", "积云家居首页轮播图 02"),
  },
  {
    image: "/images/slides/003.jfif",
    alt: t("Cumulus homepage slide visual 03", "积云家居首页轮播图 03"),
  },
  {
    image: "/images/slides/004.jfif",
    alt: t("Cumulus homepage slide visual 04", "积云家居首页轮播图 04"),
  },
  {
    image: "/images/slides/005.jfif",
    alt: t("Cumulus homepage slide visual 05", "积云家居首页轮播图 05"),
  },
];

export const seriesItems: SeriesItem[] = [
  {
    id: "air-treatment",
    title: t("Air Treatment", "风处理系列"),
    description: t("Fans and air coolers.", "风扇与冷风机产品。"),
    highlights: [
      t("Rechargeable Fans", "蓄电风扇"),
      t("Air Circulation", "循环送风"),
      t("Air Coolers", "冷风机"),
    ],
    image: "/images/series/001.jfif",
    alt: t("Cumulus air treatment category image", "积云家居风处理系列品类图"),
    icon: "wind",
  },
  {
    id: "commercial-airflow",
    title: t("Air Curtains", "风幕系列"),
    description: t(
      "Air curtain and commercial airflow equipment.",
      "风幕与商用空气设备。",
    ),
    highlights: [
      t("Air Curtains", "风幕机"),
      t("Commercial Entrances", "商用入口"),
      t("High-Efficiency Motors", "高效电机"),
    ],
    image: "/images/series/002.jfif",
    alt: t("Cumulus air curtain category image", "积云家居风幕系列品类图"),
    icon: "building",
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
    image: "/images/series/003.jfif",
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
    image: "/images/series/004.jfif",
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
    image: "/images/series/005.jfif",
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
    image: "/images/series/006.jfif",
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
      name: t(
        `${batch.englishBaseName} ${serial}`,
        `${batch.chineseBaseName} ${serial}`,
      ),
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

const coreFeaturedProducts: ProductItem[] = [
  {
    name: t("Flagship Rechargeable Fan", "蓄电旗舰风扇"),
    model: "CHFDS40Y-5DLK01RM",
    image: "/images/products/fan-flagship.png",
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
    image: "/images/products/fan-standard-a.png",
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
    name: t("Multi-Size Pedestal Fan", "多规格落地风扇"),
    model: "CHFS45-4D0201",
    image: "/images/products/fan-standard-b.png",
    alt: t("Cumulus multi-size pedestal fan", "积云家居多规格落地风扇"),
    summary: t(
      "Supports multiple sizes, control modes, and blade configurations for everyday cooling across different spaces.",
      "通过多尺寸、多控制方式与多风叶配置，满足不同空间的常规送风需求。",
    ),
    features: [
      t("3 or 4 blade options", "3/4 风叶可选"),
      t("3 or 6 speed levels", "3/6 档风速"),
      t("Button, mechanical, or remote control", "按键/机械/遥控"),
      t("16/18/20 inch options", "16/18/20 寸可选"),
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
    image: "/images/products/air-curtain.jpeg",
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
    category: "风幕系列",
    categoryLabel: t("Air Curtains", "风幕系列"),
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
    category: "风幕系列",
    categoryLabel: t("Air Curtains", "风幕系列"),
    productLine: "贯流风幕机",
    productLineLabel: t("Crossflow Air Curtains", "贯流风幕机"),
  },
  {
    name: t("Advanced Robot Vacuum Mop", "扫地机器人进阶款"),
    model: "JY-RD300M",
    image: "/images/products/robot-pro.png",
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
    image: "/images/products/robot-basic.jpg",
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
    image: "/images/products/air-cooler-85l.png",
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
    image: "/images/products/air-cooler-30l.png",
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
    image: "/images/products/air-cooler-60l.png",
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
    image: "/images/products/air-fryer.jpeg",
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
    image: "/images/products/oven-built-in.png",
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
    name: t("Air Purifier", "空气净化器"),
    model: "DOD-CC10D01Y22",
    image: "/images/products/air-purifier.jpeg",
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
  {
    name: t("Smart Body Composition Scale", "智能体脂秤"),
    model: "JOJ-TZ11A01",
    image: "/images/products/body-scale.jpg",
    alt: t(
      "Cumulus smart body composition scale",
      "积云家居智能体脂秤",
    ),
    summary: t(
      "Designed for home wellness monitoring with multi-metric body data, LED display, and USB charging.",
      "聚焦家庭基础健康监测，支持多项身体数据识别、LED 显示与 USB 充电使用。",
    ),
    features: [
      t("32 body data metrics", "32 项数据监测"),
      t("180-day battery life", "180 天续航"),
      t("0.2-150KG weighing range", "0.2-150KG 称重范围"),
      t("LED display", "LED 显示"),
    ],
    category: "健康家居系列",
    categoryLabel: t("Healthy Home", "健康家居系列"),
    productLine: "体重秤",
    productLineLabel: t("Scales", "体重秤"),
  },
];

const additionalCatalogProductBatches: CatalogProductBatch[] = [
  {
    englishBaseName: "Air Cooler",
    chineseBaseName: "冷风机",
    modelPrefix: "ACC",
    imageNames: [
      "air-cooler-visual-01.png",
      "air-cooler-visual-02.png",
      "air-cooler-visual-03.png",
      "air-cooler-visual-04.png",
      "air-cooler-visual-05.png",
      "air-cooler-visual-06.png",
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "冷风机",
    productLineLabel: t("Air Coolers", "冷风机"),
    summary: t(
      "An expanded air cooler selection focused on space cooling and flexible airflow coverage.",
      "面向场景降温与灵活送风覆盖的冷风机扩展产品图款。",
    ),
    features: [
      { en: "Evaporative cooling", zh: "蒸发降温" },
      { en: "Large-area airflow", zh: "大范围送风" },
      { en: "Mobile cooling scenes", zh: "移动降温场景" },
    ],
  },
  {
    englishBaseName: "Robot Vacuum Mop",
    chineseBaseName: "扫拖机器人",
    modelPrefix: "RVE",
    imageNames: [
      "robot-vacuum-visual-01.png",
      "robot-vacuum-visual-02.png",
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
      "robot-vacuum-visual-03.png",
      "robot-vacuum-visual-04.png",
      "robot-vacuum-visual-05.png",
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
  {
    englishBaseName: "Industrial Wall Fan",
    chineseBaseName: "工业挂壁扇",
    modelPrefix: "IWF",
    imageNames: ["wall-fan-visual-01.png"],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "工业挂壁扇",
    productLineLabel: t("Industrial Wall Fans", "工业挂壁扇"),
    summary: t(
      "Wall-mounted airflow equipment suited to industrial and large-space ventilation scenarios.",
      "适用于工业与大空间通风送风场景的挂壁扇扩展图款。",
    ),
    features: [
      { en: "Wall-mounted structure", zh: "挂壁结构" },
      { en: "Directional airflow", zh: "定向送风" },
      { en: "Large-space use", zh: "适配大空间" },
    ],
  },
  {
    englishBaseName: "Pedestal Fan",
    chineseBaseName: "落地风扇",
    modelPrefix: "PFS",
    imageNames: [
      "electric-fan-visual-01.png",
      "pedestal-fan-visual-01.png",
      "pedestal-fan-visual-02.png",
      "pedestal-fan-visual-03.png",
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "落地风扇",
    productLineLabel: t("Pedestal Fans", "落地风扇"),
    summary: t(
      "A broader pedestal fan selection for residential and light commercial airflow scenarios.",
      "面向家用与轻商用送风场景的落地风扇扩展图款。",
    ),
    features: [
      { en: "Multiple blade options", zh: "多风叶方案" },
      { en: "Flexible control types", zh: "多控制方式" },
      { en: "Household cooling scenes", zh: "家用送风场景" },
    ],
  },
  {
    englishBaseName: "Retro Metal Fan",
    chineseBaseName: "复古金属风扇",
    modelPrefix: "RMF",
    imageNames: [
      "retro-metal-fan-visual-01.png",
      "retro-metal-fan-visual-02.png",
      "retro-metal-fan-visual-03.png",
    ],
    category: "风处理系列",
    categoryLabel: t("Air Treatment", "风处理系列"),
    productLine: "复古金属风扇",
    productLineLabel: t("Retro Metal Fans", "复古金属风扇"),
    summary: t(
      "Retro metal fan visuals emphasizing appearance, texture, and desktop-to-floor versatility.",
      "强调外观质感与多场景摆放适配的复古金属风扇扩展图款。",
    ),
    features: [
      { en: "Metal body finish", zh: "金属机身质感" },
      { en: "Retro styling", zh: "复古外观" },
      { en: "Decorative airflow solution", zh: "兼顾装饰与送风" },
    ],
  },
  {
    englishBaseName: "Centrifugal Air Curtain",
    chineseBaseName: "离心风幕机",
    modelPrefix: "CAC",
    imageNames: [
      "air-curtain-visual-01.png",
      "air-curtain-visual-02.png",
    ],
    category: "风幕系列",
    categoryLabel: t("Air Curtains", "风幕系列"),
    productLine: "离心风幕机",
    productLineLabel: t("Centrifugal Air Curtains", "离心风幕机"),
    summary: t(
      "An expanded centrifugal air curtain range for commercial entry and airflow isolation projects.",
      "面向商用入口与空气隔离项目的离心风幕机扩展图款。",
    ),
    features: [
      { en: "Commercial entrance use", zh: "商用入口应用" },
      { en: "Stable airflow curtain", zh: "稳定风幕覆盖" },
      { en: "Multiple installation spans", zh: "多安装跨度" },
    ],
  },
  {
    englishBaseName: "Crossflow Air Curtain",
    chineseBaseName: "贯流风幕机",
    modelPrefix: "XAC",
    imageNames: [
      "air-curtain-visual-03.png",
      "air-curtain-visual-04.png",
    ],
    category: "风幕系列",
    categoryLabel: t("Air Curtains", "风幕系列"),
    productLine: "贯流风幕机",
    productLineLabel: t("Crossflow Air Curtains", "贯流风幕机"),
    summary: t(
      "Crossflow air curtain visuals balancing quiet operation and continuous doorway coverage.",
      "兼顾连续入口覆盖与更平稳运行表现的贯流风幕机扩展图款。",
    ),
    features: [
      { en: "Crossflow structure", zh: "贯流结构" },
      { en: "Continuous doorway coverage", zh: "连续入口覆盖" },
      { en: "Smooth running noise", zh: "平稳运行噪声" },
    ],
  },
  {
    englishBaseName: "Air Fryer",
    chineseBaseName: "空气炸锅",
    modelPrefix: "AFR",
    imageNames: [
      "air-fryer-visual-01.png",
      "air-fryer-visual-02.png",
      "air-fryer-visual-03.png",
      "air-fryer-visual-04.png",
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "空气炸锅",
    productLineLabel: t("Air Fryers", "空气炸锅"),
    summary: t(
      "An expanded air fryer product selection for efficient everyday kitchen use.",
      "面向高效日常烹饪场景的空气炸锅扩展产品图款。",
    ),
    features: [
      { en: "Compact countertop use", zh: "台面紧凑使用" },
      { en: "Rapid hot-air cooking", zh: "热风快速烹饪" },
      { en: "Everyday kitchen scenes", zh: "日常厨房场景" },
    ],
  },
  {
    englishBaseName: "Home Air Purifier",
    chineseBaseName: "家居空气净化器",
    modelPrefix: "HAP",
    imageNames: [
      "home-air-purifier-01.png",
      "home-air-purifier-02.png",
      "home-air-purifier-03.png",
      "home-air-purifier-04.png",
      "home-air-purifier-05.png",
      "home-air-purifier-06.png",
      "home-air-purifier-07.png",
      "home-air-purifier-08.png",
    ],
    category: "健康家居系列",
    categoryLabel: t("Healthy Home", "健康家居系列"),
    productLine: "空气净化器",
    productLineLabel: t("Air Purifiers", "空气净化器"),
    summary: t(
      "A broader home air purifier range centered on cleaner indoor air and comfort upgrades.",
      "围绕洁净空气与居家舒适升级的家居空气净化器扩展图款。",
    ),
    features: [
      { en: "Indoor air purification", zh: "室内空气净化" },
      { en: "Comfortable breathing scenes", zh: "舒适呼吸场景" },
      { en: "Healthy home support", zh: "健康家居支持" },
    ],
  },
  {
    englishBaseName: "Built-In Oven",
    chineseBaseName: "嵌入式烤箱",
    modelPrefix: "BIO",
    imageNames: [
      "built-in-oven-01.png",
      "built-in-oven-02.png",
      "built-in-oven-03.png",
      "built-in-oven-04.png",
      "built-in-oven-05.png",
      "built-in-oven-06.png",
      "built-in-oven-07.png",
      "built-in-oven-08.png",
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "烤箱",
    productLineLabel: t("Ovens", "烤箱"),
    summary: t(
      "An expanded built-in oven selection for integrated kitchen and baking scenarios.",
      "面向整体厨房与家庭烘焙场景的嵌入式烤箱扩展图款。",
    ),
    features: [
      { en: "Integrated kitchen fit", zh: "适配整体厨房" },
      { en: "Baking and roasting scenes", zh: "烘焙与烘烤场景" },
      { en: "Built-in visual consistency", zh: "嵌入式统一外观" },
    ],
  },
  {
    englishBaseName: "Capsule Coffee Machine",
    chineseBaseName: "胶囊咖啡机",
    modelPrefix: "CCM",
    imageNames: [
      "capsule-coffee-machine-01.png",
      "capsule-coffee-machine-02.png",
      "capsule-coffee-machine-03.png",
      "capsule-coffee-machine-04.png",
      "capsule-coffee-machine-05.png",
      "capsule-coffee-machine-06.png",
      "capsule-coffee-machine-07.png",
      "capsule-coffee-machine-08.png",
      "capsule-coffee-machine-09.png",
      "capsule-coffee-machine-10.png",
    ],
    category: "厨房家电系列",
    categoryLabel: t("Kitchen Appliances", "厨房家电系列"),
    productLine: "咖啡机",
    productLineLabel: t("Coffee Machines", "咖啡机"),
    summary: t(
      "A broader capsule coffee machine lineup for compact premium beverage experiences.",
      "面向精品饮品场景的胶囊咖啡机扩展产品图款。",
    ),
    features: [
      { en: "Capsule extraction format", zh: "胶囊萃取形式" },
      { en: "Compact countertop footprint", zh: "台面紧凑占位" },
      { en: "Premium beverage scenes", zh: "精品饮品场景" },
    ],
  },
];

const additionalCatalogProducts: ProductItem[] =
  additionalCatalogProductBatches.flatMap(createCatalogProducts);

export const featuredProducts: ProductItem[] = [
  ...coreFeaturedProducts,
  ...additionalCatalogProducts,
];

export const catalogSections: CatalogSection[] = [
  {
    id: "air-treatment",
    key: "风处理系列",
    title: t("Air Treatment", "风处理系列"),
    description: t(
      "A product range built around airflow, circulation, and space cooling needs.",
      "围绕送风、循环送风与场景降温需求打造的产品系列。",
    ),
    image: "/images/series/001.jfif",
    alt: t("Cumulus air treatment catalog image", "积云家居风处理系列目录图"),
    highlights: [
      t("Air circulation", "循环送风"),
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
    ],
  },
  {
    id: "commercial-airflow",
    key: "风幕系列",
    title: t("Air Curtains", "风幕系列"),
    description: t(
      "A product range for commercial spaces and public-area airflow control.",
      "面向商用空间与公共区域空气流动需求的产品系列。",
    ),
    image: "/images/series/002.jfif",
    alt: t("Cumulus air curtain catalog image", "积云家居风幕系列目录图"),
    highlights: [
      t("Commercial spaces", "商用空间"),
      t("Stable airflow", "稳定送风"),
      t("Metal housing", "金属机身"),
    ],
    productLines: [
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
      {
        name: "高静压方案",
        label: t("High Static Pressure Solutions", "高静压方案"),
        summary: t(
          "Designed for more demanding entrance environments and higher airflow requirements.",
          "面向更复杂入口环境与更高风量需求。",
        ),
      },
      {
        name: "多规格长度",
        label: t("Multiple Length Options", "多规格长度"),
        summary: t(
          "Covers varying doorway widths and installation scales.",
          "覆盖不同门宽与安装尺度的项目需求。",
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
    image: "/images/series/003.jfif",
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
    image: "/images/series/004.jfif",
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
    image: "/images/series/005.jfif",
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
      "Customization solutions for integrated spaces and client-specific development.",
      "面向空间配套与客户化开发需求的定制方案系列。",
    ),
    image: "/images/series/006.jfif",
    alt: t(
      "Cumulus home customization catalog image",
      "积云家居家居定制目录图",
    ),
    highlights: [
      t("Integrated spaces", "空间配套"),
      t("Product integration", "产品整合"),
      t("Custom development", "定制开发"),
    ],
    productLines: [
      {
        name: "全屋家居配套",
        label: t("Whole-Home Packages", "全屋家居配套"),
        summary: t(
          "For space-level furniture combinations and overall solution presentation.",
          "承接空间级家居组合与方案展示。",
        ),
      },
      {
        name: "定制化产品整合",
        label: t("Customized Product Integration", "定制化产品整合"),
        summary: t(
          "Organizes more complete product combinations around customer needs.",
          "围绕客户需求组织更完整的产品组合。",
        ),
      },
      {
        name: "合作项目开发",
        label: t("Project-Based Development", "合作项目开发"),
        summary: t(
          "Suitable for project collaboration and ongoing iterative development.",
          "适用于项目型合作与持续迭代开发场景。",
        ),
      },
    ],
  },
];

export const homeCustomizationShowcaseImages: ShowcaseImageItem[] = [
  {
    image: "/images/customization/home-customization-gallery-01.jpg",
    alt: t(
      "Cumulus home customization gallery 01",
      "积云家居家居定制案例图 01",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-02.jpg",
    alt: t(
      "Cumulus home customization gallery 02",
      "积云家居家居定制案例图 02",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-03.jpg",
    alt: t(
      "Cumulus home customization gallery 03",
      "积云家居家居定制案例图 03",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-04.jpg",
    alt: t(
      "Cumulus home customization gallery 04",
      "积云家居家居定制案例图 04",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-05.jpg",
    alt: t(
      "Cumulus home customization gallery 05",
      "积云家居家居定制案例图 05",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-06.jpg",
    alt: t(
      "Cumulus home customization gallery 06",
      "积云家居家居定制案例图 06",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-07.jpg",
    alt: t(
      "Cumulus home customization gallery 07",
      "积云家居家居定制案例图 07",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-08.jpg",
    alt: t(
      "Cumulus home customization gallery 08",
      "积云家居家居定制案例图 08",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-09.jpg",
    alt: t(
      "Cumulus home customization gallery 09",
      "积云家居家居定制案例图 09",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-10.jpg",
    alt: t(
      "Cumulus home customization gallery 10",
      "积云家居家居定制案例图 10",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-11.jpg",
    alt: t(
      "Cumulus home customization gallery 11",
      "积云家居家居定制案例图 11",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-12.jpg",
    alt: t(
      "Cumulus home customization gallery 12",
      "积云家居家居定制案例图 12",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-13.jpg",
    alt: t(
      "Cumulus home customization gallery 13",
      "积云家居家居定制案例图 13",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-14.jpg",
    alt: t(
      "Cumulus home customization gallery 14",
      "积云家居家居定制案例图 14",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-15.jpg",
    alt: t(
      "Cumulus home customization gallery 15",
      "积云家居家居定制案例图 15",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-16.jpg",
    alt: t(
      "Cumulus home customization gallery 16",
      "积云家居家居定制案例图 16",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-17.png",
    alt: t(
      "Cumulus home customization gallery 17",
      "积云家居家居定制案例图 17",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-18.jpg",
    alt: t(
      "Cumulus home customization gallery 18",
      "积云家居家居定制案例图 18",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-19.jpg",
    alt: t(
      "Cumulus home customization gallery 19",
      "积云家居家居定制案例图 19",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-20.jpg",
    alt: t(
      "Cumulus home customization gallery 20",
      "积云家居家居定制案例图 20",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-21.jpg",
    alt: t(
      "Cumulus home customization gallery 21",
      "积云家居家居定制案例图 21",
    ),
  },
  {
    image: "/images/customization/home-customization-gallery-22.jpg",
    alt: t(
      "Cumulus home customization gallery 22",
      "积云家居家居定制案例图 22",
    ),
  },
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
