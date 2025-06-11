// 语言切换功能
const zhContent = {
    'home-title': '磁弘科技 - 专业磁性元件解决方案',
    'home-p': '我们提供高品质的平面变压器、电感和电流互感器等产品。',
    'about-h2': '关于我们',
    'about-p1': '20 年 + 磁性器件专业研发生产经验，服务 300 + 客户（华为、比亚迪、中兴等）。',
    'about-p2': '使命：成为行业可持续发展的创新健康的科技公司',
    'about-p3': '愿景：弘扬磁性新能源，创导低碳出行',
    'about-p4': '质量方针：品质第一、客户至上 | 持续改善、永续经营',
    'about-p5': '环保理念：关爱地球、绿色低碳 | 节约能源、循环再生',
    'products-h2': '产品中心',
    'products-h3-1': '平板变压器',
    'products-p1': 'DC18V-72V/AC85V-380V 输入电压，高频 800KHz+，强化绝缘设计',
    'products-h3-2': '电感系列',
    'products-p2': '扁平线共模电感（封装限制 & 安规需求适配）',
    'products-p3': '纳米晶磁芯功率电感（高效率、低损耗、EMI 抑制）',
    'products-p4': '非晶 / 纳米晶磁环（电源磁性元件应用）',
    'products-h3-3': '互感器',
    'products-p5': '高精密型，适用于电子检测设备及消防安全器材',
    'products-filter-1': '按应用领域筛选',
    'products-filter-2': '按技术参数筛选',
    'products-filter-3': '光伏逆变器',
    'products-filter-4': 'UPS 电源',
    'products-filter-5': '充电桩',
    'products-filter-6': '输入电压',
    'products-filter-7': '材料类型',
    'solutions-h2': '解决方案',
    'solutions-h3-1': '新能源领域',
    'solutions-p1': '15~50KW 光伏逆变器、风力发电输配、储能电站',
    'solutions-h3-2': '工业领域',
    'solutions-p2': '轨道交通、变频器、医疗设备电源方案',
    'solutions-h3-3': '材料创新',
    'solutions-p3': '纳米晶 / 非晶 / 铁粉磁芯，温度特性优越',
    'solutions-h3-4': '定制化服务',
    'solutions-p4': '支持扁平线绕制、封装定制，适配特殊安规要求',
    'cases-h2': '客户案例',
    'cases-h3-1': '华为',
    'cases-p1': '应用产品：车载充电机模块',
    'cases-p2': '技术亮点：[具体亮点]',
    'cases-h3-2': '比亚迪',
    'cases-p3': '应用产品：车载 DC/DC 转换模块',
    'cases-p4': '技术亮点：效率提升 15%',
    'cases-h3-3': '中兴',
    'cases-p5': '应用产品：光伏逆变器元件',
    'cases-p6': '技术亮点：[具体亮点]',
    'contact-h2': '联系方式',
    'contact-p1': '公司地址：[占位符]',
    'contact-p2': '联系电话：[占位符]',
    'contact-p3': '邮箱：813114141@qq.com',
    'contact-p4': '微信：13177429342',
    'contact-a1': '获取样品',
    'contact-a2': '方案定制'
};

