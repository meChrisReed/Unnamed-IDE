import React from 'react'
import ui from 'redux-ui'

import styles from './QualityMenu.css'

const QualityMenu = ({ showRightMenu, children }) => <div
	className={[
		styles.QualityMenu,
		showRightMenu === 'icons-and-text' ? styles.open : ''
	].join(" ")}
>
	<div className={ styles.children } >
		{	children }
	</div>
</div>

QualityMenu.propTypes = {
	icon: React.PropTypes.string,
	text: React.PropTypes.string
}

export default QualityMenu
