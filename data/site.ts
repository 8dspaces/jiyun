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
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
  icon: "wind" | "building" | "bot" | "chef" | "heart" | "home";
}

export interface ProductItem {
  name: string;
  model: string;
  image: string;
  alt: string;
  summary: string;
  features: string[];
  category: string;
  productLine: string;
}

export interface ContactItem {
  label: string;
  value: string;
}

export interface FooterGroup {
  title: string;
  items: NavigationItem[];
}

export interface CatalogSection {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
  productLines: ProductLineItem[];
}

export interface ProductLineItem {
  name: string;
  summary: string;
}

export interface ShowcaseImageItem {
  image: string;
  alt: string;
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
      { href: "/products#air-treatment", label: "风处理系列" },
      { href: "/products#commercial-airflow", label: "风幕系列" },
      { href: "/products#smart-cleaning", label: "智能清洁系列" },
      { href: "/products#kitchen-appliances", label: "厨房家电系列" },
      { href: "/products#healthy-home", label: "健康家居系列" },
      { href: "/products#home-customization", label: "家居定制系列" },
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
  heroTitle: "工业设计驱动，制造协同交付，支持客户化开发。",
  heroDescription:
    "专注风处理与水处理相关家电设计研发，面向品牌合作、产品定制与渠道合作提供更稳定的产品解决能力。",
  introduction:
    "位于广东顺德，拥有设计、研发、供应链与商务团队。",
  values: [
    "工业设计驱动",
    "模块化开发",
    "制造协同",
    "快速响应",
    "客户化定制",
  ],
};

export const statistics: StatisticItem[] = [
  { value: "6 大主打产品", label: "官网产品品类目录" },
  { value: "2000+㎡", label: "制造与协同空间" },
  { value: "150 人", label: "设计、研发与商务团队" },
  { value: "全球化", label: "覆盖海外与国内合作市场" },
];

export const capabilities: CapabilityItem[] = [
  {
    title: "设计研发",
    description: "外观、结构与体验同步推进。",
  },
  {
    title: "六大品类",
    description: "目录清晰，便于快速浏览。",
  },
  {
    title: "制造协同",
    description: "兼顾品质、效率与稳定交付。",
  },
];

export const seriesItems: SeriesItem[] = [
  {
    id: "air-treatment",
    title: "风处理系列",
    englishTitle: "Air Treatment",
    description: "风扇与冷风机产品。",
    highlights: ["蓄电风扇", "循环送风", "冷风机"],
    image: "/images/series/001.jfif",
    alt: "积云家居风处理系列品类图",
    icon: "wind",
  },
  {
    id: "commercial-airflow",
    title: "风幕系列",
    englishTitle: "Commercial Airflow",
    description: "风幕与商用空气设备。",
    highlights: ["风幕机", "商用入口", "高效电机"],
    image: "/images/series/002.jfif",
    alt: "积云家居风幕系列品类图",
    icon: "building",
  },
  {
    id: "smart-cleaning",
    title: "智能清洁系列",
    englishTitle: "Smart Cleaning",
    description: "扫地机器人与清洁设备。",
    highlights: ["扫拖一体", "AI 语音", "自动上下水"],
    image: "/images/series/003.jfif",
    alt: "积云家居智能清洁系列品类图",
    icon: "bot",
  },
  {
    id: "kitchen-appliances",
    title: "厨房家电系列",
    englishTitle: "Kitchen Appliances",
    description: "厨房场景家电产品。",
    highlights: ["空气炸锅", "烤箱", "咖啡机"],
    image: "/images/series/004.jfif",
    alt: "积云家居厨房家电系列品类图",
    icon: "chef",
  },
  {
    id: "healthy-home",
    title: "健康家居系列",
    englishTitle: "Healthy Home",
    description: "空气净化与健康家居。",
    highlights: ["空气净化", "健康监测", "舒适生活"],
    image: "/images/series/005.jfif",
    alt: "积云家居健康家居系列品类图",
    icon: "heart",
  },
  {
    id: "home-customization",
    title: "家居定制系列",
    englishTitle: "Home Customization",
    description: "家居空间与定制方案。",
    highlights: ["空间配套", "产品整合", "客户化开发"],
    image: "/images/series/006.jfif",
    alt: "积云家居家居定制系列品类图",
    icon: "home",
  },
];

