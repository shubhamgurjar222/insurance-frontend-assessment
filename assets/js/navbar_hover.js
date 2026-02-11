const travelMenu = document.getElementById("travel-insurance");
const travelDropdown = document.getElementById("main-content-parent");
const navbarDesktop = document.getElementById("navbar-desktop");
const travelArrow = document.getElementById('travel-icon-arrow')
const travelArrowChild = document.getElementById('travel-icon-arrow-child')
const mainContent = document.getElementById('main-content')


let isHovering = false;
let closeTimeout = null;

function travelOpenDropdown() {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
  
  travelArrow.style.transform = "rotate(180deg)";
  travelArrowChild.style.transform = "rotate(180deg)";
  travelDropdown.classList.add("show");
}

function travelCloseDropdown() {
  travelArrow.style.transform = "rotate(0deg)";
  travelArrowChild.style.transform = "rotate(0deg)";
  navbarDesktop.style.backgroundColor = "transparent";
  travelDropdown.classList.remove("show");
}

travelMenu.addEventListener("mouseenter", () => {
  isHovering = true;
  travelOpenDropdown();
});

travelMenu.addEventListener("mouseleave", () => {
  isHovering = false;
  closeTimeout = setTimeout(() => {
    if (!isHovering) travelCloseDropdown();
  }, 150);
});

travelDropdown.addEventListener("mouseenter", () => {
  isHovering = true;
  travelOpenDropdown();
});

mainContent.addEventListener("mouseleave", () => {
  isHovering = false;
  closeTimeout = setTimeout(() => {
    if (!isHovering) travelCloseDropdown();
  }, 150);
});