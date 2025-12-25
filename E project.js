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

const cakeData = [
    {
        img: "cheesecake.jfif",
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
        img: "RedVelvetcake.jfif",
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
        img: "RoseGoldCake.jfif",
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
        img: "CaramelCrunchCake.jfif",
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
        img: "nakedlemoncake.jfif",
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
        img: "DutchTruffleCake.jfif",
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
        img: "velvelcocoaindulgence.jfif",
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
        img: "madagscarvanillabeancake.jfif",
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

function showLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Latitude: " + position.coords.latitude);
            console.log("Longitude: " + position.coords.longitude);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

showLocation();

const loginForm = document.querySelector('#create-account form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (email === "" || password === "") {
            alert("All fields are mandatory!");
            e.preventDefault();
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            e.preventDefault();
        } else {
            alert("Welcome back! Redirecting to your dashboard...");
        }
    });
}