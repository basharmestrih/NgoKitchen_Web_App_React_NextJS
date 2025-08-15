"use client";

import { useState } from "react";
import WelcomeMessage from "./components/LeftSideSection/WelcomeMessage.js";
import FoodGrid from "./components/FoodItems/FoodGrid.js";
import ExtrasModal from "./components/FoodItems/ExtrasModal.js";
import useCart from "../hooks/useCart.js";
import CartModal from "./components/HeaderCartModal/CartModal.js";
import CardModal from "./components/FoodItems/CardModal.js";
import FoodCategories from "./components/LeftSideSection/FoodCategories.js";
import CountryCategories from "./components/LeftSideSection/CountryCategories.js";
import JoinUsCard from "./components/LeftSideSection/JoinUsContainer.js";
import Header from "../components/Header/Header.js";
//import ToastContainer from "../components/ToastContainer.js";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import CartStickyIcon from "./components/HeaderCartModal/CartStickyIcon.js"
import "react-toastify/dist/ReactToastify.css";
import Appa from"./components/HeaderCartModal/YourCart.js";
import useFilteredItems from "./hooks/useFoodFilter.js"
export default function FoodPage({ items }) {
  const [showPopup, setShowPopup] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
const {
  cart,
  addToCart,
  total,
  removeFromCart,
  clearCart,
  cartTotal,
} = useCart();
  const [showCartModal, setShowCartModal] = useState(false);

  const handleCartClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };
  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowCard(true);
  };
  const handleCartIconClick = () => {
    setShowCartModal(true);
  };
 const {
    filteredItems,
    selectedCountry,
    setSelectedCountry,
    selectedCategory,
    setSelectedCategory
  } = useFilteredItems(items); 
  return (
    <div className="min-h-screen bg-gray-100">
             <Appa
        isOpen={showCartModal}
        deletecart={removeFromCart}
  cart={cart}
  total={total}
  addToCart={addToCart}
        onClose={() => setShowCartModal(false)}
      />

      
 
      <WelcomeMessage />
      <CartStickyIcon cartCount={cart.length}  onCartClick={handleCartIconClick}/>
      <div className="flex items-start bg-gray-50">
        <div className="flex flex-col items-start space-y-5 pl-1">
          <FoodCategories onSelectFood={(foodcat) => setSelectedCategory(foodcat)} 
           onSelectCountry={(countrycat) => setSelectedCountry(countrycat)}
             selectedCategory={selectedCategory}  selectedCountry={selectedCountry}/>
            
         
          <JoinUsCard />
        </div>
        

        <FoodGrid items={filteredItems} onCartClick={handleCartClick} onCardClick={handleCardClick} />
      </div>

      {showPopup && selectedItem && (
        <ExtrasModal
          item={selectedItem}
          onClose={() => setShowPopup(false)}
          onAdd={({ extras, quantity }) => {
            const cartItem = { ...selectedItem, extras, quantity };
            addToCart(cartItem);
            setShowPopup(false);
          }}
        />
      )}

      {showCard && selectedItem && (
        <CardModal
          item={selectedItem}
          onClose={() => setShowCard(false)}
          onAdd={({ extras, quantity }) => {
            const cartItem = { ...selectedItem, extras, quantity };
            addToCart(cartItem);
            setShowCard(false);
            toast.success("Item added to cart!");
          }}
        />
      )}

     

<ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    </div>
  );
}
