import path from 'path'

import findResults from './pathResults/findResults'

const pathResults = (state = [], {type, parsePath}) => {
	switch (type) {
		case 'SEARCH_PATH':
			return findResults(parsePath, state)
		default:
			return state
	}
}

export default pathResults
