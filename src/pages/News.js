import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleNews from '../blocks/page-title/PageTitleNews';
import NewsItemsData from '../data/news/newsItems';
import Widget from '../blocks/widget/Widget';
import LoadMoreButton from '../components/loadmore/LoadMore';
import SearchModal from '../components/modal/SearchModal';
import MenuModal from '../components/modal/MenuModal';
import HeaderLogo from '../blocks/logo/HeaderLogo';

const News = ({logoColor}) => {
    document.body.classList.add( 'blog' );
    document.body.classList.add( 'title-opacity-true' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>News | Malex - Business Consulting Agency HTML Template</title>

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
                            <div className="links adv-light">
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
                <PageTitleNews />

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="blog">
                                <div className="row gutter-width-sm">
                                    <div className="col-xl-8 col-lg-8 col-md-12 single-content">
                                        <div className="row gutter-width-sm with-pb-lg">
                                            { NewsItemsData && NewsItemsData.map( ( item, key ) => {
                                                return (
                                                    <div key={ key } className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                        <div className="card card-post">
                                                            <div className="card-top position-relative">
                                                                <a title={ item.imgTitle } href={ process.env.PUBLIC_URL + item.link }>
                                                                    <div className="img object-fit overflow-hidden">
                                                                        <div className="object-fit-cover transform-scale-h">
                                                                            <img className="card-top-img" src={ item.imgLink } alt={ item.imgAlt } />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="card-body">
                                                                <div className="card-meta">
                                                                    <p>
                                                                        <span><a className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space text-uppercase" href={ process.env.PUBLIC_URL + item.categoryLink }>{ item.categoryTitle }</a></span>
                                                                    </p>
                                                                </div>

                                                                <h4 className="card-title">
                                                                    <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a>
                                                                </h4>

                                                                <p className="card-text">{ item.description }</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            } ) }
                                        </div>

                                        <LoadMoreButton />
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-12">
                                        <Widget />
                                    </div>
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
export default News;
