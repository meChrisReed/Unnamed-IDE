import React from 'react'

import Button from '../../app/components/inputs/Button.jsx'

const buttonStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'with text',
  () => (
    <Button> Hello Button! </Button>
  )
)

export default buttonStories
