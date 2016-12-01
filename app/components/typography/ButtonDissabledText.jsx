import React from 'react'

import styles from './ButtonDissabledText.css'

const ButtonDissabledText = ({ children }) => (
	<span className={ styles.ButtonDissabledText }>
		{ children }
	</span>
)

// API forces mutation of propTypes
ButtonDissabledText.propTypes = {
	children: React.PropTypes.string
}

export default ButtonDissabledText
