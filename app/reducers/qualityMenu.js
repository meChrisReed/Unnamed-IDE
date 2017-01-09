import uuid from 'uuid'

const qualityMenu = (
	state = [
		{
			text: 'Test Coverage',
			open: false,
			id: uuid.v4(),
			quality: 3
		},
		{
			text: 'Cohesion',
			open: false,
			id: uuid.v4(),
			quality: 1
		},
		{
			text: 'Connascence',
			open: false,
			id: uuid.v4(),
			quality: 7
		},
		{
			text: 'Coupling',
			open: false,
			id: uuid.v4(),
			quality: 5
		},
		{
			text: 'Cyclomatic Complexity',
			open: false,
			id: uuid.v4(),
			quality: 9
		},
		{
			text: 'Function Points',
			open: false,
			id: uuid.v4(),
			quality: 4
		},
		{
			text: 'Instruction Path Length',
			open: false,
			id: uuid.v4(),
			quality: 1
		},
		{
			text: 'Maintainability',
			open: false,
			id: uuid.v4(),
			quality: 2
		},
		{
			text: 'Lines of Code',
			open: false,
			id: uuid.v4(),
			quality: 1
		},
		{
			text: 'Weighted Micro Function Points',
			open: false,
			id: uuid.v4(),
			quality: 3
		},
		{
			icon: 'pinLeft',
			text: 'Always Show',
			open: false,
			id: uuid.v4()
		}
	],
	{type, id}
) => {
	switch (type) {
		case 'OPEN_MENU_ITEM':
		console.log('in reducer', id)
			return state.map(
				i => i.id === id ?
					{ ...i, open: true } : { ...i, open: false }
			)
		default:
			return state
	}
}

export default qualityMenu
