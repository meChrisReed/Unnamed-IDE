import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'

import Card from 'app/components/stylize/Card.jsx'
import ReadingHeading from 'app/components/typography/ReadingHeading.jsx'
import ReadingBody from 'app/components/typography/ReadingBody.jsx';
import Button from 'app/components/inputs/Button.jsx'
import Divider from 'app/components/elements/Divider.jsx'
import PathSearch from 'app/components/inputs/PathSearch'

const NewProject = ({ ui, updateUI, push }) => <div>
	<Card>
		<Button onClick={ e => push('/load-project') }> LOAD </Button>
		<Button disabled> NEW </Button>
		<ReadingBody> Type the path to your project. You can use the ARROW keys to navigate, TAB to select an option and RETURN to load the path </ReadingBody>
		<Divider/>
		<PathSearch placeholder='path to project'/>
	</Card>
</div>

export default connect(
  () => ({}),
  dispatch => bindActionCreators({ push }, dispatch)
)(NewProject)
