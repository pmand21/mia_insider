// src/utils/fetchE11Events.js

export const fetchE11Events = async () => {
  try {
    // const res = await fetch("http://localhost:8000/api/events?club=E11EVEN");
    const res = await fetch("https://mia-insider.onrender.com/api/events?club=E11EVEN");
    if (!res.ok) throw new Error("Failed to fetch E11EVEN events");
    return await res.json();
  } catch (err) {
    console.error("Error fetching E11EVEN events:", err);
    return [];
  }
};