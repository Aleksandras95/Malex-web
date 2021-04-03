import React from 'react';
import { Link } from 'react-scroll';

const PageTitleHome = () => {
    return (
        <section id="page-title" className="block with-img with-service-items" style={ { backgroundImage: 'url(assets/img/placeholder/bg.jpg)' } }>
            <div className="wrapper d-flex flex-column justify-content-center">
                <div className="page-title-body page-title-body-space-left">
                    <div className="title">
                        <h1 className="large">Business<br/> Consulting Agency</h1>
                    </div>

                    <div className="description spacer p-top-lg">
                        <p>We are digital business consulting agency that helps companies increase better incomes and help with branding for faster business growing.</p>
                    </div>

                    <div className="spacer p-top-lg no-space">
                        <Link href="#contact-us"
                              to="contact-us"
                              spy={ true }
                              smooth={ true }
                              duration={ 0 }
                              className="btn btn-outline-tertiary">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="page-title-footer full-width">
                    <div className="d-flex justify-content-between">
                        <a href="#services" className="scroll-to-id scroll-animation">
                            <i className="malex-icon-long-arrow-down i-large-2"></i>
                        </a>
                        <div className="align-self-end">
                            <nav className="languages">
                                <ul className="nav">
                                    <li className="lang-item current-lang">
                                        <a title="En" href={ process.env.PUBLIC_URL + "/" }>En</a>
                                    </li>
                                    <li className="lang-item">
                                        <a title="Ru" href={ process.env.PUBLIC_URL + "/" }>Ru</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-title-bg-color"></div>
        </section>
    );
};

export default PageTitleHome;
