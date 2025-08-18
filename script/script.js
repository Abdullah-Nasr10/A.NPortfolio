const menuBtn = document.querySelector('.PortfolioPage .menu-icon');
const menuBtnSmallScreen = document.querySelector('.PortfolioPage .menu-icon.smallScreen');
const closeAsideNav = document.querySelector('#closeAsideNav');

const DayNightBtn = document.querySelector('.PortfolioPage .DayNightIcon');
const asideNav = document.querySelector('.PortfolioPage .asideNav');
const mainContent = document.querySelector(".PortfolioPage .mainContent")




// menuBtn.addEventListener("click", function () {
//     asideNav.classList.toggle('hide');

// })
// menuBtnSmallScreen.addEventListener("click", function () {
//     asideNav.classList.toggle('hide');

// })
// closeAsideNav.addEventListener("click", function () {
//     asideNav.classList.toggle('hide');
// })


function toggleAside() {
    asideNav.classList.toggle('hide');
    // mainContent.classList.toggle('hide');
}

[menuBtn, menuBtnSmallScreen, closeAsideNav].forEach(btn => {
    btn.addEventListener("click", toggleAside);
});







// =========================handleNightMode-Start============================
DayNightBtn.addEventListener("click", function () {
    DayNightBtn.querySelector('i').classList.toggle("fa-sun");
    DayNightBtn.querySelector('i').classList.toggle("fa-moon");
    document.body.classList.toggle("dark");


    // ---------------modestate------------
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
})


window.addEventListener('load', function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        DayNightBtn.querySelector('i').classList.add("fa-sun");
        DayNightBtn.querySelector('i').classList.remove("fa-moon");
    } else {
        document.body.classList.remove("dark");
        DayNightBtn.querySelector('i').classList.add("fa-moon");
        DayNightBtn.querySelector('i').classList.remove("fa-sun");
    }
});

// =========================handleNightMode-End============================









// =========================handleNavigatePages-start============================

const navLinks = document.querySelectorAll(".navigatePages");
const sections = document.querySelectorAll(".mainContent section.container");

// ========== Handle Click ==========
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(other => other.classList.remove("active"));
        this.classList.add("active");
    });
});

// ========== Handle Scroll ==========
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
// =========================handleNavigatePages-End============================










// =========================handleContactMessage-start============================

emailjs.init("dkUTZlWP0fug-Cvbp");

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_x6j6ioq", "template_48izkat", this)
        .then(() => {
            alert("✅ Message sent successfully!");
            this.reset();
        }, (err) => {
            alert("❌ Failed to send: " + JSON.stringify(err));
        });
});


// =========================handleContactMessage-End============================


