import React from "react";
import { PersonalAccountLayuot } from "../personal-account/personal-account-layuot/index";
import { SideBar } from "../sidebar/index";
import { WidgetLayout } from "../layout_widgets_account";
import styles from "./friend-page.module.scss";
import woman_photo from "../../assets/images/woman_photo.png";
import add_friend_icon from "../../assets/images/add_friend.svg";
import invite_icon from "../../assets/images/invite_small.svg";
import { DBWidget } from "../bd-widget/index";
import { WishesList } from "../wishes-widget";
import { SelectPresent } from "../select-present";

export const FriendPage = () => {
  const man_back =
    "linear-gradient(45deg, rgba(217,214,249,1) 0%, rgba(179,240,233,1) 50%, rgba(202,152,241,1) 100%)";
  const woman_back =
    "linear-gradient(45deg, rgba(255,218,251,1) 0%, rgba(254,207,195,1) 50%, rgba(253,220,172,1) 100%)";

  return (
    <PersonalAccountLayuot background={man_back}>
      <SelectPresent/>
      <div className={styles.wrapper_content}>
        <SideBar />
        <div className={styles.second_column}>
          <WidgetLayout>
            <div className={styles.wrapper_user_info}>
              <div className={styles.user_photo}>
                <img src={woman_photo} alt="photo" />
              </div>
              <div className={styles.name}>Иванова Анна</div>
              <div className={styles.bd}>31.05.1980</div>
              <div className={styles.location}>Тольятти</div>
              <div className={styles.wrapper_links}>
                <div className={styles.link}>
                  <div className={styles.icon}>
                    <img src={add_friend_icon} alt="icon" />
                  </div>
                  <div className={styles.text}>Добавить в друзья</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.icon}>
                    <img src={invite_icon} alt="icon" />
                  </div>
                  <div className={styles.text}>Добавить в друзья</div>
                </div>
              </div>
              <div className={styles.wrapper_intrests}>
                <div className={styles.title}>Интересы Анны</div>
                <div className={styles.content}>
                  Спорт, Кофе, Музыка, Танцы, Книги, Сериалы, Настолки
                </div>
              </div>
            </div>
          </WidgetLayout>
        </div>
        <div className={styles.third_column}>
        <DBWidget/>
        <div style={{height:'40px'}}></div>
        <WishesList/>
        </div>
      </div>
    </PersonalAccountLayuot>
  );
};
