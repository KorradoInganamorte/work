import React from "react";
import styles from "../register/register.module.scss";
import { CustomForm } from "../form/index";
import { SlaiderPoints } from "../presentation_page/slaider-points-btn";
import { CustomInput } from "../custom-input";
import { CustomCheckBox } from "../custom-checkbox-group";
import { CustomArrowBtn } from "../custom-btn/custom-arrow-btn";
import { CustomButton } from "../custom-btn";
import { back_registration } from "../../utils/function";

export const MenForm = () => {
  return (
    <div className={styles.wrapper_form}>
      <CustomForm>
        <div className={styles.wrapper_slaider_regFrom}>
          <div className={styles.points}>
            <SlaiderPoints background="#DEDED5" />
            <SlaiderPoints background="rgb(162, 8, 201)" />
          </div>
        </div>
        <div className={styles.title_form}>Регистрация</div>

        <div className={styles.wrapper_inputs}>
          <CustomInput type="text" placeholder="Дата рождения" />
          <div style={{ height: "30px" }}></div>
          <CustomInput type="text" placeholder="Ваш город" />
          <div style={{ height: "30px" }}></div>
          <CustomInput type="text" placeholder="Ваши интересы" />
          <div style={{ height: "30px" }}></div>
        </div>

        <div className={styles.remember}>
          <CustomCheckBox label_text="Запомнить меня" />
        </div>

        <div className={styles.wrapper_btns}>
          <CustomArrowBtn
            onClickFun={back_registration}
          />
          <CustomButton
            text="Зарегестрироваться"
            stylesProp={{
              background: "#A208C9",
              border: "2px solid #A208C9",
              color: "#fff",
            }}
            onClick={() => null}
          />
        </div>
      </CustomForm>
    </div>
  );
};
