import React from 'react'
import ui from 'redux-ui'

import styles from './QualityMenu.css'

const QualityMenu = ({ ui, updateUI, children }) => <div
	className={ styles.QualityMenu }
>
	<div
		className={ styles.children }
	>
		{	children }
	</div>
</div>

QualityMenu.propTypes = {
	icon: React.PropTypes.string,
	text: React.PropTypes.string
}

const QualityMenuUi = ui({
	state: {
		hover: false
	}
})(QualityMenu)

export default QualityMenuUi
