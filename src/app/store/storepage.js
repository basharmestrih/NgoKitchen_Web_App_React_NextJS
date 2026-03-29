"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import WelcomeMessage from "./components/LeftSideSection/WelcomeMessage.js";
import FoodGrid from "./components/FoodItems/FoodGrid.js";
import ExtrasModal from "./components/FoodItems/ExtrasModal.js";
import useCart from "../hooks/useCart.js";
import CardModal from "./components/FoodItems/CardModal.js";
import FoodCategories from "./components/LeftSideSection/FoodCategories.js";
import CartStickyIcon from "./components/HeaderCartModal/CartStickyIcon.js";
import YourCart from "./components/HeaderCartModal/YourCart.js";
import "react-toastify/dist/ReactToastify.css";
import useFilteredItems from "./hooks/useFoodFilter.js";
import CountryChips from "./components/LeftSideSection/CountryCategories.js";

export default function FoodPage({ items }) {
  const [showPopup, setShowPopup] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCartPage, setShowCartPage] = useState(false);

  const {
    cart,
    addToCart,
    total,
    removeFromCart,
    clearCart,
    updateQuantity,
  } = useCart();

  const {
    filteredItems,
    selectedCountry,
    setSelectedCountry,
    selectedCategory,
    setSelectedCategory,
  } = useFilteredItems(items);

  const handleCartClick = (item) => {
    addToCart({
      ...item,
      extras: [],
      quantity: 1,
    });
    toast.success("Item added to cart!");
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowCard(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {showCartPage ? (
        <YourCart
          isOpen={showCartPage}
          onClose={() => setShowCartPage(false)}
          cart={cart}
          deletecart={removeFromCart}
          updateQuantity={updateQuantity}
          total={total}
          clearCart={clearCart}
        />
      ) : (
        <>
          <div className="px-4 py-4 sm:px-6 lg:px-8 space-y-2">
            <WelcomeMessage />
            <div className="space-y-2">
              <CountryChips
                onSelectCountry={setSelectedCountry}
                selectedCountry={selectedCountry}
              />
              <FoodCategories
                onSelectFood={(foodcat) => setSelectedCategory(foodcat)}
                onSelectCountry={(countrycat) => setSelectedCountry(countrycat)}
                selectedCategory={selectedCategory}
                selectedCountry={selectedCountry}
              />
            </div>
          </div>

          <CartStickyIcon
            cartCount={cart.length}
            onCartClick={() => setShowCartPage(true)}
          />

          <div className="px-4 py-6 sm:px-6 lg:px-8">
            <FoodGrid
              items={filteredItems}
              onCartClick={handleCartClick}
              onCardClick={handleCardClick}
            />
          </div>
        </>
      )}

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
