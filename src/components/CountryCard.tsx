import { memo } from 'react'
import { Country } from '@/lib/countries'

interface Props {
  country: Country
}

const CountryCard = memo(function CountryCard({ country }: Props) {
  return (
    <li className='border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white'>
      <div className='flex items-center gap-3 mb-2'>
        <img
          src={country.flags.svg}
          alt={`Флаг ${country.name.common}`}
          className='w-8 h-auto rounded shadow-sm'
        />
        <h2 className='text-xl font-semibold'>{country.name.common}</h2>
      </div>
      <p className='text-gray-600 text-sm'>
        Население: {country.population.toLocaleString('ru-RU')}
      </p>
    </li>
  )
})

export default CountryCard
