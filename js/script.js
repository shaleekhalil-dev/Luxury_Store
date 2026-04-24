let count = 0;
function addToCart() {
    count++;
    document.getElementById('cart-badge').innerText = count;
    
    // تأثير إشعاعي عند الإضافة
    const badge = document.getElementById('cart-badge');
    badge.style.transform = 'scale(1.5)';
    setTimeout(() => badge.style.transform = 'scale(1)', 200);
}

// تأثير الأنيميشن عند التمرير
window.addEventListener('scroll', () => {
    const header = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        header.style.padding = '10px 10%';
        header.style.background = 'rgba(26, 15, 10, 0.8)';
    } else {
        header.style.padding = '20px 10%';
        header.style.background = 'rgba(255, 255, 255, 0.05)';
    }
});
