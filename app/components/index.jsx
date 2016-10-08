import React from 'react'
import { connect } from 'react-redux'

import styles from './index.css'

const App = ({ children }) => (
  <div className={styles.App}>
    {children}
  </div>
)

export default connect(
  () => ({}),
  () => ({})
)(App)
