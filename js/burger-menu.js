//меню бургер 

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu){
  const navBar = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    navBar.classList.toggle('_active');
  });
}