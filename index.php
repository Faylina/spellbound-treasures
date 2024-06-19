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
				
				require_once('../../include/config.inc.php');
				require_once('../../include/form.inc.php');
				require_once('../../include/debugging.inc.php');


#*******************************************************************************************#

				#****************************************#
				#********** SECURE PAGE ACCESS **********#
				#****************************************#

				secureAccess('wwwcodingsorceresscom', 'user', '../../index.php');

#********************************************************************************#
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Spellbound Treasures</title>
    <link rel="icon" type="image/x-icon" href="./images/favicon.ico"> 
    <link rel="stylesheet" href="./assets/style.css">
    <link rel="stylesheet" href="../../assets/css/debug.css">
    <script src="./assets/script.js" defer></script>
    <script src="./assets/copyright.js" defer></script>

    <!-- ------------------ FONTS ------------------ -->

    <link href="https://api.fontshare.com/v2/css?f[]=supreme@400,401,500,501,700,701&display=swap" rel="stylesheet"> 
	<link href="https://api.fontshare.com/v2/css?f[]=gambetta@400,401,500,501,600,601,700,701&display=swap" rel="stylesheet"> 
    
</head>
<body>

    <!-- ------------- LINK TO THE CODING SORCERESS BEGIN ------------------------- -->
         
    <div class="coding-sorceress">
        <a href="../../portfolio.php#projects"><< Go back to The Coding Sorceress</a>
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
    

    <!-- ------------------ REVIEW ------------------ -->

    <div class="reviewContainer invisibleReview">
        <div class="reviewForm">
            <div class="reviewHeading">Tell us how you liked this item</div>
            <div class="reviewDetails">
                <div class="reviewImgContainer">
                    <img class="reviewImage" src="./images/placeholder.png" alt="magical sparkles rise up from an open mystical book" height="380">
                </div>
                <div class="rateContainer">
                    <div class="reviewSubheading">Rate your experience:</div>
                    <div class="starsContainer">
                        <span class="star gold pointer" data-number="1">&#9733;</span>
                        <span class="star gold pointer" data-number="2">&#9733;</span>
                        <span class="star gold pointer" data-number="3">&#9733;</span>
                        <span class="star gold pointer" data-number="4">&#9733;</span>
                        <span class="star gold pointer" data-number="5">&#9733;</span>
                    </div>
                    <div class="reviewText">Tell us more:</div>
                    <textarea name="productReview" id="productReview" cols="30" rows="10"></textarea>
                    <div class="reviewButtons">
                        <button class="cancel">Cancel</button>
                        <button class="submit">Submit review</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- ------------------ HEADER ------------------ -->

    <header>
        <nav>
            <div class="navbar">
                <a href="index.php">
                    <img src="./images/spellbound_treasures_logo.svg" alt="blue crescent moon with a silver wand crossing it" height="100">
                </a>
                
                <ul class="header-links">
                    <li><a href="./index.php">Home</a></li>
                    <li><a href="./index.php">Collections</a></li>
                    <li><a href="./index.php">Contact</a></li>
                    <li><a href="./index.php">About</a></li>
                </ul>
                <div class="greeting"></div>
                <div class="logout">Log out</div>
                <ul class="icon-list">
                    <li>
                        <img class="search" src="./images/search.png" alt="search icon" height="25">
                    </li>
                    <li>
                        <a href="./pages/login.php">
                            <img src="./images/user.png" alt="user icon" height="25">
                        </a>
                    </li>
                    <li>
                        <a href="./pages/cart.php">
                            <img src="./images/cart.png" alt="shopping cart icon" height="25">
                        </a>
                        <div class="cartNumber invisible"></div>
                    </li>
                </ul>
            </div>
        </nav>
        <a href="./index.php">
            <img src="./images/spellbound_treasures_banner.png" alt="mystical shelf with spellbooks, magical trinkets, potions, candles and crystals, shrouded in darkness" width="100%">
        </a>
    </header>


    <!-- ------------------ DYNAMIC MAIN CONTENT ------------------ -->

    <main>
        <div class="main-content">
            <div class="heading">Featured Products</div>
            <div class="productGallery"></div>
            <div class="featuredProduct"></div>
        </div>
    </main>

    <hr class="divider">


    <!-- ------------------ FOOTER ------------------ -->

    <footer>
        <div class="footer-section">
            <a href="index.php">
                <img src="./images/spellbound_treasures_logo_square.png" alt="blue crescent moon with a silver wand crossing it" height="225">
            </a>

            <ul class="footer-list">
                <li>Quick Links</li>
                <li><a href="./pages/cart.php">Cart</a></li>
                <li><a href="./pages/login.php">Login</a></li>
                <li><a href="index.php">Home</a></li>
                <li class="footerSearch">Search</li>
            </ul>

            <ul class="footer-list">
                <li>Your Privacy Matters</li>
                <li><a href="index.php">Shipping Policy</a></li>
                <li><a href="index.php">Refund Policy</a></li>
                <li><a href="index.php">Privacy Policy</a></li>
                <li><a href="index.php">Terms of Service</a></li>
                <li><a href="index.php">Legal Notice</a></li>
            </ul>
        </div>
    </footer>

    <hr class="divider">


    <!-- ------------------ DISCLAIMER ------------------ -->

    <div class="disclaimer">
        <ul>
            <li>&copy;</li> 
            <li class="copyright">2023 THE CODING SORCERESS</li>
        </ul>
        <div><strong>Disclaimer:</strong> All photos were generated by AI.</div>
    </div>

</body>
</html>