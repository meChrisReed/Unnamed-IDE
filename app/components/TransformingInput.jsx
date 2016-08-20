import React from 'react'
import path from 'path'

import styles from './TransformingInput.css'

import Shadow from './Shadow'
import FileSearch from './inputs/FileSearch'

const inputDictionary = type => ({
  [type]: () => <p> unsuported input transformation: {type+''} </p>,
  button: ({ children, className, onClick, name }) =>
    <button {...{
      children,
      className,
      onClick,
      name
    }}></button>,

  fileSearch: props => <FileSearch {...props}/>,

  text: ({ className, name, focus }) =>
    <input {...{
      autoFocus: focus,
      className,
      name,
      type: 'text',
      placeholder: 'Type text'
    }} />
}[type])

const TransformingInput = props => {
  const Input = inputDictionary(props.type)
  return (
    <div className={[
      styles.widthEffect,
      styles[props.type]
    ].join(' ')}>
      <Shadow force={focus}>
        <Input {...{
          ...props,
          className: styles.TransformingInput
        }}></Input>
      </Shadow>
    </div>
  )
}

export default TransformingInput
