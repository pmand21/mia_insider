// src/utils/fetchSpaceEvents.js

export const fetchSpaceEvents = async () => {
  try {
    // const res = await fetch("http://localhost:8000/api/events?club=Club%20Space");
    const res = await fetch("https://mia-insider.onrender.com/api/events?club=Club%20Space");
    if (!res.ok) throw new Error("Failed to fetch Club Space events");
    return await res.json();
  } catch (err) {
    console.error("Error fetching Club Space events:", err);
    return [];
  }
};