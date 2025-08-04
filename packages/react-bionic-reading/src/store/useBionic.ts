import { create } from "zustand";
import { persist } from "zustand/middleware";

type IBionicState = {
  bionicMode: boolean;
  setBionicMode: (isBionic: boolean) => void;
};

export const useBionic = create<IBionicState>()(
  persist(
    (set) => ({
      bionicMode: true,
      setBionicMode: (bionicMode: boolean) => set({ bionicMode }),
    }),
    {
      name: "bionic-storage",
    }
  )
);
