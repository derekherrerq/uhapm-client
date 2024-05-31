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
			<div className='banner'>
				<div className='main-text'>
					<h2>Association of</h2>
					<h2>Product Managers</h2>
					<h3>Innovate. Collaborate. Elevate.</h3>
					<h4>Est. 2024 | University of Houston</h4>
				</div>
			</div>
		</>
	);
};

export default Home;
