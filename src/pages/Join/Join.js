import React, { Suspense } from 'react';
import { MetaData } from '../../components/Meta/MetaData';
import './Join.css';
import Loading from '../../components/Loading/Loading';

const Membership = () => {
	const meta = {
		title: 'Join Us - APM',
		desc: 'Join our organization!.',
		url: 'https://uhapm.org/join',
	};

	return (
		<div>
			<MetaData {...meta} />
			<Suspense fallback={<Loading />}></Suspense>
		</div>
	);
};
export default Membership;
