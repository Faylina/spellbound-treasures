'use strict';


// VARIABLES

const domElements 		= {};
const newDOMElements 	= {};
const newSearchElements = {};
let catalogObject 		= JSON.parse(localStorage.getItem('catalog'));
let cartObject 			= JSON.parse(localStorage.getItem('cart'));


// GENERAL FUNCTIONS

const mapDOM = () => {
	domElements.productGallery 		= document.querySelector('.productGallery');
	domElements.featuredProduct	 	= document.querySelector('.featuredProduct');
	domElements.greeting 			= document.querySelector('.greeting');
	domElements.logout 				= document.querySelector('.logout');
	domElements.search 				= document.querySelector('.search');
    domElements.productSearch 		= document.querySelector('.productSearch');
    domElements.close 				= document.querySelector('.close');
    domElements.searchInput 		= document.querySelector('#searchInput');
    domElements.resultsContainer 	= document.querySelector('.resultsContainer');
    domElements.searchResults 		= document.querySelector('.searchResults');
    domElements.searchBackground 	= document.querySelector('.searchBackground');
	domElements.reviewContainer 	= document.querySelector('.reviewContainer');
	domElements.cancelReview 		= document.querySelector('.cancel');
	domElements.reviewImage 		= document.querySelector('.reviewImage');
	domElements.stars 				= Array.from(document.querySelectorAll('.star'));
	domElements.submit 				= document.querySelector('.submit');
	domElements.inputReview 		= document.querySelector('#productReview');
	domElements.footerSearch 		= document.querySelector('.footerSearch');
 }

const mapSearchElements = () => {
    newSearchElements.resultCards 	= Array.from(document.querySelectorAll('.resultCard'));
 }

const mapNewDOM = () => {
	newDOMElements.plusButtons 				= Array.from(document.querySelectorAll('.plus')); 
	newDOMElements.minusButtons 			= Array.from(document.querySelectorAll('.minus'));  
	newDOMElements.featuredPlusButton 		= document.querySelector('.featuredPlus'); 
	newDOMElements.featuredMinusButton 		= document.querySelector('.featuredMinus'); 
	newDOMElements.quantityInput 			= Array.from(document.querySelectorAll('.quantityInput')); 
	newDOMElements.featuredQuantityInput 	= document.querySelector('.featuredQuantityInput');
	newDOMElements.addToCartButtons 		= Array.from(document.querySelectorAll('.addToCart'));
	newDOMElements.featuredAddToCartButton 	= document.querySelector('.featuredAddToCart');
	newDOMElements.productContainers		= Array.from(document.querySelectorAll('.productContainer'));
	newDOMElements.featuredContainer 		= document.querySelector('.featuredContainer');
	newDOMElements.writeReview 				= Array.from(document.querySelectorAll('.writeReview'));
	newDOMElements.productImages 			= Array.from(document.querySelectorAll('.productImage'));
	newDOMElements.featuredImage 			= document.querySelector('.featuredImage');
}

const createEl = (
	type 		= 'div',
	className 	= false,
	parent 		= false,
	attribute 	= false,
	content 	= false,
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
	domElements.search.addEventListener('click', handleSearch);
    domElements.close.addEventListener('click', handleClose);
    domElements.searchInput.addEventListener('input', handleSearchInput);
    domElements.searchBackground.addEventListener('click', handleClose);
	newDOMElements.writeReview.forEach((button) => {
		button.addEventListener('click', handleReview);
	});
	domElements.cancelReview.addEventListener('click', handleCancelReview);
	domElements.stars.forEach((button) => {
		button.addEventListener('click', handleStarClick);
	});
	domElements.stars.forEach((button) => {
		button.addEventListener('mouseover', handleStarEnter);
	});
	domElements.submit.addEventListener('click', handleSubmitReview);
	domElements.inputReview.addEventListener('change', handleInputReview);
	domElements.footerSearch.addEventListener('click', handleSearch);
	newDOMElements.productImages.forEach((button) => {
		button.addEventListener('mouseover', handleEnterImage);
	});
	newDOMElements.productImages.forEach((button) => {
		button.addEventListener('mouseout', handleLeaveImage);
	});
	newDOMElements.featuredImage.addEventListener('mouseover', handleEnterImage);
	newDOMElements.featuredImage.addEventListener('mouseout', handleLeaveImage);
}

const createEvtFind = () => {
    newSearchElements.resultCards.forEach((button) => {
		button.addEventListener('click', handleScroll);
	});
}


// EVENT HANDLERS

