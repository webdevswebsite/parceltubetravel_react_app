import React from 'react';
import { Link } from 'react-router-dom';
import NavHelper from '../../helper/NavHelper';

class Header extends NavHelper {
    render() {
        const stickyHeader = this.state.stickyHeader ? ' sticky' : '';
        return (
            <header className="header">
                {/* Navigation */}
                <div className={"navigation" + stickyHeader}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="main-navigation">
                                    <div className="logo">
                                        <Link to="/">
                                            Parceltube
                                            {/* <img src={process.env.PUBLIC_URL + "/assets/images/toor-logo.png"} className="img-fluid image-fit" alt="img" /> */}
                                        </Link>
                                    </div>
                                    <div className={this.state.navMethod === true ? 'main-menu active' : 'main-menu'}>
                                        <div className="logo">
                                            <Link to="/">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/toor-logo.png"} className="img-fluid image-fit" alt="img" />
                                            </Link>
                                        </div>
{/*                                        
                                        <div className="cta-btn">
                                            <Link to="/about" className="btn-first btn-submit">Enquiry Now</Link>
                                        </div> */}
                                    </div>
                                    <div className="hamburger-menu" onClick={this.toggleNav}>
                                        <div className={this.state.navMethod === true ? 'menu-btn active' : 'menu-btn'}>
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navigation */}
            </header>
        );
    }
}

export default Header;