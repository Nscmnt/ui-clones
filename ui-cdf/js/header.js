const wrapperMenu = document.querySelector('#header .wrapper-menu')
const menu = document.querySelector('#header .nav-menu')

document.querySelector('.header-menu-mobile .menu-burguer').addEventListener('click', () =>{

  wrapperMenu.style.display = 'block', 300
  menu.style.display = 'block'
  menu.style.left = 0;     
  
})

wrapperMenu.addEventListener('click',(e)=> {
    if(e.target !== wrapperMenu) return;
    
    menu.style.left = -300+'px'
    wrapperMenu.style.display = 'none'
})