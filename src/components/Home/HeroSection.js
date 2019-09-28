import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import styled from 'styled-components';
import Tilt from 'react-tilt';

import Logo from '../../static/logo.svg';

import { heroText, registerButton } from '../../config';

const StyledRow = styled(Row)`
    margin-top: 50px;
    margin-bottom: 130px;
    .hero__body {
        padding-top: 2em;
        margin-bottom: 110px;
        h1 {
            font-size: 2.5rem;
            line-height: 60px;
            padding-left: 0;
            padding-top: 0;
            margin-bottom: 50px;
            font-weight: ${({ theme }) => {
                return theme.regular;
            }};
            span {
                color: #fff922;
            }
        }
        a {
            padding-bottom: 1.125em;
            padding-left: 2em;
            padding-right: 2em;
            padding-top: 1.125em;
            margin-left: 0;
        }
    }

    // 480
    @media screen and (max-width: ${({ theme }) => {
            return theme.screenXxsMax;
        }}) {
        margin-bottom: 70px;
    }

    // 768 - 1024
    @media screen and (min-width: ${({ theme }) => {
            return theme.screenSmMin;
        }}) and (max-width: ${({ theme }) => {
            return theme.screenSmMax;
        }}) {
        margin-bottom: 70px;
        .hero__body {
            margin-bottom: 95px;
            h1 {
                font-size: 2.2rem;
            }
        }
    }
`;

const HeroSection = () => {
    return (
        <StyledRow>
            <Col md={7}>
                <Tilt className="Tilt" options={{ max: 20, scale: 1.05 }}>
                    <div className="Tilt-inner">
                        <Image src={Logo} fluid />
                    </div>
                </Tilt>
            </Col>
            <Col md={5}>
                <div className="hero__body">
                    <h1>{parse(heroText)}</h1>
                    <Link to={registerButton.url || '/'} className="btn register__button">
                        {registerButton.name || 'Register'}
                    </Link>
                </div>
            </Col>
        </StyledRow>
    );
};

export default HeroSection;
