import React from 'react'
import ui from 'redux-ui'

import ReadingList from 'app/components/typography/ReadingList'
import Icon from 'app/components/elements/Icon.jsx'
import DividerY from 'app/components/elements/DividerY'
import TextShadow from 'app/components/stylize/TextShadow'

const MenuItem = ({ ui, updateUI, icon = 'folder', text = 'Hello Menu Item!' }) => <span
	onMouseEnter={ e => updateUI({ hover: true })}
	onMouseLeave={ e => updateUI({ hover: false })}
	style={{
		float: 'left',
		clear: 'both'
	}}
>
	<Icon force={ui.hover} name={ icon } />
	<DividerY/>
	<TextShadow force={ui.hover}>
		<ReadingList>{ text }</ReadingList>
	</TextShadow>
</span>

MenuItem.propTypes = {
	icon: React.PropTypes.string,
	text: React.PropTypes.string
}

const MenuItemUi = ui({
	state: {
		hover: false
	}
})(MenuItem)

export default MenuItemUi
