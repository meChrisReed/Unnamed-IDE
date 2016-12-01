import React from 'react'

import styles from './ButtonText.css'

const ButtonText = ({ children }) => (
	<span className={ styles.ButtonText }>
		{ children }
	</span>
)

// API forces mutation of propTypes
ButtonText.propTypes = {
	children: React.PropTypes.string
}

export default ButtonText
