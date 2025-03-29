document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.getElementById("sidebar");
    let menuIcon = document.getElementById("menu-icon");
    let footer = document.querySelector("footer"); // Add this line


    menuIcon.addEventListener("click", function () {
        sidebar.classList.toggle("sidebar-active");
    });
});
const footer = document.querySelector("footer");  // Select footer element

// Show Footer Only on Scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        footer.style.opacity = "1";
        footer.style.transform = "translateY(0)";
    } else {
        footer.style.opacity = "0";
        footer.style.transform = "translateY(20px)";
    }
});
