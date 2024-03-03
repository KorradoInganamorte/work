import React from "react";
import styles from "./back.module.scss";
import { CustomModal } from "../modeal_wrapper/index";
import { BackgroundCard } from "./card-back";
import test_back from "../../assets/images/test_back.jpg";
import { CustomButton } from "../custom-btn";
import { enableScroll } from "../../utils/function";

export const SelectBackImageModal = () => {
  return (
    <CustomModal
      closeClick={() => {
        document.getElementById(
          "background"
        ).parentNode.parentNode.style.display = "none";
        enableScroll();
      }}
    >
      <div className={styles.wrapper_content} id="background">
        <div className={styles.title}>сменить фон</div>
        <div className={styles.wrapper_backgrounds}>
          <BackgroundCard background={test_back} />
          <BackgroundCard background={test_back} />
          <BackgroundCard background={test_back} />
          <BackgroundCard background={test_back} />
          <BackgroundCard background={test_back} />
          <BackgroundCard background={test_back} />
          <BackgroundCard background={test_back} />
          <BackgroundCard background={test_back} />
        </div>
        <div className={styles.wrapper_btn}>
          <CustomButton
            text="сохранить"
            stylesProp={{
              background: "#A208C9",
              border: "2px solid #A208C9",
              color: "#fff",
            }}
            onClick={() => {
              document.getElementById(
                "background"
              ).parentNode.parentNode.style.display = "none";
              enableScroll();
            }}
          />
        </div>
      </div>
    </CustomModal>
  );
};
