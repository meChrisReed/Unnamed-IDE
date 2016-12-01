import React from 'react'

import styles from './TextShadow.css'

const TextShadow = ({
  children, // DOM: children to render sarounded by shadow
  force // bool: force the shadow on
}) => (
  <div
    className={[
      styles.TextShadow,
      force ? styles.force : ''
    ].join(' ')}
  >
    <div className={ styles.ChildContext }>{ children }</div>
  </div>
)

TextShadow.propTypes = {
	children: React.PropTypes.object.isRequired
}

export default TextShadow
