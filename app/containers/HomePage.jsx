import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import fs from 'fs'
import path from 'path'

import TransformingInput from '../components/TransformingInput'
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
// seperate concerns
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
  const pathSearchResults =
  updateInput({
    name,
    property: 'pathSearchResults',
    value: (
      fileIsInDir ?
        fs.readdirSync(e.target.value).map(
          result => ({ fileName: result })
        ) :
        filesInDir
      ).filter(
        file => path.parse(file.fileName || '').ext === ''
      )
  })
  updateInput({
    name,
    property: 'selectionStart',
    value: e.target.selectionStart
  })
}

const populateTransformingInputData = (input, name, otherName, transformToFileSearch, updatePath, updateInput) => ({
  hasErrors: input && input.hasErrors,
  selectionStart: input && input.selectionStart,
  focus: input && input.focus,
  onClick: transformToFileSearch(name, otherName, updateInput),
  onPathChange: updatePath(name, updateInput),
  type: input ? input.type : 'button',
  name: name,
  value: input ? input.value : '',
  pathSearchResults: input ? input.pathSearchResults : []
})

const HomePage = ({ currentInputs, updateInput, inputHasFocus }) => {
  const loadProjectInput = currentInputs.find(i => i.name === 'load-project')
  const newProjectInput = currentInputs.find(i => i.name === 'new-project')

  return (
    <div>
      <Link to='/styleguide'> style guide </Link>
      <br />

      <TransformingInput {
        ...populateTransformingInputData(
          loadProjectInput,
          'load-project',
          'new-project',
          transformToFileSearch,
          updatePath,
          updateInput
        )
      }> Load Project </TransformingInput>

      <TransformingInput {
        ...populateTransformingInputData(
          newProjectInput,
          'new-project',
          'load-project',
          transformToFileSearch,
          updatePath,
          updateInput
        )
      }> New Project </TransformingInput>

    </div>
  )
}

export default connect(
  state => ({ currentInputs: state.ui.currentInputs }),
  dispatcher => bindActionCreators({updateInput, inputHasFocus}, dispatcher)
)(HomePage)
