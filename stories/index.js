import React from 'react'
import { storiesOf, action, linkTo, setAddon  } from '@kadira/storybook'
import centered from '@kadira/react-storybook-decorator-centered'
import infoAddon from '@kadira/react-storybook-addon-info'

import globalCss from '../app/app.global.css'

import buttonStories from './inputs/buttonStories.jsx'
import shadowStories from './stylize/shadowStories.jsx'
import cardStories from './stylize/cardStories.jsx'
import iconStories from './icons/iconStories.jsx'

setAddon(infoAddon)

buttonStories({
  storiesOf: storiesOf(
    'Button', module
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

cardStories({
  storiesOf: storiesOf(
    'Card', module
  ).addDecorator(
    centered
  )
})

iconStories({
  storiesOf: storiesOf(
    'Icon', module
  ).addDecorator(
    centered
  )
})
