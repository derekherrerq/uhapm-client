import React, { Suspense } from 'react';
import { MetaData } from '../../components/Meta/MetaData';
import './Sponsors.css';
import Loading from '../../components/Loading/Loading';
import deloitte from '../../assets/sponsor-logos/deloitte.jpg';
import microsoft from '../../assets/sponsor-logos/microsoft.png';
import apple from '../../assets/sponsor-logos/apple.png';
import hp from '../../assets/sponsor-logos/hp.png';
import capitalone from '../../assets/sponsor-logos/capital-one.png';
import americanexpress from '../../assets/sponsor-logos/american-express.png';
import umbrage from '../../assets/sponsor-logos/umbrage.png';
import procore from '../../assets/sponsor-logos/procore.png';
import bakertilly from '../../assets/sponsor-logos/bakertilly.png';
import { Container, Row, Col } from 'react-bootstrap';

const Sponsors = () => {
	const meta = {
		title: 'Sponsors - APM',
		desc: 'Sponsors for our organization!',
		url: 'https://uhapm.org/sponsors',
	};

	return (
		<div className='form'>
			<MetaData {...meta} />

			{/* Become a Sponsor Section */}
			<Container
				fluid
				className='contained about-wrapper sub-section section-spacing'
			>
				<Row className='justify-content-center'>
					<Col md='8' className='text-center'>
						<div className='sponsor-us'>
							<h1 className='heading'>Become a Sponsor!</h1>
							<p className='lead-text' style={{ marginBottom: '1rem' }}>
								By sponsoring APM, your organization gains the opportunity to
								connect with students early in their careers, helping you build
								strong, lasting relationships.
							</p>
							<p className='lead-text'>
								If you&apos;re interested in sponsoring, reach out to
								corporate.manager@uhapm.org for more information!
							</p>
						</div>
					</Col>
				</Row>
			</Container>

			{/* Sponsors Section */}
			<Container
				fluid
				className='contained sponsor-wrapper sub-section section-spacing'
			>
				<Row>
					<Col md='12'>
						<h1 className='heading'>Sponsors</h1>
						<div className='sponsor-grid'>
							<a
								href='https://www.deloitte.com/global/en/services/consulting.html'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={deloitte}
									className='sponsor-logo'
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
									className='sponsor-logo'
									alt='Microsoft Logo'
								/>
							</a>
						</div>
					</Col>
				</Row>
			</Container>

			{/* Event Partners Section */}
			<Container
				fluid
				className='contained sponsor-wrapper sub-section section-spacing'
			>
				<Row>
					<Col md='12'>
						<h1 className='heading'>Event Partners</h1>
						<div className='sponsor-grid'>
							<a
								href='https://www.apple.com/careers/us/'
								target='_blank'
								rel='noreferrer'
							>
								<img src={apple} className='sponsor-logo' alt='Apple Logo' />
							</a>
							<a
								href='https://jobs.hp.com/us/'
								target='_blank'
								rel='noreferrer'
							>
								<img src={hp} className='sponsor-logo' alt='HP Logo' />
							</a>
							<a
								href='https://www.capitalonecareers.com'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={capitalone}
									className='sponsor-logo'
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
									className='sponsor-logo'
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
									className='sponsor-logo'
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
									className='sponsor-logo'
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
									className='sponsor-logo'
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

export default Sponsors;
