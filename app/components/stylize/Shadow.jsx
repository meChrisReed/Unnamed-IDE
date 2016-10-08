import React from 'react'

import styles from './Shadow.css'

const Shadow = ({
  children, // DOM: children to render sarounded by shadow
  force // bool: force the shadow on
}) => (
  <div
    className={[
      styles.Shadow,
      force ? styles.force : ''
    ].join(' ')}
  >
    <div className={ styles.ChildContext }>{ children }</div>
  </div>
)

export default Shadow
