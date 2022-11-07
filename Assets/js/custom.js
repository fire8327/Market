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

/* range */
window.onload = function(){
  slideOne();
  slideTwo();
};

let first = document.getElementById("slider-1");
let second = document.getElementById("slider-2");
let min = document.getElementById("range-1");
let max = document.getElementById("range-2");
let minGap = 0;

function slideOne(){
  if(parseInt(second.value) - parseInt(first.value) <= minGap){
      first.value = parseInt(second.value) - minGap;
  }
  min.textContent = first.value;
  min.dataset.from = first.value;
  fillColor();    
}
function slideTwo(){
  if(parseInt(second.value) - parseInt(first.value) <= minGap){
      second.value = parseInt(first.value) + minGap;
  }
  max.textContent = second.value;
  max.dataset.before = second.value;
  fillColor();
}
