const API_KEY = import.meta.env.VITE_API_KEY || "Your-default-key-for-development";

export const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;