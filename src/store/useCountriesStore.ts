import { create } from 'zustand'

interface CountriesStore {
  query: string
  setQuery: (query: string) => void
}

export const useCountriesStore = create<CountriesStore>((set) => ({
  query: '',
  setQuery: (query) => set({ query }),
}))
