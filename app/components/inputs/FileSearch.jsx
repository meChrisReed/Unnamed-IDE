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
	let results = previousResults
	try {
		results = fs.readdirSync(value)
	} catch(e) {}
	return results
}

const handleScroll = e => console.log(e)

@ui({
	key: 'FileSearch',
	state: {
		valueToSearch: '',
		results: []
	}
})

class FileSearch extends Component {
	componentDidMount() {
		// TODO better element selection
		document.querySelector('#some-id').addEventListener('scroll', handleScroll);
	}

	componentWillUnmount() {
		// TODO better element selection
		document.querySelector('#some-id').removeEventListener('scroll', handleScroll);
	}

	render() {
		const { ui, updateUI } = this.props
		return <Card id='some-id' className={styles.Card}>
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
							fileName => !!value.match(/\/$/) ||
								fileName.split('').filter(
									letter => path.parse(value).base.split('').includes(letter)
								).length >= path.parse(value).base.length
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
	}
}



export default FileSearch
