import React from 'react'

import Button from '../app/components/inputs/Button.jsx'
import TextInput from '../app/components/inputs/TextInput.jsx'

const iconStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'Button',
  () => <div>
		<Button> Hello Button! </Button>
  </div>
).addWithInfo(
  'Text Input',
  () => (
    <TextInput placeholder='sample text input'/>
  )
)



export default iconStories
