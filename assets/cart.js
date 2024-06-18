'use strict';


// VARIABLES

const domElements       = {};
const newDOMElements    = {};
const orders            = [];
let cartObject          = JSON.parse(localStorage.getItem('cart'));


// GENERAL FUNCTIONS

const mapDOM = () => {
	domElements.cart            = document.querySelector('.cart');
    domElements.purchaseButton  = document.querySelector('.purchase');
    domElements.subtotal        = document.querySelector('.subtotal');
    domElements.emptyCart       = document.querySelector('.cartContent');
    domElements.FullCart        = document.querySelector('.fullCart');
    domElements.greeting        = document.querySelector('.greeting');
    domElements.logout          = document.querySelector('.logout');
}

const mapNewDOM = () => {
    newDOMElements.plusButtons      = Array.from(document.querySelectorAll('.plus'));
    newDOMElements.minusButtons     = Array.from(document.querySelectorAll('.minus'));
    newDOMElements.quantityInput    = Array.from(document.querySelectorAll('.quantityInput'));
    newDOMElements.removeButtons    = Array.from(document.querySelectorAll('.remove'));
    newDOMElements.productCards     = Array.from(document.querySelectorAll('.productCard'));
    newDOMElements.subtotalProduct  = Array.from(document.querySelectorAll('.subtotalProduct'));
}

