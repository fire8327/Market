/* navigation */
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


/* products */

$(".likepopup").hide();
function test() {
  if($(".like").hasClass("fill-red-600")) {
    $(".like").removeClass("fill-red-600");
  } else {
    $(".like").addClass("fill-red-600");
  $(".likepopup").fadeIn("slow");
  setTimeout(function () {
    $(".likepopup").fadeOut("slow");
    },2000);
  }
};