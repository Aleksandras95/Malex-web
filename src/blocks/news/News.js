import React from 'react';
import NewsHomeItemsData from '../../data/news/newsHomeItems';

const News = () => {
    return (
        <section id="news" className="block spacer p-top-xl-2 m-top-xl-2 p-bottom-xl">
            <div className="wrapper">
                <div className="title">
                    <h6 className="text-primary text-uppercase">New Articles</h6>
                </div>

                <div className="title-opacity">
                    <div className="title-opacity-text">News</div>
                </div>

                <div className="description">
                    <h2>Check Our Latest Blog Posts</h2>
                </div>

                <div className="blog-shortcode">
                    <div className="row gutter-width-md with-pb-md spacer p-top-lg">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="card card-post">
                                <div className="card-top position-relative">
                                    <a title="5 Tips for Sustainable Business Success" href="/news-single-post">
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <img className="card-top-img" src="assets/img/placeholder/news1.jpg"
                                                     alt="5 Tips for Sustainable Business Success" />
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a title="5 Tips for Sustainable Business Success" href={ process.env.PUBLIC_URL + "/news-single-post" }>5
                                            Tips for Sustainable Business Success</a>
                                    </h5>

                                    <p className="card-text">At vero eos et accusamus et iusto odio dignissimos
                                        ducims…</p>

                                    <div className="card-btn">
                                        <a title="Read more"
                                           className="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase"
                                           href={ process.env.PUBLIC_URL + "/news-single-post" }>
                                            <i className="malex-icon-arrow-right i-large"></i>
                                            <span className="btn-text">Read more</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="card card-post">
                                <div className="card-top position-relative">
                                    <a title="Assessing the Maturity of Your Data Management in Industry"
                                       href="news-single-post.html">
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <img className="card-top-img" src="assets/img/placeholder/news2.jpg"
                                                     alt="Assessing the Maturity of Your Data Management in Industry" />
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a title="Assessing the Maturity of Your Data Management in Industry"
                                           href={ process.env.PUBLIC_URL + "/news-single-post" }>Assessing the Maturity of Your Data Management
                                            in Industry</a>
                                    </h5>

                                    <p className="card-text">At vero eos et accusamus et iusto odio dignissimos
                                        ducims…</p>

                                    <div className="card-btn">
                                        <a title="Read more"
                                           className="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase"
                                           href={ process.env.PUBLIC_URL + "/news-single-post" }>
                                            <i className="malex-icon-arrow-right i-large"></i>
                                            <span className="btn-text">Read more</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="card card-post">
                                <div className="card-top position-relative">
                                    <a title="How to Build Your Sustainable Susiness Strategy"
                                       href={ process.env.PUBLIC_URL + "/news-single-post" }>
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <img className="card-top-img" src="assets/img/placeholder/news3.jpg"
                                                     alt="How to Build Your Sustainable Susiness Strategy" />
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a title="How to Build Your Sustainable Susiness Strategy"
                                           href={ process.env.PUBLIC_URL + "/news-single-post" }>How to Build Your Sustainable Susiness
                                            Strategy</a>
                                    </h5>

                                    <p className="card-text">At vero eos et accusamus et iusto odio dignissimos
                                        ducims…</p>

                                    <div className="card-btn">
                                        <a title="Read more" className="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase" href={ process.env.PUBLIC_URL + "/news-single-post" }>
                                            <i className="malex-icon-arrow-right i-large"></i>
                                            <span className="btn-text">Read more</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spacer m-top-lg text-right">
                    <a title="View all news" className="btn btn-outline-secondary" href={ process.env.PUBLIC_URL + "/news " }>View All Posts</a>
                </div>
            </div>
        </section>
    );
};

export default News;
