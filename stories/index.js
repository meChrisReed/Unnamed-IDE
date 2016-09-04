import React from 'react'
import { storiesOf, action, linkTo, setAddon  } from '@kadira/storybook'
import centered from '@kadira/react-storybook-decorator-centered'
import infoAddon from '@kadira/react-storybook-addon-info'

import globalCss from '../app/app.global.css'

// TODO crawl file system
import shadowStories from './stylize/shadow.jsx'
import transformingInputStories from './inputs/transformingInput.jsx'
import fileSearchStories from './inputs/fileSearch.jsx'

setAddon(infoAddon)

shadowStories({
  storiesOf: storiesOf(
    'Shadow', module
  ).addDecorator(
    centered
  )
})

transformingInputStories({
  storiesOf: storiesOf(
    'Transforming Input', module
  ).addDecorator(
    centered
  )
})

fileSearchStories({
  storiesOf: storiesOf(
    'File Search', module
  ).addDecorator(
    centered
  )
})
