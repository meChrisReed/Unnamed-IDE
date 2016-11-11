import React from 'react'

import styles from './ProgressBar.css'

const ProgressBar = ({ persentComplete }) => <span className={styles.progressBar}>
  <span className={styles.progressIndicator}
		style={{
			width: `${persentComplete}%`
		}}
	></span>
</span>

export default ProgressBar
