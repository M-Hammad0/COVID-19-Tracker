import React from "react";
import styles from "./Header.module.css";
import covid from "../../images/covid.png";

function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>COVID-19 TRACKER</h1>
      <img className={styles.image} src={covid} alt="COVID"></img>
    </div>
  );
}

export default Header;
