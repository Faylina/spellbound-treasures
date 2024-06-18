'use strict';
 
const showCopyright = () => {
	const currentYear 	= new Date().getFullYear();
	const copyright 	= document.querySelector('.copyright');

	if(currentYear > 2023) {
		copyright.innerHTML = `2023 - ${currentYear} THE CODING SORCERESS`;
	}
}

showCopyright();