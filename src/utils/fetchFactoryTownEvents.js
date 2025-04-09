// src/utils/fetchFactoryTownEvents.js

export const fetchFactoryTownEvents = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/events?club=Factory%20Town");
    if (!res.ok) throw new Error("Failed to fetch Factory Town events");
    return await res.json();
  } catch (err) {
    console.error("Error fetching Factory Town events:", err);
    return [];
  }
};