import React from "react";
import styles from "./modal.module.scss";

export const CustomModal = ({ children, closeClick }) => {
  return (
    <div className={styles.wrapper_modal}>
      <div className={styles.modal}>
            <div className={styles.close_cross} onClick={closeClick}></div>
         {children} </div>
    </div>
  );
};
