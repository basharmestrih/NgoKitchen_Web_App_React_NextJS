import { useState, useMemo } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;

    const cost = (price * quantity).toFixed(2); // string for display

    const newItem = {
      ...item,
      cost, // cost is string like "20.00"
    };
    console.log(cart)

    setCart((prev) => [...prev, newItem]);
  };
    // Remove item by index
  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  // Calculate total cost as a number and formatted string inside useMemo
  const { total, cartTotal } = useMemo(() => {
    let sum = 0;
    cart.forEach((item, index) => {
      console.log(`Item ${index + 1} cost:`, item.cost, "| as Number:", Number(item.cost));
      sum += Number(item.cost || 0);
    });
    console.log("Total sum:", sum);
    return {
      total: sum,
      cartTotal: sum.toFixed(2),
    };
  }, [cart]);

  return {
    cart,
    addToCart,
    total,
    cartTotal,
    removeFromCart
  };
}
