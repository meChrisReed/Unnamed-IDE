import React from 'react'

// util
import Divider from '../app/components/elements/Divider.jsx'

import ReadingHeading from '../app/components/typography/ReadingHeading.jsx'
import ReadingList from '../app/components/typography/ReadingList.jsx'
import ReadingBody from '../app/components/typography/ReadingBody.jsx'
import ButtonText from '../app/components/typography/ButtonText.jsx'
import ButtonDissabledText from '../app/components/typography/ButtonDissabledText.jsx'
import CodeHeading from '../app/components/typography/CodeHeading.jsx'
import CodeList from '../app/components/typography/CodeList.jsx'
import CodeBody from '../app/components/typography/CodeBody.jsx'
import Placeholder from '../app/components/typography/Placeholder.jsx'

const typographyStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  'All Typography',
	'path: app/components/typography/*',
  () => <div>
		<ReadingHeading> Reading Heading: 24/34, Arial, interactive color </ReadingHeading>
		<Divider/>
		<ReadingList> Reading List: 16/34, Arial, bright color </ReadingList>
		<Divider/>
		<ReadingBody> Reading Body: 16/21, Arial, bright color </ReadingBody>
		<Divider/>
		<ButtonText> Button Text: 16/21, Arial, interactive color — ALL CAPS </ButtonText>
		<Divider/>
		<ButtonDissabledText> Button Dissabled Text: 16/21, Fira Code, interactive actcent color — ALL CAPS </ButtonDissabledText>
		<Divider/>
		<CodeHeading> Code Heading: 24/34, Fira Code, bright color </CodeHeading>
		<Divider/>
		<CodeList> Code List: 16/34, Fira Code, bright color </CodeList>
		<Divider/>
		<CodeBody> Code Body: 16/21, Fira Code,bright color </CodeBody>
		<Divider/>
		<Placeholder> Placeholder: 16/21, Fira Code,interactive accent color </Placeholder>
		<Divider/>
  </div>
).addWithInfo(
  'ReadingHeading',
  () => <ReadingHeading> Reading Heading: 24/34, Arial, interactive color || path: app/components/typography/ReadingHeading </ReadingHeading>
).addWithInfo(
  'ReadingList',
  () => <ReadingList> Reading List: 16/34, Arial, bright color || path: app/components/typography/ReadingList </ReadingList>
).addWithInfo(
  'ReadingBody',
  () => <ReadingBody> Reading Body: 16/21, Arial, bright color || path: app/components/typography/ReadingBody </ReadingBody>
).addWithInfo(
  'ButtonText',
  () => <ButtonText> Button Text: 16/21, Arial, interactive color — ALL CAPS || path: app/components/typography/ButtonText </ButtonText>
).addWithInfo(
  'ButtonDissabledText',
  () => <ButtonDissabledText> Button Dissabled Text: 16/21, Fira Code, interactive actcent color — ALL CAPS || path: app/components/typography/ButtonDissabledText </ButtonDissabledText>
).addWithInfo(
  'CodeHeading',
  () => <CodeHeading> Code Heading: 24/34, Fira Code, bright color || path: app/components/typography/CodeHeading </CodeHeading>
).addWithInfo(
  'CodeList',
  () => <CodeList> Code List: 16/34, Fira Code, bright color || path: app/components/typography/CodeList </CodeList>
).addWithInfo(
  'CodeBody',
  () => <CodeBody> Code Body: 16/21, Fira Code,bright color || path: app/components/typography/CodeBody </CodeBody>
).addWithInfo(
  'Placeholder',
  () => <Placeholder> Placeholder: 16/21, Fira Code,interactive accent color || path: app/components/typography/Placeholder </Placeholder>
)

export default typographyStories
