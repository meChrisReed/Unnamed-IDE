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
	'Colors may be editd in app/app.global.css',
  () => <div>
		{ colors.primary.map( i => <ColorBlock name={ i }/> ) }
		<div style={{clear: 'both'}}></div>
		{ colors.quality.map( i => <ColorBlock name={ i }/> ) }
  </div>
).addWithInfo(
	'--background',
	() => <ColorBlock name='--background'/>
).addWithInfo(
	'--interactive',
	() => <ColorBlock name='--interactive'/>
).addWithInfo(
	'--interactive-accent',
	() => <ColorBlock name='--interactive-accent'/>
).addWithInfo(
	'--bright',
	() => <ColorBlock name='--bright'/>
).addWithInfo(
	'--quality-sev-one',
	() => <ColorBlock name='--quality-sev-one'/>
).addWithInfo(
	'--quality-sev-two',
	() => <ColorBlock name='--quality-sev-two'/>
).addWithInfo(
	'--quality-sev-three',
	() => <ColorBlock name='--quality-sev-three'/>
).addWithInfo(
	'--quality-sev-four',
	() => <ColorBlock name='--quality-sev-four'/>
).addWithInfo(
	'--quality-sev-five',
	() => <ColorBlock name='--quality-sev-five'/>
).addWithInfo(
	'--quality-sev-six',
	() => <ColorBlock name='--quality-sev-six'/>
).addWithInfo(
	'--quality-sev-seven',
	() => <ColorBlock name='--quality-sev-seven'/>
).addWithInfo(
	'--quality-sev-eight',
	() => <ColorBlock name='--quality-sev-eight'/>
).addWithInfo(
	'--quality-sev-nine',
	() => <ColorBlock name='--quality-sev-nine'/>
).addWithInfo(
	'--quality-sev-ten',
	() => <ColorBlock name='--quality-sev-ten'/>
)

export default colorStories
