// List of all screenshots in the folder
const screenshots = [
    { src: 'تسجيل الدخول.JPG', alt: 'شاشة تسجيل الدخول' },
    { src: 'اللوحة الرئسية.JPG', alt: 'لوحة التحكم الرئيسية' },
    { src: 'نقطة البيع.JPG', alt: 'شاشة نقطة البيع (الكاشير)' },
    { src: 'الاصناف.JPG', alt: 'إدارة الأصناف والمنتجات' },
    { src: 'لوحة التحكم.JPG', alt: 'الإدارة والإحصائيات' },
    { src: 'حالة المخزون.JPG', alt: 'تقرير حالة المخزون' },
    { src: 'الادوار والصلاحيات.JPG', alt: 'إدارة أدوار الموظفين' },
    { src: 'المستخدمين.JPG', alt: 'إدارة مستخدمي النظام' },
    { src: 'اعدادات النظام.JPG', alt: 'إعدادات النظام العامة' },
    { src: 'تسوية المخزون.JPG', alt: 'شاشة تسوية المخزون' },
    { src: 'قائمة العملاء.JPG', alt: 'إدارة بيانات العملاء' },
    { src: 'كشف حساب عميل.JPG', alt: 'كشف حساب تفصيلي للعميل' },
    { src: 'تصنيفات الأصناف.JPG', alt: 'إدارة مجموعات الأصناف' },
    { src: 'ارجاع صنف في فاتورة.JPG', alt: 'نظام المرتجعات الذكي' },
    { src: 'اضافة عميل.JPG', alt: 'إضافة عميل جديد بسرعة' },
    { src: 'ايصال الفاتورة بالكيو ار كود.JPG', alt: 'إيصال الفاتورة بترميز QR' },
    { src: 'تحويل الدفع على حساب عميل.JPG', alt: 'الدفع الآجل (على الحساب)' },
    { src: 'دفع نقدي.JPG', alt: 'عملية الدفع النقدي' },
    { src: 'شاشة نقاط البيعفلتر بالتصنيفات للوصول السريع للمطلوب حسب كل مجموعة تصنيف.JPG', alt: 'فلتر التصنيفات السريع' },
    { src: 'طباعة الفاتورة على ورق A4.JPG', alt: 'طباعة احترافية A4' },
    { src: 'نهاية الشفت.JPG', alt: 'تقرير نهاية الوردية' }
];

let itemsShown = 6;
const grid = document.getElementById('galleryGrid');
const loadMoreBtn = document.getElementById('loadMore');

// Function to render items
function renderGallery(limit) {
    grid.innerHTML = '';
    const itemsToRender = screenshots.slice(0, limit);

    itemsToRender.forEach((screen, index) => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 gallery-item show';
        col.style.animationDelay = `${index * 0.1}s`;
        col.innerHTML = `
            <div class="screen-card" onclick="openLightbox('${screen.src}', '${screen.alt}')">
                <img src="${screen.src}" alt="${screen.alt}" loading="lazy">
                <div class="overlay">
                    <i class="bi bi-fullscreen text-white fs-1 mb-2"></i>
                    <span class="text-white fw-bold">${screen.alt}</span>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });

    if (limit >= screenshots.length) {
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    }
}

// Lightbox Logic
function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');

    lightboxImg.src = src;
    caption.innerText = alt;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event Listeners
loadMoreBtn?.addEventListener('click', () => {
    itemsShown = screenshots.length;
    renderGallery(itemsShown);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// Close lightbox on click outside image
document.getElementById('lightbox')?.addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
});

// Initialize Gallery
document.addEventListener('DOMContentLoaded', () => {
    renderGallery(itemsShown);

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });
});

