import React from 'react';
import { MetaData } from '../../components/Meta/MetaData';
import './Event.css';

const Events = () => {
	const meta = {
		title: 'Events - APM',
		desc: 'Checkout our events.',
		url: 'https://uhapm.org/events',
	};

	return (
		<>
			<MetaData {...meta}></MetaData>
			<div className='events'>
				<iframe
					title='APM Events Calendar'
					src='https://calendar.google.com/calendar/embed?src=428dcb8dcf3e5eea635155a871482a38df9d764a16d51a119d1b63daa71a4d85%40group.calendar.google.com&ctz=America%2FChicago'
				></iframe>
			</div>
		</>
	);
};

export default Events;
