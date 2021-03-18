let counter = 0;

const slides = document.querySelectorAll('section.hightlight') 

setInterval(() => {
  if(counter > 0) slides[counter - 1].classList.remove('active')
  if(counter === slides.length) counter = 0;

  slides[counter].classList.add('active')

  counter++
}, 7000);




// modal
const modal = document.querySelector('[modal-wrapper]')
  document.querySelector('[open-modal]').addEventListener('click', () =>{
  modal.style.display ='block'
  // modal.setAttribute('fade-up', "")
})

document.querySelector('[close-modal]').addEventListener('click', () => {
  modal.style.display ='none'
})