export const featuredProducts: ProductItem[] = [
  {
    name: "蓄电旗舰风扇",
    model: "CHFDS40Y-5DLK01RM",
    image: "/images/products/fan-flagship.png",
    alt: "积云家居旗舰蓄电风扇",
    summary:
      "以大风量、蓄电与快接模块为核心，兼顾家居场景中的灵活功能扩展。",
    features: ["变频电机", "4-8 小时续航", "模块快接扩展"],
    category: "风处理系列",
    productLine: "蓄电风扇",
  },
  {
    name: "触屏蓄电落地扇",
    model: "CHFDS35Y-5A0101",
    image: "/images/products/fan-rechargeable.jpg",
    alt: "积云家居触屏蓄电落地扇",
    summary:
      "采用触屏显示与预组装底盘设计，兼顾蓄电使用、角度调节与灵活摆放需求。",
    features: ["5 风叶", "8 档风速", "触屏显示", "180° 水平送风"],
    category: "风处理系列",
    productLine: "蓄电风扇",
  },
  {
    name: "经典落地风扇",
    model: "CHFS40-4ADC0301",
    image: "/images/products/fan-standard-a.png",
    alt: "积云家居经典落地风扇",
    summary:
      "覆盖家用基础送风场景，提供蓄电与变频配置选择，并支持 16 寸与 18 寸规格。",
    features: ["变频/定频可选", "6-7 小时续航", "3 档风速", "16/18 寸可选"],
    category: "风处理系列",
    productLine: "落地风扇",
  },
  {
    name: "多规格落地风扇",
    model: "CHFS45-4D0201",
    image: "/images/products/fan-standard-b.png",
    alt: "积云家居多规格落地风扇",
    summary:
      "通过多尺寸、多控制方式与多风叶配置，满足不同空间的常规送风需求。",
    features: ["3/4 风叶可选", "3/6 档风速", "按键/机械/遥控", "16/18/20 寸可选"],
    category: "风处理系列",
    productLine: "落地风扇",
  },
  {
    name: "复古金属风扇",
    model: "CHFS40-4D0401",
    image: "/images/products/fan-retro-metal.jpg",
    alt: "积云家居复古金属风扇",
    summary:
      "以全金属材质与复古造型为核心，适合兼顾视觉风格与日常送风的空间场景。",
    features: ["全金属材质", "复古设计", "3 档风速", "12-18 寸可选"],
    category: "风处理系列",
    productLine: "复古金属风扇",
  },
  {
    name: "工业挂壁扇",
    model: "CHBS65-3D0101",
    image: "/images/products/fan-wall-industrial.jpg",
    alt: "积云家居工业挂壁扇",
    summary:
      "面向工业与大空间定向送风场景，强调工业变频方案与稳定低温升表现。",
    features: ["工业变频", "极小温升", "3 档风速", "26/30 寸可选"],
    category: "风处理系列",
    productLine: "工业挂壁扇",
  },
  {
    name: "商用风幕机",
    model: "CHFM-3515LY-K1",
    image: "/images/products/air-curtain.jpeg",
    alt: "积云家居风幕机产品图",
    summary:
      "面向商用入口场景，强调高效电机、静音表现与稳定的风量覆盖。",
    features: ["铝合金外壳", "16m/s 风速", "2.5-3m 安装高度"],
    category: "风幕系列",
    productLine: "离心风幕机",
  },
  {
    name: "贯流风幕机",
    model: "CHFM-1209GY-V1",
    image: "/images/products/air-curtain-crossflow.jpg",
    alt: "积云家居贯流风幕机",
    summary:
      "采用全金属超薄防锈机身，适合商用入口连续运行场景，兼顾风量覆盖与便捷控制。",
    features: ["11m/s 风速", "1400m³/h 风量", "遥控/按键可控", "2.5-3m 安装高度"],
    category: "风幕系列",
    productLine: "贯流风幕机",
  },
  {
    name: "扫地机器人进阶款",
    model: "JY-RD300M",
    image: "/images/products/robot-pro.png",
    alt: "积云家居进阶扫地机器人",
    summary:
      "强化自动化清洁体验，集成旋转拖地、自动上下水与更强吸力方案。",
    features: ["7000Pa 吸力", "自动上下水", "AI 语音助手"],
    category: "智能清洁系列",
    productLine: "进阶扫拖机器人",
  },
  {
    name: "扫拖机器人基础款",
    model: "JY-RD100",
    image: "/images/products/robot-basic.jpg",
    alt: "积云家居扫拖机器人基础款",
    summary:
      "聚焦家庭日常地面清洁，提供扫拖一体、自动回充与低噪运行的基础智能清洁体验。",
    features: ["4000Pa 吸力", "陀螺仪导航", "4200mAh 电池", "40dB 运行噪音"],
    category: "智能清洁系列",
    productLine: "基础扫拖机器人",
  },
  {
    name: "85L 冷风机",
    model: "CHL6.0-ZM13YB05",
    image: "/images/products/air-cooler-85l.png",
    alt: "积云家居 85L 冷风机",
    summary:
      "面向大空间降温与空气循环场景，采用湿帘蒸发芯降温并配备动态 LCD 灯显。",
    features: ["6000m³/h 风量", "85L 水箱", "0.5-10 小时定时", "300W 功率"],
    category: "风处理系列",
    productLine: "冷风机",
  },
  {
    name: "30L 冷风机",
    model: "CHL2.5-ZM13YB03",
    image: "/images/products/air-cooler-30l.png",
    alt: "积云家居 30L 冷风机",
    summary:
      "适合中小空间移动降温使用，支持动态 LCD 显示、遥控操作与负离子空气卫士功能。",
    features: ["2500m³/h 风量", "30L 水箱", "0.5-7.5 小时定时", "三面湿帘降温"],
    category: "风处理系列",
    productLine: "冷风机",
  },
  {
    name: "60L 冷风机",
    model: "CHL4.0-ZM13YB04",
    image: "/images/products/air-cooler-60l.png",
    alt: "积云家居 60L 冷风机",
    summary:
      "强化风量、水箱容量与长时间定时能力，适合更长时段的场景降温需求。",
    features: ["4000m³/h 风量", "60L 水箱", "1-24 小时定时", "缺水保护"],
    category: "风处理系列",
    productLine: "冷风机",
  },
  {
    name: "空气炸锅",
    model: "COC1.0-DD16C01",
    image: "/images/products/air-fryer.jpeg",
    alt: "积云家居空气炸锅",
    summary:
      "以简洁外观搭配日常厨房功能，形成家居电器产品矩阵的视觉补充。",
    features: ["4.5L 容量", "80-200℃ 调温", "0-60 分钟定时"],
    category: "厨房家电系列",
    productLine: "空气炸锅",
  },
  {
    name: "胶囊咖啡机",
    model: "COF2.0-EE16Y02",
    image: "/images/products/coffee-machine.jpg",
    alt: "积云家居胶囊咖啡机",
    summary:
      "围绕精品咖啡场景打造的小家电产品，强调恒温萃取、静音表现与奶泡系统组合。",
    features: ["20BAR 压力", "奶泡系统", "92° 恒温萃取", "850W 功率"],
    category: "厨房家电系列",
    productLine: "咖啡机",
  },
  {
    name: "嵌入式烤箱",
    model: "VOV-KX05G03",
    image: "/images/products/oven-built-in.png",
    alt: "积云家居嵌入式烤箱",
    summary:
      "采用三层隔热结构与电子控温方案，适合家庭烘焙与厨房嵌入式应用场景。",
    features: ["40L 容量", "1800W 功率", "28-230℃ 温控", "触摸式操控"],
    category: "厨房家电系列",
    productLine: "烤箱",
  },
  {
    name: "空气净化器",
    model: "DOD-CC10D01Y22",
    image: "/images/products/air-purifier.jpeg",
    alt: "积云家居空气净化器",
    summary:
      "聚焦颗粒物与甲醛净化能力，补充健康家居场景下的核心产品带。",
    features: ["颗粒物 CADR 600m³/h", "32-60㎡ 适用面积", "35-65dB 噪声"],
    category: "健康家居系列",
    productLine: "空气净化器",
  },
  {
    name: "智能体脂秤",
    model: "JOJ-TZ11A01",
    image: "/images/products/body-scale.jpg",
    alt: "积云家居智能体脂秤",
    summary:
      "聚焦家庭基础健康监测，支持多项身体数据识别、LED 显示与 USB 充电使用。",
    features: ["32 项数据监测", "180 天续航", "0.2-150KG 称重范围", "LED 显示"],
    category: "健康家居系列",
    productLine: "体重秤",
  },
];

