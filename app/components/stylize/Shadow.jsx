import React from 'react'

import styles from './Shadow.css'

const Shadow = ({
  children, // DOM: children to render sarounded by shadow
  force, // bool: force the shadow on
	depth = 'low',
	off
}) => (
  <div
    className={[
      styles.Shadow,
			!off ? styles[depth] : '',
      force ? styles.force : ''
    ].join(' ')}
  >
    <div className={ styles.ChildContext }>{ children }</div>
  </div>
)

Shadow.propTypes = {
	children: React.PropTypes.object.isRequired,
	force: React.PropTypes.bool,
	depth: React.PropTypes.oneOf([
		'high',
		'mid',
		'low'
	]),
	off: React.PropTypes.bool
}

export default Shadow
