import React from 'react';
import styled from 'styled-components';

const StyledLoadingIndicatior = styled.div`
    display: flex;
    justify-content: center;
    .loader {
        border: 10px solid
            ${({ theme }) => {
                return theme.white;
            }};
        border-top: 10px solid
            ${({ theme }) => {
                return theme.blue;
            }};
        width: 60px;
        height: 60px;
        border-radius: 50%;
        animation: spin 2s linear infinite;
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;

const LoadingIndicator = () => {
    return (
        <StyledLoadingIndicatior>
            <div className="loader" />
        </StyledLoadingIndicatior>
    );
};

export default LoadingIndicator;
