import TicketSelector from "./TicketSelector";

export default function EventCard({ event }) {
  return (
    <div className="bg-gray-700 p-3 rounded mb-2">
        <a href={event.url} className="text-blue-400 font-semibold hover:underline text-sm leading-tight">
            {event.title}
        </a>
        <div className="text-xs text-gray-300 mt-1">{event.startTime}</div>
        <div className="text-xs text-gray-400">{event.djs?.join(", ")}</div>
        <TicketSelector
            tickets={event.tickets}
            groupId={event.title.replace(/\s/g, "")}
            event={event} // ✅ pass full event
        />

    </div>

  );
}
