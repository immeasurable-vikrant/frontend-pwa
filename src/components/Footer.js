import React, { Fragment } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './style.css';

const Footer = () => {
	return (
		<Fragment>
			<footer className='new_footer_area bg_color'>
				<div className='new_footer_top'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-3 col-md-6 col-xs-3'>
								<div className='f_widget company_widget wow fadeInLeft' data-wow-delay='0.2s'>
									<h3 className='f-title f_600 t_color f_size_18'>Get in Touch</h3>
									<p>Don’t miss any updates of our new templates and extensions.!</p>
									{/* <form></form>
                                    <form className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1" />
                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                        <p className="mchimp-errmessage"
                                        //  style="display: none;"
                                         ></p>
                                        <p className="mchimp-sucmessage" 
                                        // style="display: none;"
                                        ></p>
                                    </form> */}
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-xs-3'>
								<div className='f_widget about-widget pl_70 wow fadeInLeft' data-wow-delay='0.4s'>
									<h3 className='f-title f_600 t_color f_size_18'>Download</h3>
									<ul className='list-unstyled f_list'>
										<li>
											<a href='/'>Android App</a>
										</li>
										<li>
											<a href='/'>iOS App</a>
										</li>
										<li>
											<a href='/'>PWA</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-xs-3'>
								<div className='f_widget about-widget pl_70 wow fadeInLeft' data-wow-delay='0.6s'>
									<h3 className='f-title f_600 t_color f_size_18'>Help</h3>
									<ul className='list-unstyled f_list'>
										<li>
											<a href='/'>About</a>
										</li>
										<li>
											<a href='/'>FAQ</a>
										</li>
										<li>
											<a href='/'>Term &amp; conditions</a>
										</li>
										<li>
											<a href='/'>Privacy</a>
										</li>
										<li>
											<a href='/'>Documentation</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-xs-3'>
								<div className='f_widget social-widget pl_70 wow fadeInLeft' data-wow-delay='0.8s'>
									<h3 className='f-title f_600 t_color f_size_18'>Team Solutions</h3>
									<div className='f_social_icon'>
										<FacebookIcon color='primary' fontSize='large' />
										<TwitterIcon color='primary' fontSize='large' />
										<LinkedInIcon color='primary' fontSize='large' />
										{/* <Link to='/' className="fab fa-facebook"></Link>
                                        <Link to='/' className="fab fa-twitter"></Link>
                                        <Link to='/' className="fab fa-linkedin"></Link> */}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='footer_bg'>
						{/* <div className="footer_bg_one"></div> */}
						<div className='footer_bg_two' />
					</div>
				</div>
				<div className='footer_bottom'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-12 col-sm-12'>
								<p
									style={{ color: 'darkgray', fontSize: '16px', fontWeight: '400' }}
									className='text-center mb-0 f_400'>
									Immeasurable &copy; 2020
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
