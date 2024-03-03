import React from 'react'
import styles from './btn.module.scss'

export const CustomButton = ({text, stylesProp, onClick}) => {

  return (
    <button style={{background:stylesProp.background, border:stylesProp.border, color:stylesProp.color}} className={styles.custom_btn} onClick={onClick} type='button'>{text}</button>
  )
}
