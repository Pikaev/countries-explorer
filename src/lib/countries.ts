export interface Country {
  name: {
    common: string
  }
  cca3: string
  population: number
  flags: {
    svg: string
  }
}

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

  return data as Country[]
}
