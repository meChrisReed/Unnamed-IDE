import React from 'react'

import Stage from '../app/components/elements/Stage.jsx'
import CodeBody from '../app/components/typography/CodeBody'

const stageStories = ({
  storiesOf,
  action,
  linkTo
}) =>
storiesOf.addWithInfo(
  'Default',
	'path: app/components/elements/Stage',
  () => (
		<Stage>
			<CodeBody> Some Content </CodeBody>
		</Stage>
  )
)

export default stageStories