export const catalogSections: CatalogSection[] = [
  {
    id: "air-treatment",
    title: "风处理系列",
    englishTitle: "Air Treatment",
    description: "围绕送风、循环送风与场景降温需求打造的产品系列。",
    image: "/images/series/001.jfif",
    alt: "积云家居风处理系列目录图",
    highlights: ["循环送风", "蓄电应用", "场景降温"],
    productLines: [
      { name: "蓄电风扇", summary: "面向家居与灵活移动场景的核心送风产品。" },
      { name: "落地风扇", summary: "覆盖多规格家用落地送风与常规室内使用需求。" },
      { name: "复古金属风扇", summary: "以金属材质与复古外观为特色的风处理产品线。" },
      { name: "工业挂壁扇", summary: "针对大空间与工业环境的定向送风方案。" },
      { name: "冷风机", summary: "兼顾降温、送风与大空间空气循环表现。" },
    ],
  },
  {
    id: "commercial-airflow",
    title: "风幕系列",
    englishTitle: "Commercial Airflow",
    description: "面向商用空间与公共区域空气流动需求的产品系列。",
    image: "/images/series/002.jfif",
    alt: "积云家居风幕系列目录图",
    highlights: ["商用空间", "稳定送风", "金属机身"],
    productLines: [
      { name: "离心风幕机", summary: "适用于商用入口与高频通行空间。" },
      { name: "贯流风幕机", summary: "兼顾风量覆盖与更平稳的运行噪声表现。" },
      { name: "高静压方案", summary: "面向更复杂入口环境与更高风量需求。" },
      { name: "多规格长度", summary: "覆盖不同门宽与安装尺度的项目需求。" },
    ],
  },
  {
    id: "smart-cleaning",
    title: "智能清洁系列",
    englishTitle: "Smart Cleaning",
    description: "面向家庭清洁与智能联动需求的产品系列。",
    image: "/images/series/003.jfif",
    alt: "积云家居智能清洁目录图",
    highlights: ["扫拖一体", "自动集成", "智能交互"],
    productLines: [
      { name: "基础扫拖机器人", summary: "覆盖家庭日常地面清洁的基础产品带。" },
      { name: "进阶扫拖机器人", summary: "强化吸力、路径规划与拖地表现。" },
      { name: "自动基站方案", summary: "承接自动集尘、上下水与更完整自动化体验。" },
    ],
  },
  {
    id: "kitchen-appliances",
    title: "厨房家电系列",
    englishTitle: "Kitchen Appliances",
    description: "面向家庭烹饪场景的厨房电器产品系列。",
    image: "/images/series/004.jfif",
    alt: "积云家居厨房家电目录图",
    highlights: ["高效烹饪", "简约设计", "多样功能"],
    productLines: [
      { name: "空气炸锅", summary: "聚焦日常烹饪效率与简洁厨房场景。" },
      { name: "烤箱", summary: "承接多样化烘焙与家庭料理需求。" },
      { name: "咖啡机", summary: "补足精品生活方式场景中的小家电表达。" },
    ],
  },
  {
    id: "healthy-home",
    title: "健康家居系列",
    englishTitle: "Healthy Home",
    description: "围绕空气净化与健康生活需求打造的产品系列。",
    image: "/images/series/005.jfif",
    alt: "积云家居健康家居目录图",
    highlights: ["空气净化", "健康管理", "舒适环境"],
    productLines: [
      { name: "空气净化器", summary: "围绕空气健康与舒适呼吸体验展开。" },
      { name: "体重秤", summary: "延展到基础健康监测类家居设备。" },
      { name: "舒适环境设备", summary: "补充更完整的健康家居产品线。" },
    ],
  },
  {
    id: "home-customization",
    title: "家居定制系列",
    englishTitle: "Home Customization",
    description: "面向空间配套与客户化开发需求的定制方案系列。",
    image: "/images/series/006.jfif",
    alt: "积云家居家居定制目录图",
    highlights: ["空间配套", "产品整合", "定制开发"],
    productLines: [
      { name: "全屋家居配套", summary: "承接空间级家居组合与方案展示。" },
      { name: "定制化产品整合", summary: "围绕客户需求组织更完整的产品组合。" },
      { name: "合作项目开发", summary: "适用于项目型合作与持续迭代开发场景。" },
    ],
  },
];

