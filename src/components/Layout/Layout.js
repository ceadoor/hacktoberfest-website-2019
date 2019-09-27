import React, { Component } from 'react';

import './styles.scss';
import Loader from '../Loader';

class Wrapper extends Component {
    componentDidMount() {
        // call action to hide loader
    }

    render() {
        const { children } = this.props;
        // Get from props
        const isPageLoading = false;
        const renderContent = isPageLoading ? <Loader /> : children;
        return (
            <main id="wrapper">
                <div className="content__wrapper">{renderContent}</div>
            </main>
        );
    }
}

export default Wrapper;
