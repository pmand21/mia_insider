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
    <section className="bg-white text-black min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
        </header>

        <Link to="/" className="text-blue-400 underline text-sm block mb-6">
          ← Continue shopping
        </Link>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">No items in cart yet.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cartItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <img
                    src={`/src/assets/logos/${item.club.toLowerCase().replace(/\s/g, "")}_logo.jpg`}
                    alt={`${item.club} logo`}
                    className="size-16 rounded-sm object-contain bg-gray-100"
                    onError={(e) => (e.target.style.display = "none")}
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">{item.title}</h3>
                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Club: </dt>
                        <dd className="inline">{item.club}</dd>
                      </div>
                      <div>
                        <dt className="inline">Date: </dt>
                        <dd className="inline">{item.day}</dd>
                      </div>
                      <div>
                        <dt className="inline">Time: </dt>
                        <dd className="inline">{item.startTime}</dd>
                      </div>
                      <div>
                        <dt className="inline">Ticket: </dt>
                        <dd className="inline">{item.label}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(idx, -1)}
                        className="bg-gray-200 px-2 rounded disabled:opacity-50 text-sm"
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(idx, 1)}
                        className="bg-gray-200 px-2 rounded text-sm"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(idx)}
                      className="text-gray-600 transition hover:text-red-600"
                    >
                      <span className="sr-only">Remove item</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>{total.toFixed(2)} €</dd>
                  </div>
                  <div className="flex justify-between text-base font-medium">
                    <dt>Total</dt>
                    <dd>{total.toFixed(2)} €</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <button
                    className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-white transition hover:bg-gray-600"
                  >
                    Checkout →
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
