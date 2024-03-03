import React from 'react'
import styles from './card.module.scss'

export const CardFriend = ({name, photo}) => {
  return (
    <div className={styles.wrapper_card}>
        <div className={styles.wrapper_icon}>
            <img alt='photo' src={photo}/>
        </div>
        <div className={styles.wrapper_name}>{name}</div>
    </div>
  )
}
