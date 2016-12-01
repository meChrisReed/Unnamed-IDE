import React from 'react'

import styles from './CodeList.css'

const CodeList = ({ children }) => (
	<span className={ styles.CodeList }>
		{ children }
	</span>
)

// API forces mutation of propTypes
CodeList.propTypes = {
	children: React.PropTypes.string
}

export default CodeList
