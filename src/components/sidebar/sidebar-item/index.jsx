import React from "react";
import styles from "./sidebar-item.module.scss";
import border from "../../../assets/images/border.svg";

export const SidebarItem = ({ icon, text, onClick }) => {
  return (
    <div className={styles.wrapper_item} onClick={onClick}>
      <div className={styles.content}>
        <div className={styles.wrapper_icon}>
          <img src={icon} alt="icon" className={styles.icon} />
        </div>
        <div className={styles.text}>{text}</div>
        <div className={styles.border}>
          <img src={border} alt="border" />
        </div>
      </div>
    </div>
  );
};
