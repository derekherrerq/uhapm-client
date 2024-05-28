import React from 'react';
import { MetaData } from '../../components/Meta/MetaData';
import './Home.css';

const Home = () => {
	const meta = {
		title: 'APM - Association of Product Managers',
		desc: 'The Association of Product Managers at The University of Houston Homepage',
		url: 'https://uhapm.org',
	};

	return (
		<>
			<MetaData {...meta}></MetaData>
			<div className='banner'></div>
		</>
	);
};

export default Home;
