import React, { Component, Fragment } from 'react';
import SwipeBox from 'fslightbox-react';

class SwipeBoxComponent extends Component {
    state = {
        isVisible: false,
        slide: 0,
    };
    showSlide = ( slide, event ) => {
        event.preventDefault();
        this.setState( {
            isVisible: !this.state.isVisible,
            slide: slide
        } );
    };

    render() {
        return (
            <Fragment>
                <div className="embed">
        <div className="embed-image-overlay">
            <a onClick={ ( event ) => this.showSlide( 1, event ) } className="embed-click swipebox">
                
                <div className="embed-center">
                    <div className="embed-play">
                        <i className="fas fa-play"></i>
        </div>
    </div>
</a>

<div className="embed-image">
    <div className="img object-fit">
        <div className="object-fit-cover">
            <img src="assets/img/placeholder/video-bg.jpg" alt="Video" />
        </div>
    </div>
</div>

<div className="embed-bg"></div>
        </div>
    </div>
                <SwipeBox
                    toggler={ this.state.isVisible }
                    slide={ this.state.slide }
                    urls={ [
                        'https://www.youtube.com/watch?v=xshEZzpS4CQ'
                    ] }
                />

                        </Fragment>
        );
    }
}

export default SwipeBoxComponent;
