let letters = document.querySelectorAll('.letter');
let delay = 0;

letters.forEach(function(letter) {
  letter.style.animationDelay = delay + "s";
  delay += 0.5;
});