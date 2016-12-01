import React from 'react'

import styles from './TextInput.css'
import Icon from '../elements/Icon'

const TextInput = ({ placeholder }) =>
<input
	placeholder={placeholder}
	className={styles.input}
	type='text'
/>

export default TextInput
