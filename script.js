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
  
  // Modifier la position de la div en utilisant la proportion
  introductionText.style.transform = 'translateY(' + proportion * -100 + '%)';
});