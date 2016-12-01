import React from 'react'
import styles from './colorStories.css'

const colors = {
	primary: [
		'--background',
		'--interactive',
		'--interactive-accent',
		'--bright'
	],
	quality: [
		'--quality-sev-one',
		'--quality-sev-two',
		'--quality-sev-three',
		'--quality-sev-four',
		'--quality-sev-five',
		'--quality-sev-six',
		'--quality-sev-seven',
		'--quality-sev-eight',
		'--quality-sev-nine',
		'--quality-sev-ten'
	]
}

const ColorBlock = ({ name }) => <a
	style={{
		background: `var(${name})`
	}}
 className={styles.ColorBlock}
	title={ name }
	href='#'
></a>

const colorStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'All Colors',
  () => <div>
		{ colors.primary.map( i => <ColorBlock name={ i }/> ) }
		<div style={{clear: 'both'}}></div>
		{ colors.quality.map( i => <ColorBlock name={ i }/> ) }
  </div>
)

export default colorStories
