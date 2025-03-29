document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const products = document.querySelector(".products");
    const footer = document.querySelector("footer");

    // Sidebar Toggle
    menuIcon.addEventListener("click", function () {
        sidebar.classList.toggle("sidebar-active");

        if (sidebar.classList.contains("sidebar-active")) {
            products.style.marginLeft = "220px";
        } else {
            products.style.marginLeft = "0";
        }
    });

    // Show footer only when reaching the bottom
    window.addEventListener("scroll", function () {
        let scrollPosition = window.innerHeight + window.scrollY;
        let pageHeight = document.documentElement.scrollHeight;

        if (scrollPosition >= pageHeight - 10) { 
            footer.style.opacity = "1";
            footer.style.transform = "translateY(0)";
        } else {
            footer.style.opacity = "0";
            footer.style.transform = "translateY(20px)";
        }
    });
});
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("like-btn")) {
        let product = event.target.closest(".product");
        let productId = product.getAttribute("data-id");
        let productName = product.querySelector(".product-name").innerText;
        
        let likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
        let itemIndex = likedItems.findIndex(item => item.id === productId);
        
        if (itemIndex === -1) {
            likedItems.push({ id: productId, name: productName });
            event.target.classList.add("liked");
        } else {
            likedItems.splice(itemIndex, 1);
            event.target.classList.remove("liked");
        }
        
        localStorage.setItem("likedItems", JSON.stringify(likedItems));
        updateLikedList();
    }
     // Update Liked Items in Sidebar
     function updateLikedList() {
        let likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
        likedList.innerHTML = "";
        likedItems.forEach(item => {
            let li = document.createElement("li");
            li.innerText = item.name;
            likedList.appendChild(li);
        });
    }
    
    // Load Liked Items on Page Load
    updateLikedList();
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation(); 
        dropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});
