import { getSession } from "next-auth/react";

export async function handleConfirmOrder(cart) {
  try {
    const session = await getSession();

    if (!session || !session.user?.name) {
      throw new Error("User not authenticated");
    }

    const userName = session.user.name;

    const formattedCart = cart.map(item => ({
      name: item.title,
      quantity: item.quantity,
      extras: item.extras.map(extra => ({
        name: extra.name,
      })),
    }));

    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, items: formattedCart }),
    });

    const data = await res.json();
    return { success: res.ok, data };
  } catch (error) {
    console.error("handleConfirmOrder error:", error);
    return { success: false, error };
  }
}
