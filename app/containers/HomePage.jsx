import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import fs from 'fs'
import path from 'path'

import TransformingInput from '../components/TransformingInput'
import Dialoge from '../components/Dialoge'
import updateInput from '../actions/updateInput'
import inputHasFocus from '../actions/inputHasFocus'

// import styles from './HomePage.css'

const HomePage = ({ currentInputs, updateInput, inputHasFocus }) => {
  const loadProjectInput = currentInputs.find(i => i.name === 'load-project')
  const newProjectInput = currentInputs.find(i => i.name === 'new-project')

  const transformToFileSearch = (name, otherName) => e => {
    inputHasFocus(name)
    updateInput({
      name: otherName,
      property: 'type',
      value: 'button'
    })
    updateInput({
      name,
      property: 'type',
      value: 'fileSearch'
    })
  }

  const updatePath = name => e => {
    const value = path.parse(e.target.value)
    const filesInDir = fs.readdirSync(value.dir)
    const fileIsInDir = filesInDir.includes(value.name)
    updateInput({
      name,
      property: 'value',
      value: e.target.value,
      fileIsInDir
    })
    updateInput({
      name,
      property: 'pathSearchResults',
      value: fileIsInDir ?
        fs.readdirSync(e.target.value) :
        filesInDir
    })
  }

  return (
    <div>
      <Link to='/styleguide'> style guide </Link>
      <br />

      <TransformingInput {...{
        focus: loadProjectInput && loadProjectInput.focus,
        onClick: transformToFileSearch('load-project', 'new-project'),
        onPathChange: updatePath('load-project'),
        type: loadProjectInput ? loadProjectInput.type : 'button',
        name: 'load-project',
        value: loadProjectInput ? loadProjectInput.value : '',
        pathSearchResults: loadProjectInput ? loadProjectInput.pathSearchResults : []
      }}> Load Project </TransformingInput>

      <TransformingInput {...{
        focus: newProjectInput && newProjectInput.focus,
        onClick: transformToFileSearch('new-project', 'load-project'),
        onPathChange: updatePath('new-project'),
        type: newProjectInput ? newProjectInput.type : 'button',
        name: 'new-project',
        value: newProjectInput ? newProjectInput.value : '',
        pathSearchResults: newProjectInput ? newProjectInput.pathSearchResults : []
      }}> New Project </TransformingInput>

    </div>
  )
}

export default connect(
  state => ({ currentInputs: state.ui.currentInputs }),
  dispatcher => bindActionCreators({updateInput, inputHasFocus}, dispatcher)
)(HomePage)
