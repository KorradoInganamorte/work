import React from "react";
import styles from "./sidebar.module.scss";
import { SidebarItem } from "./sidebar-item";
import user_icon from "../../assets/images/user-icon.svg";
import friends_icon from "../../assets/images/friends.svg";
import calendar_icon from "../../assets/images/friends.svg";
import invite_icon from "../../assets/images/invite.svg";
import settings_icon from "../../assets/images/settings.svg";
import logout_icon from "../../assets/images/logout.svg";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { disableScroll } from "../../utils/function";

export const SideBar = () => {

  const navigation = useNavigate();
  return (
    <div className={styles.wrapper_sidebar}>
      <div className={styles.top_elements_wrapper}>
        <SidebarItem icon={user_icon} text="Моя страница"  onClick={()=>navigation(Paths.home)}/>
        <SidebarItem icon={friends_icon} text="Мои друзья" onClick={()=>navigation(Paths.friends)} />
        <SidebarItem icon={calendar_icon} text="Календарь"  onClick={()=>{}}/>
        <SidebarItem icon={invite_icon} text="Пригласить"  onClick={()=>{document.getElementById('invitation_modal').parentNode.parentNode.style.display = 'flex'; disableScroll();}}/>
      </div>
      <div className={styles.bottom_elements_wrapper}>
        <SidebarItem icon={settings_icon} text="Настройки"onClick={()=>{document.getElementById('settings').parentNode.parentNode.style.display = 'flex'; disableScroll();}} />
        <SidebarItem icon={logout_icon} text="Выход" onClick={()=>{navigation(Paths.presentation)}}/>
      </div>
    </div>
  );
};
