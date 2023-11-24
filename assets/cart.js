/*

CREATE HOMEPAGE - (HTML + CSS)

CREATE CART PAGE - (HTML + CSS)

CREATE PRODUCT CATALOG IN JSON - (JSON)
	- Product ID
	- Product name
	- Price
	- Image (x2, image front, image back)
	- Amount = 0 
	- featured = true / false
	- (Color)
	- (Sale)
	
LOAD PRODUCT CATALOG TO WEBSITE - (AJAX)

	- create XMLHttpRequest-Object
	- define path
	- confirm object was loaded
	- is status okay -> render content 

		# if featured = false
			!! create product list
				# transfer each piece of content to empty div
					# div container for product details
						# image container with class & image src
						# div container with class for name
						# div container with class for price
						# quantity counter
							> dropdown list
						# add to cart button with class and data with product id
			
			# if featured = true
				!! create featured product
					# transfer content to empty div
						# image container with class & image src
						# div container for rest of info
						# div container with class for name
						# div container with class for price
						# quantity counter 
						# add to cart button with class and data with product id

			# save catalog in local storage
			# save empty cart in local storage (if cart empty)
		


	- is status not okay -> warn
	- start request

	- create variable for pulling out the catalog from storage
	- create variable for cart


TRANSFER PRODUCTS TO CART VIA LOCALSTORAGE - (LOCALSTORAGE)

// Allow Change of AMOUNT

			# if user input (number) >= 1 AND user input <= 30
					change amount in button
					display amount
				
			 
			# if button click + 
					if amount < 30
							button amount +1
							display amount

			# if button click -
					if amount < 30 
							button amount -1
							display amount



- when "add to cart" button is clicked

		// Cart Counter

		- display NUMBER on CART
				# for each button with data amount type 
							# sum value amount 
							# display total amount
							# save number in local storage


		// Store Products in Cart

		- create function for Adding to Cart
				- for each product 
						# if product id = product id of button
								# if cart if empty
										# add product to cart
								# if cart is not empty
										# search for product in cart
												# if not in cart
														# add product
												# otherwise change amount of product in cart
		
		- run function with product id from button
		- put cart into local storage



		// Update Amounts

			- function with two properties (product id from button, new amount from button)
					# search for id
					# update amount 
			- put cart back to storage
	

		- keep product in storage till removed or purchased


		// Reset Amounts in Buttons
		

		// Cart Page
		- if local storage not empty (Cart Array length)
				- hide empty cart content
				- display NUMBER on CART
				- display product on the cart page via product id
						# div container with class for image
						# div container with class for product details
						# div container with class for quantity counter = amount
						# div container with class for remove button
						# div container with class for total price




SHOW TOTAL AMOUNT OF PRODUCTS AND TOTAL PRICE IN CART - (CALC & OBJECT)

REMOVE PRODUCTS FROM CART - (OBJECT)

	- create function for removal
			# create new array
			# cut out product to be deleted
			# replace cart in local storage with new array


// Purchase Event

	- notification
	- clear cart array



CHANGE AMOUNT OF PRODUCTS IN CART - (OBJECT)

			set variable amountCart = amount from local storage

			if user input (number) >= 1 AND user input <= 30
					change amountCart
					display amountCart
				
			 
			if button click + 
					if amountCart < 30
							amountCart +1
							display amountCart

			if button click -
					if amountCart < 30 
							amountCart -1
							display amountCart

LOGIN PROMPT (WITH REGISTRATION OR WITHOUT?) - (USER INPUT)

PRODUCT SEARCH - (STRING + OBJECT)

PRODUCT REVIEWS - (USER INPUT)

*/