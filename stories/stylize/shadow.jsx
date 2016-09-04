import React from 'react'
import Shadow from '../../app/components/Shadow.jsx'

const shadowStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'with text',
  () => (
    <Shadow force={true}>
      Hello Shadow
    </Shadow>
  )
).addWithInfo(
  'with input',
  () => (
    <Shadow force={true}>
      <input type="text" />
    </Shadow>
  )
).addWithInfo(
  'with div',
  () => (
    <Shadow force={true}>
      <div style={{
        width: '200px',
        height: '200px'
      }}></div>
    </Shadow>
  )
)

export default shadowStories
