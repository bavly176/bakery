window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

window.addEventListener("scroll", function () {
    let button = document.getElementById("backToTop");
    if (window.scrollY > 200) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
});

document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const scrollDown = document.querySelector('.scrolldown');

scrollDown.addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= 50 && rect.bottom >= 50) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// 
window.addEventListener("scroll", function () {
    let button = document.getElementById("backToTop");
    if (window.scrollY > 200) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
});

// تحسين للهواتف:
window.addEventListener("resize", function() {
    if (window.innerWidth < 600) {
        button.style.bottom = "20px";
        button.style.right = "20px";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // اجعل اللودر يظهر أثناء التحميل
    let loader = document.querySelector(".loader");
    
    setTimeout(() => {
        loader.classList.add("hidden"); // إخفاء اللودر بعد 3 ثوانٍ
    }, 3000);
});

