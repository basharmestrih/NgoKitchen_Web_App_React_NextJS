import { ShoppingCart } from "@mui/icons-material";

const CartStickyIcon = ({cartCount, onCartClick}) => {
  return (
    <div>
      <div className="fixed top-16 right-3 z-50 sm:top-20 sm:right-4">
        <div className="relative bg-yellow-300 rounded-2xl w-12 h-16 sm:w-12 sm:h-16 flex items-center justify-center p-2 shadow-lg">
          {/* Cart Count Badge */}
          <span className="absolute -top-2 right-2 text-[11px] font-bold text-red-600 sm:text-xs">
            +{cartCount}
          </span>

          {/* Shopping Cart Icon */}
          <ShoppingCart
            sx={{ fontSize: 26 }}
            className="hover:scale-110 transition-transform cursor-pointer"
            onClick={onCartClick}
          />
        </div>
      </div>
    </div>
  )
}

export default CartStickyIcon
