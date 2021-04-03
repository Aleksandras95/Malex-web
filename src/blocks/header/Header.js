import React, { Component } from 'react';
import HeaderLogo from '../../blocks/logo/HeaderLogo';
import SearchModal from '../../components/modal/SearchModal';
import MenuModal from '../../components/modal/MenuModal';

class Header extends Component {
constructor( context ) {
    super( context );

    this.state = {
        showBtn: ''
    };

    this.open = this.open.bind( this );
    this.close = this.close.bind( this );
}

open() {
    this.setState( { showBtn: 'animated slideInDown' } );
        console.log(this.state.showBtn);
}

close() {
    this.setState( { showBtn: '' } );
        console.log(this.state.showBtn);
}
componentDidMount(){
    window.addEventListener("scroll", (event) => {
        let scroll = window.scrollY;
        console.log(this.showBtn(window.scrollY));
    });
}
 showBtn(){
    const services = document.getElementById( 'services' );
    let bounding = services.getBoundingClientRect();
    
        if ( window.screenTop - bounding.top > -20 ) {
            this.setState({slideIn: true})
            document.body.classList.add( 'header-fixed' );
            return true;
        }else{
    this.setState({slideIn: false})
    document.body.classList.remove( 'header-fixed' );
}
    //var header_fixed_true = 'header-fixed-true';
    //var fromTop = -1;
    //var fromHTML;

    //if ( document.querySelector( 'body.elementor-page' ).length ) {
    //    var fromHTML = '#main > .content > .clearfix [class*="-section-wrap"] > *:nth-child(2)';
    //} else {
    //    var fromHTML = '#main > .content > .clearfix > *:nth-child(2)';
    //}

    //if ( document.querySelector( 'body' ).classList.contains( header_fixed_true ) ) {
    //    if ( document.querySelector( '#header' ).length ) {
    //        if ( document.querySelector( fromHTML ).length ) {
    //            document.querySelector( window ).scroll( function() {
    //                if ( ( document.querySelector( window ).scrollTop - document.querySelector( fromHTML ).offset().top ) > fromTop ) {
    //                    document.querySelector( '#header' ).classList.add( 'animated slideInDown' );
    //                    document.querySelector( '.header-fixed-true' ).classList.add( 'header-fixed' );
    //                } else {
    //                    document.querySelector( '#header' ).classList.remove( 'animated slideInDown' );
    //                    document.querySelector( '.header-fixed-true' ).classList.remove( 'header-fixed' );
    //                }
    //            });
    //        }
    //    }
    //}
};  
render() {
    return (
        <header onClick={ this.open.bind( this )} id="header" className={`site-header ${this.state.slideIn ? 'animated slideInDown' :''}`}>
            <div className="wrapper">
                <div className="header-content d-flex justify-content-between">
                    <div className="header-left align-self-center">
                        <HeaderLogo logoColor={ this.props.logoColor } />
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

                            <SearchModal buttonClass="adv-light" btnOutline="tertiary"/>
                            <MenuModal showBtn={this.state.slideIn} buttonClass={this.state.slideIn ? 'adv-dark' :'adv-light'} btnOutline={this.state.slideIn ? 'btn-secondary btn-hover-main-secondary' :'btn-outline-tertiary'}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        );
    }
}
export default Header;