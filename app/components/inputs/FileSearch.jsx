import React, { Component } from 'react'
import { connect } from 'react-redux'
import path from 'path'

import styles from './FileSearch.css'

class FileSearch extends Component {
  componentDidMount() {
    // place the cursor
    const textInput = document.querySelector(`[name=${this.props.name}]`)

    if(textInput.selectionStart) {
      textInput.focus();
      textInput.setSelectionRange(this.props.selectionStart, this.props.selectionStart);
    } else {
      textInput.focus();
    }
  }

  render() {
    // convert to accept functions to update values
    const {
      updateSelection,
      onPathChange,
      className,
      name,
      value,
      focus,
      pathSearchResults,
      hasErrors
    } = this.props;

    return (
      <div
        className={styles.FileSearch}
        onKeyDown={ e => ({
          [e.key]: e => e,
          'ArrowDown': e => {
            e.preventDefault()
          },
          'Tab': e => {
            e.preventDefault()
            const updatedPath = value.match(/\/$/) ?
              `${value}/${pathSearchResults[0].fileName}` :
              `${path.parse(value).dir}/${pathSearchResults[0].fileName}`
            updateSelection(updatedPath.length + 1)
            onPathChange( updatedPath )
          }

        }[e.key](e))}
      >
        <input {...{
          autoFocus: focus,
          value,
          onChange: onPathChange,
          className: [className, styles.textInput].join(" "),
          type: 'text',
          name,
          onClick: e => e.stopPropagation(),
          placeholder: 'Type Path to Project'
        }} />
        <ul className={styles.resultList}>
        {
          !hasErrors &&
          pathSearchResults &&
          pathSearchResults.length ?
          pathSearchResults.map(
            result => <li className={styles.result} key={result.fileName}>{ result.fileName }</li>
          ) : ''
        }
        { !hasErrors ? '' : <span className={styles.error}>{pathSearchResults[0]}</span> }
        </ul>
      </div>
    )
  }
}

export default FileSearch
