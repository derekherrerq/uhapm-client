import React, { Suspense } from 'react';
import { MetaData } from '../../components/Meta/MetaData';
import './Register.css';
import Loading from '../../components/Loading/Loading';

const Register = () => {
	const meta = {
		title: 'Register - APM',
		desc: 'Register for our organization!',
		url: 'https://uhapm.org/register',
	};

	return (
		<div className='form'>
			<MetaData {...meta} />
			<iframe
				title='APM Feedback Form'
				src='https://i2ywfzisu40.typeform.com/to/x6pDxcma'
				width='100%'
				height='500px'
				style={{ border: 'none' }}
			></iframe>
			<Suspense fallback={<Loading />}></Suspense>
		</div>
	);
};

export default Register;
