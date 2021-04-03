import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="block bg-dark spacer p-top-xl p-bottom-xl">
            <div className="wrapper">
                <div className="title">
                    <h6 className="text-primary text-uppercase">Testimonials</h6>
                </div>

                <div className="description text-tertiary">
                    <h2>Our Happy Customers Reviews</h2>
                </div>

                <div className="adv-slider-reviews text-tertiary">
                    <div className="adv-slider-reviews-img">
                        <img src="assets/img/demo/11_img.png" alt="Icon" />
                    </div>

                    <div className="adv-swiper-container reviews-text">
                        <div className="adv-swiper-wrapper reviews-text-items">
                            <div className="adv-swiper-slide reviews-text-item">
                                <div className="reviews-text-item-content">
                                    <h3>But I must explain to you how all this mistaken idea of denouncing pleasure and
                                        praising pain was born and I will give you a complete account.</h3>
                                </div>
                            </div>

                            <div className="adv-swiper-slide reviews-text-item">
                                <div className="reviews-text-item-content">
                                    <h3>But I must explain to you how all this mistaken idea of denouncing pleasure and
                                        praising pain was born and I will give you a complete account.</h3>
                                </div>
                            </div>

                            <div className="adv-swiper-slide reviews-text-item">
                                <div className="reviews-text-item-content">
                                    <h3>But I must explain to you how all this mistaken idea of denouncing pleasure and
                                        praising pain was born and I will give you a complete account.</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center thumbs">
                        <div className="adv-swiper-container reviews-thumbs">
                            <div className="adv-swiper-wrapper reviews-thumbs-items">
                                <div className="adv-swiper-slide reviews-thumbs-item" data-reviews-name="Tommy Andersen"
                                     data-reviews-position="CEO at Company">
                                    <img src="assets/img/placeholder/60x60.jpg" alt="Tommy Andersen" />
                                </div>

                                <div className="adv-swiper-slide reviews-thumbs-item" data-reviews-name="Arthur Hopin"
                                     data-reviews-position="CEO at Company">
                                    <img src="assets/img/placeholder/60x60.jpg" alt="Arthur Hopin" />
                                </div>

                                <div className="adv-swiper-slide reviews-thumbs-item" data-reviews-name="Rosie Ford"
                                     data-reviews-position="CEO at Company">
                                    <img src="assets/img/placeholder/60x60.jpg" alt="Rosie Ford" />
                                </div>
                            </div>
                        </div>

                        <div className="reviews-results">
                            <h6 className="reviews-name" id="reviews-name">Tommy Andersen</h6>
                            <p className="reviews-positions" id="reviews-positions">CEO at Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;