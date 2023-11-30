'use strict';

// VARIABLES

const elements = {};
const newElements = {};

// GENERAL FUNCTIONS 

const mapSearch = () => {
    elements.search = document.querySelector('.search');
    elements.productSearch = document.querySelector('.productSearch');
    elements.close = document.querySelector('.close');
    elements.searchInput = document.querySelector('#searchInput');
    elements.resultsContainer = document.querySelector('.resultsContainer');
    elements.searchResults = document.querySelector('.searchResults');
    elements.searchBackground = document.querySelector('.searchBackground');
    elements.productContainers = Array.from(document.querySelectorAll('.productContainer'));
}

const mapNewElements = () => {
    newElements.resultCards = Array.from(document.querySelectorAll('.resultCard'));
 }

const createEvtListeners = () => {
    elements.search.addEventListener('click', handleSearch);
    elements.close.addEventListener('click', handleClose);
    elements.searchInput.addEventListener('input', handleSearchInput);
    elements.searchBackground.addEventListener('click', handleClose);
}

const createEvtFind = () => {
    newElements.resultCards.forEach((button) => {
		button.addEventListener('click', handleRedirect);
	});
}

const createSearchResult = (
	type = 'div',
	className = false,
	parent = false,
	attribute = false,
	content = false,
) => {
	const el = document.createElement(type);
	if (className) el.className = className;
	if (attribute) {
		for (let i = 0; i < attribute.length; i++) {
			el.setAttribute(attribute[i][0], attribute[i][1]);
			}
	}
	if (content) el.textContent = content;
	if (parent) parent.append(el);

	return el;
}


// EVENT HANDLERS

const handleSearchInput = (event) => {
    let products = JSON.parse(localStorage.getItem('catalog'))
    let searchTerm = (event.currentTarget.value).toLowerCase(); 

    elements.searchResults.innerHTML = '';

    if (searchTerm.length > 0) {
        elements.resultsContainer.classList.remove('invisibleResults');
        
        for (let i = 0; i < products.products.length; i++) {

            let productName = (products.products[i].productName).toLowerCase();
            if (productName.includes(searchTerm)) {

                const resultCard = createSearchResult (
                    'div',
                    'resultCard',
                    elements.searchResults,
                    [
                        ['data-id', `${products.products[i].productID}`],
                    ]
                );

                const searchImage = createSearchResult (
                    'img',
                    'searchImage',
                    resultCard,
                    [
                        ['alt', `${products.products[i].alt}`],
                        ['src', `${products.products[i].image[0]}`],
                        ['height', "75"]
                    ]
                );

                const searchName = createSearchResult (
                    'div',
                    'searchName',
                    resultCard,
                    false,
                    `${products.products[i].productName}`
                );

                mapNewElements();
                createEvtFind();
            }
        }
        
    } else {
        elements.resultsContainer.classList.add('invisibleResults');
    }
}

const handleRedirect = (event) => {
    window.location.href = '../index.html';
}

const handleSearch = () => {
    elements.productSearch.classList.remove('invisibleSearch');
}

const handleClose = () => {
    elements.productSearch.classList.add('invisibleSearch');
}

// RUN FUNCTIONS

const runSearch = () => {
	mapSearch(); 
    createEvtListeners();
}

runSearch();
