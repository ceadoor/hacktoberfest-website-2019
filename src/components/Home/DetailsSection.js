import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { heroDetails } from '../../config';

const StyledWrapper = styled(Row)`
    h2 {
        padding-top: 40px;
    }
    p {
        margin: 20px 0 60px 0;
        max-width: 620px;
    }
    ul {
        li {
            margin-bottom: 30px;
            margin-left: 20px;
            list-style-type: disc;
            color: ${({ theme }) => {
                return theme.yellow;
            }};
            span {
                margin: 24px 0px 24px 0px;
                color: ${({ theme }) => {
                    return theme.lightBluishWhite;
                }};
            }
        }
    }
`;

const DetailsSection = () => {
    const { desc, list } = heroDetails;
    return (
        <StyledWrapper>
            <Col md={10}>
                <h2 className="subhead">Event Details</h2>
                <p className="subtext">{desc}</p>
                <ul>
                    {list.map((item, index) => {
                        return (
                            <li key={index} className="subtext">
                                <span>{item}</span>
                            </li>
                        );
                    })}
                </ul>
            </Col>
        </StyledWrapper>
    );
};

export default DetailsSection;
