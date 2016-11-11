import React from 'react'

import ProgressBar from '../../app/components/elements/ProgressBar.jsx'

const progressBarStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'default',
  () => (
		<div style={{
			height: '48px',
			width: '477px'
		}}>
			<ProgressBar persentComplete={20}/>
		</div>
  )
)

export default progressBarStories
