import React from "react";
import styles from "./layout.module.scss";

export const PersonalAccountLayuot = ({ children, background }) => {
    return (
      <div
        className={styles.wrapper_personal_account}
        style={{ background: background }}
      >
        <div className={styles.confetti}>{children}</div>
      </div>
    );
  };