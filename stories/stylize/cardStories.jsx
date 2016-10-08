import React from 'react'

import Card from '../../app/components/stylize/Card.jsx'
import Button from '../../app/components/inputs/Button.jsx'

const cardStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'with text',
  () => (
    <Card> Hello Card! </Card>
  )
).addWithInfo(
  'with a button',
  () => (
    <Card><Button> Hello Card Button! </Button></Card>
  )
)

export default cardStories
