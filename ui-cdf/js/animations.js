const ups = document.querySelectorAll("[fade-up]");
const rights = document.querySelectorAll("[fade-right]")
const downs = document.querySelectorAll("[fade-down]")
const lefts = document.querySelectorAll("[fade-left]")

function animateUp() {
  
  ups.forEach((element) => {
    if (
      document.body.scrollTop + window.innerHeight * 0.65 >
      element.getBoundingClientRect().top
    ) {
      element.classList.add("up");
    } else {
      element.classList.remove("up");
    }
  });

}
function animateRight() {
  
  rights.forEach((element) => {
    if (
      document.body.scrollTop + window.innerHeight * 0.75 >
      element.getBoundingClientRect().top
    ) {
      element.classList.add("right");
    } else {
      element.classList.remove("right");
    }
  });

}
function animateDown() {
  
  downs.forEach((element) => {
    if (
      document.body.scrollTop + window.innerHeight * 0.75 >
      element.getBoundingClientRect().top
    ) {
      element.classList.add("down");
    } else {
      element.classList.remove("down");
    }
  });

}

function animateLeft() {
  
  lefts.forEach((element) => {
    if (
      document.body.scrollTop + window.innerHeight * 0.75 >
      element.getBoundingClientRect().top
    ) {
      element.classList.add("left");
    } else {
      element.classList.remove("left");
    }
  });

}

const init = () => {
  animateUp()
  animateRight()
  animateDown()
  animateLeft()
}
init()

let ticking = false

window.document.body.addEventListener("scroll",
 () =>{
  if (ticking) return;

  ticking = true;
  init()

  setTimeout(function () { 
    ticking = false; 
  }, 200);
})