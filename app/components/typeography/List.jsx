import React from 'react'

import styles from './List.css'

const List = ({children, className, ...props}) => <ul className={[className, styles.List].join(' ')}>
	{ children }
</ul>

export default List;
