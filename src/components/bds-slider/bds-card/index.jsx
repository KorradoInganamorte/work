import React from "react";
import styles from "./bds.module.scss";
import border from '../../../assets/images/border.svg'

export const BdsCard = () => {
  return (
    <div className={styles.wrapper_card}>
      <div>
        <div className={styles.wrapper_title}>
          <span className={styles.date}>8 февраля</span>
        </div>
        <div className={styles.wrapper_main_text}>
          <span className={styles.person}>День рождения у Марии Петровой</span>
          <span className={styles.present}>Подарю: Фен </span>
        </div>
      </div>
      <div className={styles.border}>
        <img src={border} alt="border" />
      </div>
    </div>
  );
};
