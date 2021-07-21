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
      return {
        name,
        flag,
        languages: languages.map(({ name }) => name),
        capital,
        area: new Intl.NumberFormat('en-us', {
          style: 'unit',
          unit: 'kilometer'
        }).format(area),
        population: new Intl.NumberFormat('en-us', {
          notation: 'compact',
        }).format(population),
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
