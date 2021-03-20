const timeLine = document.querySelector('.bars-draggable')
const buttonRight = document.querySelector('.button-right')
const buttonLeft = document.querySelector('.button-left')

function scrolling(side, event){
  
  if(side === "right"){
    timeLine.classList.add('scroll')
    buttonRight.style.opacity = .5;
    buttonLeft.style.opacity = 1;
  }else{
    timeLine.classList.remove('scroll')
    buttonLeft.style.opacity = .5;
    buttonRight.style.opacity = 1;
  }
}
