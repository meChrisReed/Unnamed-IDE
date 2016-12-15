import React from 'react'
import { storiesOf, action, linkTo, setAddon  } from '@kadira/storybook'
import centered from '@kadira/react-storybook-decorator-centered'
import infoAddon from '@kadira/react-storybook-addon-info'

import globalCss from '../app/app.global.css'

import shadowStories from './shadowStories.jsx'
import cardStories from './cardStories.jsx'
import colorStories from './colorStories.jsx'
import typographyStories from './typographyStories.jsx'
import iconStories from './iconStories.jsx'
import inputStories from './inputStories.jsx'
// import pathSearchStories from './pathSearchStories.jsx'
import stageStories from './stageStories'
import menuItemStories from './menuItemStories'

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

inputStories({
  storiesOf: storiesOf(
    'Inputs', module
  ).addDecorator(
    centered
  )
})

cardStories({
  storiesOf: storiesOf(
    'Card', module
  ).addDecorator(
    centered
  )
})

// pathSearchStories({
//   storiesOf: storiesOf(
//     'Path Search', module
//   ).addDecorator(
//     centered
//   )
// })

stageStories({
	storiesOf: storiesOf(
		'Stage', module
	).addDecorator(
		centered
	)
})

menuItemStories({
	storiesOf: storiesOf(
		'Menu Item', module
	).addDecorator(
		centered
	)
})
