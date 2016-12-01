import React from 'react'

import Shadow from '../stylize/Shadow.jsx'
import ButtonText from 'app/components/typography/ButtonText'

import styles from './Button.css'

const Button = ({ children }) =>
<span className={ styles.position }>
	<Shadow depth='mid'>
		<span className={ styles.Button }>
				<ButtonText>{ children }</ButtonText>
		</span>
	</Shadow>
</span>


export default Button
