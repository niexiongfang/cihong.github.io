// 首页轮播图功能
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