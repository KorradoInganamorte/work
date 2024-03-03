import React from "react";
import styles from "./location.module.scss";
import { CustomModal } from "../modeal_wrapper";
import { CustomInput } from "../custom-input/index";
import { CustomButton } from "../custom-btn/index";
import { enableScroll } from "../../utils/function";

export const LocationModal = () => {
  return (
    <CustomModal
      closeClick={() => {
        document.getElementById(
          "location"
        ).parentNode.parentNode.style.display = "none"; enableScroll();
      }}
    >
      <div className={styles.wrapper_content} id="location">
        <div className={styles.title}>сменить локацию</div>
        <div className={styles.wrapper_current_location}>
          <span className={styles.location_title}>Ваш город:</span>
          <span className={styles.current_location}>Тольятти</span>
        </div>
        <div className={styles.wrapper_input}>
          <CustomInput placeholder="Введите новый город " />
        </div>
        <div className={styles.wrapper_btn}>
          <CustomButton
            text="сохранить"
            stylesProp={{
              background: "#A208C9",
              border: "2px solid #A208C9",
              color: "#fff",
            }}
            onClick={() => {}}
          />
        </div>
      </div>
    </CustomModal>
  );
};
