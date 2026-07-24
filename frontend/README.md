<p align="center">
  <h1 align="center">🛍️ ReWeaR</h1>
  <p align="center">
    Premium quality. Unbeatable prices. Sustainable fashion.
    <br />
    <br />
    <a href="#features"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="#">Report Bug</a>
    ·
    <a href="#">Request Feature</a>
  </p>
</p>

<!-- BADGES -->
<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node" />
</p>

---

## 📖 About The Project

ReWeaR is a modern, full-stack e-commerce web application built using the MERN stack (MongoDB, Express, React, Node.js). It features a sleek, responsive dark theme, dynamic product routing, user authentication, and a fully functional shopping cart powered by Redux.

### ✨ Key Features

* **Modern Dark Theme:** Custom CSS with responsive grid layouts and sleek transparent gradients.
* **Dynamic Product Catalog:** Products are fetched directly from a MongoDB database and rendered via React Router.
* **Shopping Cart (Redux):** Add to cart, adjust quantities, remove items, and calculate totals in real-time.
* **User Authentication:** Secure login and registration flows.
* **Scalable Backend:** Express.js REST API handling product data, user data, and cart logic.

---

## 🚀 Getting Started with Create React App

This project's frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Follow the instructions below to run the application locally.

### Prerequisites
Make sure you have Node.js and npm installed. To run the full application, you will also need to start your Express backend on port `5000`.

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature.

---

## 📚 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Useful React App Links
* [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
* [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
* [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
* [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
* [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
* [`npm run build` fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## 📂 Project Structure

```text
rewear/
├── backend/
│   ├── models/         # Mongoose schemas (User, Product)
│   ├── routes/         # Express API routes
│   └── server.js       # Entry point
└── frontend/
    ├── src/
    │   ├── components/ # Reusable UI components (Navbar, ProductCard)
    │   ├── pages/      # Route pages (Home, Cart, ProductDetail, Login)
    │   ├── redux/      # Redux store and slices (cartSlice)
    │   ├── styles/     # Custom CSS files (global.css, index.css)
    │   └── App.jsx     # Main React application & routing
    └── package.json