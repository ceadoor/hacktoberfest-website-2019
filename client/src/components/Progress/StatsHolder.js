import React from 'react';
import styled from 'styled-components';
import { Row, Col, Image } from 'react-bootstrap';

import getResultMessage from './getResultMessage';
import { prRequiredCount } from '../../config';

const StyledWrapper = styled(Row)`
    display: flex;
    justify-content: center;
    text-align: center;

    .hexa,
    .hexa div {
        margin: 0 auto;
        transform-origin: 50% 50%;
        overflow: hidden;
        width: 300px;
        height: 300px;
    }
    .hexa {
        width: 180px;
        height: 127px;
        transform: rotate(90deg);
        div {
            width: 100%;
            height: 100%;
        }
        .hex1 {
            transform: rotate(-60deg);
            .hex2 {
                transform: rotate(-60deg);
                img {
                    transform: rotate(30deg);
                }
            }
        }
    }

    .progress__holder {
        span {
            font-size: 3rem;
            letter-spacing: 0.9rem;
        }
        .progress__number {
            color: ${({ theme }) => {
                return theme.yellow;
            }};
        }
        p {
            font-size: 16px;
        }
    }
`;

const StatsHolder = props => {
    const {
        userData: { user, data },
    } = props;

    if (!user) {
        return null;
    }

    const count = data.length;

    return (
        <StyledWrapper>
            <Col md={3}>
                <div className="hexa">
                    <div className="hex1">
                        <div className="hex2">
                            <Image src={user.userImage} alt="GitHub Image" fluid width="320" height="313" />
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4} className="progress__holder mt-3">
                <span>
                    <span className="progress__number">{count}</span>/{prRequiredCount}
                </span>
                <p>{getResultMessage(count)}</p>
            </Col>
        </StyledWrapper>
    );
};

export default StatsHolder;
