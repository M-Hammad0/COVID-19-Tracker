import React, { useState,useEffect } from "react";
import { Cards, Charts, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

export default function App() {
  const [stats,setStats] = useState({
    data: {}
  });
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setStats({data:fetchedData});
    };
    getData();
  }, []);
  return (
    <div className={styles.container}>
      <Cards data={stats.data} />
      <CountryPicker />
      <Charts />
    </div>
  );
}
