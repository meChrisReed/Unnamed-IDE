import React from 'react'

import MenuItem from '../app/components/elements/MenuItem.jsx'

const menuItemStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'Composition',
	'path: app/components/elements/MenuItem',
  () => ( <MenuItem/>
  )
)

export default menuItemStories
