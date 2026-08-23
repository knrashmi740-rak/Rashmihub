document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");


    /* ================= MOBILE MENU ================= */

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("show");

            if (navMenu.classList.contains("show")) {
                menuBtn.textContent = "✕";
            } else {
                menuBtn.textContent = "☰";
            }

        });

    }


    /* ================= NAVIGATION ================= */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navMenu) {
                navMenu.classList.remove("show");
            }

            if (menuBtn) {
                menuBtn.textContent = "☰";
            }

        });

    });


    /* ================= ACTIVE NAVIGATION ================= */

    function updateActiveSection() {

        let currentSection = "home";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveSection
    );


    updateActiveSection();


    /* ================= CLOSE MENU ON OUTSIDE CLICK ================= */

    document.addEventListener("click", function (event) {

        if (
            navMenu &&
            menuBtn &&
            !navMenu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            navMenu.classList.remove("show");

            menuBtn.textContent = "☰";

        }

    });


    /* ================= CONSOLE MESSAGE ================= */

    console.log(
        "Rashmitha K N's portfolio loaded successfully."
    );

});