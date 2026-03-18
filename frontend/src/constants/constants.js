export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : "https://medi-track-backend-p4gm.onrender.com/api";