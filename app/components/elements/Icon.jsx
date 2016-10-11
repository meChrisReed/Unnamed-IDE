import React from 'react'
import SVGInline from 'react-svg-inline'

import pencil from '../../../assets/svg/pencil.svg'

import style from './Icon.css'

const Icon = ({ name, className }) => <span
	className={[
		className,
		style.Icon
	].join(' ')}
>
  <SVGInline
		className={[
			style.Icon,
			style.context
		].join(' ')}

		svg={{
			pencil,
		}[name]}
	/>
</span>

export default Icon
