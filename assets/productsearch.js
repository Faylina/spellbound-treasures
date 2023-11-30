'use strict';

// VARIABLES

const elements = {};

// GENERAL FUNCTIONS 

const mapSearch = () => {
    elements.search = document.querySelector('.search');
    elements.productSearch = document.querySelector('.productSearch');
    elements.close = document.querySelector('.close');
    elements.searchInput = document.querySelector('#searchInput');
}

const createEvtListeners = () => {
    elements.search.addEventListener('click', handleSearch);
    elements.close.addEventListener('click', handleClose);
}


// EVENT HANDLERS

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