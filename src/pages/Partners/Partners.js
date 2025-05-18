import React, { Suspense } from 'react';
import { MetaData } from '../../components/Meta/MetaData';
import './Partners.css';
import Loading from '../../components/Loading/Loading';
import deloitte from '../../assets/partner-logos/deloitte.jpg';
import microsoft from '../../assets/partner-logos/microsoft.png';
import apple from '../../assets/partner-logos/apple.png';
import hp from '../../assets/partner-logos/hp.png';
import capitalone from '../../assets/partner-logos/capital-one.png';
import americanexpress from '../../assets/partner-logos/american-express.png';
import umbrage from '../../assets/partner-logos/umbrage.png';
import procore from '../../assets/partner-logos/procore.png';
import bakertilly from '../../assets/partner-logos/bakertilly.png';
import { Container, Row, Col } from 'react-bootstrap';

const Partners = () => {
	const meta = {
		title: 'Partners - APM',
		desc: 'Partner with our organization!',
		url: 'https://uhapm.org/partners',
	};

	return (
		<div className='form'>
			<MetaData {...meta} />

			{/* Become a Partner Section */}
			<Container
				fluid
				className='contained about-wrapper sub-section section-spacing'
			>
				<Row className='justify-content-center'>
					<Col md='8' className='text-center'>
						<div className='partner-us'>
							<h1 className='heading'>Become a Partner!</h1>
							<p className='lead-text' style={{ marginBottom: '1rem' }}>
								By partnering with APM, your organization gains the opportunity
								to connect with students early in their careers, helping you
								build build strong, lasting relationships.
							</p>
							<p className='lead-text'>
								If you&apos;re interested in partnering, reach out to{' '}
								<a href='mailto:president.uhapm@gmail.com'>
									president.uhapm@gmail.com
								</a>{' '}
								for more information!
							</p>
						</div>
					</Col>
				</Row>
			</Container>

			{/* Event Partners Section */}
			<Container
				fluid
				className='contained partner-wrapper sub-section section-spacing'
			>
				<Row>
					<Col md='12'>
						<h1 className='heading'>Event Partners</h1>
						<div className='partner-grid'>
							<a
								href='https://www.deloitte.com/global/en/services/consulting.html'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={deloitte}
									className='partner-logo'
									alt='Deloitte Logo'
								/>
							</a>
							<a
								href='https://careers.microsoft.com'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={microsoft}
									className='partner-logo'
									alt='Microsoft Logo'
								/>
							</a>
							<a
								href='https://www.apple.com/careers/us/'
								target='_blank'
								rel='noreferrer'
							>
								<img src={apple} className='partner-logo' alt='Apple Logo' />
							</a>
							<a
								href='https://jobs.hp.com/us/'
								target='_blank'
								rel='noreferrer'
							>
								<img src={hp} className='partner-logo' alt='HP Logo' />
							</a>
							<a
								href='https://www.capitalonecareers.com'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={capitalone}
									className='partner-logo'
									alt='Capital One Logo'
								/>
							</a>
							<a
								href='https://www.americanexpress.com/en-us/careers/'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={americanexpress}
									className='partner-logo'
									alt='American Express Logo'
								/>
							</a>
							<a
								href='https://www.umbrage.com/home'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={umbrage}
									className='partner-logo'
									alt='Umbrage Logo'
								/>
							</a>
							<a
								href='https://careers.procore.com'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={procore}
									className='partner-logo'
									alt='Procore Logo'
								/>
							</a>
							<a
								href='https://www.bakertilly.com/page/careers'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={bakertilly}
									className='partner-logo'
									alt='BakerTilly Logo'
								/>
							</a>
						</div>
					</Col>
				</Row>
			</Container>

			<Suspense fallback={<Loading />}></Suspense>
		</div>
	);
};

export default Partners;
