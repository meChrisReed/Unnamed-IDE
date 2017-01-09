import React from 'react'

import styles from './DividerY.css'

const Divider = ({ flip }) => <div
	className={[
		styles.DividerY,
		flip ? styles.flip : ''
	].join(' ')}
></div>

export default Divider
