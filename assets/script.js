/*
	
LOAD PRODUCT CATALOG TO WEBSITE - (AJAX)

	- create and run init function

	- create variable for DOM elements (object)
	- create function to map needed elements in the variable for DOM elements

	- create XMLHttpRequest-Object
	- define path
	- confirm object was loaded
	- is status okay -> render content 

		# if featured = false
			!! create product list
				# transfer products to empty div
					# div container for product details with class = product id
						# image container with class & image src & alt 
						# div container with class for name
						# div container with class for price
						# quantity counter
							# + button 
							# - button 
							# user input
						# add to cart button with class and data with product id and amount
			
			# if featured = true
				!! create featured product
					# transfer content to empty div
						# assign empty div class = product id
						# image container with class & image src & alt
						# div container for rest of info
							# div container with class for name
							# div container with class for price
							# quantity counter 
								# + button 
								# - button 
								# user input
							# add to cart button with class and data with product id and amount

			# save catalog in local storage as object
			# save empty cart in local storage as array (if cart empty)
		


	- is status not okay -> warn
	- start request

	- create variable for pulling out the catalog from storage
	- create variable for pulling out the cart from storage


TRANSFER PRODUCTS TO CART VIA LOCAL STORAGE - (LOCAL STORAGE)

// Allow Change of AMOUNT

		- add click event to + and - buttons
		- add change event to input field
		- create functions to handle click and change

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

		- add click event to "add to cart" button
		- create function to handle click

		- display NUMBER on CART
			- create variable for number in cart 
				# for each button with data amount type 
						# create variable for sum  
						# sum up value amount 
						# return sum
				# update number in cart variable with sum
				# display total amount on cart icon
				# save number in local storage (necessary?)


		// Store Products in Cart

		- create function for Adding to Cart with two properties (product id from button, new amount from button)
			- for each product 
				# if product id = product id of button
						# if cart is empty
								# add product to cart
								# update amount in cart
								# set amount of button to 1
						# if cart is not empty
								# search for product in cart
									# if not in cart
											# add product
											# update amount in cart
											# set amount of button to 1
									# otherwise change amount of product in cart
											# add amount from button to amount in cart
											# set amount of button to 1
		
		- run function with product id and amount from button
		- put cart into local storage
		

		// Cart Page
		- if local storage not empty (Cart Array length)
				- hide empty cart content
				- display NUMBER on CART from local storage
				- display product on the cart page via product id
					- create function to render products
						# div container with class for image
						# div container with class for product details
							# div container with name
							# div container with price
						# div container with class for quantity counter = amount
							# + button 
							# - button 
							# user input
						# div container with class for remove button
						# div container with class for total price per product


SHOW TOTAL AMOUNT OF PRODUCTS AND TOTAL PRICE IN CART - (CALC & OBJECT)
	- create variable for total price 
	- display number in cart inside cart

	- create function to sum total price per product
			# for each product in cart 
				# override total price of product = 
					# product price * amount 
			- replace cart object with new cart object

	- create function to sum total price
			# for each product in cart
				# sum up total price of product
				# return sum

	- override the variable total price with sum
	- display total price 


REMOVE PRODUCTS FROM CART - (OBJECT)

	- create function for removal
			# create new array
			# cut out product to be deleted
			# replace cart in local storage with new array
			# if cart not empty
				# run function to sum up amounts in cart
					# return sum
				# run function for total price per product  
					- replace cart object with new cart object in local storage
				# run function for total price
					# return result
			# override number in cart with new value
			# override total price
			# if cart is empty
				# hide number in cart
				# hide cart
				# display empty cart


// Purchase Event
	- create event listener for purchase button
	- if clicked
		- prompt login



CHANGE AMOUNT OF PRODUCTS IN CART - (OBJECT)

		- add click event to + and - buttons
		- add change event to input field
		- create functions to handle click and change


			# if user input (number) >= 1 AND user input <= 30
					# change amount in cart array
				
			 
			# if button click + 
					# if amount < 30
							# cart amount +1

			# if button click -
					# if amount < 30 
							# cart amount -1

			- create function to sum up the amount in cart
					# for each product in cart
						# sum up amounts
						# return sum

			- override the number in cart variable with sum
			- run functions for total price of product and total price


LOGIN PROMPT (WITH REGISTRATION OR WITHOUT?) - (USER INPUT)

	- link logins and purchase button to login page

	

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

		- assign click event listener to register button
		- create function to handle click event
			- create new div with 
				# heading
				# user name input
				# password input
				# button submit
		
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