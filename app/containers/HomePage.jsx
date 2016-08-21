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

const transformToFileSearch = (name, otherName, updateInput) => e => {
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

// TDOD: WOW this function needs work
// so mush mutation, error handling, need batch property update
const updatePath = (name, updateInput) => e => {
  const value = path.parse(e.target.value)
  // mutate files in der for error handling
  let filesInDir
  let hasErrors = false
  try {
    if (e.target.value.match(/\/$/)) {
      filesInDir = fs.readdirSync(e.target.value)
    }
    filesInDir = fs.readdirSync(value.dir)
  } catch (err) {
    filesInDir = [err.message]
    hasErrors = true
  }
  if (!hasErrors) {
    filesInDir = filesInDir.filter(
      // filter, saving strings that contain all of the letters from value
      result => value.name.split('').reduce(
        (pre, cur) => pre ? !!result.match(escape(cur)) : false,
        true
      )
    ).map(
      result => ({ fileName: result })
    )
  }

  const fileIsInDir = !!filesInDir.find(result => result.fileName === value.name)
  updateInput({
    name,
    property: 'hasErrors',
    value: hasErrors
  })
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
      fs.readdirSync(e.target.value).map(
        result => ({ fileName: result })
      ) :
      filesInDir
  })
  updateInput({
    name,
    property: 'selectionStart',
    value: e.target.selectionStart
  })
}

const HomePage = ({ currentInputs, updateInput, inputHasFocus }) => {
  const loadProjectInput = currentInputs.find(i => i.name === 'load-project')
  const newProjectInput = currentInputs.find(i => i.name === 'new-project')

  return (
    <div>
      <Link to='/styleguide'> style guide </Link>
      <br />

      <TransformingInput {...{
        hasErrors: loadProjectInput && loadProjectInput.hasErrors,
        selectionStart: loadProjectInput && loadProjectInput.selectionStart,
        focus: loadProjectInput && loadProjectInput.focus,
        onClick: transformToFileSearch('load-project', 'new-project', updateInput),
        onPathChange: updatePath('load-project', updateInput),
        type: loadProjectInput ? loadProjectInput.type : 'button',
        name: 'load-project',
        value: loadProjectInput ? loadProjectInput.value : '',
        pathSearchResults: loadProjectInput ? loadProjectInput.pathSearchResults : []
      }}> Load Project </TransformingInput>

      <TransformingInput {...{
        hasErrors: newProjectInput && newProjectInput.hasErrors,
        selectionStart: newProjectInput && newProjectInput.selectionStart,
        focus: newProjectInput && newProjectInput.focus,
        onClick: transformToFileSearch('new-project', 'load-project', updateInput),
        onPathChange: updatePath('new-project', updateInput),
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
