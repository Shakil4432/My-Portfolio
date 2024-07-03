import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Root from "./Components/Root/Root.jsx";
import About from "./Components/About/About.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Resume from "./Components/Resume/Resume.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
