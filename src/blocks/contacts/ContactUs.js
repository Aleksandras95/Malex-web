import React from 'react';

const ContactsUs = () => {
    return (
        <section id="contacts" className="block bg-white-before spacer p-top-xl-2">
            <div id="contacts-0" className="wrapper spacer p-top-xl-2">
                <div className="title">
                    <h6 className="text-primary text-uppercase">Contacts</h6>
                </div>

                <div className="title-opacity">
                    <div className="title-opacity-text">Contacts</div>
                </div>

                <div className="description-lg">
                    <h2>Any Questions? Contact us Freely and We'll Get Back to You Shortly</h2>
                </div>

                <div className="spacer p-top-lg">
                    <div className="row gutter-width-md with-pb-md">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="contacts-item">
                                <div className="contacts-item-icon">
                                    <i className="malex-icon-location"></i>
                                </div>

                                <h5 className="contacts-item-t-head">Location</h5>

                                <p className="contacts-item-description">Location: 575 Crescent Avenue<br></br>Quakertown, PA
                                    18951</p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="contacts-item">
                                <div className="contacts-item-icon">
                                    <i className="malex-icon-phone"></i>
                                </div>

                                <h5 className="contacts-item-t-head">Phone no.</h5>

                                <p className="contacts-item-description">
                                    Mobile: <a href="tel:+43253312523">+432 533 12 523</a><br></br>
                                    Fax: <a href="tel:+53222212523">+532 222 12 523</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="contacts-item">
                                <div className="contacts-item-icon">
                                    <i className="malex-icon-email"></i>
                                </div>

                                <h5 className="contacts-item-t-head">E-mail</h5>

                                <p className="contacts-item-description">
                                    Info: <a href="mailto:info@domain.com">info@domain.com</a><br></br>
                                    CEO: <a href="mailto:ceo@domain.com">ceo@domain.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="width-img spacer p-top-xl p-bottom-xl">
                <div className="wrapper">
                    <div id="contact-form">
                        <div className="title">
                            <h3 className="pb-0">You Can Write Us</h3>
                        </div>

                        <div className="description-lg spacer p-top-lg">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an
                                unknown printer took a galley.</p>
                        </div>

                        <div className="spacer p-top-lg">
                            <form method="post" action="form.php" id="cf-1" className="contact-form">
                                <div className="form-group form-group-xs">
                                    <input name="cf-1-name" type="text"
                                           className="form-control form-control-lg bg-gray-light" id="cf-1-name"
                                           placeholder="Name" required="required" />
                                </div>

                                <div className="form-group form-group-xs">
                                    <input name="cf-1-email" type="email"
                                           className="form-control form-control-lg bg-gray-light" id="cf-1-email"
                                           placeholder="Email" required="required" />
                                </div>

                                <div className="form-group form-group-xs">
                                    <textarea name="cf-1-message" className="form-control form-control-lg bg-gray-light"
                                              id="cf-1-message" placeholder="Message" required="required">
                                    </textarea>
                                </div>

                                <div className="form-group form-group-xs mb-0">
                                    <button type="submit" className="btn btn-outline-secondary">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsUs;
