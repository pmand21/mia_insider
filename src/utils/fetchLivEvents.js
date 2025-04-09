// src/utils/fetchLivEvents.js

export const fetchLivEvents = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/events?club=LIV");
    if (!response.ok) throw new Error("Failed to fetch events");
    return await response.json();
  } catch (error) {
    console.error("Error fetching LIV events:", error);
    return [];
  }
};
