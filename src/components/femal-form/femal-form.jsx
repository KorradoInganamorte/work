import React, { useState, useEffect} from "react";
import axios from "axios";
import styles from "../register/register.module.scss";
import Sty from "./femal-form.module.scss"
import {CustomForm} from '../form/index'
import { SlaiderPoints } from "../presentation_page/slaider-points-btn";
import { CustomInput } from "../custom-input";
import { CustomCheckBox } from "../custom-checkbox-group";
import { CustomArrowBtn } from "../custom-btn/custom-arrow-btn";
import { back_registration } from "../../utils/function";


export const FemalForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    date_of_birth: '',
    location: ''
  });

  useEffect(() => {
    const e = localStorage.getItem("email");
    const n = localStorage.getItem("name");
    const pass = localStorage.getItem("password");
    setFormData(prevState => ({ 
      ...prevState,
      email: e,
      name: n,
      password: pass
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    console.log(formData)
    try {
      const response = await axios.post('http://namek.me/api/v1/auth/register', formData);
      console.log(response.data);
      // обрабатываем ответ сервера
    } catch (error) {
      console.error(error);
      // обрабатываем ошибку
    }
  };

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
          <input value={formData.date_of_birth} onChange={handleChange} name="date_of_birth" type="text" placeholder="Дата рождения" className={styles.custom_input} ></input>
          <div style={{ height: "30px" }}></div>
          <input value={formData.location} onChange={handleChange} name="location" type="text" placeholder="Ваш город" className={styles.custom_input} ></input>
          <div style={{ height: "30px" }}></div>
          <CustomInput type="text" placeholder="Ваши интересы" />
          <div style={{ height: "30px" }}></div>
          <CustomInput type="text" placeholder="Любимые цветы" />
          <div style={{ height: "30px" }}></div>
        </div>

        <div className={styles.remember}>
          <CustomCheckBox label_text="Запомнить меня" />
        </div>

        <div className={styles.wrapper_btns}>
          <CustomArrowBtn onClickFun={back_registration} />
          <div onClick={handleSubmit} style={{background:"#A208C9", border:"2px solid #A208C9", color:"#fff"}} className={Sty.custom_btn}>Зарегестрироваться</div>
        </div>
      </CustomForm>
    </div>
  );
};
