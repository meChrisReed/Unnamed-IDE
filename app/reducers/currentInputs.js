// a refinement of how to update this property
const updateValueByType = ({
  state, // the previous state object
  value, // the new value
  type, // thetype of the input
  ...actionDetails // additional details that are not used in every case
}) => ({

  [type]: () => value,

  fileSearch: () => state.value &&
    !state.value.match(/\/$/) &&
    actionDetails.fileIsInDir ?
      `${value}/`.replace(/\/+/g, '/') :
      value

}[type]())


// logic to update property
const updateProperty = ({
  state,
  property,
  value,
  ...actionDetails
}) => ({

  [property]: () => value,

  selectionStart: () => state.value.match(/\/$/) ? value + 1 : value,

  value: () => updateValueByType({
    state,
    property,
    value,
    type: state.type,
    ...actionDetails
  })

}[property]())

const currentInputs = (state = [], {type, name, property, value, ...actionDetails}) => ({

  [type]: () => state,

  UPDATE_INPUT: () => [
    // all inputs except the one to add or update
    ...state.filter(i => i.name !== name),
    {
      // everything we know about this input
      ...state.find(i => i.name === name),
      name,
      [property]: updateProperty({
        ...actionDetails,
        state: state.find(i => i.name === name),
        property,
        value
      })
    }
  ],

  UPDATE_INPUT_FOCUS: () => [
    ...state.filter(
      i => i.name !== name
    ).map(
      input => ({
        ...input,
        focus: false
      })
    ),
    {
      ...state.find(i => i.name === name), // everything we know about this input
      name,
      focus: true
    }
  ]

}[type]())

export default currentInputs;
