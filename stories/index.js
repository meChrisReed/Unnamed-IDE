import React from 'react'
import { storiesOf, action, linkTo, setAddon  } from '@kadira/storybook'
import centered from '@kadira/react-storybook-decorator-centered'
import infoAddon from '@kadira/react-storybook-addon-info'

import globalCss from '../app/app.global.css'

// import buttonStories from './inputs/buttonStories.jsx'
import shadowStories from './stylize/shadowStories.jsx'
import cardStories from './stylize/cardStories.jsx'
import colorStories from './colorStories.jsx'
import typographyStories from './typographyStories.jsx'
import iconStories from './iconStories.jsx'
// import textInputStories from './inputs/textInputStories.jsx'
import InputStories from './InputStories.jsx'

setAddon(infoAddon)

colorStories({
	storiesOf: storiesOf(
		'Colors', module
	).addDecorator(
		centered
	)
})

typographyStories({
	storiesOf: storiesOf(
		'Typography', module
	).addDecorator(
		centered
	)
})

shadowStories({
  storiesOf: storiesOf(
    'Shadow', module
  ).addDecorator(
    centered
  )
})

iconStories({
	storiesOf: storiesOf(
		'Icons', module
	).addDecorator(
		centered
	)
})

InputStories({
  storiesOf: storiesOf(
    'Inputs', module
  ).addDecorator(
    centered
  )
})

// buttonStories({
//   storiesOf: storiesOf(
//     'Button', module
//   ).addDecorator(
//     centered
//   )
// })
//
// textInputStories({
//   storiesOf: storiesOf(
//     'Text Input', module
//   ).addDecorator(
//     centered
//   )
// })

cardStories({
  storiesOf: storiesOf(
    'Card', module
  ).addDecorator(
    centered
  )
})
