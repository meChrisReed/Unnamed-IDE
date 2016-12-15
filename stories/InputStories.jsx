import React from 'react'

import Button from '../app/components/inputs/Button.jsx'
import TextInput from '../app/components/inputs/TextInput.jsx'

const inputStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'Button',
	'path: app/components/inputs/Button.jsx',
  () => <div>
		<Button> Hello Button! </Button>
  </div>
).addWithInfo(
  'Text Input',
	'path: app/components/inputs/TextInput.jsx',
  () => (
    <TextInput placeholder='sample text input'/>
  )
)



export default inputStories
