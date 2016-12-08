import React from 'react'

import Shadow from '../app/components/stylize/Shadow.jsx'
import TextShadow from '../app/components/stylize/TextShadow.jsx'
import ReadingList from '../app/components/typography/ReadingList.jsx';

const StoryUtilMargin = ({ children }) => <div
	style={{
		padding: '40px'
	}}
>
	{ children }
</div>

const shadowStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'DOM hover',
  () => (
		<div>
			<StoryUtilMargin>
				<Shadow depth='high'>
					<div style={{
						height: '34px',
						width: '34px',
						background: 'white'
					}}></div>
				</Shadow>
			</StoryUtilMargin>
			<StoryUtilMargin>
				<Shadow depth='mid'>
					<div style={{
						height: '34px',
						width: '34px',
						background: 'white'
					}}></div>
				</Shadow>
			</StoryUtilMargin>
			<StoryUtilMargin>
				<Shadow depth='low'>
					<div style={{
						height: '34px',
						width: '34px',
						background: 'white'
					}}></div>
				</Shadow>
			</StoryUtilMargin>
		</div>
  )
).addWithInfo(
  'DOM forced',
  () => (
		<div>
			<StoryUtilMargin>
				<Shadow force depth='high'>
					<div style={{
						height: '34px',
						width: '34px',
						background: 'white'
					}}></div>
				</Shadow>
			</StoryUtilMargin>
			<StoryUtilMargin>
				<Shadow force depth='mid'>
					<div style={{
						height: '34px',
						width: '34px',
						background: 'white'
					}}></div>
				</Shadow>
			</StoryUtilMargin>
			<StoryUtilMargin>
				<Shadow force depth='low'>
					<div style={{
						height: '34px',
						width: '34px',
						background: 'white'
					}}></div>
				</Shadow>
			</StoryUtilMargin>
		</div>
  )
).addWithInfo(
  'text hover',
  () => (
    <TextShadow><ReadingList> Hello Text Shadow! </ReadingList></TextShadow>
  )
).addWithInfo(
  'text forced',
  () => (
    <TextShadow force><ReadingList> Hello Text Shadow! </ReadingList></TextShadow>
  )
)

export default shadowStories
