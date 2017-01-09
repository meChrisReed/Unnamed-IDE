import React from 'react'

import Shadow from 'app/components/stylize/Shadow'

import styles from './QualityIndicator.css'

const QualityIndicator = ({ force, quality = 1 }) => <span className={ styles.context }>
	<Shadow force={force} depth='mid'>
		<span
			className={[
				styles.QualityIndicator,
				styles[`sev${quality}`]
			].join(' ')}
		></span>
	</Shadow>
</span>

export default QualityIndicator
