import React from 'react'
import path from 'path'

import styles from './TransformingInput.css'

import Shadow from './Shadow.jsx'
import FileSearch from './inputs/FileSearch.jsx'
import Button from './inputs/Button.jsx'
import Text from './inputs/Text.jsx'

const inputDictionary = type => ({
  [type]: () => <p> unsuported input transformation: {type+''} </p>,
  button: props => <Button {...props}/>,
  fileSearch: props => <FileSearch {...props}/>,
  text: props => <Text {...props}/>
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
