import React from 'react'

import Shadow from 'app/components/stylize/Shadow'

import styles from './Stage.css'

const Stage = ({ children, leftMenuSpace }) =>
<div
	className={[
		styles.wrap,
		leftMenuSpace ? styles.leftMenuSpace : ''
	].join(' ')}
>
	<Shadow force fillWidth depth="high">
		<div
			className={[
			styles.Stage,
			leftMenuSpace ? styles.leftMenuSpace : ''
		].join(' ')}>
			{ children }
		</div>
	</Shadow>
</div>

// --margin: 7px;
// --padding: 14px;
// width: calc(100vw - var(--padding) - var(--padding) - 34px);
// window.innerWidth - 14 - 14 - 34
// width: calc(100vw - var(--padding) - var(--padding) - 34px - 140px);
// window.innerWidth - 14 - 14 - 34 - 140

// style={{
// 	transform: leftMenuSpace ?
// 		`translateX(-${140/2}px) scaleX(${ (window.innerWidth - 14 - 14 - 34 - 140) / (window.innerWidth - 14 - 14 - 34) })` :
// 		''
// }}

export default Stage
