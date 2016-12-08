import React from 'react'

import Card from '../app/components/stylize/Card.jsx'
import ReadingBody from '../app/components/typography/ReadingBody.jsx'
import PathSearch from '../app/components/inputs/PathSearch.jsx'
import Button from '../app/components/inputs/Button.jsx'
import Divider from '../app/components/elements/Divider.jsx'

const cardStories = ({
  storiesOf,
  action,
  linkTo
}) =>
storiesOf.addWithInfo(
  'Default',
  () => (
		<PathSearch/>
  )
).addWithInfo(
  'Results',
  () => (
		<PathSearch
			path='/place'
			selectedResultIndex={0}
			results={[
				'Hello Results!',
				'More Results!',
				'One More Result!'
			]}
		/>
  )
).addWithInfo(
  'Results Second Selection',
  () => (
		<PathSearch
			path='/place'
			selectedResultIndex={1}
			results={[
				'Hello Results!',
				'More Results!',
				'One More Result!'
			]}
		/>
  )
).addWithInfo(
  'Default Composition',
  () => (
		<Card>
			<Button disabled> LOAD </Button>
			<Button> NEW </Button>
			<ReadingBody>
					Type the path to your project. You can use the ARROW keys to navigate, TAB to select an option and RETURN to load the path.
			</ReadingBody>
			<PathSearch/>
		</Card>
  )
).addWithInfo(
  'Results Composition',
  () => (
    <Card>
			<Button disabled> LOAD </Button>
			<Button> NEW </Button>
			<ReadingBody>
					Type the path to your project. You can use the ARROW keys to navigate, TAB to select an option and RETURN to load the path.
			</ReadingBody>
			<PathSearch
				path='/place'
				selectedResultIndex={0}
				results={[
					'Hello Results!',
					'More Results!',
					'One More Result!'
				]}
			/>
		</Card>
  )
).addWithInfo(
  'Results Second Selection Composition',
  () => (
    <Card>
			<Button disabled> LOAD </Button>
			<Button> NEW </Button>
			<ReadingBody>
					Type the path to your project. You can use the ARROW keys to navigate, TAB to select an option and RETURN to load the path.
			</ReadingBody>
			<PathSearch
				path='/place'
				selectedResultIndex={1}
				results={[
					'Hello Results!',
					'More Results!',
					'One More Result!'
				]}
			/>
		</Card>
  )
)

export default cardStories
