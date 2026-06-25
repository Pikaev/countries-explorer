import { fetchCountries } from '@/lib/countries'
import CountriesExplorer from '@/components/CountriesExplorer'

export default async function HomePage() {
  const countries = await fetchCountries()
  const sortedCountries = countries.sort((a, b) => b.population - a.population)

  return (
    <main className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6'>Страны мира (SSR)</h1>
      <CountriesExplorer countries={sortedCountries} />
    </main>
  )
}
