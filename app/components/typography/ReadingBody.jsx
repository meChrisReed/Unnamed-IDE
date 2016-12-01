import React from 'react'

import styles from './ReadingBody.css'

const ReadingBody = ({ children }) => (
	<span className={ styles.ReadingBody }>
		{ children }
	</span>
)

// API forces mutation of propTypes
ReadingBody.propTypes = {
	children: React.PropTypes.string
}

export default ReadingBody
