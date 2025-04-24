const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
let isSidebarOpen = false;
let closeTimeout;

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
  });
});

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
  }, 200);
});

sidebar.addEventListener("mouseleave", () => {
  closeTimeout = setTimeout(() => {
    sidebar.classList.remove("show");
    isSidebarOpen = false;
  }, 200);
});

document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero .header h1");
  heroTitle.classList.add("glitch-start");

  setTimeout(() => {
    heroTitle.classList.remove("glitch-start");
  }, 2000);
});

const notificationsIcon = document.querySelector(".notifications-icon");
const dropdown = document.querySelector(".notifications-dropdown");

notificationsIcon.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!notificationsIcon.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});

const accountIcon = document.querySelector(".account-icon");
const accountDropdown = document.querySelector(".account-dropdown");

accountIcon.addEventListener("click", () => {
  accountDropdown.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!accountIcon.contains(e.target) && !accountDropdown.contains(e.target)) {
    accountDropdown.classList.remove("show");
  }
});
