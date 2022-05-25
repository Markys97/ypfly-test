let burger_btn=  document.querySelector('.header__burger');
let menu_mobile= document.querySelector('.menu-mobile');
let menu_mobile_close_btn=document.querySelector('.menu-mobile__close');
let wrapper_page= document.querySelector('._main');
let modal= document.querySelector('.call-back');
let OrderBtn= document.querySelector('.about-us__button')
let btnCloseModal= document.querySelector('.call-back__close')


burger_btn.addEventListener('click',e=>{
    menu_mobile.classList.add('open-menu')
    wrapper_page.classList.add('menuMobileIsOpen')
    
})
menu_mobile_close_btn.addEventListener('click',e=>{
    menu_mobile.classList.remove('open-menu')
    wrapper_page.classList.remove('menuMobileIsOpen')
    
    
})
OrderBtn.addEventListener('click',e=>{
    e.preventDefault()
   modal.style.display='block'
   wrapper_page.classList.add('menuMobileIsOpen')
    
})
btnCloseModal.addEventListener('click',e=>{
  
   modal.style.display='none'
   wrapper_page.classList.remove('menuMobileIsOpen')
    
})

function setCloseMenuMobile(){
 if(window.screen.width>768){
    menu_mobile.classList.remove('open-menu')
    wrapper_page.classList.remove('menuMobileIsOpen')
 }
}


window.addEventListener('resize',setCloseMenuMobile)
