import React, { useState } from "react";
import styles from "./register.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CustomForm } from "../form";
import { SlaiderPoints } from "../presentation_page/slaider-points-btn";
import { CustomArrowBtn } from "../custom-btn/custom-arrow-btn";
import { CustomButton } from "../custom-btn";
import { back_presentation_page } from "../../utils/function";
import { RadioCheckBox } from "../custom-radio-checkbox";
import { Paths } from "../../paths";

export const RegisterForm = () => {
  const value = useSelector((state) => state.checkbox.value);
  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const next_page_reg = (e) => {
    e.preventDefault();
    localStorage.setItem("name", formData.name)
    localStorage.setItem("email", formData.email)
    localStorage.setItem("password", formData.password)
    if (value) {
      value === "Жен" ? navigation(Paths.femal) : navigation(Paths.men);
    }
  };

  return (
    <div className={styles.wrapper_form}>
      <CustomForm>
        <div className={styles.wrapper_slaider_regFrom}>
          <div className={styles.points}>
            <SlaiderPoints background="rgb(162, 8, 201)" />
            <SlaiderPoints background="#DEDED5" />
          </div>
        </div>
        <div className={styles.title_form}>Регистрация</div>

        <div className={styles.wrapper_inputs}>
          <input value={formData.name} onChange={handleChange} name="name" type="text" placeholder="Ваше имя" className={styles.custom_input} ></input>
          <div style={{ height: "30px" }}></div>
          <input value={formData.email} onChange={handleChange} name="email" type="text" placeholder="Создайте логин" className={styles.custom_input} ></input>
          <div style={{ height: "30px" }}></div>
          <input value={formData.password} onChange={handleChange} name="password" type="text" placeholder="Придумайте пароль" className={styles.custom_input} ></input>
          <div style={{ height: "30px" }}></div>
        </div>

        <div className={styles.wrapper_checkboxs}>
          <RadioCheckBox label_text="Муж" />
          <RadioCheckBox label_text="Жен" />
        </div>

        <div className={styles.wrapper_btns}>
          <CustomArrowBtn onClickFun={back_presentation_page} />
          <CustomButton
            text="Далее"
            stylesProp={{
              background: "#A208C9",
              border: "2px solid #A208C9",
              color: "#fff",
            }}
            onClick={next_page_reg}
          />
        </div>
      </CustomForm>
    </div>
  );
};
