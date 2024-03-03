import React from "react";
import styles from "./presentation.module.scss";

export const ThirdSlide = () => {
  return (
    <>
      <p className={styles.paragraph}>
        Вы можете отслеживать, кто выбрал какие подарки, избегая<br/> дублирования и
        обеспечивая удивления в день рождения 
      </p>
      <p className={styles.paragraph}>
      “НАМЁК” также предоставляет подсказки и рекомендации<br/> для Ваших друзей, чтобы помочь им с выбором подарка
      </p>
    </>
  );
};
