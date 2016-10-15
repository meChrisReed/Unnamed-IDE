import React, { Component } from 'react'

import styles from './ListItem.css'

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
			className,
			...props
		} = this.props

		return <li
			{...props}
			ref={ i => this.li = i }
			className={`${styles.ListItem} ${className}`}
		>
			{ children }
		</li>
	}
}

export default ListItem
