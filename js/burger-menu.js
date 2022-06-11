//меню бургер 
const iconMenu = document.querySelector('.menu__icon');
const fillLogo = document.querySelector('.path-burger')//зміна коліра в Logo при бургер меню
const navBar = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');
const headerButton = document.querySelectorAll('.header-button');
if (iconMenu){
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    navBar.classList.toggle('_active');
    fillLogo.classList.toggle('_fillWhite')
  });
}
if(menuLinks.length > 0 || headerButton){//при кліке на силку виходить з бургер меню 
  menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", function(e){
      const menuLink = e.target
      if (iconMenu.classList.contains("._active")) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        navBar.classList.remove('_active');
        fillLogo.classList.remove('_fillWhite') 
      }
    });
  });

}