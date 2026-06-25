import { Country } from './countries'

export function filterCountries(countries: Country[], query: string) {
  return countries.filter((el) =>
    el.name.common.toLowerCase().includes(query.toLowerCase())
  )
}
