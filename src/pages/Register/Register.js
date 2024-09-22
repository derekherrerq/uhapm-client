import React, { Suspense } from 'react';
import { MetaData } from '../../components/Meta/MetaData';
import './Register.css';
import Loading from '../../components/Loading/Loading';

const Register = () => {
	const meta = {
		title: 'Register - APM',
		desc: 'Register for our organization!.',
		url: 'https://uhapm.org/register',
	};

	return (
		<div className='form'>
			<MetaData {...meta} />
			<iframe
				title='Register Form'
				src='https://docs.google.com/forms/d/e/1FAIpQLSdMZi_1DshKgzu6Of9AJOQpfSdCwGeanaKy89YH_jOJbTQ49w/viewform?embedded=true'
			>
				Loading…
			</iframe>
			<Suspense fallback={<Loading />}></Suspense>
		</div>
	);
};

export default Register;
