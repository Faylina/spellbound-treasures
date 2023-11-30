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
    domElements.greeting = document.querySelector('.greeting');
    domElements.logout = document.querySelector('.logout');
}

const createEventListeners = () => {
    domElements.register.addEventListener('click', handleRegister);
    domElements.logout.addEventListener('click', handleLogout);
}

const handleLogout = () => {
    localStorage.removeItem('login');
    greetUser();
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

const greetUser = () => {

    let login = JSON.parse(localStorage.getItem('login'));
    let customers = JSON.parse(localStorage.getItem('customers'));

    if (login) {
        for(let i = 0; i < customers.length; i++) {
            if (customers[i].email == login) {
                let name = customers[i].firstName;
                domElements.greeting.innerHTML = `Hi ${name}!`;
                document.querySelector('.logout').classList.remove('invisibleLogout');
                return true;
            }
        }
    } else {
        domElements.greeting.innerHTML = ''; 
        document.querySelector('.logout').classList.add('invisibleLogout');
        return false;
    }
}

const addNumberToCart = () => {
	let numberInCart = 0;
	let cart = JSON.parse(localStorage.getItem('cart'));
	let sum = 0;

	for(let product of cart) {
		sum += Number(product.amount);
	}
	
	numberInCart = sum;

	if (numberInCart > 0) {
		// remove class invisible
		document.querySelector('.cartNumber').classList.remove('invisible');
		document.querySelector('.cartNumber').innerHTML = numberInCart;
	} else {
		// add class invisible
		document.querySelector('.cartNumber').classList.add('invisible');
	}
}


const runFunctions = () => {
	mapDOM(); 
    createEventListeners();
	greetUser();
    addNumberToCart();
}

runFunctions();