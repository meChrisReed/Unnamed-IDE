import React from 'react'

import styles from './ListItem.css'

const ListItem = ({ children, ...props }) => <li
	{...props}
	className={styles.ListItem}
>{ children }</li>

export default ListItem
