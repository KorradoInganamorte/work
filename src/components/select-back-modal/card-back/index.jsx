import React from "react";
import styles from "./card.module.scss";

export const BackgroundCard = ({ background }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}></div>
      <img className={styles.background} src={background} alt="picture"/>
    </div>
  );
};
