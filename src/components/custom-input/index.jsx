import React from 'react'
import styles from './input.module.scss'

export const CustomInput = ({type, placeholder}) => {
  return (
    <input placeholder={placeholder} type={type} className={styles.custom_input} ></input>
  )
}
