import React, { useRef } from "react";
import styles from "./slaider-fiends.module.scss";
import { WidgetLayout } from "../layout_widgets_account";
import { CardFriend } from "./card-friend";
import Slider from "react-slick";
import photo from "../../assets/images/photo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const FriendsSlaider = () => {
  const sliderRef = useRef();

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const  settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
    <WidgetLayout>
      <div className={styles.wrapper_content}>
        <div className={styles.header}>
          <div className={styles.friends}>
            <h2>Мои друзья</h2>
            <span>24</span>
          </div>
          <div className={styles.show_all}> Посмотреть всех</div>
        </div>
        <div className={styles.wrapper_slaider}>
          <div className={styles.btn} onClick={handlePrevious}>
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip134_2372">
                  <rect
                    id="Bold Duotone / Arrows / Round Alt Arrow Right"
                    width="24.000000"
                    height="24.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#clip134_2372)">
                <g opacity="0.500000">
                  <path
                    id="Vector"
                    d="M22 12C22 17.5225 17.5225 22 12 22C6.47754 22 2 17.5225 2 12C2 6.47754 6.47754 2 12 2C17.5225 2 22 6.47754 22 12Z"
                    fill="#A208C9"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </g>
                <path
                  id="Vector"
                  d="M11.0303 8.46973C10.7373 8.17676 10.2627 8.17676 9.96973 8.46973C9.67676 8.7627 9.67676 9.2373 9.96973 9.53027L12.4395 12L9.96973 14.4697C9.67676 14.7627 9.67676 15.2373 9.96973 15.5303C10.2627 15.8232 10.7373 15.8232 11.0303 15.5303L14.0303 12.5303C14.3232 12.2373 14.3232 11.7627 14.0303 11.4697L11.0303 8.46973Z"
                  fill="#A208C9"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
          <div className={styles.slaider}>
            <Slider ref={sliderRef} {...settings}>
              <CardFriend name="Иван" photo={photo} />
              <CardFriend name="Иван" photo={photo} />
              <CardFriend name="Иван" photo={photo} />
              <CardFriend name="Иван" photo={photo} />
              <CardFriend name="Иван" photo={photo} />
              <CardFriend name="Иван" photo={photo} />
              
              <CardFriend name="Иван" photo={photo} />
              <CardFriend name="Иван" photo={photo} />
              <CardFriend name="Иван" photo={photo} />
              <CardFriend name="Иван" photo={photo} />
              <CardFriend name="Иван" photo={photo} />
              <CardFriend name="Иван" photo={photo} />
            </Slider>
          </div>
          <div className={styles.btn} onClick={handleNext}>
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip134_2372">
                  <rect
                    id="Bold Duotone / Arrows / Round Alt Arrow Right"
                    width="24.000000"
                    height="24.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#clip134_2372)">
                <g opacity="0.500000">
                  <path
                    id="Vector"
                    d="M22 12C22 17.5225 17.5225 22 12 22C6.47754 22 2 17.5225 2 12C2 6.47754 6.47754 2 12 2C17.5225 2 22 6.47754 22 12Z"
                    fill="#A208C9"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </g>
                <path
                  id="Vector"
                  d="M11.0303 8.46973C10.7373 8.17676 10.2627 8.17676 9.96973 8.46973C9.67676 8.7627 9.67676 9.2373 9.96973 9.53027L12.4395 12L9.96973 14.4697C9.67676 14.7627 9.67676 15.2373 9.96973 15.5303C10.2627 15.8232 10.7373 15.8232 11.0303 15.5303L14.0303 12.5303C14.3232 12.2373 14.3232 11.7627 14.0303 11.4697L11.0303 8.46973Z"
                  fill="#A208C9"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </WidgetLayout>
  );
};