export const homeCustomizationShowcaseImages: ShowcaseImageItem[] = [
  { image: "/images/customization/home-customization-gallery-01.jpg", alt: "积云家居家居定制案例图 01" },
  { image: "/images/customization/home-customization-gallery-02.jpg", alt: "积云家居家居定制案例图 02" },
  { image: "/images/customization/home-customization-gallery-03.jpg", alt: "积云家居家居定制案例图 03" },
  { image: "/images/customization/home-customization-gallery-04.jpg", alt: "积云家居家居定制案例图 04" },
  { image: "/images/customization/home-customization-gallery-05.jpg", alt: "积云家居家居定制案例图 05" },
  { image: "/images/customization/home-customization-gallery-06.jpg", alt: "积云家居家居定制案例图 06" },
  { image: "/images/customization/home-customization-gallery-07.jpg", alt: "积云家居家居定制案例图 07" },
  { image: "/images/customization/home-customization-gallery-08.jpg", alt: "积云家居家居定制案例图 08" },
  { image: "/images/customization/home-customization-gallery-09.jpg", alt: "积云家居家居定制案例图 09" },
  { image: "/images/customization/home-customization-gallery-10.jpg", alt: "积云家居家居定制案例图 10" },
  { image: "/images/customization/home-customization-gallery-11.jpg", alt: "积云家居家居定制案例图 11" },
  { image: "/images/customization/home-customization-gallery-12.jpg", alt: "积云家居家居定制案例图 12" },
  { image: "/images/customization/home-customization-gallery-13.jpg", alt: "积云家居家居定制案例图 13" },
  { image: "/images/customization/home-customization-gallery-14.jpg", alt: "积云家居家居定制案例图 14" },
  { image: "/images/customization/home-customization-gallery-15.jpg", alt: "积云家居家居定制案例图 15" },
  { image: "/images/customization/home-customization-gallery-16.jpg", alt: "积云家居家居定制案例图 16" },
  { image: "/images/customization/home-customization-gallery-17.png", alt: "积云家居家居定制案例图 17" },
  { image: "/images/customization/home-customization-gallery-18.jpg", alt: "积云家居家居定制案例图 18" },
  { image: "/images/customization/home-customization-gallery-19.jpg", alt: "积云家居家居定制案例图 19" },
  { image: "/images/customization/home-customization-gallery-20.jpg", alt: "积云家居家居定制案例图 20" },
  { image: "/images/customization/home-customization-gallery-21.jpg", alt: "积云家居家居定制案例图 21" },
  { image: "/images/customization/home-customization-gallery-22.jpg", alt: "积云家居家居定制案例图 22" },
];

export const contactItems: ContactItem[] = [
  { label: "公司名称", value: "广东顺德积云家居科技有限公司" },
  { label: "所在地", value: "广东顺德" },
  { label: "合作方向", value: "品牌合作 / 产品定制 / 渠道合作 / 家居定制" },
  { label: "资料状态", value: "联系方式待补充，可先预留商务邮箱与电话" },
];
