import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import ProgressForm from './ProgressForm';

const StyledWrapper = styled(Row)`
    margin-top: 50px;
    margin-bottom: 130px;
    background-color: ${({ theme }) => {
        return theme.darkPink;
    }};
    .wrapper {
        padding-top: 10px;
        padding-bottom: 35px;
    }
    h2 {
        padding-top: 32px;
        text-align: center;
    }
    .invalid-feedback {
        text-align: center;
        padding-top: 4px;
        color: ${({ theme }) => {
            return theme.yellow;
        }};
    }
`;

const FormSection = props => {
    const { fetchUserData } = props;
    return (
        <StyledWrapper>
            <Col md={12} xs={12} className="wrapper">
                <h2 className="subhead">Check your Progress</h2>
                <ProgressForm fetchUserData={fetchUserData} />
            </Col>
        </StyledWrapper>
    );
};

export default FormSection;
