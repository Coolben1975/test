'use strict'

let headerBars = document.querySelector('.headerBars');
let brandLeftDark = document.querySelector('.brand_left_dark');
let menuBarsClose = document.querySelector('.menu_x');

function toggleMenu(brand_left_dark) {
	brandLeftDark.style.display === 'none'
		? brandLeftDark.style.display = 'block'
		: brandLeftDark.style.display = 'none';
}

headerBars.addEventListener('click', toggleMenu);
menuBarsClose.addEventListener('click', toggleMenu);