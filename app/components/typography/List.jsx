import React from 'react'

import styles from './List.css'

const List = ({ children }) => <ul className={styles.List}>
	{ children }
</ul>

List.propTypes = {
	children: React.PropTypes.array,
}

export default List;
