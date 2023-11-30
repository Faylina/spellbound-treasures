'use strict';


// VARIABLES

const domElements = {};
const newDOMElements = {};
let catalogObject = JSON.parse(localStorage.getItem('catalog'));
let cartObject = JSON.parse(localStorage.getItem('cart'));


// FUNCTIONS

const mapDOM = () => {
	domElements.productGallery = document.querySelector('.productGallery');
	domElements.featuredProduct = document.querySelector('.featuredProduct');
	domElements.greeting = document.querySelector('.greeting');
	domElements.logout = document.querySelector('.logout');
}

const mapNewDOM = () => {
	newDOMElements.plusButtons = Array.from(document.querySelectorAll('.plus')); 
	newDOMElements.minusButtons = Array.from(document.querySelectorAll('.minus'));  
	newDOMElements.featuredPlusButton = document.querySelector('.featuredPlus'); 
	newDOMElements.featuredMinusButton = document.querySelector('.featuredMinus'); 
	newDOMElements.quantityInput = Array.from(document.querySelectorAll('.quantityInput')); 
	newDOMElements.featuredQuantityInput = document.querySelector('.featuredQuantityInput');
	newDOMElements.addToCartButtons = Array.from(document.querySelectorAll('.addToCart'));
	newDOMElements.featuredAddToCartButton = document.querySelector('.featuredAddToCart');
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
	newDOMElements.featuredPlusButton.addEventListener('click', handlePlusClick);
	newDOMElements.minusButtons.forEach((button) => {
		button.addEventListener('click', handleMinusClick);
	});
	newDOMElements.featuredMinusButton.addEventListener('click', handleMinusClick);
	newDOMElements.quantityInput.forEach((button) => {
		button.addEventListener('change', handleAmountChange);
	});
	newDOMElements.featuredQuantityInput.addEventListener('change', handleAmountChange);
	newDOMElements.addToCartButtons.forEach((button) => {
		button.addEventListener('click', handleAddToCart);
	});
	newDOMElements.featuredAddToCartButton.addEventListener('click', handleAddToCart);
	domElements.logout.addEventListener('click', handleLogout);
}

