$('.item__button').on('click', function(){
	$(this).toggleClass('is-active');
});

/*
const itemBtn = document.querySelector('.item__button');
const body = document.querySelector('body');

//открывает меню при нажатии на бургер
itemBtn.addEventListener('click', ()=>{
	itemBtn.classList.toggle('is-active');
	body.classList.remove('is-active');
});
*/

/*
//функция для закрытия меню
function close() {
	menuList.classList.remove('menu__list--open');
	menuShadow.classList.remove('menu--open');
	body.classList.remove('menu--scroll'); //блокирует скролл в открытом меню
}

//закрывает меню при нажатии на крестик в меню
menuClose.addEventListener('click', ()=>{
	close();
});

//закрывает меню при нажатии на ссылку в меню
menuList.addEventListener('click', (event)=>{
	if(event.target.tagName === "A")
		close();
});

//закрывает меню при нажатии на поле за пределами меню
menuShadow.addEventListener('click', close);
*/
