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
					src='https://calendar.google.com/calendar/embed?src=c_923ed97725bac22da19d71e5b1f9f7bcf2996d1f4b6b2f7fa939ccf7664c5fe3%40group.calendar.google.com&ctz=America%2FChicago'
				></iframe>
			</div>
		</>
	);
};

export default Events;
