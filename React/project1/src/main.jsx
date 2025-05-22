import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Recipecontext from "./RecipeContext/Recipecontext.jsx";

createRoot(document.getElementById("root")).render(
  <Recipecontext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Recipecontext>
);
