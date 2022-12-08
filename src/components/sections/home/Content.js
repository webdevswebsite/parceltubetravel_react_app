import React, { Component, Fragment } from 'react';
import Banner from './Banner';
// import Category from './Category';
// import Recomcruise from './Recomcruise';
import Recomflights from './Recomflights';
import Searchform from './Searchform';


class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Searchform />
                <Recomflights />
                {/* <Recomcruise /> */}
                {/* <Category /> */}
            </Fragment>
        );
    }
}

export default Content;