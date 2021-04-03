import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import HeaderLogo from '../../blocks/logo/HeaderLogo';
import SearchModal from '../../components/modal/SearchModal';
import ModalMenuPrimary from '../../blocks/menu/ModalMenuPrimary';
import ModalMenuSecondary from '../../blocks/menu/ModalMenuSecondary';
import ModalMenuLanguages from '../../blocks/menu/ModalMenuLanguages';
import PropTypes from 'prop-types';


class MenuModal extends Component {

    constructor( context ) {
        super( context );

        this.state = {
            showModal: false
        };

        this.open = this.open.bind( this );
        this.close = this.close.bind( this );
    }
    open() {
        this.setState( { showModal: true } );
    }

    close() {
        this.setState( { showModal: false } );
    }
    render() {
        return (
            <Fragment>
                <div className ={"menu-toggle " + this.props.buttonClass}>
                    <button onClick={ this.open.bind( this )} type="button" className={"btn btn-lg " + this.props.btnOutline +" btn-round p-0 min-w-auto"}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <Modal
                    className="modal fade menu-modal"
                    show={ this.state.showModal }
                    onHide={ this.close }
                    backdrop={ false }
                    aria-labelledby="menu-modal"
                    aria-hidden="true"
                    dialogClassName="modal-full"
                    ref={ node => this.chart = node }>
                    <div className="wrapper">
                        <div className="modal-content">
                            <div className="modal-header modal-header-top">
                                <div className="header-content d-flex justify-content-between w-100">
                                    <div className="header-left align-self-center">
                                        <HeaderLogo logoColor="light" />
                                    </div>

                                    <div className="header-right d-flex justify-content-end">
                                        <div className="d-flex align-items-center">
                                            <div className="links adv-light">
                                                <div className="links-items">
                                                    <div className="links-item">
                                                        <a href={ process.env.PUBLIC_URL + "/" }>Our news</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <SearchModal buttonClass="adv-light" btnOutline="tertiary"/>

                                            <div className="menu-close-toggle">
                                                <button onClick={ this.close } type="button" className="btn btn-lg btn-outline-tertiary btn-round p-0 min-w-auto" data-dismiss="modal" aria-label="Close">
                                                    <i className="fas fa-times"></i></button> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body modal-body-centered">
                                <div className="d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row justify-content-between align-items-sm-center align-items-md-center align-items-lg-center align-items-xl-center w-100">
                                    <ModalMenuSecondary />
                                    <div className="animated fadeinright d-flex justify-content-end w-100 order-0 order-sm-1 order-md-1 order-lg-1 order-xl-1">
                                    <ModalMenuPrimary />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <div className="d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row justify-content-between w-100">
                                <div className="modal-text">
                                    <p>© 2020 Business Consulting Agency HTML Template By Adveits</p>
                                </div>
                                <ModalMenuLanguages />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

MenuModal.propTypes={
    buttonClass: PropTypes.string,
    btnOutline: PropTypes.string
};

export default MenuModal;
