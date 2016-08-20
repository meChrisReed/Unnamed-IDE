import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TransformingInput from '../components/TransformingInput'
import updateInput from '../actions/updateInput'

const StyleGuide = ({ currentInputs, updateInput }) => (
  <div>
    <Link to='/'> Home </Link>
    <h1> styleguide </h1>
    <div>
      <h2> Transforming Inputs </h2>
      <p> button </p>
      <TransformingInput type='button'> I'm a button </TransformingInput>
      <p> text </p>
      <TransformingInput type='text'> I'm a button </TransformingInput>
      <p> button to text transformation </p>
      <TransformingInput
        onClick={
          () => updateInput('transform-demo', 'text')
        }
        type={
          currentInputs['transform-demo'] || 'button'
        }
        name='transform-demo'>
          I'm a button, for now
        </TransformingInput>
    </div>
  </div>
)

export default connect(
  state => ({ currentInputs: state.ui.currentInputs }),
  dispatcher => bindActionCreators({updateInput}, dispatcher)
)(StyleGuide)
