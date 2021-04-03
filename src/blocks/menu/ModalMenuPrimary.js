import React from 'react';

const ModalMenuPrimary = () => {
    return (
        <nav className="menu-primary">
            <ul className="nav flex-column">
                <li className={ "nav-item" + (window.location.pathname === '/services' ? " current-nav-item" : "") }>
                    <a title="About" href={ process.env.PUBLIC_URL + "/services" }>Services</a>
                </li>
                
                <li className={ "nav-item" + (window.location.pathname === '/about-us' ? " current-nav-item" : "") }>
                    <a title="About Us" href={ process.env.PUBLIC_URL + "/about-us" }>About Us</a>
                </li>

                <li className={ "nav-item" + (window.location.pathname === '/how-it-works' ? " current-nav-item" : "") }>
                    <a title="How it Works?" href={ process.env.PUBLIC_URL + "/how-it-works" }>How it Works?</a>
                </li>

                <li className={ "nav-item" + (window.location.pathname === '/team-members' ? " current-nav-item" : "") }>
                    <a title="Team Member" href={ process.env.PUBLIC_URL + "/team-members" }>Team Members</a>
                </li>

                <li className={ "nav-item" + (window.location.pathname === '/price-plans' ? " current-nav-item" : "") }>
                    <a title="Price Plans" href={ process.env.PUBLIC_URL + "/price-plans" }>Price Plans</a>
                </li>

                <li className={ "nav-item" + (window.location.pathname === '/clients' ? " current-nav-item" : "") }>
                    <a title="Clients" href={ process.env.PUBLIC_URL + "/clients" }>Clients</a>
                </li>

                <li className={ "nav-item" + (window.location.pathname === '/testimonials' ? " current-nav-item" : "") }>
                    <a title="Testimonials" href={ process.env.PUBLIC_URL + "/testimonials" }>Testimonials</a>
                </li>

                <li className={ "nav-item" + (window.location.pathname === '/news' ? " current-nav-item" : "") }>
                    <a title="News" href={ process.env.PUBLIC_URL + "/news" }>News</a>
                </li>

                <li className={ "nav-item" + (window.location.pathname === '/contacts' ? " current-nav-item" : "") }>
                    <a title="Contacts" href={ process.env.PUBLIC_URL + "/contacts" }>Contacts</a>
                    </li>
                </ul>
            </nav>
    );
};

export default ModalMenuPrimary;
