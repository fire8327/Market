/* navigation */
/*jshint esnext: true */
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


/* number */
function decrement(e) {
  const btn = e.target.parentNode.parentElement.querySelector(
    'button[data-action="decrement"]'
  );
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  value--;
  target.value = value;
}

function increment(e) {
  const btn = e.target.parentNode.parentElement.querySelector(
    'button[data-action="decrement"]'
  );
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  value++;
  target.value = value;
}

const decrementButtons = document.querySelectorAll(
  `button[data-action="decrement"]`
);

const incrementButtons = document.querySelectorAll(
  `button[data-action="increment"]`
);

decrementButtons.forEach(btn => {
  btn.addEventListener("click", decrement);
});

incrementButtons.forEach(btn => {
  btn.addEventListener("click", increment);
});

/* cart and orders*/
$("#block2").hide();
$("#block1").show();
$("#btn1").click(function() {
  $("#block2").fadeOut("slow");
  $("#block1").fadeIn("slow");
});
$("#btn2").click(function() {
  $("#block1").fadeOut("slow");
  $("#block2").fadeIn("slow");
});

