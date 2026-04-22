// nav scroll
const nav = document.getElementById("nav");

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
// for footer change year
const currYear=document.getElementById("year");
let date= new Date();
let currentYear=date.getFullYear();
currYear.innerHTML=currentYear;

// text type
const roles = [
  "Java Developer",
  "Full Stack Developer",
  "Problem Solver"
];

const element = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < roles[roleIndex].length) {
    element.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(deleteText, 1500);
  }
}

function deleteText() {
  if (charIndex > 0) {
    element.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeText, 500);
  }
}

typeText();
