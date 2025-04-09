// src/utils/fetchDonotSitEvents.js

export const fetchDonotSitEvents = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/events?club=Do%20Not%20Sit%20on%20the%20Furniture");
    if (!res.ok) throw new Error("Failed to fetch Do Not Sit events");
    return await res.json();
  } catch (err) {
    console.error("Error fetching Do Not Sit events:", err);
    return [];
  }
};