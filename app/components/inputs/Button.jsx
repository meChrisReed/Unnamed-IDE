import React from 'react'

import Shadow from '../stylize/Shadow.jsx'
import ButtonText from 'app/components/typography/ButtonText'
import ButtonDisabledText from 'app/components/typography/ButtonDissabledText'

import styles from './Button.css'

const Button = ({ children, disabled, ...props }) =>
<span className={ styles.position }>
	<Shadow depth='mid' off={ disabled }>
		<span
			{...props}
			className={[
				styles.Button,
				disabled ? styles.disabled : ''
			].join(' ')}
		>
			{
				disabled ?
					<ButtonDisabledText>{ children }</ButtonDisabledText> :
					<ButtonText>{ children }</ButtonText>
			}
		</span>
	</Shadow>
</span>

Button.propTypes = {
	children: React.PropTypes.string.isRequired,
	disabled: React.PropTypes.bool
}

export default Button
