import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import Logo from '../../static/logo.svg';

const StyledSection = styled.section`
    padding: 30px auto;
    height: 100vh;
`;

const HomePage = () => {
    return (
        <StyledSection>
            <Container>
                <Row>
                    <Col md={6}>
                        <Image src={Logo} fluid />
                    </Col>
                    <Col md={6} />
                </Row>
            </Container>
        </StyledSection>
    );
};

export default HomePage;
