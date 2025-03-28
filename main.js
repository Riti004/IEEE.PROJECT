document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.getElementById("sidebar");
    let menuIcon = document.getElementById("menu-icon");

    menuIcon.addEventListener("click", function () {
        sidebar.classList.toggle("sidebar-active");
    });
});
