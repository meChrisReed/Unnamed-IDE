import fs from 'fs'
import path from 'path'

import React from 'react'
import ui from 'redux-ui'

import Card from '../stylize/Card.jsx'
import TextInput from './TextInput.jsx'

import styles from './FileSearch.css'

const tryResults = (value, previousResults) => {
	let results = previousResults
	try {
		results = fs.readdirSync(value)
	} catch(e) {}
	return results
}

const FileSearch = ({ ui, updateUI }) => <Card>
	<TextInput
		autoFocus={true}
		value={ui.valueToSearch}
		onChange={
			e => updateUI({
				valueToSearch: e.currentTarget.value,
				results: tryResults(
					e.currentTarget.value,
					ui.results
				).filter( // remove all private files
					fileName => !fileName.match(/^\./)
				).filter(
					// filter, saving strings that contain all of the letters from value
					fileName => e.currentTarget.value.split('').reduce(
						(p,c) => console.log()
					) || true
				)
			})
		}
	/>
	<ul>
		{
			ui.results.map(
				result => <li key={result}>{ result }</li>
			)
		}
	</ul>
</Card>

const FileSearchUi = ui({
	key: 'FileSearch',
	state: {
		valueToSearch: '',
		results: []
	}
})(FileSearch)

export default FileSearchUi
