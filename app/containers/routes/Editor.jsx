import React from 'react'
import { connect } from 'react-redux'
import ui from 'redux-ui'
import { Link } from 'react-router'

import Stage from 'app/components/elements/Stage'
import CodeHeading from 'app/components/typography/CodeHeading'
import CodeBody from 'app/components/typography/CodeBody'
import Menu from 'app/components/elements/Menu'
import MenuItem from 'app/components/elements/MenuItem'
import QualityMenu from 'app/components/elements/QualityMenu'
import QualityMenuItem from 'app/components/elements/QualityMenuItem'
import Foreground from 'app/components/elements/Foreground'

const Editor = ({ ui, updateUI, projectMenu, qualityMenu }) => <div
	style={{
		position: 'relative'
	}}
>
	<div
		style={{ display: 'inline-flex', position: 'absolute' }}
		onMouseEnter={ e => updateUI({
			showLeftMenu: 'icons-and-text',
			showRightMenu: 0
		})}
		onMouseLeave={ e => updateUI({
			showLeftMenu: 'icons',
			showRightMenu: 0
		})}
	>
		<Menu
			showLeftMenu={ ui.showLeftMenu }
			itemOpen={ projectMenu.reduce( (p, c) => p || c.open, false ) }
		>
			{ projectMenu.map( i => <MenuItem
				key={ i.id }
				{...i}
				openMenuItemUi={ () => updateUI({ showLeftMenu: 'icons-and-menu-open' })}
			/> ) }
		</Menu>
		<div className='temp-open-menu'></div>
	</div>

	<div
		style={{ display: 'inline-flex', position: 'absolute', right: 0 }}
		onMouseEnter={ e => updateUI({
			showRightMenu: 'icons-and-text',
			showLeftMenu: 0
		})}
		onMouseLeave={ e => updateUI({
			showRightMenu: 'icons',
			showLeftMenu: 0
		})}
	>
		<QualityMenu showRightMenu={ui.showRightMenu}>
			{
				qualityMenu.map(
					i => <QualityMenuItem
						key={i.id}
						{ ...i }
						openMenuItemUi={ () => updateUI({ showRightMenu: 'icons-and-menu-open' })}
					/>
				)
			}
		</QualityMenu>
	</div>

	<Foreground leftMenuSpace={ ui.showLeftMenu } rightMenuSpace={ ui.showRightMenu }>
		<CodeHeading> SomeText.jsx </CodeHeading>
		<Stage>
			<div style={{
					height: '120vh',
				}}>
			</div>
		</Stage>
	</Foreground>

</div>

const EditorUi = ui({
	state: {
		key: 'Editor',
		showLeftMenu: 0,
		// 0, 'icons', 'icons-and-text', 'icons-and-menu-open'
		showRightMenu: 0
	}
})(Editor)

export default connect(
  store => ({
		projectMenu: store.projectMenu,
		qualityMenu: store.qualityMenu
	}),
  () => ({})
)(EditorUi)
