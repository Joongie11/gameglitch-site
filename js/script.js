const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
let isSidebarOpen = false;
let closeTimeout;

menuIcon.addEventListener("mouseenter", () => {
  clearTimeout(closeTimeout);
  sidebar.classList.add("show");
  isSidebarOpen = true;
});

sidebar.addEventListener("mouseenter", () => {
  clearTimeout(closeTimeout);
});

menuIcon.addEventListener("mouseleave", () => {
  closeTimeout = setTimeout(() => {
    sidebar.classList.remove("show");
    isSidebarOpen = false;
  }, 300);
});

sidebar.addEventListener("mouseleave", () => {
  closeTimeout = setTimeout(() => {
    sidebar.classList.remove("show");
    isSidebarOpen = false;
  }, 300);
});

document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero .header h1");
  heroTitle.classList.add("glitch-start");

  setTimeout(() => {
    heroTitle.classList.remove("glitch-start");
  }, 3000);
});
