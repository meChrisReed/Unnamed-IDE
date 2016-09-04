import React from 'react'

const Text = ({
  className,
  name,
  focus
}) =>
<input {...{
 autoFocus: focus,
 className: [
   className,
   styles.text
 ].join(' '),
 name,
 type: 'text',
 placeholder: 'Type text'
}} />

export default Text
