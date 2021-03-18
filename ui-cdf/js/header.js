const wrapperMenu = document.querySelector('#header .wrapper-menu')
const menu = document.querySelector('#header .nav-menu')

function displayOn(...elements){

  elements.forEach((element) => {
    element.style.display = 'block'
  })
}

function displayOff(...elements){
  elements.forEach((element) => element.style.display ='none')
}
document.querySelector('.header-menu-mobile .menu-burguer').addEventListener('click', () =>{

  displayOn(wrapperMenu, menu)  
  menu.classList.remove('animation-menu-off')
  menu.classList.add('animation-menu-on') 
})

wrapperMenu.addEventListener('click',(e) => {

  if(e.target !== wrapperMenu) return;
  
  menu.classList.add('animation-menu-off')
  menu.classList.remove('animation-menu-on') 

  displayOff(wrapperMenu)
})