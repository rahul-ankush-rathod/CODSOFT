function toggleMenu() {
    const menu = document.getElementById("menu");
    const toggleBtn = document.querySelector(".toggle-btn");

    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        toggleBtn.innerHTML = "☰"; 
    } else {
        menu.classList.add("open");
        toggleBtn.innerHTML = "✖"; 
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".cards");

    function showCardsOnScroll() {
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardPosition < windowHeight - 100) {
                card.classList.add("show");
            }
        });
    }

    
    showCardsOnScroll();

    
    window.addEventListener("scroll", showCardsOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".abtcard");

    function checkCards() {
        const triggerBottom = window.innerHeight * 0.8; 

        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add("show"); 
            } else {
                card.classList.remove("show"); 
            }
        });
    }

    window.addEventListener("scroll", checkCards);
    checkCards(); 
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-container");

    function handleScroll() {
        const formTop = contactForm.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (formTop < windowHeight - 100) {
            contactForm.classList.add("show");
        } else {
            contactForm.classList.remove("show"); 
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
});
