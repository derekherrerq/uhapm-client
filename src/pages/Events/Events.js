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
		</>
	);
};

export default Events;
