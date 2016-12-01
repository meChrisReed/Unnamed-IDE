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
)

export default typographyStories
