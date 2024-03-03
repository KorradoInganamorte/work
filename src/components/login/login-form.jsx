import React from "react";
import styles from "./login.module.scss";
import { CustomForm } from "../form/index";
import { CustomInput } from "../custom-input";
import { CustomButton } from "../custom-btn/index";
import { CustomCheckBox } from "../custom-checkbox-group";
import { CustomArrowBtn } from "../custom-btn/custom-arrow-btn";
import { back_presentation_page } from "../../utils/function";

export const LoginForm = () => {

  return (
    <div className={styles.wrapper_form}>
      <CustomForm>
        <div className={styles.title_form}>вход в намёк</div>
      
        <CustomInput placeholder="Логин" type="text" />
        <div style={{ height: "30px" }}></div>
        <CustomInput placeholder="Пароль" type="password" />
        <div style={{ height: "30px" }}></div>
      
        <div className={styles.password_forgot}>
          <CustomCheckBox label_text={'Забыли пароль'}/>
        </div>
        <div className={styles.wrapper_btns}>
          <CustomArrowBtn onClickFun={back_presentation_page}/>

          <CustomButton
            text="войти"
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
