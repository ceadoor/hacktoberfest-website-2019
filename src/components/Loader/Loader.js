import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
    height: 100vh;
    display: flex;
    text-align: center;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
`;

const Loader = () => {
    return <StyledLoader>Loading...</StyledLoader>;
};

export default Loader;
