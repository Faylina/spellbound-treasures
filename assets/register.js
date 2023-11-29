'use strict';

// VARIABLES
let customers = JSON.parse(localStorage.getItem('customers'));
const domElements = {};

// FUNCTIONS

const mapDOM = () => {
    domElements.register = document.querySelector('.login-button');
    domElements.firstName = document.querySelector('#firstName');
    domElements.lastName = document.querySelector('#lastName');
    domElements.email = document.querySelector('#loginEmail');
    domElements.password = document.querySelector('#loginPassword');
}

const createEventListeners = () => {
    domElements.register.addEventListener('click', handleRegister);
}

const handleRegister = (event) => {
    // transfer data to customers
    // log to localStorage 

    event.preventDefault();
    let emailCheck = checkEmail();
    let completeCheck = checkComplete();
    let userExists = checkUser();

    if(emailCheck === true) {
        if (completeCheck === true) {
            console.log(userExists);
            if(userExists === false) {

                if(!customers) {
                    customers = [];
                }
                
                    const newUser = {
                        firstName: domElements.firstName.value,
                        lastName: domElements.lastName.value,
                        email: domElements.email.value,
                        password: domElements.password.value
                    };

                    customers.push(newUser);
                    
                    localStorage.setItem('customers', JSON.stringify(customers));

                    window.location.href = "../index.html";
                } else {
                    alert('Your email address has already been registered.')
                }
        } else {
            alert('Please fill out each field.');
        }
    } else {
        alert('Not a valid email-address.');
    }
}

const checkEmail = () => {
    let email = domElements.email.value;
    let isEmail = email.includes('@'); 
    return isEmail;
}

const checkComplete = () => {
    let firstName = domElements.firstName.value;
    let lastName = domElements.lastName.value;
    let email = domElements.email.value;
    let password = domElements.password.value;
    let complete = false;

    if (
        firstName.length != 0 &&
        lastName.length != 0 &&
        email.length != 0 &&
        password.length != 0
    ) {
        return complete = true; 
    }
}

const checkUser = () => {
    let userExists = false;
    let customerList = JSON.parse(localStorage.getItem('customers'));
    
    if ((customerList) && customerList.length !== 0) {
        for (let i = 0; i < customerList.length; i++) {
    
            if (customerList[i].email === domElements.email.value) {
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