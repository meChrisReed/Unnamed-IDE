import fs from 'fs'
import path from 'path'

import React from 'react'
import ui from 'redux-ui'

import Card from '../stylize/Card.jsx'
import TextInput from './TextInput.jsx'
import List from '../typeography/List'
import ListItem from '../typeography/ListItem'

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
		className={styles.TextInput}
		value={ui.valueToSearch}
		onChange={
			e => {
				const findResults = value => tryResults(
					value,
					ui.results
				).filter( // remove all private files
					fileName => !fileName.match(/^\./)
				).filter(
					// filter the strings that contain at least one char from the value
					// TODO filter the strings that contain all of the letters from value
					fileName => !!value.match(/\/$/) ||
						fileName.split('').map(
							letter => path.parse(value).base.split('').includes(letter)
						).reduce(
							(p,c) => p || c, false
						)
				)
				const results = findResults(e.currentTarget.value)

				const valueToSearch = results.length === 1 ?
					`${path.parse(e.currentTarget.value).dir}/${results[0]}/`.replace('//', '/') :
					e.currentTarget.value

				updateUI({
					valueToSearch: tryResults(valueToSearch) ? valueToSearch : e.currentTarget.value,
					results: findResults(valueToSearch)
				})
			}
		}
	/>
<List>
		{
			ui.results.map(
				result => <ListItem key={result}>{ result }</ListItem>
			)
		}
	</List>
</Card>

const FileSearchUi = ui({
	key: 'FileSearch',
	state: {
		valueToSearch: '',
		results: []
	}
})(FileSearch)

export default FileSearchUi
