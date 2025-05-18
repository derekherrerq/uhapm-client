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
				className='airtable-embed'
				src='https://airtable.com/embed/appVWGZYsrGejgqV6/pagM4TqsbAlUk79PL/form'
				frameBorder='0'
				width='100%'
				height='533'
				title='Registration Form'
				style={{ background: 'transparent', border: '1px solid #ccc' }}
			></iframe>
			<Suspense fallback={<Loading />}></Suspense>
		</div>
	);
};

export default Register;
