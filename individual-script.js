    const container = document.getElementById('cake-gallery');
    
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

    // responsive navbar

    function toggleMenu() {
        document.getElementById("navLinks")?.classList.toggle("active");
    }




    // 
    document.addEventListener("DOMContentLoaded", () => {
    window.toggleMenu = toggleMenu;


    const container =
        document.querySelector(".products-container") ||
        document.querySelector(".product-container") ||
        document.querySelector(".products");

    const cards = document.querySelectorAll(".product-card");
    const dots = document.querySelectorAll(".dot");

    if (!container || !cards.length) {
        console.warn("Container ya cards nahi milay");
        return;
    }

    const gap = 20;
    const scrollAmount = cards[0].offsetWidth + gap;

    /* ===== ARROWS ===== */
    window.nextSlide = function () {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    window.prevSlide = function () {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };

    /* ===== DOT CLICK ===== */
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            container.scrollTo({
                left: index * scrollAmount,
                behavior: "smooth"
            });
        });
    });

    /* ===== DOT ACTIVE ON SCROLL ===== */
    function updateDots() {
        const index = Math.round(container.scrollLeft / scrollAmount);
        dots.forEach(d => d.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    }

    container.addEventListener("scroll", updateDots);
    updateDots();

});





