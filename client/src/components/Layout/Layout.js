import React, { Component } from 'react';
import styled from 'styled-components';

import Loader from '../Loader';

const BodyWrapper = styled.main`
    position: relative;
    min-height: 100vh;
    .content__wrapper {
        min-height: 100vh;
        width: 100%;
    }
`;

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
            <BodyWrapper>
                <div className="content__wrapper">{renderContent}</div>
            </BodyWrapper>
        );
    }
}

export default Wrapper;
