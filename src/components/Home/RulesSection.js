import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { heroRules } from '../../config';

const StyledWrapper = styled(Row)`
    margin-bottom: 170px;
    h2 {
        padding-top: 40px;
        margin-bottom: 1.5rem;
    }
    .para {
        margin: 20px 0 60px 0;
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

const RulesSection = () => {
    const {
        desc,
        ref: { text, button },
    } = heroRules;
    return (
        <StyledWrapper>
            <Col md={8}>
                <h2 className="subhead">Rules</h2>
                <p className="subtext para">{desc}</p>
                <p className="subtext">
                    {text} <Link to={button.url}>{button.text}</Link>
                </p>
            </Col>
        </StyledWrapper>
    );
};

export default RulesSection;
