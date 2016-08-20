import React, { Component } from 'react'
import { connect } from 'react-redux'

class FileSearch extends Component {
  componentDidMount() {
    const textInput = document.querySelector(`[name=${this.props.name}]`)
    textInput.setSelectionRange(this.props.selectionStart, this.props.selectionStart)
  }

  render() {
    const {
      onPathChange,
      className,
      name ,
      value,
      focus,
      pathSearchResults
    } = this.props;

    return (
      <span>
        <input {...{
          autoFocus: focus,
          value,
          onChange: onPathChange,
          className,
          type: 'text',
          name,
          onClick: e => e.stopPropagation(),
          placeholder: 'Type Path to Project'
        }} />
        <ul>
        {
          pathSearchResults &&
          pathSearchResults.length &&
          pathSearchResults.filter(
            // filter, saving strings that contain all of the letters from value
            result => value.match(
              /\/[^/]*$/
            )[0].replace(
              '/', ''
            ).split('').reduce(
              (pre, cur) => pre ? !!result.match(escape(cur)) : false,
              true
            )
          ).map(
            result => <li key={result}>{ result }</li>
          )
        }
        </ul>
      </span>
    )
  }
}

export default connect(() => ({}), () => ({}))(FileSearch);
