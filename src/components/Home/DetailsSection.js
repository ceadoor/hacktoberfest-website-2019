import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { heroDetails } from '../../config';

const StyledWrapper = styled(Row)`
    margin-bottom: 130px;
    h2 {
        padding-top: 40px;
    }
    .para {
        margin: 20px 0 60px 0;
        max-width: 620px;
    }
    p {
        a {
            color: ${({ theme }) => {
                return theme.lightWhite;
            }};
            &:hover {
                color: ${({ theme }) => {
                    return theme.lightBlue;
                }};
            }
        }
    }
`;

const DetailsSection = () => {
    const {
        desc,
        ref: { text, button },
    } = heroDetails;
    return (
        <StyledWrapper>
            <Col md={10}>
                <h2 className="subhead">Event Details</h2>
                <p className="subtext para">{desc}</p>
                <p className="subtext">
                    {text} <Link to={button.url}>{button.text}</Link>
                </p>
            </Col>
        </StyledWrapper>
    );
};

export default DetailsSection;
