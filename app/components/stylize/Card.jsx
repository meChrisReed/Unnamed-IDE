import React from 'react'

import styles from './Card.css'
import Shadow from './Shadow.jsx'

const Card = ({ children }) => <div className={ styles.context }>
	<Shadow
		force depth='low'
	>
		<div
			className={ styles.Card }
		>{ children }</div>
	</Shadow>
</div>

export default Card
