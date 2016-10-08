import React from 'react'

import Shadow from '../../app/components/stylize/Shadow.jsx'
import Button from '../../app/components/inputs/Button.jsx'

const buttonStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'with text',
  () => (
    <Shadow> Hello Shadow! </Shadow>
  )
).addWithInfo(
  'with a button',
  () => (
    <Shadow><Button> Hello Shadow Button! </Button></Shadow>
  )
)

export default buttonStories
