import { notFound } from 'next/navigation'
import z from 'zod'

const CountrySchema = z.object({
  name: z.object({
    common: z.string(),
  }),
  region: z.string(),
  cca3: z.string(),
  population: z.number(),
  flags: z.object({
    svg: z.string(),
  }),
  capital: z.array(z.string()).optional(),
  subregion: z.string().optional(),
  languages: z.record(z.string(), z.string()).optional(),
  area: z.number().optional(),
})

export type Country = z.infer<typeof CountrySchema>

export async function fetchCountries(): Promise<Country[]> {
  const res = await fetch(
    'https://studies.cs.helsinki.fi/restcountries/api/all',
    {
      next: { revalidate: 3600 },
    },
  )

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`)
  }

  const data = await res.json()

  if (!Array.isArray(data)) {
    throw new Error('API returned non-array data')
  }

  return z.array(CountrySchema).parse(data)
}

export async function fetchCountry(code: string): Promise<Country> {
  const countries = await fetchCountries()
  const country = countries.find((c) => c.cca3 === code)

  if (!country) {
    notFound()
  }

  return country!
}
