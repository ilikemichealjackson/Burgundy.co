// Clothing data from spreadsheet
const products = [
    {
        id: 1,
        name: "Burgundy Tech Hoodie",
        image: "https://raw.githubusercontent.com/ilikemichealjackson/hbgjnkboerwkpfqwbhjv/refs/heads/main/image-removebg-preview.png",
        url: "product-1.html",
        color: "Black",
        size: "S, M, L, XL",
	cost: "40$",
        category: "hoodie"
    },
    {
        id: 2,
        name: "Burgundy Ball Knowledge Double Layer Tee",
        image: "https://raw.githubusercontent.com/ilikemichealjackson/hbgjnkboerwkpfqwbhjv/refs/heads/main/image-removebg-preview%20(1).png",
        url: "product-2.html",
        color: "Black",
        size: "S, M, L, XL",
	cost: "25$",
        category: "tee"
    },
    {
        id: 3,
        name: "Burgundy Detatchable Fur Sun Faded Jacket",
        image: "https://raw.githubusercontent.com/ilikemichealjackson/hbgjnkboerwkpfqwbhjv/refs/heads/main/image-removebg-preview%20(2).png",
        url: "product-3.html",
        color: "Black",
        size: "S, M, L, XL",
	cost: "45$",
        category: "hoodie"
    },
    {
        id: 4,
        name: "Bergundy Co Reversible Hoodie Black to Gray Flannel",
        image: "https://raw.githubusercontent.com/ilikemichealjackson/hbgjnkboerwkpfqwbhjv/refs/heads/main/image-removebg-preview%20(3).png",
        url: "product-4.html",
        color: "Black",
        size: "S, M, L, XL",
	cost: "40$",
        category: "hoodie"
    },
    {
        id: 5,
        name: "Plaid Waistband Burgundy Barell Sweats",
        image: "https://raw.githubusercontent.com/ilikemichealjackson/hbgjnkboerwkpfqwbhjv/refs/heads/main/image-removebg-preview%20(4).png",
        url: "product-5.html",
        color: "Black",
        size: "S, M, L, XL",
	cost: "30$",
        category: "pants"
    },
    {
        id: 6,
        name: "Striped Button Up Burgundy BK Shirt",
        image: "https://raw.githubusercontent.com/ilikemichealjackson/hbgjnkboerwkpfqwbhjv/refs/heads/main/image-removebg-preview%20(6).png",
        url: "product-6.html",
        color: "Black",
        size: "S, M, L, XL",
	cost: "25$",
        category: "tee"
    },
    {
        id: 7,
        name: "Edward Baker Burgundy Cash Camo Tee",
        image: "https://raw.githubusercontent.com/ilikemichealjackson/hbgjnkboerwkpfqwbhjv/refs/heads/main/image-removebg-preview%20(7).png",
        url: "product-7.html",
        color: "Black",
        size: "S, M, L, XL",
	cost: "20$",
        category: "tee"
    }
];

// DOM Elements
const productsContainer = document.getElementById('products');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalColor = document.getElementById('modal-color');
const modalSize = document.getElementById('modal-size');
const modalCost = document.getElementById('modal-cost');
const modalLink = document.getElementById('modal-link');
const filterLinks = document.querySelectorAll('.nav-links a');

// Render products
function renderProducts() {
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.color}</p>
                <div class="product-meta">
                    <span>${product.category}</span>
                    <span>${product.size}</span>
                </div>
                <div class="product-meta">
                    <span> </span>
                    <spann>${product.cost}</spann>
                    <span> </span>
</div>
            </div>
        </div>
    `).join('');

    // Add click listeners to cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const product = products.find(p => p.id === parseInt(card.dataset.id));
            if (product) {
                window.location.href = product.url;
            }
        });
    });
}

// Open modal
function openModal(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) return;

    modalImg.src = product.image;
    modalImg.alt = product.name;
    modalName.textContent = product.name;
    modalColor.textContent = product.color;
    modalSize.textContent = product.size;
    modalLink.href = product.url;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Filter products
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Event Listeners
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        filterLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        filterProducts(link.dataset.filter);
    });
});

// Initialize
renderProducts();
