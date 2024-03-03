import React from "react";
import styles from "./personal-account.module.scss";
import { PersonalAccountLayuot } from "./personal-account-layuot";
import { SideBar } from "../sidebar";
import { PersonalInfoWidget } from "../personal-information-widget";
import { BdsSlider } from "../bds-slider";
import BigCalendar from "../calendar";
import { ChartWidget } from "../chart_bd";
import { Paths } from "../../paths";
import { FriendsSlaider } from "../friends-slaider";
import { InvitationModal } from "../invitation_modal";
import { SentInvitation } from "../sent-invitation";
import { SettingsModal } from "../settings";
import { LocationModal } from "../location-modal";
import { InterestsModal } from "../interests-modal";
import { SelectBackImageModal } from "../select-back-modal";
import { SaveCurrentPhoto } from "../save-current-photo";
import { WidgetLayout } from "../layout_widgets_account";
import notifications_icon from "../../assets/images/notifications.svg";
import photo from "../../assets/images/photo.png";
import Calendar from "../slider-calendar";

export const PersonalAccount = () => {
  const personal_page_third_column = () => {
    if (window.location.pathname === Paths.home) {
      return (
        <>
          <PersonalInfoWidget />
          <div style={{ height: "17px" }}></div>
          <ChartWidget />
        </>
      );
    }
    if (window.location.pathname === Paths.friends) {
      return (
        <>
          <FriendsSlaider />
          <div style={{ height: "190px" }}></div>
          <div style={{ width: "505px" }}>
            <ChartWidget />
          </div>
        </>
      );
    }
  };

  const second_column_render = () => {
    if (window.location.pathname === Paths.home) {
      return (
        <>
          <BigCalendar />
          <div style={{ height: "30px" }}></div>
          <BdsSlider />
        </>
      );
    }
    if (window.location.pathname === Paths.friends) {
      return (
        <WidgetLayout>
          <div className={styles.wrapper_content_modal}>
            <div className={styles.notifications}>
              <img src={notifications_icon} alt="icon" />
            </div>
            <div className={styles.wrapper_photo}>
              <div>
                <div className={styles.back}>
                  <img src={photo} />
                </div>
                <div className={styles.edit}>
                  <svg
                    width="20.000000"
                    height="20.000000"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <clipPath id="clip79_327">
                        <rect
                          id="Bold Duotone / Messages, Conversation / Pen 2"
                          width="20.000000"
                          height="20.000000"
                          fill="white"
                          fill-opacity="0"
                        />
                      </clipPath>
                    </defs>
                    <g clip-path="url(#clip79_327)">
                      <g opacity="0.500000">
                        <path
                          id="Vector"
                          d="M2.70801 18.3335C2.70801 17.9883 2.98828 17.7085 3.33301 17.7085L16.666 17.7085C17.0117 17.7085 17.291 17.9883 17.291 18.3335C17.291 18.6787 17.0117 18.9585 16.666 18.9585L3.33301 18.9585C2.98828 18.9585 2.70801 18.6787 2.70801 18.3335Z"
                          fill="#FFFFFF"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </g>
                      <g opacity="0.500000">
                        <path
                          id="Vector"
                          d="M15.9004 2.43457C16.9248 3.4585 16.9248 5.11865 15.9004 6.14307L15.3086 6.73438C15.2842 6.72656 15.2598 6.71826 15.2344 6.70947C14.6104 6.49268 13.791 6.0835 13.0215 5.31396C12.252 4.54443 11.8428 3.7251 11.626 3.10059C11.6172 3.0752 11.6084 3.05029 11.6006 3.02588L12.1924 2.43457C13.2158 1.41064 14.876 1.41064 15.9004 2.43457Z"
                          fill="#FFFFFF"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </g>
                      <path
                        id="Vector"
                        d="M11.626 2.99951L11.6006 3.0249C11.6084 3.04932 11.6172 3.07422 11.626 3.09912C11.8428 3.72412 12.252 4.54346 13.0215 5.31299C13.791 6.08252 14.6104 6.4917 15.2354 6.7085C15.2598 6.7168 15.2842 6.7251 15.3086 6.7334L9.60059 12.4414C9.21484 12.8262 9.02246 13.0186 8.81055 13.1841C8.56055 13.3794 8.29004 13.5469 8.00293 13.6836C7.75977 13.7993 7.50195 13.8853 6.98535 14.0571L4.2627 14.9648C4.00879 15.0498 3.72852 14.9834 3.53906 14.7939C3.34961 14.6045 3.2832 14.3247 3.36816 14.0703L4.27637 11.3477C4.44824 10.8311 4.53418 10.5732 4.64941 10.3301C4.78613 10.0435 4.9541 9.77295 5.14941 9.52246C5.31445 9.31055 5.50684 9.11816 5.8916 8.7334L11.626 2.99951Z"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                        fill-rule="nonzero"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.name}>Иванов Иван</div>
            <div className={styles.bd}>31.05.1980</div>
            <div className={styles.location}>Тольятти</div>
            <Calendar />
            <div className={styles.my_interests}>
              <div className={styles.title}>Мои интересы</div>
              <div className={styles.text}>
              Спорт, Кофе, Музыка, Танцы, Книги, Сериалы,<br/> Настолки
              </div>
            </div>
            <div className={styles.my_wishes}>
              <div className={styles.title}>Мои желания</div>
              <div className={styles.text}>
              Наушники, Книга, Часы, Кроссовки
              </div>
            </div>
          </div>
        </WidgetLayout>
      );
    }
  };

  const man_back =
    "linear-gradient(45deg, rgba(217,214,249,1) 0%, rgba(179,240,233,1) 50%, rgba(202,152,241,1) 100%)";
  const woman_back =
    "linear-gradient(45deg, rgba(255,218,251,1) 0%, rgba(254,207,195,1) 50%, rgba(253,220,172,1) 100%)";

  return (
    <PersonalAccountLayuot background={man_back}>
      <InvitationModal />
      <SentInvitation />
      <SettingsModal />
      <LocationModal />
      <InterestsModal />
      <SelectBackImageModal />
      <SaveCurrentPhoto />
      <div className={styles.wrapper_content}>
        <SideBar />
        <div className={styles.wrapper_second_column}>
          {second_column_render()}
        </div>
        <div className={styles.third_colum}>{personal_page_third_column()}</div>
      </div>
    </PersonalAccountLayuot>
  );
};
