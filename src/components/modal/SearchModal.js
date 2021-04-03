import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import HeaderLogo from '../../blocks/logo/HeaderLogo';
import SearchForm from '../form/SearchForm';
import ModalMenuLanguages from "../../blocks/menu/ModalMenuLanguages";
import PropTypes from 'prop-types';

class SearchModal extends Component {

    constructor( context ) {
        super( context );

        this.state = {
            showModal: false
        };

        this.open = this.open.bind( this );
        this.close = this.close.bind( this );
    }

    open() {
        this.setState( { showModal: true }, function () {
        } );
    }

    close() {
        this.setState( { showModal: false } );
    }

    render() {
        return (
            <Fragment>
                <div className ={"search-toggle " + this.props.buttonClass}>
                    <button onClick={ this.open.bind( this )} type="button" className={"btn btn-lg btn-outline-" + this.props.btnOutline + " btn-round p-0 min-w-auto"}>
                    <i className="fas fa-search"></i>
                    </button>
                </div>

                <Modal className="search-modal"
                       id="search-modal"
                       show={ this.state.showModal }
                       onHide={ this.close }
                       backdrop={ false }
                       aria-labelledby="search-modal"
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
                                            <div className="search-close-toggle">
                                                <button onClick={ this.close } type="button" className="btn btn-lg btn-outline-tertiary btn-round p-0 min-w-auto" data-dismiss="modal" aria-label="Close">
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body modal-body-centered">
                                <SearchForm />
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
SearchModal.propTypes={
    buttonClass: PropTypes.string,
    btnOutline: PropTypes.string
};
export default SearchModal;
