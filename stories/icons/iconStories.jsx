import React from 'react'

import Card from '../../app/components/stylize/Card.jsx'
import Shadow from '../../app/components/stylize/Shadow.jsx'
import Icon from '../../app/components/elements/Icon.jsx'

const buttonStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'default',
  () => (
    <Icon name='pencil' style={{
				float: 'left'
			}}/>
  )
)

export default buttonStories
