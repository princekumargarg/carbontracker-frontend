import { create } from "zustand";

export const useCarbonStore = create((set) => ({
  footprint: 0,
  recommendations: [],
  transport: "car", // Default transport type
  setFootprint: (footprint) => set({ footprint }),
  setRecommendations: (recommendations) => set({ recommendations }),
  setTransport: (transport) => set({ transport }),
}));
