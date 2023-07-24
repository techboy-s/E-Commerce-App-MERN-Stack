# E-Commerce-App-MERN-Stack

See Deployment on - 
https://jade-butterfly-toga.cyclic.app

# E-Commerce App using MERN Stack

This is a comprehensive guide on how to set up, run, and understand the E-commerce app developed using the MERN stack. The app provides customers with an easy-to-use platform for buying and selling products online. It utilizes the power of MongoDB, Express, React, and Node.js to create a seamless and efficient e-commerce experience.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)


## Introduction

The E-commerce app using MERN stack is a full-fledged web application that enables users to browse through a variety of products, add them to their shopping cart, and securely complete transactions. Sellers can also use the platform to list their products and manage their inventory.

## Features

- User Registration and Authentication: Users can sign up, log in, and manage their accounts securely.
- Product Catalog: Users can explore a wide range of products and filter them based on categories and other parameters.
- Product Details: Detailed information, images, and reviews for each product are available for users to make informed decisions.
- Shopping Cart: Users can add products to their cart, modify quantities, and proceed to checkout.
- Secure Payments: The app integrates Braintree to ensure secure and efficient payment processing.
- User Dashboard: Registered users have access to a personalized dashboard to manage their orders, profile, and other settings.
- Admin Panel: Admins can manage products, orders, and user accounts through a dedicated admin interface.
- Responsive Design: The app is optimized for various devices, providing a smooth user experience across desktop and mobile platforms.

## Technologies Used

- Frontend:
  - ReactJS
  - HTML5
  - CSS3
  - Bootstrap

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose (ODM - Object Data Modeling for MongoDB)

- Payment Processing:
  - Braintree

## Installation

Follow these steps to set up the project locally on your machine:

1. Clone the repository from GitHub.
2. Navigate to the project directory.
3. Install dependencies for both the frontend and backend using `npm install`.
4. Set up environment variables:
   - Create a `.env` file in the root folder for backend environment variables.
   - Include necessary environment variables (e.g., MongoDB connection string, Braintree credentials, etc.).
5. Seed the database with initial data (if applicable).
6. Run the frontend and backend servers using `npm start`.

## Usage

1. Open the app in your web browser.
2. Explore the product catalog, search for products, and view detailed product information.
3. Register or log in to your account to access additional features like adding products to the shopping cart and making purchases.
4. If you are an admin, log in to the admin panel to manage products, orders, and user accounts.

## Folder Structure

The project's folder structure is organized as follows:

```
/
|-- backend/      # Backend server code
|-- frontend/     # Frontend client code
|-- public/       # Static assets
|-- node_modules/ # Node.js modules (generated after installation)
|-- .gitignore    # Git ignore file
|-- package.json  # Project dependencies and scripts
|-- README.md     # Project README file
|-- ...           # Other configuration files and assets
```

## Contributing

Contributions to the project are welcome. If you find any issues or want to add new features, feel free to submit a pull request.

---

