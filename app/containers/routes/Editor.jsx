import React from 'react'
import { connect } from 'react-redux'
import ui from 'redux-ui'
import { Link } from 'react-router'

const Editor = ({ ui, updateUI }) => <div>
	<Link to='/'>cleanOpen</Link>
  <h1> Editor </h1>
</div>

const EditorUi = ui({
	key: 'Editor',
	state: {}
})(Editor)

export default connect(
  () => ({}),
  () => ({})
)(EditorUi)
