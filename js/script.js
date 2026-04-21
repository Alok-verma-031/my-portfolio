const nav = document.getElementById("nav");
console.log(nav);

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.classList.add("position-fixed");
        nav.style.top = "0";
        nav.style.width = "100%";
        nav.style.backgroundColor = "rgba(2,2,2,0.7)";
        nav.style.zIndex = "1000";
    } else {
        nav.classList.remove("position-fixed");
        nav.style.top = "";
        nav.style.width = "";
        nav.style.backgroundColor = "";
    }
});