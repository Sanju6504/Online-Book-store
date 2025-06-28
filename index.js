//sliding images
let slideIndex = 0;
showSlidesAuto();

function plusSlides(n) {
    showSlidesManual(slideIndex += n);
}

function currentSlide(n) {
    showSlidesManual(slideIndex = n);
}

function showSlidesManual(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlidesAuto, 4000); // Change image every 2 seconds
}


//add to cart
function add(){
    alert("Sorry, this book is not available");
}
function book1(){
  window.location.href = 'books/harry.html';
  
}
function book2(){
  window.location.href = 'books/child.html';
  
}
function book3(){
  window.location.href = 'books/crime.html';
  
}
function book4(){
  window.location.href = 'books/bio.html';
  
}
function book5(){
  window.location.href = 'books/comic.html';
  
}
function book6(){
  window.location.href = 'books/fantasy.html';
  
}