import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, setCartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const updateQuantity = (index, delta) => {
    setCartItems((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300">
        Basket → Checkout → Confirmation
      </h1>

      <Link to="/" className="text-blue-400 underline text-sm">
        ← Continue shopping
      </Link>


      {cartItems.length === 0 ? (
        <p className="text-gray-600">No items in cart yet.</p>
      ) : (
        <>
          <div className="space-y-6 mb-10">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="border-b pb-6 mb-6 border-gray-300 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={`/src/assets/logos/${item.club.toLowerCase().replace(/\s/g, "")}_logo.jpg`}
                    alt={`${item.club} logo`}
                    className="w-16 h-16 rounded object-contain bg-gray-200"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-blue-600">
                      {item.title}
                    </h2>
                    <div className="text-sm text-gray-700">
                      {item.club} · {item.day}, {item.startTime}
                    </div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end text-sm mb-1">
                    <button
                      onClick={() => updateQuantity(idx, -1)}
                      className="bg-gray-200 px-2 rounded disabled:opacity-50"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(idx, 1)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-sm">
                    Subtotal:{" "}
                    <span className="font-bold">
                      {(item.quantity * item.price).toFixed(2)} €
                    </span>
                  </div>

                  <button
                    onClick={() => removeFromCart(idx)}
                    className="mt-1 text-xs text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right text-lg font-bold">
            Total: {total.toFixed(2)} €
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow font-semibold">
              Go to Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
