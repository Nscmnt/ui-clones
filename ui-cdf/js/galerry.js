const images = [
  './img/01.jpg',
  './img/02.jpg',
  './img/03.jpg',
  './img/04.jpg',
  './img/05.jpg',
  './img/06.jpg',
  './img/07.jpg',
  './img/08.jpg',
  './img/09.jpg',
  './img/10.jpg',
  './img/11.jpg'
]

const descriptionService = [
  'Assistência auto',
  'Assistência auto',
  'Assistência residencial',
  'Assistência residencial',
  'CDF',
  'Impermeabilização de estofados',
  'Instalação de ar condicionado',
  'Suporte tecnológico presencial',
  'Instalação de tv e home theater',
  'Instalação de linha branca',
  'Suporte tecnológico remoto'
]

const sectionHightlight = document.querySelector('.gallery-wrapper .hightlight')
const sectionHightlightDescription = sectionHightlight.firstElementChild


let counter = 0;

setInterval( () => {
  sectionHightlight.style.backgroundImage = `url('${images[counter]}')`;
  sectionHightlightDescription.textContent = descriptionService[counter];
  counter++

  if(counter === images.length) counter = 0;
},5000)


// modal
const modal = document.querySelector('[modal-wrapper]')
document.querySelector('[open-modal]').addEventListener('click', () =>{
  modal.style.display ='block'
})

document.querySelector('[close-modal]').addEventListener('click', () => {
  modal.style.display ='none'
})

