interface Country {
  name: {
    common: string;
  };
  cca3: string;
  population: number;
  flags: {
    svg: string;
  };
}

// Выносим фетчинг в отдельную функцию
async function fetchCountries(): Promise<Country[]> {
  const res = await fetch('https://studies.cs.helsinki.fi/restcountries/api/all', {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  const data = await res.json();

  if (!Array.isArray(data)) {
    throw new Error('API returned non-array data');
  }

  return data as Country[];
}

export default async function HomePage() {
  const countries = await fetchCountries();
  const sortedCountries = countries.sort((a, b) => b.population - a.population);

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Страны мира (SSR)</h1>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedCountries.map((country) => (
          <li 
            key={country.cca3} 
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <div className="flex items-center gap-3 mb-2">
              <img 
                src={country.flags.svg} 
                alt={`Флаг ${country.name.common}`} 
                className="w-8 h-auto rounded shadow-sm"
              />
              <h2 className="text-xl font-semibold">{country.name.common}</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Население: {country.population.toLocaleString('ru-RU')}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}