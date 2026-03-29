import { useState, useMemo } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    const cost = (price * quantity).toFixed(2);

    const newItem = {
      ...item,
      quantity,
      cost,
    };

    setCart((prev) => [...prev, newItem]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const updateQuantity = (itemIndex, nextQuantity) => {
    setCart((prev) =>
      prev.map((item, index) => {
        if (index !== itemIndex) {
          return item;
        }

        const quantity = Math.max(1, Number(nextQuantity) || 1);
        const price = Number(item.price) || 0;

        return {
          ...item,
          quantity,
          cost: (price * quantity).toFixed(2),
        };
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const { total, cartTotal } = useMemo(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += Number(item.cost || 0);
    });

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
    removeFromCart,
    updateQuantity,
    clearCart,
  };
}
