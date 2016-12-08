import React from 'react'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

/* ui example
	import ui from 'redux-ui'
	...
	const CleanOpenUi = ui({
		key: 'CleanOpen',
		state: {
			loadingProject: false,
			creatingNewProject: false
		}
	})(CleanOpen)

	export default connect(
	  () => ({}),
	  () => ({})
	)(CleanOpenUi)
*/

import Card from 'app/components/stylize/Card.jsx'
import ReadingHeading from 'app/components/typography/ReadingHeading.jsx'
import ReadingBody from 'app/components/typography/ReadingBody.jsx';
import Button from 'app/components/inputs/Button.jsx'
import Divider from 'app/components/elements/Divider.jsx'
/* import PathSearch from '../../components/inputs/PathSearch' */

const CleanOpen = ({ ui, updateUI, push }) => <div>
	<Card>
		<ReadingHeading> Lets Get Started! </ReadingHeading>
		<ReadingBody> Load an existing project or create a new one </ReadingBody>
		<Divider/>
		<Button onClick={ e => push('/load-project') }> LOAD </Button>
		<Button onClick={ e => push('/new-project') }> NEW </Button>
	</Card>
</div>

export default connect(
  () => ({}),
	dispatch => bindActionCreators({ push }, dispatch)
)(CleanOpen)
