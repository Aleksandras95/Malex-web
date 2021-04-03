import React from 'react';
import PlansModal from '../../components/modal/PlansModal';


const PricePlans = () => {
    return (
        <section id="price-plans" className="block spacer p-top-xl-2 m-top-xl-2">
            <div className="wrapper">
                <div className="title">
                    <h6 className="text-primary text-uppercase">Price Plans</h6>
                </div>

                <div className="title-opacity">
                    <div className="title-opacity-text">Plans</div>
                </div>

                <div className="description">
                    <h2>Choose the Best Plan for You</h2>
                </div>

                <div className="row gutter-width-md with-pb-md spacer p-top-lg">
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="price-table">
                            <div className="price-table-header">
                                <h4 className="price-table-t-head">Basic Plan</h4>
                                <p className="price-table-description">This is Basic Plan</p>
                            </div>

                            <div className="price-table-price">
                                <p><span className="currency">$</span><span className="price">79</span><span
                                    className="period">/ Monthly</span></p>
                            </div>

                            <ul className="price-table-list-group list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Branding
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    20 hours of consultation
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    15 hours if theory
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Skype video call
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Support 24/7
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>
                            </ul>

                            <div className="price-table-footer">
                                <PlansModal messageText="Basic Plan" />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="price-table">
                            <div className="price-table-header">
                                <h4 className="price-table-t-head">Standart Plan</h4>
                                <p className="price-table-description">This is Standart Plan</p>
                            </div>

                            <div className="price-table-price">
                                <p><span className="currency">$</span><span className="price">129</span><span
                                    className="period">/ Monthly</span></p>
                            </div>

                            <ul className="price-table-list-group list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Branding
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    20 hours of consultation
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    15 hours if theory
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Skype video call
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Support 24/7
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>
                            </ul>

                            <div className="price-table-footer">
                                <PlansModal messageText="Standart Plan" />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="price-table">
                            <div className="price-table-badge">
                                <p>Popular</p>
                            </div>

                            <div className="price-table-header">
                                <h4 className="price-table-t-head">Premium Plan</h4>
                                <p className="price-table-description">This is Premium Plan</p>
                            </div>

                            <div className="price-table-price">
                                <p><span className="currency">$</span>
                                    <span className="price">259</span>
                                    <span className="period">/ Monthly</span>
                                </p>
                            </div>

                            <ul className="price-table-list-group list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Branding
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    20 hours of consultation
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    15 hours if theory
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Skype video call
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Support 24/7
                                    <i className="text-primary fas fa-check i-small"></i>
                                </li>
                            </ul>

                            <div className="price-table-footer">
                                <PlansModal messageText="Premium Plan" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricePlans;