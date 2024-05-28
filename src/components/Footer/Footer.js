import React from 'react';
import './Footer.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/pages/logo.png';
import ig from '../../assets/icons/instagram.webp';
import ds from '../../assets/icons/discord.webp';
import li from '../../assets/icons/linkedin.webp';

const Footer = () => {
	return (
		<footer>
			<div className='wrapper' style={{ textAlign: 'center' }}>
				<Link to='/'>
					<img
						src={logo}
						className='footer-logo'
						alt='Association of Product Manager at The University of Houston'
					/>
				</Link>
				<Nav className='social-icons'>
					<Nav.Item>
						<Nav.Link
							href='https://www.linkedin.com/company/apm-uh/'
							target='_blank'
							rel='nofollow noopener'
						>
							<img src={li} alt='Linkedin Icon' />
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							href='https://www.instagram.com/uh_apm/'
							target='_blank'
							rel='nofollow noopener'
						>
							<img src={ig} alt='Instagram Icon' />
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							href='https://discord.gg/x93VgAMZvq'
							target='_blank'
							rel='nofollow noopener'
						>
							<img src={ds} alt='Discord Icon' />
						</Nav.Link>
					</Nav.Item>
				</Nav>
				<Nav style={{ marginBottom: '-2rem', justifyContent: 'center' }}>
					<p>&copy; {new Date().getFullYear()} APM</p>
				</Nav>
			</div>
		</footer>
	);
};

export default Footer;
