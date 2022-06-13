let select = function(){
    const selectHeadr = document.querySelectorAll('.select-filter__header');
    const selectBody = document.querySelector('.select-filter__items'); // вибір 
    const selectSvg = document.querySelector('.select-filter__svg');
    const selectItem = document.querySelectorAll('.select-filter__item');
    console.log(selectBody);

    if(selectHeadr){
        selectHeadr.forEach(item => {
            item.addEventListener('click', selectToggle)
        });
        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });
        function selectToggle() {
            selectBody.classList.toggle('_open');
            //selectSvg.classList.toggle('_rotate');
            selectSvg.classList.toggle('_rotate');
        }
        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select-filter'),
                currentText = select.querySelector('.select-filter__current');
            console.log(select);
            currentText.innerText = text;
            selectBody.classList.remove('_open');
    
        }
    }


}
select();

