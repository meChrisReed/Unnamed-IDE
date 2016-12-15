import React from 'react'

import styles from './Foreground.css'

const Foreground = ({ children, leftMenuSpae }) => <div
	className={[
		styles.Foreground,
		leftMenuSpae ? styles.leftMenuSpae : ''
	].join(' ')}
>
	{ children }
</div>

export default Foreground
