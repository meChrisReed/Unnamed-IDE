import React from 'react'

import Card from '../../app/components/stylize/Card.jsx'
import ReadingHeading from '../../app/components/typography/ReadingHeading.jsx'
import ReadingBody from '../../app/components/typography/ReadingBody.jsx';
import Button from '../../app/components/inputs/Button.jsx'
import Divider from '../../app/components/elements/Divider.jsx'

const cardStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'Composition',
  () => (
    <Card>
			<ReadingHeading> Hello Card! </ReadingHeading>
			<ReadingBody> This is the body of this card! </ReadingBody>
			<Divider/>
			<Button> ACTION </Button>
			<Button> OTHER ACTION </Button>
		</Card>
  )
)

export default cardStories
