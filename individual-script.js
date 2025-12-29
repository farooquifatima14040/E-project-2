   const container = document.getElementById('cake-gallery');
const dotsBox = document.getElementById("cake-dots");

let index = 0; 

/* ===== Render Cards ===== */
cakeData.forEach((cake, i) => {
    container.innerHTML += `
        <div class="product-card">
            <img src="${cake.img}" alt="${cake.title}">
            <p><strong>${cake.title}</strong></p>
            <p>Code: ${cake.code}</p>
            <p>Price: PKR ${cake.price}</p>
            <button class="btn-details" onclick="openZoom(${i})">Details</button>
            <button class="btn-order" onclick="openPurchase(${i})">Order</button>
        </div>
    `;
});

/* ===== Create Dots ===== */
cakeData.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.onclick = () => moveSlide(i);
    dotsBox.appendChild(dot);
});

/* ===== Slide Function ===== */
function moveSlide(i){
    index = i;
    container.style.transform = `translateX(-${i * 100}%)`;
    updateDots();
}

function updateDots(){
    dotsBox.querySelectorAll("span").forEach((dot, i)=>{
        dot.classList.toggle("active", i === index);
    });
}

/* ===== Arrow Buttons ===== */
function nextSlide(){
    index = (index + 1) % cakeData.length;
    moveSlide(index);
}

function prevSlide(){
    index = (index - 1 + cakeData.length) % cakeData.length;
    moveSlide(index);
}

updateDots();

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




    