/*===================================CART VISIBILITY======================================*/

const cartON = document.querySelector(".header-bot-cart-main");
cartON.addEventListener("click", () => {
  document.querySelector(".cart").classList.add("active");
});

const cartOFF = document.querySelector(".bot-cart-btn");
cartOFF.addEventListener("click", () => {
  document.querySelector(".cart").classList.remove("active");
});

/*===============================================SLIDER==============================================*/ 
var slideIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}
/*===============================================PHÂN TRANG================================================*/