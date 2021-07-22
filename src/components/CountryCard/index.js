import './style.css';

export default function CountryCard({ country }) {
  return (
    <li className='country-info'>
      <div className='name-info'>
        <p className='name'>{country.name.toUpperCase()}</p>
        <p className='capital'>{country.capital}</p>
      </div>

      <div className='image-container'>
        <img src={country.flag} alt={country.name} className='flag' />
      </div>

      <div className='general-info'>
        <div className='row'>
          <span className='label'>Area:</span>
          <span className='area'>{country.area}²</span>
        </div>

        <div className='row'>
          <span className='label'>Population:</span>
          <span className='population'>{country.population}</span>
        </div>

        <div className='row'>
          <span className='label'>Languages:</span>
          <span className='languages'>{country.languages.join(', ')}</span>
        </div>

        <div className='row'>
          <span className='label'>Neighboring Countries:</span>
          <span className='neighboring-countries'>
            {country.neighboringCountries}
          </span>
        </div>
      </div>
    </li>
  );
}