const createEl = (
	type        = 'div',
	className   = false,
	parent      = false,
	attribute   = false,
	content     = false,
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


const createEventListeners = () => {
	newDOMElements.plusButtons.forEach((button) => {
		button.addEventListener('click', handlePlusClick);
	});
	newDOMElements.minusButtons.forEach((button) => {
		button.addEventListener('click', handleMinusClick);
	});
	newDOMElements.quantityInput.forEach((button) => {
		button.addEventListener('change', handleAmountChange);
	});
    newDOMElements.removeButtons.forEach((button) => {
		button.addEventListener('click', handleRemove);
	});
	domElements.purchaseButton.addEventListener('click', handlePurchase);
    domElements.logout.addEventListener('click', handleLogout);
}

// EVENT HANDLERS

const handlePurchase = (event) => {

    let login   = JSON.parse(localStorage.getItem('login'));
    let cart    = JSON.parse(localStorage.getItem('cart'));
    let orders  = JSON.parse(localStorage.getItem('orders'));

    if (login) {

        if(!orders) {
            orders = [];
        }

        const newOrder = {
            cart: cart,
            user: login
        }

        orders.push(newOrder);

        localStorage.setItem('orders', JSON.stringify(orders));

        localStorage.removeItem('cart');

        document.querySelector('.cartContent').classList.add('invisibleEmptyCart');
        document.querySelector('.fullCart').classList.remove('invisibleFullCart');

        addNumberToCart();

        window.location.href = "../pages/thanks.html";

    } else {
        window.location.href = "../pages/login.html";
    }
}


const handleLogout = () => {
    localStorage.removeItem('login');
    greetUser();
}


const handleRemove = (event) => {
    let removedID           = event.currentTarget.getAttribute('data-id');
    let cartObjectRemove    = JSON.parse(localStorage.getItem('cart'));
    let cartAfterRemoval;

    let checkID = (object) => {
        return object.productID != removedID;
    }

    cartAfterRemoval = cartObjectRemove.filter(checkID);
    
    localStorage.setItem('cart', JSON.stringify(cartAfterRemoval)); 

    let cartObjectNew = JSON.parse(localStorage.getItem('cart'));


    if ((cartObjectNew.length) !== 0) {

        for(let card of newDOMElements.productCards) {

            if (card.getAttribute('data-id') == removedID) {
                card.remove();
            }
        }

        showTotalPrice(cartObjectNew); 
        addNumberToCart();

    } else {
        for(let card of newDOMElements.productCards) {

            if (card.getAttribute('data-id') == removedID) {
                card.remove();
            }
        }
        addNumberToCart();
        showTotalPrice(cartObjectNew); 
        document.querySelector('.cartContent').classList.remove('invisibleEmptyCart');
        document.querySelector('.fullCart').classList.add('invisibleFullCart');
    }
}


const handlePlusClick = (event) => {

	let currentID   = event.target.getAttribute('data-id');
    let cartObject  = JSON.parse(localStorage.getItem('cart'));

		for (let product of cartObject) {

            if (product.productID == currentID) {
                if (product.amount < 30) {

                    product.amount = product.amount + 1; 

                    for(let input of newDOMElements.quantityInput) {

                        let inputID = input.getAttribute('data-id');
                        if(inputID == currentID) {
                            input.setAttribute('value', product.amount);
							input.value = product.amount;
                        }
                    }

                    showSubtotal(product, currentID);
                    showTotalPrice(cartObject); 
                    localStorage.setItem('cart', JSON.stringify(cartObject));
                    addNumberToCart();

                } else {
                    alert('No more than 30 of each product can be added to the cart.')
                }
            }
        }
    }

const handleMinusClick = (event) => {

	let currentID   = event.target.getAttribute('data-id');
    let cartObject  = JSON.parse(localStorage.getItem('cart'));

		for (let product of cartObject) {

            if (product.productID == currentID) {
                if (product.amount > 1) {

                    product.amount = product.amount - 1; 

                    for(let input of newDOMElements.quantityInput) {

                        let inputID = input.getAttribute('data-id');
                        if(inputID == currentID) {
                            input.setAttribute('value', product.amount);
							input.value = product.amount;
                        }
                    }

                    showSubtotal(product, currentID);
                    showTotalPrice(cartObject); 
                    localStorage.setItem('cart', JSON.stringify(cartObject));
                    addNumberToCart();

                } else {
                    alert('Please select at least one product to add to the cart.')
                }
            }
        }
    }

const handleAmountChange = (event) => {

	let input       = Number(event.currentTarget.value);
    let cartObject  = JSON.parse(localStorage.getItem('cart'));

	if (isNaN(input) || input < 1 || input > 30) {
		event.currentTarget.value = 1;
		event.currentTarget.setAttribute('value', '1');

        let currentID = event.currentTarget.getAttribute('data-id');

        for(let product of cartObject) {
            if(product.productID == currentID) {
                product.amount = 1;
                showSubtotal(product, currentID);
            }
        }
        
        showTotalPrice(cartObject); 
        localStorage.setItem('cart', JSON.stringify(cartObject)); 
        addNumberToCart();
	
		alert('Please enter an amount between 1 and 30.');

	} else {
		
		let currentID = event.target.getAttribute('data-id');
		for (let product of cartObject) {
            if(product.productID == currentID) {
                product.amount = input;
                showSubtotal(product, currentID);
            }

            showTotalPrice(cartObject); 
            localStorage.setItem('cart', JSON.stringify(cartObject)); 
            addNumberToCart();
		}
	}
}


// SHOP FUNCTIONS

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

const renderCart = products => {
   for (let i = 0; i < products.length; i++) {

        // type, class, parent, attribute, content

        const productCard = createEl (
            'div',
            'productCard',
            domElements.cart,
            [
                ['data-id', `${products[i].productID}`],
            ],

        )

        const infoContainer = createEl (
            'div',
            'infoContainer',
            productCard,   
        )

        const productPicture = createEl (
            'img',
            'productPicture',
            infoContainer,
            [
                ['src', `.${products[i].image[0]}`],
                ['alt', `${products[i].alt}`],
                ['height', "100"],
            ],
        )

        const detailsContainer = createEl (
            'div',
            'detailsContainer',
            infoContainer,
        )

        const nameContainer = createEl (
            'div',
            'nameContainerCart',
            detailsContainer,
            false,
            `${products[i].productName}`,
        )

        const priceContainer = createEl (
            'div',
            'priceCart',
            detailsContainer,
            false,
            `\$${products[i].price}`,
        )

        const amountPrice = createEl (
            'div',
            'amountPrice',
            productCard,
        )

        const quantityCounterCart = createEl (
            'div',
            'quantityCounterCart',
            amountPrice,
        );

        const minus = createEl (
            'div',
            'minus',
            quantityCounterCart,
            [
                ['data-id', `${products[i].productID}`],
            ],
            '−'
        );

        const quantityInput = createEl (
            'input',
            'quantityInput',
            quantityCounterCart,
            [
                ['type', 'text'],
                ['id',`quantityInput${products[i].productID}`],
                ['value', `${products[i].amount}`],
                ['data-id', `${products[i].productID}`],
            ]
        );

        const plus = createEl (
            'div',
            'plus',
            quantityCounterCart,
            [
                ['data-id', `${products[i].productID}`],
            ],
            '+'
        );

        const remove = createEl (
            'img',
            'remove',
            amountPrice,
            [
                ['src', '../images/trash.png'],
                ['alt', 'trash can'],
                ['height', "20"],
                ['data-id', `${products[i].productID}`],
            ],
        );

        const subtotalProduct = createEl (
            'div',
            'subtotalProduct',
            amountPrice,
            [
                ['data-id', `${products[i].productID}`],
            ],
            `\$${(Number(products[i].price) * Number(products[i].amount)).toFixed(2)}`
        )

        mapNewDOM();
		createEventListeners();
   }

}


const getCart = () => {

    if (localStorage.getItem("cart") == "[]" || (!(localStorage.getItem("cart"))) || localStorage.getItem("cart") == false) {

        document.querySelector('.cartContent').classList.remove('invisibleEmptyCart');
        document.querySelector('.fullCart').classList.add('invisibleFullCart');

    } else {

        document.querySelector('.cartContent').classList.add('invisibleEmptyCart');
        document.querySelector('.fullCart').classList.remove('invisibleFullCart');

        renderCart(cartObject);
        showTotalPrice(cartObject); 
        addNumberToCart();
        
    } 
}

const showTotalPrice = (products) => {
    let totalPrice = 0;
    
    for (let i = 0; i < products.length; i++) {
        products[i].totalPrice = products[i].price * products[i].amount;
    }

    for(let i = 0; i < products.length; i++) {
        totalPrice += products[i].totalPrice;
    }

    totalPrice = totalPrice.toFixed(2);

    domElements.subtotal.innerText = `Total: \$${totalPrice}`;

}

const showSubtotal = (product, ID) => {
    let subtotalPrice = product.price * product.amount
    for(let price of newDOMElements.subtotalProduct) {
        if(price.getAttribute('data-id') == ID) {
            price.innerText = `\$${subtotalPrice.toFixed(2)}`;
        }
    }
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

// RUN FUNCTIONS

const runFunctions = () => {
	mapDOM(); 
	getCart();
	addNumberToCart();
    greetUser();
}

runFunctions();
