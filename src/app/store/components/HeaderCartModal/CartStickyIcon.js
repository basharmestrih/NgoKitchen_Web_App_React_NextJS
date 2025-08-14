import React from 'react'
import { ShoppingCart } from "@deemlol/next-icons";

const CartStickyIcon = ({cartCount, onCartClick}) => {
  return (
    <div>
        <div className="fixed top-20 right-4 z-50">
          <div className="relative bg-yellow-300 rounded-lg w-10 h-14 flex flex-col justify-center items-center p-0 shadow-lg">
            {/* Cart Count Badge */}
            <span className="text-xs font-bold text-red-600">
              +{cartCount}
            </span>
        
            {/* Shopping Cart Icon */}
            <ShoppingCart
              size={24}
              color="#000"
              className="hover:scale-110 transition-transform cursor-pointer "
              onClick={onCartClick}
            />
          </div>
        </div>
      
    </div>
  )
}

export default CartStickyIcon
