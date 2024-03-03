import React from 'react'
import styles from './arrow-btn.module.scss'

export const CustomArrowBtn = ({onClickFun}) => {
  return (
    <button className={styles.back_presentation} onClick={onClickFun}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="82"
      height="16"
      viewBox="0 0 82 16"
      fill="none"
    >
      <path
        d="M0.292892 8.70711C-0.0976334 8.31658 -0.0976334 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM82 9H1V7H82V9Z"
        fill="#A208C9"
      />
    </svg>
  </button>
  )
}
