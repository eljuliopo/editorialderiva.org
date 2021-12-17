import create from "zustand"

export const useStore = create(set => ({
  isMenuOpen: false,
  toggleMenu: () => set(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen })),
  isHeaderVisible: true,
  toggleHeader: toggle => set(() => ({ isHeaderVisible: toggle })),
  isModalOpen: false,
  toggleModal: toggle => set(() => ({ isModalOpen: toggle })),
}))
