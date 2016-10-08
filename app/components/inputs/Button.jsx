import React from 'react'

import Shadow from '../stylize/Shadow.jsx'

import styles from './Button.css'

const Button = ({ children, ...props }) => <Shadow>
  <button {...props} className={styles.Button}>{ children }</button>
</Shadow>

export default Button
