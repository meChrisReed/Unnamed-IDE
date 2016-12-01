import React from 'react'

import styles from './ReadingList.css'

const ReadingList = ({ children }) => (
	<span className={ styles.ReadingList }>
		{ children }
	</span>
)

// API forces mutation of propTypes
ReadingList.propTypes = {
	children: React.PropTypes.string
}

export default ReadingList
