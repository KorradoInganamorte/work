import React from "react";
import styles from "./settings-item.module.scss";
import icon1 from "../../assets/images/image.svg";

export const SettingsItem = ({ icon, text }) => {
  return (
    <li className={styles.settings_item}>
      <div className={styles.icon}>
        <img src={icon1} />
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.arrow}>
        <svg
          width="24.000000"
          height="24.000000"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <clipPath id="clip134_2372">
              <rect
                id="Bold Duotone / Arrows / Round Alt Arrow Right"
                width="24.000000"
                height="24.000000"
                fill="white"
                fill-opacity="0"
              />
            </clipPath>
          </defs>
          <g clip-path="url(#clip134_2372)">
            <g opacity="0.500000">
              <path
                id="Vector"
                d="M22 12C22 17.5225 17.5225 22 12 22C6.47754 22 2 17.5225 2 12C2 6.47754 6.47754 2 12 2C17.5225 2 22 6.47754 22 12Z"
                fill="#A208C9"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </g>
            <path
              id="Vector"
              d="M11.0303 8.46973C10.7373 8.17676 10.2627 8.17676 9.96973 8.46973C9.67676 8.7627 9.67676 9.2373 9.96973 9.53027L12.4395 12L9.96973 14.4697C9.67676 14.7627 9.67676 15.2373 9.96973 15.5303C10.2627 15.8232 10.7373 15.8232 11.0303 15.5303L14.0303 12.5303C14.3232 12.2373 14.3232 11.7627 14.0303 11.4697L11.0303 8.46973Z"
              fill="#A208C9"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
          </g>
        </svg>
      </div>
    </li>
  );
};