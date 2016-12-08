import path from 'path'

import findResults from './pathResults/findResults'

const pathResults = (state = [], {type, parsePath}) => {
	switch (type) {
		case 'SEARCH_PATH':
			const results = findResults(parsePath, state)
			const valueToSearch = results.length === 1 ? `${path.parse(parsePath).dir}/${results[0]}/`.replace('//', '/') : parsePath;
			// in case we updated the value to search based on the search results. Update
			// the results with the new valueToSearch.
			const finalResults = findResults(valueToSearch, state)
			return finalResults
		default:
			return state
	}
}

export default pathResults
