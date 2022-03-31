let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
let scrollTopBtn = document.getElementById("scroll-top");

/* SideMenu Toggle */
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

let header = document.querySelector("header");
window.onscroll = () => {
  /* Sticky Header */
  let pos = document.documentElement.scrollTop;
  if (pos > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  /* Scroll Top Button */
  if (pos > 300) {
    scrollTopBtn.style.display = "grid";
  } else {
    scrollTopBtn.style.display = "none";
  }

  scrollTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

// Slider
$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});

// Product Detail Select Image
var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
  productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
  productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
  productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
  productImg.src = smallImg[3].src;
}
smallImg[4].onclick = function(){
  productImg.src = smallImg[4].src;
}

