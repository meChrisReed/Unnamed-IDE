import React from 'react'

import styles from './ListItem.css'

const ListItem = ({ children, className, ...props }) => <li
	{...props}
	className={`${styles.ListItem} ${className}`}
>{ children }</li>

export default ListItem
