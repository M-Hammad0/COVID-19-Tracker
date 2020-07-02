import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
// import styles from "./CountryPicker.module.css";
import { fetchCountries } from "./../../api/index";

function CountryPicker({handleCountry}) {
  const [fetchedCountry, setFetchCountry] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountry(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchCountry]);

  return (
    <FormControl>
      <NativeSelect defaultValue="" onChange={(e) => handleCountry(e.target.value)}>
        <option value="global">Global</option>
        {fetchedCountry.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
