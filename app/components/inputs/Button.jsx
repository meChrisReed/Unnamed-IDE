import React from 'react'

const Button = ({
  children,
  className,
  onClick,
  name
}) =>
<button {...{
  children,
  className,
  onClick,
  name
}}></button>

export default Button
