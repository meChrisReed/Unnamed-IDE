import React from 'react'
import ui from 'redux-ui'

import styles from './Menu.css'

const Menu = ({ ui, updateUI, children }) => <div
	className={ styles.Menu }
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

const MenuUi = ui({
	state: {
		hover: false
	}
})(Menu)

export default MenuUi
