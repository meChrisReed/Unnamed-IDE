import path from 'path'
import findResults from './findResults'
import tryResults from './tryResults'

// handleTextChange updates the sotre with a new value to search
//
// Interface:
// e::object -- synthetic event containing the new value of the text input
// ui::object -- the existing ui store state
// updateUI::function -- updates the ui store
const handleTextChange = (e, ui, updateUI) => {
	// file search results
	const results = findResults(e.currentTarget.value, ui.results)

	const valueToSearch = results.length === 1 ?
		`${path.parse(e.currentTarget.value).dir}/${results[0]}/`.replace('//', '/') :
		e.currentTarget.value

	// in case we updated the value to search based on the search results. Update
	// the results with the new valueToSearch.
	const finalResults = findResults(valueToSearch, ui.results)

	updateUI({
		valueToSearch: tryResults(valueToSearch) ? valueToSearch : e.currentTarget.value,
		results: finalResults,
		selectedResultIndex: {
			[true]: ui.selectedResultIndex,
			[ui.selectedResultIndex >= finalResults.length -1]: finalResults.length -1
		}[true]
	})
}

export default handleTextChange
