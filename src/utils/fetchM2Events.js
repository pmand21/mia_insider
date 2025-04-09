// src/utils/fetchM2Events.js

export const fetchM2Events = async () => {
  try {
    // const res = await fetch("http://localhost:8000/api/events?club=M2");
    const res = await fetch("https://mia-insider.onrender.com/api/events?club=M2");
    if (!res.ok) throw new Error("Failed to fetch M2 events");
    return await res.json();
  } catch (err) {
    console.error("Error fetching M2 events:", err);
    return [];
  }
};