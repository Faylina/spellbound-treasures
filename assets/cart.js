'use strict';


// VARIABLES

const domElements = {};
const newDOMElements = {};
let catalogObject = JSON.parse(localStorage.getItem('catalog'));
let cartObject = JSON.parse(localStorage.getItem('cart'));


// FUNCTIONS

const mapDOM = () => {
	domElements.cart = document.querySelector('.cart');
    domElements.purchaseButton = document.querySelector('.purchase');
    domElements.subtotal = document.querySelector('.subtotal');
}

const mapNewDOM = () => {
    newDOMElements.plusButtons = Array.from(document.querySelectorAll('plus'));
    newDOMElements.minusButtons = Array.from(document.querySelectorAll('minus'));
    newDOMElements.quantityInput = Array.from(document.querySelectorAll('quantityInput'));
}


const createEl = (
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
	domElements.purchaseButton.addEventListener('click', handlePurchase);
}

const handlePurchase = (event) => {

}


const handlePlusClick = (event) => {
	// find out current product id
	// find corresponding button 
	// if data amount of button < 30
	// data amount of button + 1
	// value of input field + 1
	let productIDCurrent = event.target.getAttribute('data-id');
		for (let button of newDOMElements.addToCartButtons) {

			let currentButtonID = button.getAttribute('data-id');
	
			if (currentButtonID == productIDCurrent) {

				let currentButtonAmount = Number(button.getAttribute('data-amount'));
				if (currentButtonAmount < 30) {

					button.setAttribute('data-amount', currentButtonAmount + 1);

					for (let input of newDOMElements.quantityInput) {

						let currentInputID = input.getAttribute('data-id');
						if (currentInputID == productIDCurrent) {

							input.setAttribute('value', currentButtonAmount + 1);
							input.value = currentButtonAmount + 1;
						}
					}
				}
			} 
		}
		
		const featuredButton = newDOMElements.featuredAddToCartButton;
		let currentQuantityInput = newDOMElements.featuredQuantityInput;
		let currentFeaturedID = featuredButton.getAttribute('data-id');
	
			if (currentFeaturedID == productIDCurrent) {
				
				const currentFeaturedAmount = Number(featuredButton.getAttribute('data-amount'));
				if (currentFeaturedAmount < 30) {

					featuredButton.setAttribute('data-amount', currentFeaturedAmount + 1);

					currentQuantityInput.setAttribute('value', currentFeaturedAmount + 1);
					currentQuantityInput.value = currentFeaturedAmount + 1;
				}
			}
}

const handleMinusClick = (event) => {
	console.log('clicked minus');
	// find out current product id
	// find corresponding button 
	// if data amount of button > 1
	// data amount of button - 1
	// value of input field - 1
	let productIDCurrent = event.target.getAttribute('data-id');
		for (let button of newDOMElements.addToCartButtons) {

			let currentButtonID = button.getAttribute('data-id');
	
			if (currentButtonID == productIDCurrent) {

				let currentButtonAmount = Number(button.getAttribute('data-amount'));
				if (currentButtonAmount > 1) {

					button.setAttribute('data-amount', currentButtonAmount - 1);

					for (let input of newDOMElements.quantityInput) {

						let currentInputID = input.getAttribute('data-id');
						if (currentInputID == productIDCurrent) {

							input.setAttribute('value', currentButtonAmount - 1);
							input.value = currentButtonAmount - 1;
						}
					}
				}
			} 
		}
		
		const featuredButton = newDOMElements.featuredAddToCartButton;
		let currentQuantityInput = newDOMElements.featuredQuantityInput;
		let currentFeaturedID = featuredButton.getAttribute('data-id');
	
			if (currentFeaturedID == productIDCurrent) {
				
				const currentFeaturedAmount = Number(featuredButton.getAttribute('data-amount'));
				if (currentFeaturedAmount > 1) {

					featuredButton.setAttribute('data-amount', currentFeaturedAmount - 1);

					currentQuantityInput.setAttribute('value', currentFeaturedAmount - 1);
					currentQuantityInput.value = currentFeaturedAmount - 1;
				}
			}
}

const handleAmountChange = (event) => {

	let input = Number(event.currentTarget.value);

	if (isNaN(input) || input < 1 || input > 30) {
		event.currentTarget.value = 1;
		event.currentTarget.setAttribute('value', '1');

		// find out product id of current product
		// find the corresponding button
		// data id of button = 1

		let productIDCurrent = event.target.getAttribute('data-id');
		for (let button of newDOMElements.addToCartButtons) {
			let currentButtonID = button.getAttribute('data-id');
			if (currentButtonID == productIDCurrent) {
				button.setAttribute('data-amount', "1")
			} else {
				let button = newDOMElements.featuredAddToCartButton;
				button.setAttribute('data-amount', "1")
			}
		}
	
		alert('Please enter an amount between 1 and 30.');

	} else {
		// find out product id of current product
		// find the corresponding button
		// data id of button = input
		
		let productIDCurrent = event.target.getAttribute('data-id');
		for (let button of newDOMElements.addToCartButtons) {
			let currentButtonID = button.getAttribute('data-id');
			if (currentButtonID == productIDCurrent) {
				button.setAttribute('data-amount', `${input}`)
				event.currentTarget.setAttribute('value', `${input}`);
			} else {
				let button = newDOMElements.featuredAddToCartButton;
				button.setAttribute('data-amount', `${input}`)
				event.currentTarget.setAttribute('value', `${input}`);
			}
		}
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


const saveToStorage = (products) => {
	localStorage.setItem('catalog', JSON.stringify(products));
}

const renderCart = products => {
   for (let i = 0; i < products.length; i++) {

        // type, class, parent, attribute, content

        const productCard = createEl (
            'div',
            'productCard',
            domElements.cart,
        )

        const infoContainer = createEl (
            'div',
            'infoContainer',
            productCard,   
        )

        const pruductPicture = createEl (
            'img',
            'productPicture',
            infoContainer,
            [
                ['src', `${products[i].image[0]}`],
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
            ],
        );

        const subtotalProduct = createEl (
            'div',
            'subtotalProduct',
            amountPrice,
            false,
            `\$${Number(products[i].price) * Number(products[i].amount)}`
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

    domElements.subtotal.innerText = `Subtotal: \$${totalPrice}`;
}



const runFunctions = () => {
	mapDOM(); 
	getCart();
	addNumberToCart();
}

runFunctions();
