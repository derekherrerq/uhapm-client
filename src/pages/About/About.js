import React, { lazy, Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutpic from '../../assets/pages/about.svg';
import { officersFall2024 } from '../../data/officers';
import { MetaData } from '../../components/Meta/MetaData';
import './About.css';
import Loading from '../../components/Loading/Loading';
const Officer = lazy(() => import('../../components/Officers/Officer'));

const meta = {
	title: 'About - APM',
	desc: 'Learn more about APM',
	url: 'https://uhapm.org/about',
};

const About = () => {
	const officers = officersFall2024;
	console.log(officers);

	return (
		<>
			<MetaData {...meta} />
			<Container
				fluid
				className='contained hero hero-about'
				style={{ marginBottom: '-10rem' }}
			>
				<Row>
					<Col md='6' className='order-md-0'>
						<img src={aboutpic} alt='undraw svg' className='img-fluid'></img>
					</Col>
					<Col md='6' className='order-md-1'>
						<div className='about-us'>
							<h1>About Us</h1>
							<p className='lead-text'>
								The Association of Product Managers is an organization dedicated
								to promoting the concept of Product, Project, and Program
								Management. Our mission is to provide opportunities for
								individuals to enter and thrive in this career path whether that
								be in Tech, Accounting & Finance, etc. Looking to sponsor us?
								Reach out at corporatemanager@uhapm.org.
							</p>
						</div>
					</Col>
				</Row>
			</Container>

			<Suspense fallback={<Loading />}>
				<Container
					fluid
					className='contained sub-section'
					style={{ textAlign: 'center', marginBottom: '0rem' }}
				>
					<h2 className='heading'>Meet our Officers</h2>
					<div className='officers-grid'>
						{officers.map(
							(officer) =>
								officer.show && <Officer officer={officer} key={officer.id} />
						)}
					</div>
				</Container>
			</Suspense>
			{/* <Container fluid className='contained sponsor-wrapper sub-section'>
				<Row> TODO: Add sponsors
					<Col md='12'>
						<h2 className='heading'>Sponsors</h2>
						<div className='sponsor-logos'>
							<a
								href='??'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={??}
									className='sponsor-logo'
									alt='??'
								/>
							</a> 
						</div>
					</Col>
				</Row>
			</Container> */}
		</>
	);
};

export default About;
