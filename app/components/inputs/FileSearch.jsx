import fs from 'fs'
import path from 'path'

import React, { Component } from 'react'
import ui from 'redux-ui'

import Card from '../stylize/Card.jsx'
import TextInput from './TextInput.jsx'
import List from '../typeography/List'
import ListItem from '../typeography/ListItem'

import styles from './FileSearch.css'

const tryResults = (value, previousResults) => {
	if (!value.match(/\/$/)) {
		return previousResults
	}
	let results = previousResults
	try {
		results = fs.readdirSync(value)
	} catch(e) {}
	return results
}

const findResults = (value, previousResults) => tryResults(
	value,
	previousResults
).filter( // remove all private files
	fileName => !fileName.match(/^\./)
).filter(
	// filter the strings that contain at least one char from the value
	fileName => !!value.match(/\/$/) ||
		fileName.split('').filter(
			letter => path.parse(value).base.split('').includes(letter)
		).length >= path.parse(value).base.length
)

const FileSearch = ({ ui, updateUI }) => <Card
	className={styles.Card}
	onKeyDown={
		e => {
			const selectedResultIndexDictionary = {// look up the key pressed and handle it,
				// press down
				[40]: ui.selectedResultIndex < ui.results.length - 1 ?
					ui.selectedResultIndex + 1 :
					ui.selectedResultIndex,
				// press up
				[38]: ui.selectedResultIndex > 1 ?
					ui.selectedResultIndex - 1 :
					0
			}
			const lookupResultIndex = selectedResultIndexDictionary[e.keyCode]
			const valueToSearchDictionary = {
				// tab
				[9]: `${path.parse(ui.valueToSearch).dir}/${ui.results[ui.selectedResultIndex]}/`.replace('//', '/')
			}
			const lookupValueToSearch = valueToSearchDictionary[e.keyCode]

			if (
				Object.getOwnPropertyNames({
					...selectedResultIndexDictionary,
					...valueToSearchDictionary
				}).includes(
					e.keyCode.toString()
				)
			) {
				e.preventDefault()
			}

			return updateUI({
				valueToSearch: lookupValueToSearch || ui.valueToSearch,
				results: lookupValueToSearch ?
					findResults(lookupValueToSearch, ui.results):
					ui.results,
				selectedResultIndex: lookupResultIndex === 0 ?
					lookupResultIndex :
					lookupResultIndex || ui.selectedResultIndex
			})
		}
	}
>
	<TextInput
		autoFocus={true}
		className={styles.TextInput}
		value={ui.valueToSearch}
		onChange={
			e => {

				const results = findResults(e.currentTarget.value, ui.results)

				const valueToSearch = results.length === 1 ?
					`${path.parse(e.currentTarget.value).dir}/${results[0]}/`.replace('//', '/') :
					e.currentTarget.value

				updateUI({
					valueToSearch: tryResults(valueToSearch) ? valueToSearch : e.currentTarget.value,
					results: findResults(valueToSearch, ui.results)
				})
			}
		}
	/>
<List>
		{
			ui.results.map(
				(result, i) => <ListItem
					className={[
						i === ui.selectedResultIndex ? styles.selectedResult : '',
						styles.clickable
					].join(' ')}
					key={result}
					onClick={
						e => {
							const parsed = path.parse(ui.valueToSearch)
							const dir = parsed.dir
							const base = ui.valueToSearch.match(/\/$/) ? parsed.base : ''
							console.log({
								parsed,
								dir,
								base
							})
							const valueToSearch = `${dir}/${base}/${result}/`.replace(/\/+/g, '/')
							const results = findResults(valueToSearch, ui.results)
							updateUI({
								valueToSearch,
								results
							})
						}
					}
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


export default FileSearchUi
