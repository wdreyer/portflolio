var initialPosition = 0;
var currentPosition = initialPosition;
var introductionText = document.getElementById('introductionText');

window.addEventListener('wheel', function(event) {
  event.preventDefault();
  
  var deltaY = event.deltaY;
  var step = 500; // Nombre de pixels par étape
  var maxHeight = window.innerHeight - introductionText.offsetHeight + 1500; // Valeur maximale de la position
  
  currentPosition += deltaY > 0 ? step : -step; // Met à jour la position de défilement
  
  if (currentPosition < 0) {
    currentPosition = 0; // Limite la position minimale de la div
  } else if (currentPosition > maxHeight) {
    currentPosition = maxHeight; // Limite la position maximale de la div
  }
  
  // Calculer la proportion de la position de défilement actuelle par rapport à la hauteur totale de la fenêtre
  var proportion = currentPosition / window.innerHeight;

  console.log(currentPosition)
  
  // Modifier la position de la div en utilisant la proportion
  introductionText.style.transform = 'translateY(' + proportion * -100 + '%)';
});

document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById("myModal");
  var modalContent = document.querySelector(".modal-content");

  // Ouvrir la modale lors du clic sur le bouton
  document.getElementById("openModal").addEventListener("click", function() {
    modal.style.display = "block";
  });

  // Fermer la modale lors du clic sur le bouton de fermeture
  document.querySelector(".close").addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Rendre la modale draggable
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  modalContent.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    modalContent.style.top = (modalContent.offsetTop - pos2) + "px";
    modalContent.style.left = (modalContent.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
});