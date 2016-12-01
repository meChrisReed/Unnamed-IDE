import React from 'react'

import Icon from '../app/components/elements/Icon.jsx';
import Divider from '../app/components/elements/Divider.jsx'

const iconStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'All Icons',
  () => <div>
		<Icon name='folder' />
		<Icon name='git' />
		<Icon name='history' />
		<Icon name='trace' />
		<Icon name='measure' />
		<Icon name='pinLeft' />
		<Icon name='unpinLeft' />
		<Icon name='pinRight' />
		<Icon name='unpinRight' />
		<Divider/>
		<Icon force name='folder' />
		<Icon force name='git' />
		<Icon force name='history' />
		<Icon force name='trace' />
		<Icon force name='measure' />
		<Icon force name='pinLeft' />
		<Icon force name='unpinLeft' />
		<Icon force name='pinRight' />
		<Icon force name='unpinRight' />
  </div>
)



export default iconStories
