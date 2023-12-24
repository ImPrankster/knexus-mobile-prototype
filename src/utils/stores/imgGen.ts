import { create } from "zustand";

type imgGenStoreType = {
  img: string;
  mode: string;
  setting: number;
  setSetting: (setting: number) => void;
  setImg: (img: string) => void;
  setMode: (mode: string) => void;
};

export const imgGenStore = create<imgGenStoreType>()((set, get) => ({
  img: "",
  mode: "",
  setting: 0,
  setSetting: (setting) => {
    if (setting == get().setting) {
      set({ setting: -1 });
    } else {
      set({ setting });
    }
  },
  setImg: (img) => set({ img }),
  setMode: (mode) => set({ mode }),
}));