const handleLogout = () => {
    localStorage.removeItem('login');
    greetUser();
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
				} else {
                    alert('No more than 30 of each product can be added to the cart.')
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
				} else {
                    alert('Please select at least one product to add to the cart.')
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

const createCart = () => {
	if (!localStorage.getItem("cart")) {
		const emptyCart = [];
		localStorage.setItem("cart", JSON.stringify(emptyCart));
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


const handleAddToCart = (event) => {
	let addedProductID = Number(event.currentTarget.getAttribute('data-id'));
	let addedProductAmount = Number(event.currentTarget.getAttribute('data-amount'));
	createCart();
	let newCart = JSON.parse(localStorage.getItem('cart'));
	let isAlreadyInTheCart = false;

		if (localStorage.getItem("cart") == "[]") {
			for (let product of catalogObject.products) {
				if (product.productID == addedProductID) {
						newCart.push(product);
						newCart[newCart.length - 1].amount = addedProductAmount; 
						localStorage.setItem('cart', JSON.stringify(newCart));
						addNumberToCart();
						window.location.href = "../pages/cart.html";
				}
			}
		} else {
			for (let cartProduct of newCart) {
				if (cartProduct.productID == addedProductID) {
					isAlreadyInTheCart = true;
					break;
				}
			}

			if (!isAlreadyInTheCart) {
				for (let product of catalogObject.products) {
					if (product.productID == addedProductID) {
							newCart.push(product);
							newCart[newCart.length - 1].amount = addedProductAmount; 
							localStorage.setItem('cart', JSON.stringify(newCart));
							addNumberToCart();
							window.location.href = "../pages/cart.html";
					}
				}
			} else {
				for (let cartProduct of newCart) {
					if (cartProduct.productID == addedProductID) {
						cartProduct.amount = cartProduct.amount + addedProductAmount;
						localStorage.setItem('cart', JSON.stringify(newCart));
						addNumberToCart();
						window.location.href = "../pages/cart.html";
					}
				}
			}
		}
}

			

// Load product catalog to website


const renderCatalog = products => {
	for (let i = 0; i < products.products.length; i++) {
		if (products.products[i].featured === false) {

			const productContainer = createEl (
					'div', 
					'productContainer', 
					domElements.productGallery,
					[
						['data-id', `${products.products[i].productID}`],
					]
				);

			const productImage = createEl (
				'img',
				'productImage', 
				productContainer, 
				[
					['alt', `${products.products[i].alt}`],
					['src', `${products.products[i].image[0]}`],
					['height', "200"]
				]
			);

			const nameContainer = createEl (
				'div',
				'nameContainer',
				productContainer,
				false,
				`${products.products[i].productName}`
			);

			const priceContainer = createEl (
				'div',
				'priceContainer',
				productContainer,
				false,
				`\$${products.products[i].price} USD`
			);

			const quantity = createEl (
				'div',
				'quantity',
				productContainer,
				false,
				'Quantity:'
			);

			const quantityCounter = createEl (
				'div',
				'quantityCounter',
				productContainer
			);

			const minus = createEl (
				'div',
				'minus',
				quantityCounter,
				[
					['data-id', `${products.products[i].productID}`],
				],
				'−'
			);

			const quantityInput = createEl (
				'input',
				'quantityInput',
				quantityCounter,
				[
					['type', 'text'],
					['id',`quantityInput${products.products[i].productID}`],
					['value', '1'],
					['data-id', `${products.products[i].productID}`],
				]
			);

			const plus = createEl (
				'div',
				'plus',
				quantityCounter,
				[
					['data-id', `${products.products[i].productID}`],
				],
				'+'
			);

			const addToCart = createEl (
				'button',
				'addToCart',
				productContainer,
				[
					['data-id', `${products.products[i].productID}`],
					['data-amount', `${products.products[i].amount}`],
				],
				'Add to cart'
			);
		} else {

			const featuredContainer = createEl (
				'div',
				'featuredContainer',
				domElements.featuredProduct,
				[
					['data-id', `${products.products[i].productID}`],
				]
			);

			const featuredImage = createEl (
				'img',
				'featuredImage',
				featuredContainer,
				[
					['alt', `${products.products[i].alt}`],
					['src', `${products.products[i].image[0]}`],
					['height', '450']
				],
			);

			const detailsContainer = createEl (
				'div',
				'detailsContainer',
				featuredContainer,
			);

			const featuredNameContainer = createEl (
				'div',
				'featuredNameContainer',
				detailsContainer,
				false,
				`${products.products[i].productName}`
			);

			const featuredPriceContainer = createEl (
				'div',
				'featuredPriceContainer',
				detailsContainer,
				false,
				`\$${products.products[i].price} USD`
			);

			const featuredQuantity = createEl (
				'div',
				'featuredQuantity',
				detailsContainer,
				false,
				'Quantity:'
			);

			const featuredQuantityCounter = createEl (
				'div',
				'featuredQuantityCounter',
				detailsContainer,
			);

			const featuredMinus = createEl (
				'div',
				'featuredMinus',
				featuredQuantityCounter,
				[
					['data-id', `${products.products[i].productID}`],
				],
				'−'
			);

			const featuredQuantityInput = createEl (
				'input',
				'featuredQuantityInput',
				featuredQuantityCounter,
				[
					['type', 'text'],
					['id', 'featuredQuantityInput'],
					['value', '1']
				],
			);

			const featuredPlus = createEl (
				'div',
				'featuredPlus',
				featuredQuantityCounter,
				[
					['data-id', `${products.products[i].productID}`],
				],
				'+'
			);

			const featuredAddToCart = createEl (
				'button',
				'featuredAddToCart',
				detailsContainer,
				[
					['data-id', `${products.products[i].productID}`],
					['data-amount', `${products.products[i].amount}`],
				],
				'Add to cart'
			);
			mapNewDOM();
			createEventListeners();
			
		}
	}
}

const saveToStorage = (products) => {
	localStorage.setItem('catalog', JSON.stringify(products));
}


const getProductCatalog = () => {
	const xhr = new XMLHttpRequest();
	xhr.open('get', '../assets/catalog.json');
	const parseCatalog = () => {
		if (xhr.status == 200) {
			let catalog = JSON.parse(xhr.response);
			renderCatalog(catalog);
			saveToStorage(catalog);
		} else {
			console.warn(xhr.responseURL, xhr.statusText);
		}
	}
	xhr.addEventListener('load', parseCatalog);
	xhr.send();
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



// RUN FUNCTIONS

const runFunctions = () => {
	mapDOM(); 
	getProductCatalog();
	addNumberToCart();
	greetUser();
}

runFunctions();

/*
	

LOGIN PROMPT (WITH REGISTRATION OR WITHOUT?) - (USER INPUT)

		// account exists

		- create variables for user id and user password (input)
		- assign change event to input fields
		- create functions to handle change in user id and password inputs
			# return input
		- assign input to respective variables


		- assign click/submit event to login button
		- create function to handle click (form - submit)
				- if user id input = id in object AND user password = password in object
						# redirect to cart and display purchased message 
							(window.location.href = "URL")
						# create order array
						# add user id to order array
						# add cart array to order array
						# push order array to local storage
						# clear cart array
						# replace cart array in storage with new cart array
						# hide number in cart
						# hide cart
						# display empty card
						# display user name in header
					- if user input doesn't match
						# error message
		

		// account does not exist 
		
		- create empty object for user's name and password = login
		- create variables for user id and user password (input)
		- assign change event to input fields
		- create functions to handle change in user id and password inputs
			# return input
		- assign input to respective variables
		
		- assign click event listener to submit button
		- create function to handle click event
			# store name and password in object login
			# put object login into storage
			# redirect to cart and display purchased message 
				(window.location.href = "URL")
			# create order array
			# add user id to order array
			# add cart array to order array
			# push order array to local storage
			# clear cart array
			# replace cart array in storage with new cart array
			# hide number in cart
			# hide cart
			# display empty card
			# display user name in header


	password reset? 


PRODUCT SEARCH - (STRING + OBJECT)

	- create click event listener for search button
	- create function to handle click
		# toggle visibility of input window
	
	- create click event listener for close button
	- create function to handle click
		# toggle visibility of input window
		# empty input field

	- create change event listener for input field
	- create function to handle input
		# if input empty
			# set dropdown to hidden
		# else
			# set dropdown to display
			# for each product in catalog
				# if input is included in product name
					# create container div with class + data product id
					# create div container with class for image
					# create div container with class for product name
	
	- create click event listener for product container
	- create function for handling click
		# create variable = data value of container
		# create variable for div element that has a class = data value of container  
		# scroll into view 
		# empty input field
		# toggle visibility of input window
	

PRODUCT REVIEWS - (USER INPUT)

	- create empty review object

	- create click event listener for Review
	- create function to handle click
				# make review form visible

	- create click event listener for submit button
	- create function to handle click
				# pass star rating (index1) to object
				# pass review to object
				# pass data of review to object
				# hide review form
				# make submitted div visible

	- create click even for close button
	- create function to handle click
				# hide submitted div


	- create click event listener for stars
	- create function to handle click
					# for each star
						# get index1 of clicked star
							# for each star till index1
									# color star
							# for each star beginning at index1+1 
									# remove color
						# disable click
						# return index1

*/