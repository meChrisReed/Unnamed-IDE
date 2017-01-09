import React from 'react'

import styles from './Foreground.css'

const Foreground = ({ children, leftMenuSpace, rightMenuSpace }) => <div
	className={[
		styles.Foreground,
		(leftMenuSpace === 'icons-and-text' || leftMenuSpace === 'icons-and-menu-open') ? styles.leftMenuSpace : '',
		leftMenuSpace === 'icons' ? styles.closeLeftMenuSpace : '',

		(rightMenuSpace === 'icons-and-text' || rightMenuSpace === 'icons-and-menu-open') ? styles.rightMenuSpace : '',
		rightMenuSpace === 'icons' ? styles.closeRightMenuSpace : ''
	].join(' ')}
>
	{ children }
</div>

export default Foreground
