import React from 'react'

import styles from './TextInput.css'
import Icon from '../elements/Icon'

const TextInput = props =>
<input
	{...props}
	className={styles.input}
	type='text'
/>

export default TextInput
