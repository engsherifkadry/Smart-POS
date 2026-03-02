// Image Expansion (Lightbox) Logic
function expandImg(card) {
    const img = card.querySelector('img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');

    lightboxImg.src = img.src;
    caption.innerText = img.alt;
    lightbox.style.display = 'flex';
}

// Close Lightbox on Escape Key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('lightbox').style.display = 'none';
    }
});

// Scroll Reveal Animation using Intersection Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});

// Load More Simulation
document.getElementById('loadMore')?.addEventListener('click', function() {
    const additionalScreens = [
        { src: 'المستخدمين.JPG', alt: 'إدارة المستخدمين' },
        { src: 'اعدادات النظام.JPG', alt: 'إعدادات النظام' },
        { src: 'تسوية المخزون.JPG', alt: 'تسوية المخزون' },
        { src: 'قائمة العملاء.JPG', alt: 'قائمة العملاء' },
        { src: 'كشف حساب عميل.JPG', alt: 'كشف حساب عميل' },
        { src: 'تصنيفات الأصناف.JPG', alt: 'تصنيفات الأصناف' }
    ];

    const grid = document.querySelector('.gallery-grid');
    
    additionalScreens.forEach(screen => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 gallery-item';
        col.innerHTML = `
            <div class="screen-card rounded-4 overflow-hidden shadow-sm" onclick="expandImg(this)">
                <img src="${screen.src}" alt="${screen.alt}" class="img-fluid">
                <div class="overlay">
                    <i class="bi bi-zoom-in text-white display-4"></i>
                    <span class="text-white mt-2">${screen.alt}</span>
                </div>
            </div>
        `;
        grid.appendChild(col);
        observer.observe(col);
        
        // Trigger animation after adding to DOM
        setTimeout(() => col.classList.add('show'), 50);
    });

    this.style.display = 'none'; // Hide button after loading
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
