import { handleConfirmOrder } from "../../../hooks/orderRequest.js";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function CartModal({ isOpen, cart, onClose, clearCart }) {
  if (!isOpen) return null;

  const onConfirm = async () => {
    try {
      const res = await handleConfirmOrder(cart);
      if (res.success) {
        toast.success("Order got confirmed please wait...");
        clearCart();
        onClose();
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Order error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Your Cart</h3>

        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart.</p>
        ) : (
          <ul className="space-y-2 mb-4">
            {cart.map((item, index) => (
              <li key={index} className="border-b pb-2">
                <div className="font-semibold">
                  {item.title} × {item.quantity}
                </div>

                {item.extras && item.extras.length > 0 && (
                  <p className="text-sm text-gray-600">
                    Extras: {item.extras.map(e => e.name).join(", ")}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={onConfirm}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Confirm Order
        </button>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
