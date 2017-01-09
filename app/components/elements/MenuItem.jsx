import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ui from 'redux-ui'

import ReadingList from 'app/components/typography/ReadingList'
import Icon from 'app/components/elements/Icon.jsx'
import DividerY from 'app/components/elements/DividerY'
import TextShadow from 'app/components/stylize/TextShadow'

import openMenuItem from 'app/actions/openMenuItem'

const MenuItem = ({ ui, updateUI, icon = 'folder', text = 'Hello Menu Item!', id, openMenuItem }) => <span
	onMouseEnter={ e => updateUI({ hover: true })}
	onMouseLeave={ e => updateUI({ hover: false })}
	onClick={ e => {
		openMenuItem(id)
	} }
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

export default connect(
	() => ({}),
	dispatch => bindActionCreators({
		openMenuItem
	}, dispatch)
)(MenuItemUi)
