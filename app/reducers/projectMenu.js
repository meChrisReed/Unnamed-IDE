import uuid from 'uuid'

const projectMenu = (
	state = [
		{
			icon: 'folder',
			text: 'Explore Files',
			open: false,
			id: uuid.v4()
		},
		{
			icon: 'history',
			text: 'Recent Files',
			open: false,
			id: uuid.v4()
		},
		{
			icon: 'git',
			text: 'View Diff',
			open: false,
			id: uuid.v4()
		},
		{
			icon: 'trace',
			text: 'Explore Symbols',
			open: false,
			id: uuid.v4()
		},
		{
			icon: 'pinLeft',
			text: 'Always Show',
			open: false,
			id: uuid.v4()
		},
	],
	{type, id}
) => {
	switch (type) {
		case 'OPEN_MENU_ITEM':
			return state.map(
				i => i.id === id ?
					{ ...i, open: true } : { ...i, open: false }
			)
		default:
			return state
	}
}

export default projectMenu
