'use client'

import { Country } from '@/lib/countries'
import { useMemo } from 'react'

interface Props {
  countries: Country[]
  region: string
  onChange: (region: string) => void
}

export default function RegionFilter({ countries, region, onChange }: Props) {
  const regions = useMemo(
    () => [...new Set(countries.map((c) => c.region))].filter(Boolean).sort(),
    [countries],
  )

  const base = 'px-4 py-1.5 rounded-full text-sm font-medium'
  const active = `${base} bg-blue-500 text-white`
  const inactive = `${base} bg-gray-100 text-gray-700 hover:bg-gray-200`

  return (
    <div className='flex flex-wrap gap-2 my-4'>
      <button
        onClick={() => onChange('')}
        className={region === '' ? active : inactive}
      >
        All
      </button>
      {regions.map((r) => (
        <button
          key={r}
          onClick={() => onChange(r === region ? '' : r)}
          className={region === r ? active : inactive}
        >
          {r}
        </button>
      ))}
    </div>
  )
}
