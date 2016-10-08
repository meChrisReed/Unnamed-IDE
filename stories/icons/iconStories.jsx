import React from 'react'

import Shadow from '../../app/components/stylize/Shadow.jsx'
import Icon from '../../app/components/elements/Icon.jsx'

const buttonStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'default',
  () => (
    <Icon/>
  )
)

export default buttonStories
