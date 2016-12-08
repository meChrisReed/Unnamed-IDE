import React, { Component } from 'react'

import styles from './ListItem.css'
import CodeList from 'app/components/typography/CodeList'

class ListItem extends Component {
	componentDidUpdate() {
		if (this.props.scrollIntoView) {
			this.li.scrollIntoViewIfNeeded()
		}
	}
	render() {
		const {
			children,
			scrollIntoView,
			selected
		} = this.props

		return <li
			key={ children }
			ref={ i => this.li = i }
			className={[
				styles.ListItem,
				selected ? styles.selected : ''
			].join(' ')}
		>
			<CodeList>{ children }</CodeList>
		</li>
	}
}

ListItem.propTypes = {
	children: React.PropTypes.array,
	scrollIntoView: React.PropTypes.bool,
	children: React.PropTypes.string,
	selected: React.PropTypes.bool
}

export default ListItem
