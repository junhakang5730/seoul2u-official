import { create } from "zustand";

const useStore = create((set) => ({
  lang: "thai",
  toThai: () => set((state) => ({ lang: "thai" })),
  toEng: () => set((state) => ({ lang: "eng" })),
  toKor: () => set((state) => ({ lang: "kor" })),
}));

export default useStore;