const enContent = {
    'home-title': 'Cihong Technology - Professional Magnetic Component Solutions',
    'home-p': 'We provide high-quality planar transformers, inductors, current transformers, and other products.',
    'about-h2': 'About Us',
    'about-p1': 'Over 20 years of professional R & D and production experience in magnetic components, serving over 300 customers (e.g., Huawei, BYD, ZTE).',
    'about-p2': 'Mission: To become an innovative and sustainable technology company in the industry.',
    'about-p3': 'Vision: Promote magnetic new energy and advocate low-carbon mobility.',
    'about-p4': 'Quality Policy: Quality First, Customer Supreme | Continuous Improvement, Sustainable Development.',
    'about-p5': 'Environmental Policy: Protect the Earth, Go Green | Save Energy, Recycle.',
    'products-h2': 'Product Center',
    'products-h3-1': 'Planar Transformers',
    'products-p1': 'Input voltage: DC 18V - 72V/AC 85V - 380V, high frequency: >800KHz, enhanced insulation design.',
    'products-h3-2': 'Inductor Series',
    'products-p2': 'Flat wire common-mode inductors (suitable for packaging constraints and safety requirements).',
    'products-p3': 'Nanocrystalline core power inductors (high efficiency, low loss, EMI suppression).',
    'products-p4': 'Amorphous/nanocrystalline magnetic cores (for power magnetic components).',
    'products-h3-3': 'Current Transformers',
    'products-p5': 'High-precision models suitable for electronic testing equipment and fire safety devices.',
    'products-filter-1': 'Filter by application area',
    'products-filter-2': 'Filter by technical parameters',
    'products-filter-3': 'Photovoltaic Inverters',
    'products-filter-4': 'UPS Power Supplies',
    'products-filter-5': 'Charging Stations',
    'products-filter-6': 'Input Voltage',
    'products-filter-7': 'Material Type',
    'solutions-h2': 'Solutions',
    'solutions-h3-1': 'New Energy Sector',
    'solutions-p1': '15 - 50KW photovoltaic inverters, wind power transmission and distribution, energy storage stations.',
    'solutions-h3-2': 'Industrial Sector',
    'solutions-p2': 'Railway transportation, frequency converters, medical equipment power solutions.',
    'solutions-h3-3': 'Material Innovation',
    'solutions-p3': 'Nanocrystalline/amorphous/iron powder cores with excellent thermal properties.',
    'solutions-h3-4': 'Customized Services',
    'solutions-p4': 'Support flat wire winding and customized packaging to meet special safety standards.',
    'cases-h2': 'Customer Success Stories',
    'cases-h3-1': 'Huawei',
    'cases-p1': 'Applied Product: On-board Charger Module',
    'cases-p2': 'Technical Highlights: [Specific Details]',
    'cases-h3-2': 'BYD',
    'cases-p3': 'Applied Product: On-board DC/DC Conversion Module',
    'cases-p4': 'Technical Highlights: 15% efficiency improvement.',
    'cases-h3-3': 'ZTE',
    'cases-p5': 'Applied Product: Photovoltaic Inverter Components',
    'cases-p6': 'Technical Highlights: [Specific Details]',
    'contact-h2': 'Contact Us',
    'contact-p1': 'Company Address: [Placeholder]',
    'contact-p2': 'Contact Phone: [Placeholder]',
    'contact-p3': 'Email: 813114141@qq.com',
    'contact-p4': 'WeChat: 13177429342',
    'contact-a1': 'Request Samples',
    'contact-a2': 'Customize Solutions'
};

function switchLanguage(lang) {
    const htmlRoot = document.getElementById('html-root');
    htmlRoot.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    const contentMap = lang === 'zh' ? zhContent : enContent;
    for (const [key, value] of Object.entries(contentMap)) {
        const element = document.querySelector(`[data-lang-key="${key}"]`);
    if (element) {
        element.textContent = value;
    }
}

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

// 自动轮播
setInterval(nextSlide, 5000);

// 鼠标悬停显示技术参数
slides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
        const params = slide.querySelector('.tech-params');
        params.style.display = 'block';
    });

    slide.addEventListener('mouseout', () => {
        const params = slide.querySelector('.tech-params');
        params.style.display = 'none';
    });
});

// 产品图点击放大功能
const productImages = document.querySelectorAll('.product-category img');
const modal = document.createElement('div');
modal.className = 'modal';
const modalImage = document.createElement('img');
modal.appendChild(modalImage);
modal.style.display = 'none';

productImages.forEach(image => {
    image.addEventListener('click', () => {
        modalImage.src = image.src;
        modal.style.display = 'block';
        document.body.appendChild(modal);
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.removeChild(modal);
});

// 场景图热区链接功能
const sceneImages = document.querySelectorAll('.industry img, #home .hero-carousel img');
sceneImages.forEach(image => {
    image.addEventListener('click', () => {
        // 这里需要根据实际图片设置对应的链接
        window.location.href = 'product-detail.html';
    });
});

// 原有产品筛选功能
const applicationSelect = document.getElementById('application');
const parametersSelect = document.getElementById('parameters');

applicationSelect.addEventListener('change', function() {
    // 实现按应用领域筛选逻辑
    console.log('按应用领域筛选: ' + this.value);
});

parametersSelect.addEventListener('change', function() {
    // 实现按技术参数筛选逻辑
    console.log('按技术参数筛选: ' + this.value);
});
