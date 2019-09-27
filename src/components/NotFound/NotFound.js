import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section`
    height: 100vh;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column;
        p {
            color: ${({ theme }) => {
                return theme.pink;
            }};
            font-size: 2em;
            font-weight: ${({ theme }) => {
                return theme.bold;
            }};
        }
    }
`;

const NotFound = () => {
    return (
        <StyledSection>
            <div>
                <p>You seem lost</p>
                <Link to="/">Get Me Home</Link>
            </div>
        </StyledSection>
    );
};

export default NotFound;
