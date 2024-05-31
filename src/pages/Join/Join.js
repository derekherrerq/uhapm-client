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
		<div className='form'>
			<MetaData {...meta} />
			<iframe
				title='Join Form'
				src='https://docs.google.com/forms/d/e/1FAIpQLSdMZi_1DshKgzu6Of9AJOQpfSdCwGeanaKy89YH_jOJbTQ49w/viewform?embedded=true'
				width='1280'
				height='1335'
			>
				Loading…
			</iframe>
			<Suspense fallback={<Loading />}></Suspense>
		</div>
	);
};
export default Membership;
