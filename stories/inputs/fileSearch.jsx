import React from 'react'
import FileSearch from '../../app/components/inputs/FileSearch.jsx'
import Shadow from '../../app/components/Shadow.jsx'

const fileSearchStories = ({
  storiesOf,
  action,
  linkTo
}) => storiesOf.addWithInfo(
  '/Users/',
  `
The FileSearch component is a managed input.

The managed properties are:
 * Cursor position as **selectionStart**
 * Path value as **value**
 * Focus is currently managed by the parent
 * Hinted Results as **pathSearchResults**

# TODO
 * remove the need of className as a passed prop. This should be done to eliminate dependencies
  `,
  () => (
    <Shadow force={true}>
      <FileSearch {...{
        hasErrors: false,
        selectionStart: 7,
        type: "fileSearch",
        name: "load-project",
        value: "/Users/",
        pathSearchResults: [
            {
            fileName: "Administrator"
          }, {
            fileName: "All Users"
          }, {
            fileName: "creed"
          }, {
            fileName: "Default"
          }, {
            fileName: "Default User"
          }, {
            fileName: "DefaultAppPool"
          }, {
            fileName: "Public"
          }
        ],
        className: "TransformingInput__TransformingInput___2uFqN"
      }}/>
    </Shadow>
  )
)

export default fileSearchStories
