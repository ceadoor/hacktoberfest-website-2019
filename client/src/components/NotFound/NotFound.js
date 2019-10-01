import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section`
    height: 70vh;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column;
        p {
            color: ${({ theme }) => {
                return theme.lightBluishWhite;
            }};
            font-size: 2em;
            font-weight: ${({ theme }) => {
                return theme.bold;
            }};
        }
        a {
            color: ${({ theme }) => {
                return theme.lightWhite;
            }};
            padding-bottom: 5px;
            border-bottom: 2px solid rgb(255, 249, 34);
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
