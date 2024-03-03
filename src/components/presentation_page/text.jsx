import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./presentation.module.scss";
import { TextSlaider } from "./text-slaider";
import { SlaiderPoints } from "./slaider-points-btn";
import { CustomButton } from "../custom-btn";
import { FirstSlide } from "./first-slide";
import { SecondSlide } from "./second-slide";
import { ThirdSlide } from "./third-slide";
import { Paths } from "../../paths";

export const CustomText = () => {
  const value = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [text, setText] = useState(<FirstSlide />);
  const [prevBtnText, setPrevBtnText] = useState("Пропустить");
  const [nextBtnText, setNextBtnText] = useState("Далее");

  const prevFun = () => {
    if (value === "start") {
      navigate(Paths.login);
    }
    if (value === "middle") {
      dispatch({ type: "SET_VALUE", payload: "start" });
    }
    if (value === "end") {
      navigate(Paths.login);
    }
  };

  const nextFun = () => {
    if (value === "start") {
      dispatch({ type: "SET_VALUE", payload: "middle" });
    }
    if (value === "middle") {
      dispatch({ type: "SET_VALUE", payload: "end" });
    }
    if (value === "end") {
      navigate(Paths.register);
    }
  };

  useEffect(() => {
    switch (value) {
      case "start":
        setText(<FirstSlide />);
        setPrevBtnText("пропустить");
        setNextBtnText("далее");
        break;
      case "middle":
        setText(<SecondSlide />);
        setPrevBtnText("назад");
        setNextBtnText("далее");
        break;
      case "end":
        setText(<ThirdSlide />);
        setPrevBtnText("войти");
        setNextBtnText("регистрация");
        break;
      default:
        setText(null);
        break;
    }
  }, [value, prevBtnText, nextBtnText]);

  return (
    <div className={styles.texts}>
      <h1>
        Добро пожаловать
        <br /> на сайт “намёк”!
      </h1>
      <h3>
        регистрируйтесь, указывая <br />
        свою дату рождения
      </h3>
      <TextSlaider text={text} />
      <div className={styles.wrapper_points}>
      <SlaiderPoints
          background={value === "start" ? "#A208C9" : "#fff"}
        />
        <SlaiderPoints
          background={value === "middle" ? "#A208C9" : "#fff"}
        />
        <SlaiderPoints
          background={value === "end" ? "#A208C9" : "#fff"}
        />
      </div>
      <div className={styles.btns}>
        <CustomButton
          text={prevBtnText}
          stylesProp={{
            background: "transparent",
            border: "2px solid #A208C9",
            color: "#000",
          }}
          onClick={prevFun}
        />
        <CustomButton
          text={nextBtnText}
          stylesProp={{
            background: "#A208C9",
            border: "2px solid #A208C9",
            color: "#fff",
          }}
          onClick={nextFun}
        />
      </div>
    </div>
  );
};
