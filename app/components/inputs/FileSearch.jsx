// node lib
import fs from 'fs'
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
import List from '../typeography/List'
import ListItem from '../typeography/ListItem'

// project actions
import asyncLoadProject from 'app/actions/asyncLoadProject'

// styles
import styles from './FileSearch.css'

// api
import tryResults from './FileSearch/tryResults'
import findResults from './FileSearch/findResults'

// event handlers
import handleKeyInput from './FileSearch/handleKeyInput'
import handleTextChange from './FileSearch/handleTextChange'
import handleClick from './FileSearch/handleClick'

//   FileSearch is a vissual component that is composed of a text input and a
// list. FileSearch handles key, mouse and change events. FileSearch uses the
// node apis for file search 'fs' and path parseing 'path'.
//
// Interface:
// userInstruction::string -- Value used as placeholder content. userInstruction
// should provide insinstructtions to help the user correctly enter text.
const FileSearch = ({
	ui,
	updateUI,
	userInstruction,
	asyncLoadProject,
	push
}) => <Card
	className={styles.Card}
	onKeyDown={e => handleKeyInput({ e, ui, updateUI, asyncLoadProject, push })}
>
	<TextInput
		placeholder={userInstruction}
		autoFocus={true}
		className={styles.TextInput}
		value={ui.valueToSearch}
		onChange={e => handleTextChange(e, ui, updateUI)}
	/>
<List className={styles.List}>
		{
			ui.results.map(
				(result, i) => <ListItem
					className={[
						i === ui.selectedResultIndex ? styles.selectedResult : '',
						styles.clickable
					].join(' ')}
					key={result}
					scrollIntoView={i === ui.selectedResultIndex}
					onClick={e => handleClick(ui, updateUI, result)}
				>{ result }</ListItem>
			)
		}
	</List>
</Card>

const FileSearchUi = ui({
	key: 'FileSearch',
	state: {
		valueToSearch: '',
		results: [],
		selectedResultIndex: 0
	}
})(FileSearch)


export default connect(
	state => ({}),
	dispatch => bindActionCreators({
		asyncLoadProject,
		push
	}, dispatch)
)(FileSearchUi)
