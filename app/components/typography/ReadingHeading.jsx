import React from 'react'

import styles from './ReadingHeading.css'

const ReadingHeading = ({ children }) => (
	<span className={ styles.ReadingHeading }>
		{ children }
	</span>
)

// API forces mutation of propTypes
ReadingHeading.propTypes = {
	children: React.PropTypes.string
}

export default ReadingHeading