const handlePlusClick = (event) => {
	
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
	
	const featuredButton 		= newDOMElements.featuredAddToCartButton;
	let currentQuantityInput 	= newDOMElements.featuredQuantityInput;
	let currentFeaturedID 		= featuredButton.getAttribute('data-id');

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
		
		const featuredButton 		= newDOMElements.featuredAddToCartButton;
		let currentQuantityInput 	= newDOMElements.featuredQuantityInput;
		let currentFeaturedID 		= featuredButton.getAttribute('data-id');
	
		if (currentFeaturedID == productIDCurrent) {
			
			const currentFeaturedAmount = Number(featuredButton.getAttribute('data-amount'));

			if (currentFeaturedAmount > 1) {

				featuredButton.setAttribute('data-amount', currentFeaturedAmount - 1);

				currentQuantityInput.setAttribute('value', currentFeaturedAmount - 1);

				currentQuantityInput.value = currentFeaturedAmount - 1;

			} else {
				alert('Please select at least one product to add to the cart.')
			}
		}
}

const handleAmountChange = (event) => {

	let input = Number(event.currentTarget.value);

	if (isNaN(input) || input < 1 || input > 30) {

		event.currentTarget.value = 1;
		event.currentTarget.setAttribute('value', '1');

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

const handleAddToCart = (event) => {
	let addedProductID 			= Number(event.currentTarget.getAttribute('data-id'));
	let addedProductAmount 		= Number(event.currentTarget.getAttribute('data-amount'));
	createCart();
	let newCart				 	= JSON.parse(localStorage.getItem('cart'));
	let isAlreadyInTheCart 		= false;
	let catalogObject 			= JSON.parse(localStorage.getItem('catalog'));

		if (newCart.length == 0) {
			for (let product of catalogObject.products) {
				if (product.productID == addedProductID) {
					newCart.push(product);
					newCart[newCart.length - 1].amount = addedProductAmount; 
					localStorage.setItem('cart', JSON.stringify(newCart));
					addNumberToCart();
					window.location.href = "./pages/cart.html";
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
						window.location.href = "./pages/cart.html";
					}
				}
			} else {
				for (let cartProduct of newCart) {
					if (cartProduct.productID == addedProductID) {
						cartProduct.amount = cartProduct.amount + addedProductAmount;
						localStorage.setItem('cart', JSON.stringify(newCart));
						addNumberToCart();
						window.location.href = "./pages/cart.html";
					}
				}
			}
		}
}



const handleLogout = () => {
    localStorage.removeItem('login');
    greetUser();
}


const handleReview = (event) => {
	
	let currentID = event.currentTarget.getAttribute('data-id');
	localStorage.setItem('reviewID', JSON.stringify(currentID));

	for (let i = 0; i < catalogObject.products.length; i++) {
		let product = catalogObject.products[i];

		if (product.productID == currentID) {
			domElements.reviewImage.setAttribute('src', `${product.image[1]}`);
		}
	}

	domElements.reviewContainer.classList.remove('invisibleReview');

	domElements.stars.forEach((button) => {
		button.addEventListener('mouseover', handleStarEnter);
	});
}

const handleCancelReview = () => {
	
	domElements.reviewContainer.classList.add('invisibleReview');
	localStorage.removeItem('reviewID');
	localStorage.removeItem('star-rating');
	localStorage.removeItem('review');
	domElements.inputReview.value = '';

	for(let star of domElements.stars) {
		star.classList.add('gold');
		star.classList.remove('gray');
	}
}

const handleStarClick = (event) => {
	let starClick 	= event.currentTarget.getAttribute('data-number');
	let stars 		= domElements.stars;

	for (let i = 0; i < stars.length; i++) {
		if ( i > (starClick - 1)) {
			stars[i].classList.remove('gold');
			stars[i].classList.add('gray');
			stars[i].removeEventListener('mouseover', handleStarEnter);
		} else {
			stars[i].classList.add('gold');
			stars[i].classList.remove('gray');
			stars[i].removeEventListener('mouseover', handleStarEnter);
		}
	}
	localStorage.setItem('star-rating', JSON.stringify(starClick));
}

const handleStarEnter = (event) => {
	let starHover 	= event.currentTarget.getAttribute('data-number');
	let stars 		= domElements.stars;

	for (let i = 0; i < stars.length; i++) {
		if ( i > (starHover - 1)) {
			stars[i].classList.remove('gold');
			stars[i].classList.add('gray');
		} else {
			stars[i].classList.add('gold');
			stars[i].classList.remove('gray');
		}
	}
}

const handleInputReview = (event) => {
	let input = event.currentTarget.value;
	localStorage.setItem('review', JSON.stringify(input));
}

const handleSubmitReview = () => {
	let reviewID 	= JSON.parse(localStorage.getItem('reviewID'));
	let starRating 	= JSON.parse(localStorage.getItem('star-rating'));
	let review 		= JSON.parse(localStorage.getItem('review'));
	let reviews 	= JSON.parse(localStorage.getItem('reviews'));

	if (!starRating) {
		starRating = "5";
	}
	
	if(!reviews) {
		reviews = [];
	}

	const newReview = {
		productID: reviewID,
		starRating: starRating,
		review: review
	}

	reviews.push(newReview);

	localStorage.setItem('reviews', JSON.stringify(reviews));

	localStorage.removeItem('reviewID');
	localStorage.removeItem('star-rating');
	localStorage.removeItem('review');

	domElements.inputReview.value = '';

	for(let star of domElements.stars) {
		star.classList.add('gold');
		star.classList.remove('gray');
	}

	domElements.reviewContainer.classList.add('invisibleReview');
}


const handleSearchInput = (event) => {
    let products 	= JSON.parse(localStorage.getItem('catalog'))
    let searchTerm 	= (event.currentTarget.value).toLowerCase(); 

    domElements.searchResults.innerHTML = '';

    if (searchTerm.length > 0) {
        domElements.resultsContainer.classList.remove('invisibleResults');
        
        for (let i = 0; i < products.products.length; i++) {

            let productName = (products.products[i].productName).toLowerCase();
            if (productName.includes(searchTerm)) {

				// type, class, parent, attribute, content

                const resultCard = createEl (
                    'div',
                    'resultCard',
                    domElements.searchResults,
                    [
                        ['data-id', `${products.products[i].productID}`],
                    ]
                );

                const searchImage = createEl (
                    'img',
                    'searchImage',
                    resultCard,
                    [
                        ['alt', `${products.products[i].alt}`],
                        ['src', `${products.products[i].image[0]}`],
                        ['height', "75"]
                    ]
                );

                const searchName = createEl (
                    'div',
                    'searchName',
                    resultCard,
                    false,
                    `${products.products[i].productName}`
                );

                mapSearchElements();
                createEvtFind();
            }
        }
        
    } else {
        domElements.resultsContainer.classList.add('invisibleResults');
    }
}

const handleScroll = (event) => {
  
    domElements.productSearch.classList.add('invisibleSearch');

    let searchID = event.currentTarget.getAttribute('data-id');

    for (let i = 0; i < newDOMElements.productContainers.length; i++) {

        let productID 	= newDOMElements.productContainers[i].getAttribute('data-id');
        let product 	= newDOMElements.productContainers[i];

        if (productID == searchID) {

            product.scrollIntoView();

        } else if (searchID == 13) {
			newDOMElements.featuredContainer.scrollIntoView();
		}

		domElements.searchInput.value = '';
		domElements.resultsContainer.classList.add('invisibleResults');
    }
}

const handleSearch = () => {
    domElements.productSearch.classList.remove('invisibleSearch');
	domElements.productSearch.scrollIntoView();
}

const handleClose = () => {
    domElements.productSearch.classList.add('invisibleSearch');
}

const handleEnterImage = (event) => {

	let currentID 	= event.currentTarget.getAttribute('data-id');
	let catalog 	= JSON.parse(localStorage.getItem('catalog'));
	
	for (let i = 0; i < catalog.products.length; i++) {

		let productID = catalog.products[i].productID;

		if (productID == currentID) {
			let imagePath = catalog.products[i].image[1];
			event.currentTarget.setAttribute('src', imagePath);
		}
	}
}

const handleLeaveImage = (event) => {
	let currentID 	= event.currentTarget.getAttribute('data-id');
	let catalog 	= JSON.parse(localStorage.getItem('catalog'));
	
	for (let i = 0; i < catalog.products.length; i++) {

		let productID = catalog.products[i].productID;

		if (productID == currentID) {
			let imagePath = catalog.products[i].image[0];
			event.currentTarget.setAttribute('src', imagePath);
		}
	}
}


// SHOP FUNCTIONS

const createCart = () => {
	if (!localStorage.getItem("cart")) {
		const emptyCart = [];
		localStorage.setItem("cart", JSON.stringify(emptyCart));
	} 
}

const addNumberToCart = () => {
	let numberInCart 	= 0;
	let cart 			= JSON.parse(localStorage.getItem('cart'));
	let sum 			= 0;

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

const greetUser = () => {

    let login 		= JSON.parse(localStorage.getItem('login'));
    let customers 	= JSON.parse(localStorage.getItem('customers'));

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


// Load product catalog to website

const renderCatalog = products => {
	for (let i = 0; i < products.products.length; i++) {
		if (products.products[i].featured === false) {

			// type, class, parent, attribute, content

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
					['height', "200"],
					['data-id', `${products.products[i].productID}`],
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

			const writeReview = createEl (
				'div',
				'writeReview',
				productContainer,
				[
					['data-id', `${products.products[i].productID}`],
				],
				'Write a review'
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
					['height', '450'],
					['data-id', `${products.products[i].productID}`],
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

			const reviewFeaturedContainer = createEl (
				'div',
				'reviewFeaturedContainer',
				detailsContainer,
			)

			const writeReviewFeatured = createEl (
				'div',
				'writeReview',
				reviewFeaturedContainer,
				[
					['data-id', `${products.products[i].productID}`],
				],
				'Write a review'
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
	xhr.open('get', './assets/catalog.json');
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


// RUN FUNCTIONS

const runFunctions = () => {
	mapDOM(); 
	getProductCatalog();
	addNumberToCart();
	greetUser();
}

runFunctions();