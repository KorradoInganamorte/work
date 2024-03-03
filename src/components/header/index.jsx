import React from "react";
import styles from "./header.module.scss";
import { login } from "../../utils/function";

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.title}>намёк</div>
      <div className={styles.login_btn} onClick={login}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <ellipse
            cx="24.9998"
            cy="12.5003"
            rx="8.33333"
            ry="8.33333"
            fill="#A208C9"
          />
          <ellipse
            opacity="0.5"
            cx="24.9998"
            cy="35.4163"
            rx="14.5833"
            ry="8.33333"
            fill="#A208C9"
          />
        </svg>
        <span className={styles.text_login_btn}>Войти</span>
      </div>
    </div>
  );
};
