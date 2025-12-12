document.addEventListener('DOMContentLoaded', () => {

    /* 1. DARK MODE MEMORY */
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if (toggleButton) toggleButton.innerText = "☀️";
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                toggleButton.innerText = "☀️";
            } else {
                localStorage.setItem('darkMode', 'disabled');
                toggleButton.innerText = "🌙";
            }
        });
    }

    /* 2. OPENING HOURS */
    const now = new Date();
    const currentHour = now.getHours();
    const openingHour = 10;
    const closingHour = 19;

    const statusElements = document.querySelectorAll("#shop-status");

    statusElements.forEach(el => {
        if (currentHour >= openingHour && currentHour < closingHour) {
            el.innerText = "We are Currently Open!";
            el.style.color = "green";
            el.style.fontWeight = "bold";
        } else {
            el.innerText = "We are Currently Closed.";
            el.style.color = "red";
            el.style.fontWeight = "bold";
        }
    });

    /* 3. SCROLL REVEAL */
    window.addEventListener('scroll', reveal);
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;
            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }
    reveal();

    /* 4. CONTACT FORM */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert("Thanks for reaching out! We will brew a reply shortly ☕");
            contactForm.reset();
        });
    }

    /* 5. TYPING TEXT */
    const textToType = "Brewing Fresh Code, Building Bold Websites.";
    const typeWriterElement = document.getElementById('typewriter-text');
    if (typeWriterElement) {
        let index = 0;
        typeWriterElement.innerHTML = "";
        function type() {
            if (index < textToType.length) {
                typeWriterElement.innerHTML += textToType.charAt(index);
                index++;
                setTimeout(type, 50);
            }
        }
        type();
    }

    /* 🌟 6. BACK TO TOP BUTTON LOGIC 🌟 */
    const backToTopBtn = document.getElementById("back-to-top");

    if (backToTopBtn) {
        // Show button when scrolled down 300px
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add("visible");
            } else {
                backToTopBtn.classList.remove("visible");
            }
        });

        // Scroll to top when clicked
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});