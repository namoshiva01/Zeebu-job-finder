import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const APP_NAME = "Govt Job Finder";
export const PLAY_STORE_URL = "https://www.dropbox.com/scl/fi/g6zl2ad9o6ffd9kacd55l/app-debug.apk?rlkey=y6zlamowz84zlnzcl6vgzik0j&st=kj31mfcr&dl=1";
