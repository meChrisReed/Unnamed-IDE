import React from 'react'

import styles from './Card.css'
import Shadow from './Shadow.jsx'

const Card = ({ children, className, ...props }) => <Shadow
	force={true}
>
  <div
		{ ...props }
		className={[
			styles.Card,
			className
		].join(' ')}
	>{ children }</div>
</Shadow>

export default Card
