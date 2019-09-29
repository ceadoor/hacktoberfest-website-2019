import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { routeSession } from '../../config';
import { CalendarIcon, GitHubIcon, MapMarkerIcon, UsersIcon } from '../Icons';

const StyledWrapper = styled(Row)`
    margin-bottom: 130px;
    .subtext {
        margin: 24px 0px 24px 0px;
        max-width: 650px;
    }
    .subhead {
        padding-top: 40px;
        max-width: 620px;
    }
    .card__wrapper {
        display: flex;
        justify-content: space-between;
        vertical-align: baseline;
        margin-bottom: 60px;

        @media screen and (max-width: ${({ theme }) => {
                return theme.screenSmMax;
            }}) {
            flex-direction: column;
            .flex__card--holder {
                width: 100% !important;
            }
        }

        .flex__card--holder {
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 100%;
            text-align: center;
            width: 340px;
            min-height: 226px;
            margin-right: 30px;
            margin-bottom: 0;
            margin-top: 30px;
            padding: 1.25rem;

            &:hover {
                transform: scale(1.04, 1.04);
            }
            &:nth-child(4n + 1) {
                background: linear-gradient(76.04deg, #ff2e90 -0.33%, #ff06a6 100.08%);
                box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.2);
            }
            &:nth-child(4n + 2) {
                background: linear-gradient(76.04deg, #ff5d73 -0.33%, #ff358b 100.08%);
                box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.2);
            }
            &:nth-child(4n + 3) {
                background: linear-gradient(76.04deg, #ff8c57 -0.33%, #ff646f 100.08%);
                box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.2);
            }
            &:nth-child(4n + 4) {
                background: linear-gradient(76.04deg, #febd3b -0.33%, #ff9353 100.08%);
                box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.2);
            }
            .id {
                font-weight: bold;
                font-size: 40px;
                line-height: 77px;
                text-align: center;
                text-transform: uppercase;
                color: #ffffff;
            }
            .title {
                font-weight: ${({ theme }) => {
                    return theme.bold;
                }};
                font-size: 26px;
                padding: 1rem 0;
                text-align: center;
                color: #ffffff;
            }
            .subtitle {
                font-size: 18px;
                line-height: 160%;
                color: #ffffff;
            }

            @media screen and (max-width: ${({ theme }) => {
                    return theme.screenMdMax;
                }}) {
                width: 268px;
            }
        }
    }
`;

const getIcon = name => {
    // eslint-disable-next-line default-case
    switch (name) {
        case '01':
            return <UsersIcon />;
        case '02':
            return <MapMarkerIcon />;
        case '03':
            return <GitHubIcon />;
        case '04':
            return <CalendarIcon />;
    }
};

const renderCard = ({ item, index }) => {
    const { id, title, sub } = item;
    return (
        <div key={index} className="flex__card--holder">
            <span className="id">{getIcon(id)}</span>
            <span className="title">{title}</span>
            <span className="subtitle">{sub}</span>
        </div>
    );
};

const RouteSection = () => {
    const { text, session } = routeSession;
    return (
        <StyledWrapper>
            <Col md={12}>
                <h2 className="subhead">Event Session</h2>
                <p className="subtext">{text}</p>
                <div className="card__wrapper">
                    {session.map((item, index) => {
                        return renderCard({ item, index });
                    })}
                </div>
            </Col>
        </StyledWrapper>
    );
};

export default RouteSection;
