import fs from 'fs'

// tryResults error handling for the node lib in our context.
// if there is an error, return the previousResults
//
// Interface:
// value::string -- path to search the file system with
// previousResults::array -- last result of the file system search
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

export default tryResults
