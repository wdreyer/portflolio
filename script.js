const contentData = [
  {page : 0, navText : "WillDev", content :"William Dev" },
  {page : 1, navText : "About me", content :"Je suis un dev gnagnagna" },
  {page : 2, navText : "Project", content :"Mes derniers projects incroyables" },
  {page : 3, navText : "Stack", content :"Maîtrise CSS fullstack t'as vu" },
  {page : 4, navText : "Contact me", content :"contact@williamdev.fr" },
]

let navActual = 0 ;


let letters = document.querySelectorAll('.letter');
let delay = 0;

letters.forEach(function(letter) {
  letter.style.animationDelay = delay + "s";
  delay += 0.2;
});


console.log(navActual)

  document.addEventListener("keydown", function(event) {
    switch (event.key) {
      case "ArrowLeft":
        if (navActual === 0 || navActual === 3 || navActual === 4) {
        document.querySelector("#center").innerHTML = contentData[1].content ;
        navActual = 1 ;
        console.log(navActual)
      }
        else if (navActual === 1) {
        document.querySelector("#center").innerHTML = contentData[2].content ;
        navActual = 2
        console.log(navActual)
        }
       else  if (navActual === 2) {
          document.querySelector("#center").innerHTML = contentData[0].content ;
          navActual = 0
          console.log(navActual)
          }

        break;
      case "ArrowUp": 
      if (navActual === 0 || navActual === 1 || navActual === 2) {
        document.querySelector("#center").innerHTML = contentData[3].content ;
        navActual = 3 ;
        console.log(navActual)
      }
        else if (navActual === 3) {
        document.querySelector("#center").innerHTML = contentData[4].content ;
        navActual = 4
        console.log(navActual)
        }
       else  if (navActual === 4) {
          document.querySelector("#center").innerHTML = contentData[0].content ;
          navActual = 0
          console.log(navActual)
          }

        break;
      case "ArrowDown": 
      if (navActual === 0 || navActual === 1 || navActual === 2) {
        document.querySelector("#center").innerHTML = contentData[4].content ;
        navActual = 4 ;
        console.log(navActual)
      }
        else if (navActual === 4) {
        document.querySelector("#center").innerHTML = contentData[3].content ;
        navActual = 3
        console.log(navActual)
        }
       else  if (navActual === 3) {
          document.querySelector("#center").innerHTML = contentData[0].content ;
          navActual = 0
          console.log(navActual)
          }

      break;
      case "ArrowRight":
        if (navActual === 0 || navActual === 3 || navActual === 4) {
          document.querySelector("#center").innerHTML = contentData[2].content ;
          navActual = 2 ;
          console.log(navActual)
        }
          else if (navActual === 2) {
          document.querySelector("#center").innerHTML = contentData[1].content ;
          navActual = 1
          console.log(navActual)
          }
         else  if (navActual === 1) {
            document.querySelector("#center").innerHTML = contentData[0].content ;
            navActual = 0
            console.log(navActual)
            }



        break;
    }
  });


