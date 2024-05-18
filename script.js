
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
       
    } else {
        menu.style.display = "none";
    }
}
var carousel = document.getElementById('carouselExampleAutoplaying');

function changeImage() {
  var activeItem = carousel.querySelector('.carousel-item.active');
  var nextItem = activeItem.nextElementSibling || carousel.querySelector('.carousel-item:first-child');
  activeItem.classList.remove('active');
  nextItem.classList.add('active');
}

setInterval(changeImage, 3000);

function changeName(number) {
    var newText = "Compra realizada"; // Texto a mostrar
    document.querySelector(".box:nth-child(" + number + ") .name").textContent = newText;
}
function mostrarMarcas() {
    var marcasContainer = document.getElementById("marcasContainer");
    if (marcasContainer.style.display === "none") {
        marcasContainer.style.display = "block";
    } else {
        marcasContainer.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var tooltip = document.getElementById("tooltip");
    var infoBox = document.getElementById("infoBox");
  
    tooltip.addEventListener("click", function() {
      infoBox.style.display = "block";
    });
  });