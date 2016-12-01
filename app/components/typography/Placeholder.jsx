import React from 'react'

import styles from './Placeholder.css'

const Placeholder = ({ children }) => (
	<span className={ styles.Placeholder }>
		{ children }
	</span>
)

// API forces mutation of propTypes
Placeholder.propTypes = {
	children: React.PropTypes.string
}

export default Placeholder
