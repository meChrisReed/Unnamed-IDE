import React from 'react'
import SVGInline from 'react-svg-inline'

import folder from 'assets/svg/folder.svg'
import git from 'assets/svg/git.svg'
import history from 'assets/svg/history.svg'
import measure from 'assets/svg/measure.svg'
import pinLeft from 'assets/svg/pinLeft.svg'
import pinRight from 'assets/svg/pinRight.svg'
import trace from 'assets/svg/trace.svg'
import unpinLeft from 'assets/svg/unpinLeft.svg'
import unpinRight from 'assets/svg/unpinRight.svg'

import styles from './Icon.css'

const lookupSvg = name => ({
	folder,
	git,
	history,
	measure,
	pinLeft,
	pinRight,
	trace,
	unpinLeft,
	unpinRight
}[name])

const Icon = ({
	name = 'folder',
	force
}) => <span	className={ styles.Icon }>
		<SVGInline
		className={[
			styles.ShadowIcon,
			force ? styles.force : ''
		].join(' ')}
		svg={ lookupSvg(name) }
	/>
  <SVGInline
		className={ styles.svg }
		svg={ lookupSvg(name) }
	/>

</span>

Icon.propTypes = {
	name: React.PropTypes.string.isRequired,
	forceShadow: React.PropTypes.bool
}

export default Icon
