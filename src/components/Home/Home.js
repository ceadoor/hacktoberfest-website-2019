import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import parse from 'html-react-parser';

import Logo from '../../static/logo.svg';

import { heroText, registerButton } from '../../config';

const StyledSection = styled.section`
    padding: 30px auto;
    height: 100vh;
    .row {
        margin-top: 50px;
        .hero__body {
            margin-bottom: 130px;
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
    }
`;

const HomePage = () => {
    return (
        <StyledSection>
            <Container>
                <Row>
                    <Col md={6}>
                        <Image src={Logo} fluid />
                    </Col>
                    <Col md={6}>
                        <div className="hero__body">
                            <h1>{parse(heroText)}</h1>
                            <Link to={registerButton.url || '/'} className="btn register__button">
                                {registerButton.name || 'Register'}
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    );
};

export default HomePage;
