import React from 'react'

import Icon from '../app/components/elements/Icon.jsx';
import Divider from '../app/components/elements/Divider.jsx'

const iconStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'All Icons',
	'path: app/components/elements/Icon.jsx',
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
).addWithInfo(
	'folder',
	'path: app/components/elements/Icon.jsx',
	() => <Icon force name='folder' />
).addWithInfo(
	'git',
	'path: app/components/elements/Icon.jsx',
	() => <Icon force name='git' />
).addWithInfo(
	'history',
	'path: app/components/elements/Icon.jsx',
	() => <Icon force name='history' />
).addWithInfo(
	'trace',
	'path: app/components/elements/Icon.jsx',
	() => <Icon force name='trace' />
).addWithInfo(
	'measure',
	'path: app/components/elements/Icon.jsx',
	() => <Icon force name='measure' />
).addWithInfo(
	'pinLeft',
	'path: app/components/elements/Icon.jsx',
	() => <Icon force name='pinLeft' />
).addWithInfo(
	'unpinLeft',
	'path: app/components/elements/Icon.jsx',
	() => <Icon force name='unpinLeft' />
).addWithInfo(
	'pinRight',
	'path: app/components/elements/Icon.jsx',
	() => <Icon force name='pinRight' />
).addWithInfo(
	'unpinRight',
	'path: app/components/elements/Icon.jsx',
	() => <Icon force name='unpinRight' />
)

export default iconStories
