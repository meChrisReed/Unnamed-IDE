import React from 'react'
import ui from 'redux-ui'

import styles from './Menu.css'

const Menu = ({ children, itemOpen, showLeftMenu }) => <div
	className={[
		styles.Menu,
		showLeftMenu === 'icons-and-text' ? styles.open : ''
	].join(' ')}
>
	<div
		className={ styles.children }
	>
		{	children }
	</div>
</div>

Menu.propTypes = {
	icon: React.PropTypes.string,
	text: React.PropTypes.string
}

export default Menu
