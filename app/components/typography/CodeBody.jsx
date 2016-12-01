import React from 'react'

import styles from './CodeBody.css'

const CodeBody = ({ children }) => (
	<span className={ styles.CodeBody }>
		{ children }
	</span>
)

// API forces mutation of propTypes
CodeBody.propTypes = {
	children: React.PropTypes.string
}

export default CodeBody
