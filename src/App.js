import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/CountryInfo/Country';
import Added from './Components/Added/Added';

function App() {
  const [countries, setCountries] = useState([]);
  const [added, setAdded] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  const handleAddCountry = (country) => {
    const newAdded = [...added, country];
    setAdded(newAdded);

  }

  return (
    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
      <h2>Country added: {added.length} </h2>
      <Added added={added}></Added>
      {
        countries.map(country =>
          <Country key={country.alpha3Code} handleAddCountry={handleAddCountry} country={country}>

          </Country>)
      }
    </div>
  );
}

export default App;
