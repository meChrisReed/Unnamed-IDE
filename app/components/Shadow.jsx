import React from 'react'

import styles from './Shadow.css'

const Shadow = ({ children, force }) => <div
  className={[
    styles.shadow,
    force && styles.force
  ].join(" ")}
>{children}</div>

export default Shadow
