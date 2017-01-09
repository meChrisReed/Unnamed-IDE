import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ui from 'redux-ui'

import openMenuItem from 'app/actions/openMenuItem'

import ReadingList from 'app/components/typography/ReadingList'
import QualityIndicator from 'app/components/elements/QualityIndicator.jsx'
import DividerY from 'app/components/elements/DividerY'
import TextShadow from 'app/components/stylize/TextShadow'
import Icon from 'app/components/elements/Icon'

import styles from './QualityMenuItem.css'

const right = ({ children }) => <div
	style={{
		position: 'relative',
		float: 'right'
	}}
>
	{ children }
</div>

const QualityMenuItem = ({
	ui,
	updateUI,
	id,
	openMenuItem,
	quality = 1,
	text = 'Hello Menu Item!',
	showRightMenu = false,
	icon
}) => <span
	onMouseEnter={ e => updateUI({ hover: true })}
	onMouseLeave={ e => updateUI({ hover: false })}
	className={[
		styles.QualityMenuItem,
		showRightMenu ? styles.showRightMenu : ''
	].join(' ')}
	onClick={ e => openMenuItem(id) }
>
	<TextShadow force={ui.hover}>
		<ReadingList>{ text }</ReadingList>
	</TextShadow>
	<DividerY flip/>
	{
		icon ?
			<Icon name={icon} force={ui.hover}/> :
			<QualityIndicator force={ui.hover} quality={ quality } />
	}
</span>

QualityMenuItem.propTypes = {
	quality: React.PropTypes.number,
	text: React.PropTypes.string
}

const QualityMenuItemUi = ui({
	state: {
		hover: false
	}
})(QualityMenuItem)

export default connect(
	() => ({}),
	dispatch => bindActionCreators({
		openMenuItem
	}, dispatch)
)(QualityMenuItemUi)
