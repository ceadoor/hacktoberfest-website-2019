import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import RegisterForm from './RegisterForm';
import * as endpoints from '../../api/constants';
import api from '../../api';

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
        }
        p {
            text-align: center;
            font-size: 16px;
            padding-bottom: 0.75rem;
        }
    }
`;

const FormSection = () => {
    const [remainingSeats, setSeatCount] = useState();
    const [isErrored, setErrored] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {
                    data: { seatsCount },
                } = await api({
                    method: 'GET',
                    url: endpoints.GET_REMAINING_SEATS_COUNT,
                });
                setSeatCount(seatsCount);
            } catch (err) {
                setErrored(true);
            }
        };
        fetchData();
    }, []);

    return (
        <StyledWrapper>
            <Col md={12} xs={12} className="wrapper">
                <h2 className="subhead">Register Now</h2>
                {!remainingSeats && !isErrored && <p>Fetching remaining seats...</p>}
                {remainingSeats && !isErrored && <p>{remainingSeats} Seats remaining</p>}
                <RegisterForm />
            </Col>
        </StyledWrapper>
    );
};

export default FormSection;
