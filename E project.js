// ----Navbar / Header----
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        navbar.classList.add("navbar-hidden");
    } else {
        navbar.classList.remove("navbar-hidden");
    }
    lastScrollY = window.scrollY;
});

    const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
});

// ----about us----
let currentIndex = 0;

function currentSlide(index) {
    const slider = document.getElementById('about-slider');
    const dots = document.querySelectorAll('.dot');
    
    // Move the slider
    slider.style.transform = `translateX(-${index * 100}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentIndex = index;
}

// Optional: Auto-slide every 5 seconds on mobile
if (window.innerWidth <= 600) {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % 3;
        currentSlide(currentIndex);
    }, 5000);
}

// ----Daily Products----
const cakeData = [
    {
        img: "daily 1.jpg",
        title: "Cheese Cake",
        code: "DC-001",
        price: "3,000",
        desc: "A rich and creamy classic made with soft cheese, sugar, and a buttery biscuit base. Known for its smooth texture and mildly sweet flavor.",
        shape: "Circle",
        flavour: "Cream Cheese & Biscuit",
        texture: "Creamy and smooth",
        frosting: "Classic Cheese Layer",
        bestfor: "Eggless & With Egg options"
    },
    {
        img: "daily 2.jpg",
        title: "Red Velvet Cake",
        code: "DC-002",
        price: "3,500",
        desc: "A classic and luxurious dessert known for its rich red color and soft, velvety texture with a mild cocoa flavor.",
        shape: "Circle",
        flavour: "Mild Cocoa & Cream Cheese",
        texture: "Soft, moist, and velvety",
        frosting: "Smooth Cream Cheese Frosting",
        bestfor: "With Egg celebrations"
    },
    {
        img: "daily 3.jpg",
        title: "Rose Gold Cake",
        code: "DC-003",
        price: "3,000",
        desc: "Soft, elegant dessert designed with a smooth and luxurious finish. Perfect for anniversaries and premium celebrations.",
        shape: "Circle",
        flavour: "Subtle Sweetness",
        texture: "Soft and smooth",
        frosting: "Premium Rose Gold Finish",
        bestfor: "Anniversaries and Engagements"
    },
    {
        img: "daily 4.jpg",
        title: "Caramel Crunch Cake",
        code: "DC-004",
        price: "3,000",
        desc: "Moist and flavorful dessert layered with rich caramel sauce and crunchy bits for a perfect balance of texture.",
        shape: "Circle",
        flavour: "Caramel",
        texture: "Moist with crunchy layers",
        frosting: "Caramel Glaze/Buttercream",
        bestfor: "Caramel Lovers"
    },
    {
        img: "daily 5.jpg",
        title: "Naked Lemon Cake",
        code: "DC-005",
        price: "3,000",
        desc: "Light and refreshing dessert with a natural, rustic look and a fresh citrus taste.",
        shape: "Circle (Naked style)",
        flavour: "Citrus Lemon",
        texture: "Light, soft, and airy",
        frosting: "Subtle Cream layers",
        bestfor: "Summer celebrations and Brunches"
    },
    {
        img: "daily 6.jpg",
        title: "Dutch Truffle Cake",
        code: "DC-006",
        price: "3,000",
        desc: "Indulgent chocolate dessert made with moist chocolate sponge and coated with smooth truffle frosting.",
        shape: "Circle",
        flavour: "Deep Cocoa / Chocolate",
        texture: "Moist and creamy",
        frosting: "Smooth Truffle Frosting",
        bestfor: "Chocolate Lovers"
    },
    {
        img: "daily 7.png",
        title: "Velvel Cocoa Indulgence Cake",
        code: "DC-007",
        price: "3,000",
        desc: "A rich and moist cocoa cake made with soft velvet layers, filled and coated with smooth chocolate cream.",
        shape: "Circle",
        flavour: "Rich Chocolate",
        texture: "Soft & Velvety",
        frosting: "Chocolate Cream",
        bestfor: "Birthdays & Celebrations"
    },
    {
        img: "daily 8.jpg",
        title: "Madagascar Vanilla Bean Cake",
        code: "DC-008",
        price: "3,000",
        desc: "Premium dessert made with real Madagascar vanilla beans, offering a sophisticated and deep aromatic flavor.",
        shape: "Circle",
        flavour: "Premium Vanilla Bean",
        texture: "Light, moist, and aromatic",
        frosting: "Vanilla Bean Infused Cream",
        bestfor: "Sophisticated Palates"
    }
];

const container = document.getElementById('all-products');

if (container) {
    cakeData.forEach((cake, index) => {
        const card = `
            <div class="product-card">
                <img src="${cake.img}" alt="${cake.title}">
                <p><strong>${cake.title}</strong></p>
                <p>Code: ${cake.code}</p>
                <p>Price: PKR ${cake.price}</p>
                <button class="btn-details" onclick="openZoom(${index})">Details</button>
                <button class="btn-order" onclick="openPurchase(${index})">Order</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

function openZoom(index) {
    const cake = cakeData[index];
    const url = `zoom.html?img=${encodeURIComponent(cake.img)}` +
                `&title=${encodeURIComponent(cake.title)}` +
                `&code=${encodeURIComponent(cake.code)}` +
                `&price=${encodeURIComponent(cake.price)}` +
                `&desc=${encodeURIComponent(cake.desc)}` +
                `&shape=${encodeURIComponent(cake.shape)}` +
                `&flavour=${encodeURIComponent(cake.flavour)}` +
                `&texture=${encodeURIComponent(cake.texture)}` +
                `&frosting=${encodeURIComponent(cake.frosting)}` +
                `&bestfor=${encodeURIComponent(cake.bestfor)}`;

    window.open(url, '_blank', 'width=1100,height=800');
}

function openPurchase(index) {
    const cake = cakeData[index];
    const cleanPrice = cake.price.replace(/,/g, '');
    const url = `purchase.html?code=${encodeURIComponent(cake.code)}&title=${encodeURIComponent(cake.title)}&price=${cleanPrice}`;
    window.open(url, 'PurchaseWindow', 'width=900,height=850,scrollbars=yes,resizable=yes');
}

// ----Contact US With GeoLocation API----
const contactForm = document.querySelector('.boutique-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = "Message Sent!";
        btn.style.backgroundColor = "#27ae60";
        
        alert("Thank you! Our consultants will contact you shortly.");
        
        contactForm.reset();
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "";
        }, 3000);
    });
}