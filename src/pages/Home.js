import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleHome from '../blocks/page-title/PageTitleHome';
import ContactsUs from "../blocks/contacts/ContactUs";
import ServicesHome from '../blocks/services/ServicesHome';
import AboutsUs from '../blocks/about/AboutUs';
import News from '../blocks/news/News';
import HowWorks from '../blocks/how-it-works/HowWorks';
import TeamMembers from '../blocks/team-members/TeamMembers';
import Testimonials from '../blocks/testimonials/Testimonials';
import PricePlans from '../blocks/price-plans/PricePlans';
import VideoModal from '../components/modal/VideoModal';



const Home = () => {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'header-absolute-true' );
    document.body.classList.add( 'header-fixed-true' );
    
    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Home | Malex - Business Consulting Agency HTML Template</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <Header logoColor="light" />

            <main id="main" className="site-main content-no-spacing">
                <div className="content">
                    <div className="clearfix">
                        <PageTitleHome />

                        <ServicesHome />

                        <AboutsUs />

                        <div id="img" className="block spacer p-top-lg wrapper-normal">
                            <div className="wrapper">
                                <div className="img-size-1">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src="assets/img/placeholder/bg-slider-02.jpg" alt="Team" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <HowWorks />

                        <TeamMembers />

                        <PricePlans />

                        <div id="clients" className="block bg-white spacer m-top-xl">
                            <div className="wrapper">
                                <div className="clients">
                                    <div className="clients-items">
                                        <div className="clients-item">
                                            <div className="clients-item-content">
                                                <img src="assets/img/demo/06_img.png" alt="Balkan" />
                                            </div>
                                        </div>

                                        <div className="clients-item">
                                            <div className="clients-item-content">
                                                <img src="assets/img/demo/07_img.png" alt="Adveits" />
                                            </div>
                                        </div>

                                        <div className="clients-item">
                                            <div className="clients-item-content">
                                                <img src="assets/img/demo/08_img.png" alt="Swiger" />
                                            </div>
                                        </div>

                                        <div className="clients-item">
                                            <div className="clients-item-content">
                                                <img src="assets/img/demo/09_img.png" alt="The mandala community" />
                                            </div>
                                        </div>

                                        <div className="clients-item">
                                            <div className="clients-item-content">
                                                <img src="assets/img/demo/06_img.png" alt="Balkan" />
                                            </div>
                                        </div>

                                        <div className="clients-item">
                                            <div className="clients-item-content">
                                                <img src="assets/img/demo/07_img.png" alt="Adveits" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="video" className="block">

                            <VideoModal />

</div>

                        <Testimonials />

                        <News />

                        <ContactsUs />
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Home;
