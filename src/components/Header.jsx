import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { cartItems } = useCart(); // ✅ access global cart

  return (
    <header className="bg-black text-white flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <h1 className="text-xl font-bold">Mia Insider Event Calendar</h1>
      <Link to="/cart" className="relative hover:opacity-80 transition">

      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold rounded-full px-2 text-white">
            {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}
        </span>
        )}

    
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H18M7 13l-2-4m12 0H6"
          />
        </svg>
      </Link>
    </header>
  );
}
