'use strict';

// VARIABLES

let customers       = JSON.parse(localStorage.getItem('customers'));
const domElements   = {};


// GENERAL FUNCTIONS

const mapDOM = () => {
    domElements.login       = document.querySelector('.login-button');
    domElements.email       = document.querySelector('#login-email');
    domElements.password    = document.querySelector('#login-password');
    domElements.greeting    = document.querySelector('.greeting');
    domElements.logout      = document.querySelector('.logout');
}

const createEventListeners = () => {
    domElements.login.addEventListener('click', handleLogin);
    domElements.logout.addEventListener('click', handleLogout);
}

// EVENT HANDLERS

const handleLogout = () => {
    localStorage.removeItem('login');
    greetUser();
}

const handleLogin = (event) => {
    event.preventDefault();

    let userExists  = checkUser();
    let loggedIn    = checkLogin();

    if (loggedIn === false) {
        if (userExists === true) {

            let email = domElements.email.value; 

            localStorage.setItem('login', JSON.stringify(email));

            window.location.href = "../index.html";

        } else {
            alert('Wrong email or password.');
        }
    } else {
        alert("You're already logged in. :)");
    }
}

// SHOP FUNCTIONS

const checkLogin = () => {
    let login = JSON.parse(localStorage.getItem('login'));

    if (login) {
        return true;
    } else {
        return false;
    }
}


const checkUser = () => {
    let userExists      = false;
    let customerList    = JSON.parse(localStorage.getItem('customers'));
    
    if ((customerList) && customerList.length !== 0) {
        for (let i = 0; i < customerList.length; i++) {
    
            if (
                customerList[i].email       === domElements.email.value &&
                customerList[i].password    === domElements.password.value
                ) {
                 return true;
             }
        }
    }
    return false;
}

const greetUser = () => {

    let login       = JSON.parse(localStorage.getItem('login'));
    let customers   = JSON.parse(localStorage.getItem('customers'));

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
	let numberInCart    = 0;
	let cart            = JSON.parse(localStorage.getItem('cart'));
	let sum             = 0;

    if (cart) {

        for(let product of cart) {
            sum += Number(product.amount);
        }
        
        numberInCart = sum;

        if (numberInCart > 0) {
           
            document.querySelector('.cartNumber').classList.remove('invisible');
            document.querySelector('.cartNumber').innerHTML = numberInCart;
        } else {
           
            document.querySelector('.cartNumber').classList.add('invisible');
        }
    } else {
        document.querySelector('.cartNumber').classList.add('invisible');
    }
}

// RUN FUNCTIONS

const runFunctions = () => {
	mapDOM(); 
    createEventListeners();
    greetUser();
    addNumberToCart();
}

runFunctions();