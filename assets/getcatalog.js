'use strict';

const getProductCatalog = () => {
	const xhr = new XMLHttpRequest();
	xhr.open('get', '../assets/catalog.json');
	const parseCatalog = () => {
		if (xhr.status == 200) {
			let catalog = JSON.parse(xhr.response);
			saveToStorage(catalog);
		} else {
			console.warn(xhr.responseURL, xhr.statusText);
		}
	}
	xhr.addEventListener('load', parseCatalog);
	xhr.send();
}

const saveToStorage = (products) => {
	localStorage.setItem('catalog', JSON.stringify(products));
}

const getCatalog = () => {
	getProductCatalog();
}

getCatalog();