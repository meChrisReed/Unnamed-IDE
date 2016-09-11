import React, { Component, PropTypes } from 'react'
import styles from './index.css'

import { connect } from 'react-redux'

const App = ({ children }) => (
  <div className={styles.App}>
    {children}
  </div>
)

export default App
