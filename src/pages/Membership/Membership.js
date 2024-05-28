import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import placeholder from '../../assets/pages/placeholder.svg';
import { MetaData } from '../../components/Meta/MetaData';
import './Membership.css';

const Membership = () => {
	const meta = {
		title: 'Membership - APM',
		desc: 'Learn more about our membership.',
		url: 'https://uhapm.org/membership',
	};

	return (
		<div>
			<MetaData {...meta} />
			<Container fluid className='contained hero hero-membership'>
				<Row>
					<Col md='6' className='order-md-2'>
						<Container
							fluid
							style={{ textAlign: 'center', marginBottom: '-30rem' }}
						>
							<h1 style={{ textAlign: 'center', marginBottom: '0rem' }}>
								Benefits
							</h1>
							<Row className='benefits' md={12} xs={12}>
								<div>
									<Row>
										<Col>
											<Card style={{ textAlign: 'center', border: 'none' }}>
												<Card.Body>
													<div>
														<img
															src={placeholder}
															style={{
																height: '10em',
																width: '9em',
																color: 'red',
															}}
															alt='undraw'
														/>
													</div>
													<Card.Title style={{ textAlign: 'center' }}>
														Professional Networking
													</Card.Title>
													<p style={{ textAlign: 'center' }}>
														Network and build relationships with employers in
														the Houston area
													</p>
												</Card.Body>
											</Card>
										</Col>
										<Col>
											<Card style={{ textAlign: 'center', border: 'none' }}>
												<Card.Body>
													<div>
														<img
															src={placeholder}
															alt='undraw'
															style={{
																height: '10em',
																width: '9em',
																color: 'red',
															}}
														/>
													</div>
													<Card.Title>Workshops</Card.Title>
													<p>
														Learn leading industry practices to make you stand
														out as a job candidate
													</p>
												</Card.Body>
											</Card>
										</Col>
									</Row>
									<Row>
										<Col>
											<Card style={{ textAlign: 'center', border: 'none' }}>
												<Card.Body>
													<div>
														<img
															src={placeholder}
															alt='undraw'
															style={{
																height: '10em',
																width: '9em',
																color: 'red',
															}}
														/>
													</div>
													<Card.Title>Alumni Network</Card.Title>
													<p>
														Connect with and learn from UH alumni who have
														broken into PM
													</p>
												</Card.Body>
											</Card>
										</Col>
										<Col>
											<Card style={{ textAlign: 'center', border: 'none' }}>
												<Card.Body>
													<div>
														<img
															src={placeholder}
															alt='undraw'
															style={{
																height: '10em',
																width: '9em',
																color: 'red',
															}}
														/>
													</div>
													<Card.Title style={{ textAlign: 'center' }}>
														Socials
													</Card.Title>
													<p style={{ textAlign: 'center' }}>
														Attend our unique events to have fun and meet new
														people
													</p>
												</Card.Body>
											</Card>
										</Col>
									</Row>
								</div>
							</Row>
						</Container>
					</Col>
					<Col md='6' className='order-md-0'>
						<div className='membership'>
							<h1>Membership</h1>
							<div className='lead-text'>
								<p>
									The Association of Product Managers aims to advance members’
									careers through numerous workshops, information sessions, and
									collaborative challenges. Students are empowered to tackle
									diverse problems faced by businesses and consumers,
									encouraging curiosity and teamwork. Together, these
									initiatives inspire members to build exciting products and
									explore product, program, and project management across
									various industries.
								</p>
								<p>
									Memberships are priced at $35 for a full year or $20 for a
									semester. If you have any questions regarding membership,
									contact operationsmanager@uhapm.org.
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Membership;
