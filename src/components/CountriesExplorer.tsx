'use client'

import { useMemo } from 'react'

import { Country } from '@/lib/countries'
import { filterCountries } from '@/lib/filterCountries'
import { useDebounce } from '@/hooks/useDebounce'
import { useCountriesStore } from '@/store/useCountriesStore'

import SearchInput from './SearchInput'
import CountryCard from './CountryCard'

interface Props {
  countries: Country[]
}

export default function CountriesExplorer({ countries }: Props) {
  const query = useCountriesStore((state) => state.query)
  const setQuery = useCountriesStore((state) => state.setQuery)
  const debounceQuery = useDebounce(query, 300)

  const filtered = useMemo(
    () => filterCountries(countries, debounceQuery),
    [countries, debounceQuery],
  )

  return (
    <div>
      <SearchInput
        value={query}
        onChange={setQuery}
      />
      <ul>
        {filtered.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </ul>
    </div>
  )
}
