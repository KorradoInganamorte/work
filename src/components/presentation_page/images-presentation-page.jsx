import React from "react";
import catImage from '../../assets/images/cat.png'
import bdImages from "../../assets/images/BD.png";
import styles from "./presentation.module.scss";

export const ImagesPresentationPage = () => {
  return (
    <div className={styles.images_container}>
      <img src={catImage} className={styles.cat} />
      <img src={bdImages} className={styles.bd} />
    </div>
  );
};
