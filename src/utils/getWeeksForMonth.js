import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    format,
    isSameMonth,
  } from "date-fns";
  
  export function getWeeksForMonth(year, monthIndex) {
    const start = startOfWeek(startOfMonth(new Date(year, monthIndex)), { weekStartsOn: 1 }); // Monday
    const end = endOfWeek(endOfMonth(new Date(year, monthIndex)), { weekStartsOn: 1 });
  
    const weeks = [];
    let current = start;
  
    while (current <= end) {
      const weekStart = current;
      const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 });
  
      weeks.push({
        label: `${format(weekStart, "EEE d MMM")} - ${format(weekEnd, "EEE d MMM")}`,
        days: Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)),
      });
  
      current = addDays(current, 7);
    }
  
    return weeks;
  }
  