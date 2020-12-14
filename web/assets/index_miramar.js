const body = document.body;
const menuLinks = document.querySelectorAll(".side-menu a");
const collapseBtn = document.querySelector(".side-menu .collapse-btn");
const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
const collapsedClass = "collapsed";

collapseBtn.addEventListener("click", function() {
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "collapse menu"
    ? this.setAttribute("aria-label", "expand menu")
    : this.setAttribute("aria-label", "collapse menu");
  body.classList.toggle(collapsedClass);
});

toggleMobileMenu.addEventListener("click", function() {
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "open menu"
    ? this.setAttribute("aria-label", "close menu")
    : this.setAttribute("aria-label", "open menu");
  body.classList.toggle("mob-menu-opened");
});

for (const link of menuLinks) {
  link.addEventListener("mouseenter", function() {
    body.classList.contains(collapsedClass) &&
    window.matchMedia("(min-width: 768px)").matches
      ? this.setAttribute("title", this.textContent)
      : this.removeAttribute("title");
  });
}
//erangel
let hitMap = document.querySelector(".hitmap-img");

const btn = document.querySelector(".btn-map");
    longKiller = btn.querySelector(".longKiller");
    longVictim = btn.querySelector(".longVictim");
    topKiller = btn.querySelector(".topKiller");
    totalVictim = btn.querySelector(".total");
let txt = document.querySelector(".hitMaptext");


function clickButton() {

  longKiller.addEventListener('click', function() {
    hitMap.setAttribute("src", "/img/map_image/miramar_long_killer.png");
    txt.innerText = "Top 20% sniper position distribution";
  })

  longVictim.addEventListener('click', function() {
    hitMap.setAttribute("src", "/img/map_image/miramar_long_victim.png");
    txt.innerText = "The top 20% dead players's distribution by sniper";
  })

  topKiller.addEventListener('click', function() {
    hitMap.setAttribute("src", "/img/map_image/miramar_top_killer.png");
    txt.innerText = "Kill location distribution of killers within the top 10";
  })

  totalVictim.addEventListener('click', function() {
    hitMap.setAttribute("src", "/img/map_image/miramar_total_victim_position.png");
    txt.innerText = "Death Location for All Players";
  })
}
