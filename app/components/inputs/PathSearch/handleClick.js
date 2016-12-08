import path from 'path'
import findResults from './findResults'

// handleClick updates the store with the clicked result
//
// Interface:
// ui::object -- existing store
// updateUI::function -- used to update store
// result::string -- the result this element represents
const handleClick = (ui, updateUI, result) => {
	const parsed = path.parse(ui.valueToSearch)
	const dir = parsed.dir
	const base = ui.valueToSearch.match(/\/$/) ? parsed.base : ''
	const valueToSearch = `${dir}/${base}/${result}/`.replace(/\/+/g, '/')
	const results = findResults(valueToSearch, ui.results)

	updateUI({
		valueToSearch,
		results
	})
}

export default handleClick
