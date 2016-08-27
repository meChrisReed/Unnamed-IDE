import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './FileSearch.css'

class FileSearch extends Component {
  componentDidMount() {
    // place the cursor
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
      pathSearchResults,
      hasErrors
    } = this.props;

    return (
      <div className={styles.FileSearch}>
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
