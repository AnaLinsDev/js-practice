const item = document.querySelector('.slideshow-container');
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var i;
var image = [
  {
       "id":"Image One",
       "img": "img1.jpg",
       "numb":"1"
  },
  { 
      "id":"Image Two",
      "img": "img2.png",
      "numb":"2"
   },
  {
       "id":"Image Three",
       "img": "img3.png",
       "numb":"3"
  }
]
function showdata(image){
  image.map(inf =>
      item.insertAdjacentHTML('beforeend', 
      ` <div class="mySlides fade">
          <div class="numbertext">${inf.numb} / 3</div>
          <img src="./images/${inf.img}" alt="${inf.id}">
        </div>`))}


showdata(image)

var slideIndex = 1;
showSlides(slideIndex);

// chegou pelo < ou > 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// chegou pelos spans
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1} // indo do 3/3 para 1/3

  if (n < 1) {slideIndex = slides.length} // indo do 1/3 para 3/3

  for (i = 0; i < slides.length; i++) { // display:none para todos
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) { // //desativando todos spans
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block"; //mostrando apenas o selecionado
  dots[slideIndex-1].className += " active"; // ativando o span correspondente
}
