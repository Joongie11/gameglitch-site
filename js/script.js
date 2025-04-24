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
