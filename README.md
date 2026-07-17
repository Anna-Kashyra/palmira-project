# Palmira Textile

Palmira Textile is a responsive front-end e-commerce application for a fabric wholesale store. The project provides product catalog browsing, filtering, sorting, shopping cart functionality, and a fully responsive user interface built with HTML, CSS, and JavaScript.

## Project Background

This project was created as a frontend development practice project.

The website structure and catalog organization were inspired by the original Palmira Textile website:

[Palmira Textile](https://www.palmira-textile.com/uk/golovna-2/)

The project was developed independently using HTML, CSS, and JavaScript for educational purposes and is not affiliated with the original company.

## Live Demo

The project is deployed on GitHub Pages and can be viewed online:

[View Palmira Textile Demo](https://anna-kashyra.github.io/palmira-project/index.html)

## Features

### Product Catalog

* Dynamic product rendering from a JavaScript data source
* Filtering by:

  * Fabric type
  * Season
  * Purpose
  * Color
* Product sorting:

  * Default order
  * Price (Low to High)
  * Price (High to Low)

### Dynamic Navigation

* Header and footer generated dynamically using JavaScript templates
* Automatic active menu highlighting
* Dynamic catalog menu generation based on available products
* URL-based navigation between filtered catalog views

### Shopping Cart

* Add products to cart
* Remove products from cart
* Cart item counter
* Cart data persistence using Local Storage
* Automatic total price calculation

### Responsive Design

* Desktop, tablet, and mobile layouts
* Mobile burger menu
* Responsive catalog dropdowns
* Sticky navigation on scroll

## Project Structure

```text
project/
│
├── css/
│
├── images/
│
├── js/
│   ├── urlConfig.js
│   ├── db.js
│   ├── utils.js
│   ├── header.js
│   ├── footer.js
│   ├── main.js
│   ├── catalog.js
│   └── cart.js
│
├── html/
│   ├── about.html
│   ├── account.html
│   ├── blog.html
│   ├── cart.html
│   ├── catalog.html
│   ├── contacts.html
│   ├── delivery.html
│   ├── faq.html
│   └── responses.html
│
└── index.html
```

## JavaScript Modules

### urlConfig.js

Determines whether the current page is a root page or an inner page and generates the correct path prefix for links and assets.

### db.js

Contains the product database used throughout the application.

### utils.js

Provides reusable helper functions:

* Product rendering
* Catalog utilities
* Cart management
* Local Storage operations

### header.js

Generates the site header dynamically:

* Main navigation
* Catalog dropdown menus
* Active page highlighting
* Mobile navigation

### footer.js

Generates the site footer dynamically and handles active navigation links.

### catalog.js

Manages:

* Product filtering
* Product sorting
* URL query parameters
* Catalog sidebar interactions

### cart.js

Handles:

* Cart rendering
* Cart item removal
* Total price calculation
* Cart updates

## Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* Local Storage API
* Font Awesome

## URL-Based Filtering

The catalog supports filtering through URL parameters.

Examples:

```text
catalog.html?textile=crepe
catalog.html?season=summer
catalog.html?purpose=dress
catalog.html?filter=new
catalog.html?filter=popular
catalog.html?filter=sale
```

This allows direct navigation to pre-filtered catalog views from the header menu.

## Future Improvements

* Product details page
* Favorites/Wishlist functionality
* Search implementation
* Product pagination
* Backend integration
* User authentication
* Checkout process
* Admin panel
