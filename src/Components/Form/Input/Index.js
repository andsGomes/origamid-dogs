import React from 'react'
import styles from './Input.module.css'; 


export const Input = ({ label, type, name }) => {
  return (
    <div>
      <label htmlFor={ name }>{ label }</label>
      <input id={ name } name ={ name } className={styles.input} type={type} />
    </div>
  )
}
