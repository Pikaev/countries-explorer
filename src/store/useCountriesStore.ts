import { create } from 'zustand'

interface CountriesStore {
  query: string
  setQuery: (query: string) => void
  region: string
  setRegion: (region: string) => void
}

export const useCountriesStore = create<CountriesStore>((set) => ({
  query: '',
  setQuery: (query) => set({ query }),
  region: '',
  setRegion: (region) => set({ region }),
}))
