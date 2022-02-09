import * as Functions from "./modules/functions.js";
Functions.testWebP();

console.log("Hello world!");

const burger = document.querySelector('.burger');
const dropDown = document.querySelector('.dropDown__menu');

document.addEventListener('click', function(e) {

        if(e && e.target.className !== "menu__box--list" && e.target.className !== "menu__box--link") {
        burger.classList.remove('show');

        dropDown.style.cssText=
        `@media (min-width: 481px) {
        display: none;}`;
        };
});

document.addEventListener('keydown', function(el) {
	if( el.key == 'Escape' ){ 
		dropDown.style.cssText=
        `@media (min-width: 481px) {
        display: none;}`;
        burger.classList.remove('show');
	}
});

burger.addEventListener('click', function(e) {
    burger.classList.toggle('show');

    if(burger.classList.contains('show')) {
        dropDown.style.cssText=
        `display: block;`;
    }  
    else {

        dropDown.style.cssText=
        `@media (min-width: 481px) {
        display: none;}`;
        }
    e.stopPropagation();
});
