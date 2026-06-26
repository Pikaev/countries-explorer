import { Country } from './countries'

export function filterCountries(
  countries: Country[],
  query: string,
  region: string,
) {
  return countries.filter((el) => {
    const matchesQuery = el.name.common
      .toLowerCase()
      .includes(query.toLowerCase())

    const matchesRegion = region === '' || el.region === region

    return matchesQuery && matchesRegion
  })
}
