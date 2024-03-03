import React from "react";
import styles from "./presentation.module.scss";

export const SecondSlide = () => {
  return (
    <>
      <p className={styles.paragraph}>Пригласите своих друзей присоединиться к “НАМЁК”,<br/> отправив им персональные приглашения через наш сайт</p>
      <p className={styles.paragraph}>Друзья смогут просмотреть ваш список пожеланий<br/> и выбрать подарок, который хотят подарить Вам</p>
      <p className={styles.paragraph}>Друзья могут отмечать подарки, которые они уже<br/> выбрали или которыми они собираются вас порадовать</p>
    </>
  );
};
