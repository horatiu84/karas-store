// Importing React library to use JSX and create components
import React from "react";

// Importing ReactDOM to interact with the DOM (Document Object Model)
import ReactDOM from "react-dom/client";

// Importing necessary functions from react-router-dom for routing
import {
  createBrowserRouter, // Creates a router that uses the browser's history API
  createRoutesFromElements, // Helps define routes using JSX
  Route, // Represents a route in the application
  RouterProvider, // Provides the router to the app
} from "react-router-dom";

// Importing custom stylesheets (Bootstrap and other custom styles)
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";

// Importing the main App component
import App from "./App";

// Importing reportWebVitals for performance monitoring (optional)
import reportWebVitals from "./reportWebVitals";

// Importing the HomeScreen component to display on the home route
import HomeScreen from "./screens/HomeScreen";

import ProductScreen from "./screens/ProductScreen";

// Creating a router with defined routes
const router = createBrowserRouter(
  createRoutesFromElements(
    // Define a route for the root path "/" that renders the App component
    <Route path="/" element={<App />} >
      {/* Define a nested route that renders HomeScreen when on the root "/" */}
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route  path="/product/:id" element={<ProductScreen />} />
    </Route>
  )
);

// Getting the root DOM element where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the app inside <React.StrictMode> to help identify potential issues
root.render(
  <React.StrictMode>
    {/* Providing the router to the app so it knows how to handle navigation */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Calling reportWebVitals to measure app performance (optional)
reportWebVitals();
