import path from 'path'
import findResults from './findResults'

// handleKeyInput will update the store with key relative data and prevent
// default browser behaior
//
// Interface:
// e::object -- synthetic event that contains key press data
// ui::object -- existing ui store
// updateUI::function -- updates ui store
const handleKeyInput = (e, ui, updateUI) => {
	// selectedResultIndexDictionary::object -- a dictionary of key codes and the
	// selectedResultIndex store transformation they represent.
	const selectedResultIndexDictionary = {
		// press up
		[38]: ui.selectedResultIndex > 1 ?
			ui.selectedResultIndex - 1 :
			0,
		// press down
		[40]: ui.selectedResultIndex < ui.results.length - 1 ?
			ui.selectedResultIndex + 1 :
			ui.selectedResultIndex
	}
	// lookup our new value in the dictionary
	const lookupResultIndex = selectedResultIndexDictionary[e.keyCode]

	const parsed = path.parse(ui.valueToSearch)
	const dir = parsed.dir
	const base = ui.valueToSearch.match(/\/$/) ? parsed.base : ''

	// valueToSearchDictionary::object -- a dictionary of key codes and the
	// valueToSearch store transformation they represent.
	const valueToSearchDictionary = {
		// press tab
		[9]: `${dir}/${base}/${ui.results[ui.selectedResultIndex]}/`.replace(/\/+/g, '/')
	}
	const lookupValueToSearch = valueToSearchDictionary[e.keyCode]

	if ( // if this key is in one of our dictionaries
		Object.getOwnPropertyNames({
			...selectedResultIndexDictionary,
			...valueToSearchDictionary
		}).includes(e.keyCode.toString())
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

export default handleKeyInput
