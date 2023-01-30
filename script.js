let letters = document.querySelectorAll('.letter');
let delay = 0;

letters.forEach(function(letter) {
  letter.style.animationDelay = delay + "s";
  delay += 0.3;
});

const footerDiv = document.querySelector('.footer-div');

setTimeout(function() {
  if (!footerDiv.classList.contains('visible')) {
    footerDiv.classList.add('visible');
  }
}, 2500);