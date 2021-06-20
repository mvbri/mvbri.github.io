/**
 * Home
 * @page Core
 * @author mfyance
 */
"use strict"


let menu = document.createElement("link");
menu.href = "css/menu.css";
menu.rel = "stylesheet";
let head = document.getElementsByTagName("head")[0];
head.appendChild(menu);


const body = document.getElementsByTagName('body')[0];
const btn = document.querySelector('[menu-button]');
const option = document.querySelectorAll('[menu-li]');

btn.addEventListener('click', evt => {
  	if ( body.hasAttribute("menu-active") ){
		body.removeAttribute("menu-active")
  	} else {
		body.setAttribute("menu-active","")
		
  	}
})

option.forEach( el => {    	
	el.addEventListener('click', evt => {   			
		body.removeAttribute("menu-active")
	})
})

