'use strict';

// VARIABLES
let customers = JSON.parse(localStorage.getItem('customers'));
const domElements = {};


// FUNCTIONS

const mapDOM = () => {
    domElements.login = document.querySelector('.login-button');
    domElements.email = document.querySelector('.login-email');
    domElements.password = document.querySelector('.login-password');
}

const createEventListeners = () => {
    domElements.login.addEventListener('click', handleLogin);
}

const handleLogin = () => {
    let userExists = checkUser();
    if(userExists === true) {

    } else {
        alert('Wrong email or password.');
    }
}


const checkUser = () => {
    let userExists = false;
    let customerList = JSON.parse(localStorage.getItem('customers'));
    
    if ((customerList) && customerList.length !== 0) {
        for (let i = 0; i < customerList.length; i++) {
    
            if (
                customerList[i].email === domElements.email.value &&
                customerList[i].password === domElements.password.value
                ) {
                 return true;
             }
        }
    }
    return false;
}

const runFunctions = () => {
	mapDOM(); 
    createEventListeners();
}

runFunctions();