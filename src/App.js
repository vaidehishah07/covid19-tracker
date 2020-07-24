import React, { useState, useEffect } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  // https://disease.sh/v3/covid-19/countries

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log("Country Code", countryCode);
    setCountry(countryCode);
  };

  return (
    <div className="App">
      <div className="app__header">
        <h1>Covid19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide"> worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}> {country.name}</MenuItem>
            ))}
            {/* <MenuItem value="worldwide"> worldwide</MenuItem>
            <MenuItem value="worldwide"> worldwide</MenuItem>
            <MenuItem value="worldwide"> worldwide</MenuItem>
            <MenuItem value="worldwide"> worldwide</MenuItem> */}
          </Select>
        </FormControl>
      </div>
      <div className="app__stats"></div>
    </div>
  );
}

export default App;
