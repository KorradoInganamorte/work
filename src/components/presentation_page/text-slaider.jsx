import React from "react";
import styles from "./presentation.module.scss";
import { SecondSlide } from "./second-slide";

export const TextSlaider = ({text}) => {
    
  return (
    <div className={styles.texts_container}>
      {text}
    </div>
  );
};
