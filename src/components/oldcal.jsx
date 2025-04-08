// import { useState } from "react";
// import events from "../data/events.json";
// import EventCard from "./EventCard";
// import { getWeeksForMonth } from "../utils/getWeeksForMonth";
// import { format, parseISO, isSameDay } from "date-fns";

// const months = Array.from({ length: 12 }, (_, i) => ({
//   name: format(new Date(new Date().getFullYear(), i, 1), "LLLL"),
//   index: i,
// }));

// const clubs = [
//   "LIV",
//   "Club Space",
//   "E11EVEN",
//   "Floyd",
//   "M2",
//   "Factory Town",
//   "Do Not Sit on the Furniture",
// ];

// export default function Calendar() {
//   const currentYear = new Date().getFullYear();
//   const [selectedMonthIndex, setSelectedMonthIndex] = useState(3); // April default
//   const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);

//   const selectedMonth = months.find((m) => m.index === selectedMonthIndex);
//   const weeks = getWeeksForMonth(currentYear, selectedMonthIndex);
//   const week = weeks[selectedWeekIndex];

//   return (
//     <div className="p-6 overflow-x-auto bg-white text-black">
//       {/* Month & Week Selector */}
//       <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
//         {/* Month Dropdown */}
//         <select
//           value={selectedMonthIndex}
//           onChange={(e) => {
//             setSelectedMonthIndex(Number(e.target.value));
//             setSelectedWeekIndex(0); // reset to first week
//           }}
//           className="p-2 rounded border bg-white text-black shadow"
//         >
//           {months.map((month) => (
//             <option key={month.index} value={month.index}>
//               {month.name}
//             </option>
//           ))}
//         </select>

//         {/* Week Buttons */}
//         <div className="flex-1 flex justify-center gap-3 flex-wrap">
//           {weeks.map((w, i) => (
//             <button
//               key={w.label}
//               onClick={() => setSelectedWeekIndex(i)}
//               className={`px-4 py-1 rounded-full text-sm font-medium transition ${
//                 selectedWeekIndex === i
//                   ? "bg-orange-400 text-white"
//                   : "bg-gray-700 text-white"
//               }`}
//             >
//               {w.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Day Labels */}
//       <div className="min-w-[900px] grid grid-cols-[160px_repeat(7,1fr)]">
//         <div className="bg-gray-200 font-semibold text-sm text-center p-2 border-r border-white">
//           Club
//         </div>
//         {week.days.map((date) => (
//           <div
//             key={date.toISOString()}
//             className="bg-gray-200 text-sm text-center p-2 border-l border-white"
//           >
//             {format(date, "EEE d MMM")}
//           </div>
//         ))}
//       </div>

//       {/* Calendar Grid */}
//       <div className="min-w-[900px] grid grid-cols-[160px_repeat(7,1fr)] border rounded shadow">
//         {clubs.map((club, clubIndex) => (
//           <div
//             key={club}
//             className={`contents ${
//               clubIndex % 2 === 0 ? "bg-white" : "bg-gray-100"
//             }`}
//           >
//             {/* Club Logo Column */}
//             <div className="p-4 border-b border-gray-200 flex flex-col items-center border-r">
//               <img
//                 src={`/src/assets/logos/${club.toLowerCase().replace(/\s/g, "")}_logo.jpg`}
//                 alt={`${club} logo`}
//                 className="w-16 h-16 object-contain mb-2 rounded bg-white shadow"
//                 onError={(e) => (e.target.style.display = "none")}
//               />
//               <span className="text-sm font-medium text-center">{club}</span>
//             </div>

//             {/* Event Cells */}
//             {week.days.map((date) => {
//               const clubEvents = events.filter((e) => {
//                 const eventDate = parseISO(e.date);
//                 return e.club === club && isSameDay(eventDate, date);
//               });

//               return (
//                 <div
//                   key={`${club}-${date.toISOString()}`}
//                   className="p-2 border-b border-gray-200 border-l"
//                 >
//                   {clubEvents.length > 0 ? (
//                     clubEvents.map((event, i) => (
//                       <EventCard key={i} event={event} />
//                     ))
//                   ) : (
//                     <div className="bg-gray-200 text-sm text-gray-600 p-4 rounded text-center">
//                       No events today
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
