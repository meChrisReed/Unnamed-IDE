// node lib
import path from 'path'
// stack modules
import React, { Component } from 'react'
import ui from 'redux-ui'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'

// project components
import Card from '../stylize/Card.jsx'
import TextInput from './TextInput.jsx'
import List from 'app/components/typography/List'
import ListItem from '../typography/ListItem'

// actions
import searchPath from 'app/actions/searchPath'

import styles from './PathSearch.css'

const handleKeyInput = ({ e, updateUI, selectedResultIndex, results, currentPath, searchPath }) => {
	// if shift key is active, assume the user does not want to use this component
	if (e.shiftKey) {
		return
	}

	const parsed = path.parse(currentPath)
	const dir = parsed.dir
	const base = currentPath.match(/\/$/) ? parsed.base : ''

	const controlDictionary = {
		// default keyCode function
		[e.keyCode]: i => i,
		// press enter/return
		[13]: () => {
			// push('/editor')
			// asyncLoadProject(currentPath)
		},
		// press tab
		[9]: () => {
			e.preventDefault()
			const updatedPath = `${dir}/${base}/${results[selectedResultIndex] || ''}/`.replace(/\/+/g, '/')
			searchPath(updatedPath)
			updateUI({
				currentPath: updatedPath,
				selectedResultIndex: 0
			})
		},
		// press up
		[38]: () => {
			e.preventDefault()
			updateUI({
				selectedResultIndex: selectedResultIndex > 1 ?
					selectedResultIndex - 1 :
					0
				})
			},
		// press down
		[40]: () => {
			e.preventDefault()
			updateUI({
				selectedResultIndex: selectedResultIndex < results.length - 1 ?
					selectedResultIndex + 1 :
					selectedResultIndex
				})
		}
	}
	const lookupControll = controlDictionary[e.keyCode]()
}

const PathSearch = ({
	ui,
	results = [],

	updateUI,
	searchPath
}) => {
	const {
		currentPath = '',
		selectedResultIndex = 0
	} = ui

	return <div
		onKeyDown={ e => handleKeyInput({ e, updateUI, selectedResultIndex, results, currentPath, searchPath }) }
	>
		<TextInput
			placeholder=''
			autoFocus={true}
			className={styles.TextInput}
			value={currentPath}
			onChange={ e => {
				updateUI({currentPath: e.currentTarget.value})
				searchPath(e.currentTarget.value)
			}}
		/>
	<List>
			{
				results.map(
					(result, i) => <ListItem
						selected={ i === selectedResultIndex }
						scrollIntoView={i === selectedResultIndex}
					>
						{ result }
					</ListItem>
				)
			}
		</List>
	</div>
}

PathSearch.propTypes = {
	results: React.PropTypes.array,
	currentPath: React.PropTypes.string,
	selectedResultIndex: React.PropTypes.number
}

const PathSearchUi = ui({
	key: 'PathSearch',
	state: {
		currentPath: '',
		selectedResultIndex: 0
	}
})(PathSearch)

export default connect(
	store => ({
		results: store.pathResults
	}),
	dispatch => bindActionCreators({ push, searchPath }, dispatch)
)(PathSearchUi)
