import { useState, useEffect } from 'react';

import CountryList from './components/CountryList/';
import Loading from './components/Loading';

import './App.css';

const countriesAPI = 'https://restcountries.eu/rest/v2/all';

async function getApiInfo() {
  const response = await fetch(countriesAPI);
  const data = await response.json();

  const countries = data.map(
    ({ name, flag, languages, capital, area, population, borders }) => {
      const formattedLanguages = languages.map(({ name }) => name);

      const formattedArea = new Intl.NumberFormat('en-us', {
        style: 'unit',
        unit: 'kilometer',
      }).format(area);

      const formattedPopulation = new Intl.NumberFormat('en-us', {
        notation: 'compact',
      }).format(population);

      return {
        name,
        flag,
        languages: formattedLanguages,
        capital,
        area: formattedArea,
        population: formattedPopulation,
        neighboringCountries: borders.length,
      };
    },
  );

  return countries;
}

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    async function fetchData() {
      setCountries(await getApiInfo());
    }

    fetchData();
  }, []);

  if (!countries) {
    return <Loading />;
  }

  return <CountryList countries={countries} />;
}

export default App;
