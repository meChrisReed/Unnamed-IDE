import React from 'react'
import Card from '../stylize/Card'
import ProgressBar from './ProgressBar'
import List from 'app/components/typeography/List'
import ListItem from 'app/components/typeography/ListItem'

const ProgressCard = ({ persentComplete, destails = [''] }) => <Card
	style={{ width: '500px' }}
>
	<ProgressBar/>
	<List>
		{destails.map( detail => <ListItem> { detail } </ListItem>)}
	</List>
</Card>

export default ProgressCard
