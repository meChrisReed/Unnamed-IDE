import React from 'react'

import styles from './Card.css'
import Shadow from './Shadow.jsx'

const Card = ({ children }) => <Shadow
	force depth='low'
>
  <div
		className={ styles.Card }
	>{ children }</div>
</Shadow>

export default Card
