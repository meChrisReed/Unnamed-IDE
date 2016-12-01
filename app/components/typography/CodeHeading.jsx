import React from 'react'

import styles from './CodeHeading.css'

const CodeHeading = ({ children }) => (
	<span className={ styles.CodeHeading }>
		{ children }
	</span>
)

// API forces mutation of propTypes
CodeHeading.propTypes = {
	children: React.PropTypes.string
}

export default CodeHeading
