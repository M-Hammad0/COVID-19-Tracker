import React, { useState,useEffect } from "react";
import { Cards, Charts, CountryPicker, Header } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

export default function App() {
  const [stats,setStats] = useState({
    data: {},
    country: '',
  });
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setStats({data:fetchedData});
    };
    getData();
  },[]);

  const handleCountry = async (country) => {
    const fetchedData = await fetchData(country);
    setStats({data: fetchedData, country:country});
  }

  return (
    <div className={styles.container}>
      <Header />
      <Cards data={stats.data} />
      <CountryPicker handleCountry={handleCountry} />
      <Charts data={stats.data} country={stats.country} />
    </div>
  );
}
