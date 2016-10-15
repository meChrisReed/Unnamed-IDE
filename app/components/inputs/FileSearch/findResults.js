// node lib
import path from 'path'

// local functionality module
import tryResults from './tryResults'

// findResults: get and filter the results for value. If there is an error while
// loading results return previousResults.
//
// Interface:
// value::string -- File path to search for
// previousResults::array -- last results that were returned

const findResults = (
	value,
	previousResults
) => tryResults( // handle io errors
	value,
	previousResults
).filter( // remove all private files (files that start with '.')
	fileName => !fileName.match(/^\./)
).filter( // filter the strings that contain all of the characters in value
	fileName => !!value.match(/\/$/) ||// if fileName ends in / return true
		// convert singular fileName string to plural
		fileName.split('').filter( // each letter should be included in value's base
			letter => path.parse(value).base.split('').includes(letter)
		).length >= path.parse(value).base.length
)

export default findResults
