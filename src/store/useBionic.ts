import { create } from "zustand";
import { persist } from "zustand/middleware";

type IBionicState = {
  isBionic: boolean;
  setIsBionic: (isBionic: boolean) => void;
};

export const useBionic = create<IBionicState>()(
  persist(
    (set) => ({
      isBionic: true,
      setIsBionic: (isBionic) => set({ isBionic }),
    }),
    {
      name: "bionic-storage",
    }
  )
);
