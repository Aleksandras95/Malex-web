import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleSearch from '../blocks/page-title/PageTitleSearch';
import SearchItemsData from '../data/search-results/searchItems';
import SearchModal from "../components/modal/SearchModal";
import MenuModal from "../components/modal/MenuModal";
import HeaderLogo from '../blocks/logo/HeaderLogo';


const SearchResults = ({logoColor}) => {
    document.body.classList.add( 'search-results' );
    document.body.classList.add( 'title-opacity-true' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Search results | Malex - Business Consulting Agency HTML Template</title>

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
                <PageTitleSearch />

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div className="row gutter-width-md with-pb-lg">
                                { SearchItemsData && SearchItemsData.map( ( item, key ) => {
                                    return (
                                        <div key={ key } className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                            <div className="card card-post">
                                                <div className="card-body p-0">
                                                    <h4 className="card-title">
                                                        <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a>
                                                    </h4>

                                                    <p className="card-text">{ item.description }</p>
                                                    <div className="card-btn">
                                                        <a title="Read more" className="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase" href="news-single-post.html">
                                                            <i className="malex-icon-arrow-right i-large"></i>
                                                            <span className="btn-text">Read more</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } ) }
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default SearchResults;
