import React from 'react'
import ui from 'redux-ui'

import ReadingList from 'app/components/typography/ReadingList'
import Icon from 'app/components/elements/Icon.jsx'
import DividerY from 'app/components/elements/DividerY'
import TextShadow from 'app/components/stylize/TextShadow'

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
	icon = 'folder',
	text = 'Hello Menu Item!',
	showRightMenu = false
}) => <span
	onMouseEnter={ e => updateUI({ hover: true })}
	onMouseLeave={ e => updateUI({ hover: false })}
	className={[
		styles.QualityMenuItem,
		showRightMenu ? styles.showRightMenu : ''
	].join(' ')}
>
	<TextShadow force={ui.hover}>
		<ReadingList>{ text }</ReadingList>
	</TextShadow>
	<DividerY/>
	<Icon force={ui.hover} name={ icon } />
</span>

QualityMenuItem.propTypes = {
	icon: React.PropTypes.string,
	text: React.PropTypes.string
}

const QualityMenuItemUi = ui({
	state: {
		hover: false
	}
})(QualityMenuItem)

export default QualityMenuItemUi
