import React from 'react'
import TransformingInput from '../../app/components/TransformingInput.jsx'

const transformingInputStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'button',
  () => <TransformingInput type='button'> Hello Button </TransformingInput>
).addWithInfo(
  'text',
  () => <TransformingInput type='text'> Hello Button </TransformingInput>
).addWithInfo(
  'file search',
  () => <TransformingInput type='fileSearch'> Hello Button </TransformingInput>
)

export default transformingInputStories
