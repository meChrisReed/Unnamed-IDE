const updateValueByType = ({state, property, value, type, ...actionDetails}) => ({
  [type]: () => value,
  fileSearch: () => state.value && !state.value.match(/\/$/) && actionDetails.fileIsInDir ? `${value}/`.replace(/\/+/g, '/') : value
}[type]())

const updateProperty = ({
  state,
  property,
  value,
  ...actionDetails
}) => ({
  [property]: () => value,
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
    ...state.filter(i => i.name !== name), // all inputs except the one to add or update
    {
      ...state.find(i => i.name === name), // everything we know about this input
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
