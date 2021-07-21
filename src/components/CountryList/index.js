import CountryCard from '../CountryCard';

import './style.css';

export default function CountryList({ countries }) {
  return (
    <ul className='country-list'>
      {countries &&
        countries.map((country, index) => (
          <CountryCard country={country} key={index} />
        ))}
    </ul>
  );
}
