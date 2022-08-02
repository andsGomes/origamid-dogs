import React from 'react'

import styles from './Button.module.css'

export const Button = ({ childrens  }) => {
  return <button className={styles.button}>{ childrens }</button>
}


