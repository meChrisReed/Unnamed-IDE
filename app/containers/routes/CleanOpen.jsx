import React from 'react'
import { connect } from 'react-redux'
import ui from 'redux-ui'

import Button from '../../components/inputs/Button'
import FileSearch from '../../components/inputs/FileSearch'

const CleanOpen = ({ ui, updateUI }) => <div>
  {
		ui.loadingProject ? <FileSearch userInstruction='Enter path to load project from' /> :
		<Button
			onClick={
				() => updateUI({
					loadingProject: true,
					creatingNewProject: false
				})
			}
		> Load Project </Button>
	}

	{
		ui.creatingNewProject ? <FileSearch userInstruction='Enter path to create project at' /> :
		<Button
			onClick={
				() => updateUI({
					loadingProject: false,
					creatingNewProject: true
				})
			}
		> New Project </Button>
	}
</div>

const CleanOpenUi = ui({
	key: 'CleanOpen',
	state: {
		loadingProject: false,
		creatingNewProject: false
	}
})(CleanOpen)

export default connect(
  () => ({}),
  () => ({})
)(CleanOpenUi)
