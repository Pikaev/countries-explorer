'use client'

import { useMemo } from 'react'

import { Country } from '@/lib/countries'
import { filterCountries } from '@/lib/filterCountries'
import { useDebounce } from '@/hooks/useDebounce'
import { useCountriesStore } from '@/store/useCountriesStore'

import CountryCard from './CountryCard'
import RegionFilter from './RegionFilter'
import SearchInput from './SearchInput'

interface Props {
  countries: Country[]
}

export default function CountriesExplorer({ countries }: Props) {
  const query = useCountriesStore((state) => state.query)
  const setQuery = useCountriesStore((state) => state.setQuery)
  const region = useCountriesStore((state) => state.region)
  const setRegion = useCountriesStore((state) => state.setRegion)
  const debounceQuery = useDebounce(query, 300)

  const filtered = useMemo(
    () => filterCountries(countries, debounceQuery, region),
    [countries, debounceQuery, region],
  )

  return (
    <div>
      <SearchInput
        value={query}
        onChange={setQuery}
      />
      <RegionFilter
        countries={countries}
        region={region}
        onChange={setRegion}
      />
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
