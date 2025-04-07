import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function TicketSelector({ tickets = [], groupId, event }) {
  const [selected, setSelected] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (selected !== null) {
      addToCart({
        title: event.title,
        club: event.club,
        day: event.day,
        startTime: event.startTime,
        label: tickets[selected].label,
        price: tickets[selected].price,
        quantity: 1,
      });
    }
  };

  if (!Array.isArray(tickets) || tickets.length === 0) {
    return (
      <div className="text-sm text-gray-500 mt-3">
        No ticket options available.
      </div>
    );
  }

  return (
    <div className="mt-3 space-y-2">
      {tickets.map((ticket, idx) => (
        <label
          key={idx}
          className={`flex items-center justify-between rounded-lg px-4 py-3 cursor-pointer transition ${
            selected === idx ? "bg-gray-100" : "bg-gray-200"
          }`}
        >
          <input
            type="radio"
            name={`ticket-${groupId}`}
            className="form-radio text-blue-500"
            checked={selected === idx}
            onChange={() => setSelected(idx)}
          />
          <div className="ml-3 flex flex-col items-end text-sm text-gray-700">
            <span className="text-blue-500 font-semibold text-base">
              {ticket.price}€
            </span>
            <span className="text-right">{ticket.label}</span>
          </div>
        </label>
      ))}

      <button
        onClick={handleAddToCart}
        className="mt-3 w-full rounded-full bg-orange-400 text-white py-2 font-bold hover:bg-orange-500 transition"
        disabled={selected === null}
      >
        ADD TO BASKET
      </button>
    </div>
  );
}
