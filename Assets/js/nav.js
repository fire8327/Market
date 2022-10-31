const toggler = document.getElementById("toggler");
const mNav = document.getElementById("mobile__nav");
const close = document.getElementById("toggler__expanded");
const overlay = document.getElementById("overlay");

toggler.addEventListener("click", () => {
  mNav.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

close.addEventListener("click", () => {
  mNav.classList.add("-translate-x-full");
  overlay.classList.add("hidden"); 
});

overlay.addEventListener("click", () => {
  mNav.classList.add("-translate-x-full");
  overlay.classList.add("hidden"); 
})
