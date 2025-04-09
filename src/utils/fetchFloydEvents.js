// src/utils/fetchFloydEvents.js

export const fetchFloydEvents = async () => {
  try {
    // const res = await fetch("http://localhost:8000/api/events?club=Floyd");
    const res = await fetch("https://mia-insider.onrender.com/api/events?club=Floyd");
    if (!res.ok) throw new Error("Failed to fetch Floyd events");
    return await res.json();
  } catch (err) {
    console.error("Error fetching Floyd events:", err);
    return [];
  }
};