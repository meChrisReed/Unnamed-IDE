import React from 'react'
import { connect } from 'react-redux'
import ui from 'redux-ui'
import { Link } from 'react-router'

import Stage from 'app/components/elements/Stage'
import CodeHeading from 'app/components/typography/CodeHeading'
import CodeBody from 'app/components/typography/CodeBody'
import Menu from 'app/components/elements/Menu'
import MenuItem from 'app/components/elements/MenuItem'
import QualityMenuItem from 'app/components/elements/QualityMenuItem'
import Foreground from 'app/components/elements/Foreground'

const Editor = ({ ui, updateUI }) => <div
	style={{
		position: 'relative'
	}}
>
	<div
		style={{ display: 'inline-flex', position: 'absolute' }}
		onMouseEnter={ e => updateUI({
			showLeftMenu: true
		})}
		onMouseLeave={ e => updateUI({
			showLeftMenu: false
		})}
	>
		<Menu>
			<MenuItem icon='folder' text='Explore Files'/>
			<MenuItem icon='history' text='Recent Files'/>
			<MenuItem icon='git' text='View Diff'/>
			<MenuItem icon='trace' text='Explore Symbols'/>
			<MenuItem icon='pinLeft' text='Always Show'/>
		</Menu>
	</div>

	<Foreground leftMenuSpae={ ui.showLeftMenu }>
		<CodeHeading> SomeText.jsx </CodeHeading>
		<Stage leftMenuSpae={ ui.showLeftMenu }>
			<div style={{
					height: '120vh',
				}}>
			</div>
		</Stage>
	</Foreground>

</div>

const EditorUi = ui({
	state: {
		showLeftMenu: false,
		showRightMenu: false
	}
})(Editor)

export default connect(
  () => ({}),
  () => ({})
)(EditorUi)
