# Spellbound Treasures

This is my first responsive JavaScript project featuring a shopping cart that is making 
use of the local storage.

# ----- Vision for this website -----

Spellbound Treasures aims to combine the elegance and simplicity of a modern online shop
with the whimsical theme of a witchy product catalog. The focus here is the experience of
using an online shopping cart. 

# ----- Goals -----

The goal of this project is to practice JavaScript and to create a shopping cart using
local storage. This projects is supposed to be fully responsive. 

# ----- Structure -----

FILE STRUCTURE

- The root directory contains the main script for the homepage as well as directory for the 
subpages, images and CSS- and JavaScript scripts.
- The pages directory houses the scripts for the cart page, the login and register page as 
well as the purchase confirmation page.
- The images have been optimized for the web.
- The assets folder contains the CSS stylesheet for the layout and JS scripts for the homepage, 
cart, footer, search, the login and register processes as well as for fetching the product 
catalog. Moreover, a JSON-file containing the product catalog is included here. 

WEBSITE STRUCTURE

- The index page is the website's storefront. The main JS script takes care of the product display
and interactivity. 
- The cart page is taken care of by the functions in the cart JS-file.
- The register page is made functional by the register JS-script and the login page by the login 
JS-script.
- The thanks page displays the confirmation after purchasing a product.
- To provide the product search function and the dynamic footer on every page of the website,
the scripts for getting the product catalog, the product search and the displaying of the copyright
are imbedded on every page. 
- The JSON-file feeds the site with product data.

FLOW

----- Homepage -----
- In the navigation section of the homepage the user finds the logo that links to the homepage, links to 
the homepage, collections, contact page and about page (which all link back to the homepage for now). 
Moreover, the user can interact with the search icon, the login icon and the cart icon.
- The search icon displays a search bar with an overlay. The user may close this view by pressing the "X"
or outside the search frame. The user can start typing in the search bar to get product suggestions matching 
their query and click on one of them to get forwarded to that particular product on the homepage. 
- By clicking on the user icon, the user is redirected to the login page.
- By clicking on the cart icon, the user is redirected to the cart page.
- Below the header the user will find the product catalog. Each product card contains the image, name, price
and quantity of the product, a button to add the product to the cart and a review link. 
- The quantity can be adjusted, but the user may only input quantities between 1 and 30.
- The customer may use the "Write a review" link to write a review for the respective product. The form to do
so appears dynamically. The customer may choose how many stars to grant the product and write the review itself, 
then use the appropriate button to submit the review. The review is saved in local storage and the review form is
closed. The customer may use the cancel button to return back to the homepage without saving the review. 
- Beneath the gallery of featured products a special featured product can be found with the same functionality
as the other products.
- In the footer the user can find the logo with a link to the homepage, as well as links to the cart, login,
homepage and the product search. Moreover, there are also legal pages listed (that link back to the homepage).
- The homepage ends with the dynamic disclaimer.

----- Cart -----
- When the customer adds a product to the cart, an icon appears next to the cart icon in the header, indicating
the number of items currently in the cart, and the customer is forwarded to the cart page.
- Next to the navigation and the footer, the user will find a link back to the homepage on the cart page and 
naturally the products that were placed in the cart. 
- If there are no products in the cart, the page will say so and offer a link back to the homepage and a link
to log in for faster checkout. 
- If there are products in the cart, the customer will be able to see their image, name, price for a single unit
and the quantity. 
- Like on the homepage, the quantity can be adjusted here as well for a number of products between 1 and 30. 
- Depending on the quantity per product the subtotal will be calculated dynamically and shown in the cart.
- Moreover, the user may delete a product from the cart.
- On the bottom of the cart the user will find the dynamic total price of the cart and the purchase button. 

----- Login -----
- If the customer is not logged in upon clicking the purchase button, they will be forwarded to the login page.
- There they can log in with their valid credentials, otherwise an error will be thrown.
- The user maybe also reset their password, if they forgot (not functional at the moment), or choose to create
a new account, if they don't have one yet.

----- Registration -----
- Upon clicking the link to create a new account, the user is forwarded to the register page.
- Here they can enter their data to create their account. All fields are mandatory and the email address must be
valid, otherwise an error will be thrown.
- Once the user submits the register form, their account info is stored in the local storage and they are forwarded 
to the homepage, being logged-in automatically.
- In a logged-in state the user is greeted by name in the header of every page. Moreover, a logout link appears next
to the greeting. 

----- Confirmation -----
- In a logged-in state the customer may now finish their purchase on the cart page. The order is then stored in local
storage and the customer is forwarded to a new page that thanks them for the purchase and offers a link back to the
homepage. 

