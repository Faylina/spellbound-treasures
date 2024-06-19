<?php
#********************************************************************#
				
				
				#******************************************#
				#********** ENABLE STRICT TYPING **********#
				#******************************************#
				
				declare(strict_types=1);
				
				
#********************************************************************# 
			
			
				#****************************************#
				#********** PAGE CONFIGURATION **********#
				#****************************************#
				
				require_once('../../../include/config.inc.php');
				require_once('../../../include/form.inc.php');
				require_once('../../../include/debugging.inc.php');


#*******************************************************************************************#

				#****************************************#
				#********** SECURE PAGE ACCESS **********#
				#****************************************#

				secureAccess('wwwcodingsorceresscom', 'user', '../../../index.php');

#********************************************************************************#
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Spellbound Treasures</title>
    <link rel="icon" type="image/x-icon" href="../images/favicon.ico"> 
    <link rel="stylesheet" href="../assets/style.css">
    <link rel="stylesheet" href="../../../assets/css/debug.css">
    <script src="../assets/cart.js" defer></script>
    <script src="../assets/getcatalog.js" defer></script>
    <script src="../assets/productsearch.js" defer></script>
    <script src="../assets/copyright.js" defer></script>

    <!-- ------------------ FONTS ------------------ -->

    <link href="https://api.fontshare.com/v2/css?f[]=supreme@400,401,500,501,700,701&display=swap" rel="stylesheet"> 
	<link href="https://api.fontshare.com/v2/css?f[]=gambetta@400,401,500,501,600,601,700,701&display=swap" rel="stylesheet"> 
    
</head>
<body>

    <!-- ------------- LINK TO THE CODING SORCERESS BEGIN ------------------------- -->
         
    <div class="coding-sorceress">
        <a href="../../../portfolio.php#projects"><< Go back to The Coding Sorceress</a>
     </div>

    <!-- ------------- LINK TO THE CODING SORCERESS END --------------------------- -->


    <!-- ------------------ SEARCH ------------------ -->

    <div class="productSearch invisibleSearch">
        <div class="searchContainer">
            <div class="dropdown">
                <input type="text" id="searchInput" placeholder="Search">
                <div class="resultsContainer invisibleResults">
                    <div class="dropdownHeading">Products</div>
                    <hr class="divider">
                    <div class="searchResults"></div>
                </div>
            </div>
            <div class="close">&#9587;</div>
        </div>
        <div class="searchBackground"></div>
    </div>
    

    <!-- ------------------ HEADER ------------------ -->

    <header>
        <nav>
            <div class="navbar">
                <a href="../index.php">
                    <img src="../images/spellbound_treasures_logo.svg" alt="blue crescent moon with a silver wand crossing it" height="100">
                </a>
                
                    <ul class="header-links">
                        <li><a href="../index.php">Home</a></li>
                        <li>Collections</li>
                        <li><a href="../index.php">Contact</a></li>
                        <li><a href="../index.php">About</a></li>
                    </ul>
                    <div class="greeting"></div>
                    <div class="logout">Log out</div>
                    <div>
                        <ul class="icon-list">
                            <li>
                                <img class="search" src="../images/search.png" alt="search icon" height="20">
                            </li>
                            <li>
                                <a href="../pages/login.php">
                                    <img src="../images/user.png" alt="user icon" height="20">
                                </a>
                            </li>
                            <li>
                                <a href="../pages/cart.php">
                                    <img src="../images/cart.png" alt="shopping cart icon" height="20">
                                </a>
                                <div class="cartNumber invisible"></div>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </nav>
    </header>

    <hr class="divider">


    <!-- ------------------ CART ------------------ -->

    <main>

        <!-- ------------------ EMPTY CART ------------------ -->

        <div class="main-content cartContent">
            <div class ="cart-heading-empty">Your cart is empty</div>
            <button class="cart-button-empty"><a href="../index.php">Continue shopping</a></button>
            <div class="cart-account-heading">Have an account?</div>
            <div class="cart-login"><a href="../pages/login.php">Log in</a> to check out faster.</div>
            
        </div>


        <!-- ------------------ FULL CART ------------------ -->

        <div class="fullCart invisibleFullCart">
            <div class="cart-head">
                <div class="secured-cart">Your Secured Cart</div>
                <div class="continue-shopping"><a href="../index.php">Continue shopping</a></div>
            </div>
            <div class="subheading">
                <div class="subproduct">Product</div>
                <div class="subamounts">
                    <div>Quantity</div>
                    <div>Total</div>
                </div>
            </div>

            <hr class="divider">

            <div class="cart"></div>

            <hr class="divider">

            <div class="purchase-container">
                <div class="subtotal"></div>
                <button class="purchase">Purchase</button>
            </div>

        </div>
    </main>

    <hr class="divider">


    <!-- ------------------ FOOTER ------------------ -->

    <footer>
        <div class="footer-section">
            <a href="../index.php">
                <img src="../images/spellbound_treasures_logo_square.png" alt="blue crescent moon with a silver wand crossing it" height="225">
            </a>

            <ul class="footer-list">
                <li>Quick Links</li>
                <li><a href="../pages/cart.php">Cart</a></li>
                <li><a href="../pages/login.php">Login</a></li>
                <li><a href="../index.php">Home</a></li>
                <li class="footerSearch">Search</li>
            </ul>

            <ul class="footer-list">
                <li>Your Privacy Matters</li>
                <li><a href="../index.php">Shipping Policy</a></li>
                <li><a href="../index.php">Refund Policy</a></li>
                <li><a href="../index.php">Privacy Policy</a></li>
                <li><a href="../index.php">Terms of Service</a></li>
                <li><a href="../index.php">Legal Notice</a></li>
            </ul>
        </div>
    </footer>

    <hr class="divider">


    <!-- ------------------ DISCLAIMER ------------------ -->

    <div class="disclaimer">
        <ul>
            <li>&copy;</li> 
            <li class="copyright">2023 Faylina</li>
        </ul>
        <div><strong>Disclaimer:</strong> All photos were generated by AI.</div>
    </div>
    
</body>
</html>