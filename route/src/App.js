import React from "react"; 
import { BrowserRouter , Routes, Route } from "react-router-dom";
import {Login} from "./Pages/Login";
import Products from "./Pages/Products";
import Details from "./Pages/Details";
import Cart from "./Pages/Cart";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product" element={<Products></Products>} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
    
  );
}

export default App;
