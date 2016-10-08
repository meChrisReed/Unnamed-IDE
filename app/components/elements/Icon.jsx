import React from 'react'
import SVGInline from 'react-svg-inline'

import pencil from '../../../assets/svg/pencil.svg'

import style from './Icon.css'

const Icon = () => <span className={style.Icon}>
  <SVGInline className={[style.Icon, style.context].join(' ')} svg={ pencil }/>
</span>

export default Icon
