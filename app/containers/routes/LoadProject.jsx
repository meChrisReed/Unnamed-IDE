import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import ui from 'redux-ui'

import Card from 'app/components/stylize/Card.jsx'
import ReadingHeading from 'app/components/typography/ReadingHeading.jsx'
import ReadingBody from 'app/components/typography/ReadingBody.jsx';
import Button from 'app/components/inputs/Button.jsx'
import Divider from 'app/components/elements/Divider.jsx'
import PathSearch from 'app/components/inputs/PathSearch'

const LoadProject = ({ ui, updateUI, push, results, searchPath, selectedResultIndex }) => <div>
	<Card>
		<Button disabled> LOAD </Button>
		<Button onClick={ e => push('/new-project') }> NEW </Button>
		<ReadingBody> Type the path to your project. You can use the ARROW keys to navigate, TAB to select an option and RETURN to load the path </ReadingBody>
		<Divider/>
		<PathSearch results={results} />
	</Card>
</div>

export default connect(
	() => ({}),
	dispatch => bindActionCreators({ push }, dispatch)
)(LoadProject)
