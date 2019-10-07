import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import RegisterForm from './RegisterForm';

const StyledWrapper = styled(Row)`
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: ${({ theme }) => {
        return theme.darkPink;
    }};
    .wrapper {
        padding-top: 10px;
        padding-bottom: 35px;
        h2 {
            padding-top: 32px;
            text-align: center;
            padding-bottom: 1rem;
        }
    }
`;

const FormSection = () => {
    return (
        <StyledWrapper>
            <Col md={12} xs={12} className="wrapper">
                <h2 className="subhead">Register Now</h2>
                <RegisterForm />
            </Col>
        </StyledWrapper>
    );
};

export default FormSection;
