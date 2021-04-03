import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitle404 from '../blocks/page-title/PageTitle404';
import BackToHome from '../components/button/BackToHome';
import SearchForm from '../components/form/SearchForm';
import SearchModal from "../components/modal/SearchModal";
import MenuModal from "../components/modal/MenuModal";
import HeaderLogo from '../blocks/logo/HeaderLogo';


const page404 = ({logoColor}) => {
    document.body.classList.add( 'error404' );
    document.body.classList.add( 'title-opacity-true' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>404 | Malex - Business Consulting Agency HTML Template</title>

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

            <header id="header" className="site-header">
            <div className="wrapper">
                <div className="header-content d-flex justify-content-between">
                    <div className="header-left align-self-center">
                        <HeaderLogo logoColor={ logoColor="dark" } />
                    </div>

                    <div className="header-right d-flex justify-content-end">
                        <div className="d-flex align-items-center">
                            <div className="links adv-dark">
                                <div className="links-items">
                                    <div className="links-item">
                                        <a href={ process.env.PUBLIC_URL + "/news" }>Our news</a>
                                    </div>
                                </div>
                            </div>

                            <SearchModal buttonClass="adv-dark" btnOutline="secondary"/>
                            <MenuModal buttonClass="adv-dark" btnOutline="btn-outline-secondary"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>

            <main id="main" className="site-main">
                <PageTitle404 />

                <div id="page-content" className="spacer p-top-lg">
                    <div className="wrapper">
                        <div className="content">
                            <p className="text after">The page you were looking for couldn't be found. The page could be
                                removed or you misspelled the word while searching for it. Maybe try a search?</p>

                            <div className="form">
                                <SearchForm />
                            </div>

                            <BackToHome />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default page404;
