// Product navigation between pages
const productPages = [
    'product-1.html',
    'product-2.html',
    'product-3.html',
    'product-4.html',
    'product-5.html',
    'product-6.html',
    'product-7.html'
];

function getCurrentProductIndex() {
    const currentPage = window.location.pathname.split('/').pop();
    return productPages.indexOf(currentPage);
}

function previousProduct() {
    const currentIndex = getCurrentProductIndex();
    if (currentIndex > 0) {
        window.location.href = productPages[currentIndex - 1];
    } else {
        // Loop to last product
        window.location.href = productPages[productPages.length - 1];
    }
}

function nextProduct() {
    const currentIndex = getCurrentProductIndex();
    if (currentIndex < productPages.length - 1) {
        window.location.href = productPages[currentIndex + 1];
    } else {
        // Loop to first product
        window.location.href = productPages[0];
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        previousProduct();
    } else if (e.key === 'ArrowRight') {
        nextProduct();
    }
});
