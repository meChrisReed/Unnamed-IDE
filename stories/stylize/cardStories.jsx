import React from 'react'

import Card from '../../app/components/stylize/Card.jsx'
import Button from '../../app/components/inputs/Button.jsx'
import ProgressBar from '../../app/components/elements/ProgressBar.jsx'
import List from '../../app/components/typeography/List.jsx'
import ListItem from '../../app/components/typeography/ListItem.jsx'

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
).addWithInfo(
  'with progress',
  () => (
    <Card style={{ width: '500px' }}>
			<ProgressBar persentComplete={20}/>
				<List>
						<ListItem> Finding Files </ListItem>
						<ListItem> Parsing Initial View </ListItem>
				</List>
		</Card>
  )
)

export default cardStories
