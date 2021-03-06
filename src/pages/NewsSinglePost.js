import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleNewsSingle from '../blocks/page-title/PageTitleNewsSingle';
import NewsMeta from '../blocks/news/NewsMeta';
import NewsTitle from '../blocks/news/NewsTitle';
import NewsDescription from '../blocks/news/NewsDescription';
import NewsTags from '../blocks/news/NewsTags';
import NewsComments from '../blocks/news/NewsComments';
import Widget from '../blocks/widget/Widget';
import SearchModal from "../components/modal/SearchModal";
import MenuModal from "../components/modal/MenuModal";
import HeaderLogo from '../blocks/logo/HeaderLogo';



const NewsSinglePost = ({logoColor}) => {
    document.body.classList.add( 'single-post' );
    document.body.classList.add( 'title-opacity-true' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>News single post | Malex - Business Consulting Agency HTML Template</title>

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
                <PageTitleNewsSingle />

                <div id="page-content" className="spacer m-top-xl">
                    <div className="wrapper">
                        <div id="single">
                            <div className="row gutter-width-lg">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 single-content">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src="assets/img/placeholder/1050x600.jpg" alt="Assessing the Maturity of Your Data Management in Industry" />
                                        </div>
                                    </div>

                                    <NewsMeta />

                                    <NewsTitle />

                                    <NewsDescription />

                                    <NewsTags />

                                    <NewsComments />
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <Widget />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default NewsSinglePost;
