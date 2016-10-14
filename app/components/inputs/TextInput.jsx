import React from 'react'

import styles from './TextInput.css'
import Icon from '../elements/Icon'

const TextInput = ({className, ...props}) => <div
	className={[
		className,
		styles.TextInput
	].join(' ')}
>
	<Icon name='pencil' className={styles.Icon}/>
	<input
		{...props}
		className={styles.input}
		type='text'
	/>
</div>

export default TextInput
