import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type BionicState = {
  isBionic: boolean;
  setIsBionic: (isBionic: boolean) => void;
};

export const useBionic = create<BionicState>()(
  persist(
    (set) => ({
      isBionic: true,
      setIsBionic: (isBionic) => set({ isBionic }),
    }),
    {
      name: 'bionic-storage',
    },
  ),
);