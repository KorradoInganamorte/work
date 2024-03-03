import React from "react";
import styles from "./settings.module.scss";
import { CustomModal } from "../modeal_wrapper";
import { SettingsItem } from "../settings-item";
import image_icon from "../../assets/images/image.png";
import { CustomButton } from "../custom-btn/index";

export const SettingsModal = () => {
  return (
    <CustomModal
      closeClick={() => {
        document.getElementById(
          "settings"
        ).parentNode.parentNode.style.display = "none";
        enableScroll();
      }}
    >
      <div className={styles.content_container} id="settings">
        <h2 className={styles.title}>настройки</h2>
        <div className={styles.wrapper_list_settings}>
          <ul className={styles.settings_list}>
            <span
              onClick={() => {
                document.getElementById(
                  "settings"
                ).parentNode.parentNode.style.display = "none";
                document.getElementById(
                  "background"
                ).parentNode.parentNode.style.display = "flex";
              }}
            >
              <SettingsItem text="Сменить фон" icon={image_icon} />
            </span>
            <span
              onClick={() => {
                document.getElementById(
                  "settings"
                ).parentNode.parentNode.style.display = "none";
                document.getElementById(
                  "location"
                ).parentNode.parentNode.style.display = "flex";
              }}
            >
              <SettingsItem text="Смеинть локацию" icon={image_icon} />
            </span>
            <span
              onClick={() => {
                document.getElementById(
                  "settings"
                ).parentNode.parentNode.style.display = "none";
                document.getElementById(
                  "interests"
                ).parentNode.parentNode.style.display = "flex";
              }}
            >
              <SettingsItem text="Сменить интересы" icon={image_icon} />
            </span>
            <span
              onClick={() => {
                document.getElementById(
                  "settings"
                ).parentNode.parentNode.style.display = "none";
                document.getElementById(
                  "interests"
                ).parentNode.parentNode.style.display = "flex";
              }}
            >
              <SettingsItem text="Сменить желания" icon={image_icon} />
            </span>
            <span
              onClick={() => {
                document.getElementById(
                  "settings"
                ).parentNode.parentNode.style.display = "none";
                document.getElementById(
                  "save_current_photo"
                ).parentNode.parentNode.style.display = "flex";
              }}
            >
              <SettingsItem text="Сменить фото" icon={image_icon} />
            </span>
          </ul>
        </div>
        <div className={styles.save_btn}>
          <CustomButton
            text="Сохранить"
            stylesProp={{
              background: "#A208C9",
              border: "2px solid #A208C9",
              color: "#000",
            }}
            onClick={() => {
              document.getElementById(
                "settings"
              ).parentNode.parentNode.style.display = "none";
              enableScroll();
            }}
          />
        </div>
      </div>
    </CustomModal>
  );
};
