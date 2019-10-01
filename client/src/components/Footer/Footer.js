import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Tilt from 'react-tilt';

import { domain, twitterShare, githubLink, slackLink, instagramLink } from '../../config';
import DOC from '../../static/Hacktoberfest_19_Events_lockup_ko_600x200.png';
import { FacebookIcon, TwitterIcon, GitHubIcon, InstagramIcon, SlackIcon } from '../Icons';

const StyledFooter = styled.footer`
    margin-bottom: 60px;
    justify-content: space-between;
    h2 {
        padding-top: 40px;
        margin-bottom: 1.5rem;
    }
    .share__social--icons {
        flex-direction: row;
        display: flex;
        a {
            text-transform: uppercase;
            color: white;
            letter-spacing: 3px;
            font-size: 14px;
            border: none;
            width: 170px;
            height: 150px;
            background: ${({ theme }) => {
                return theme.blue;
            }};
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
            cursor: pointer;
            margin-right: 30px;
            text-align: left;
            vertical-align: top;
            padding: 30px;
            display: flex;
            flex-direction: column;

            &:hover {
                background-color: ${({ theme }) => {
                    return theme.lightWhite;
                }};
                color: ${({ theme }) => {
                    return theme.lightPink;
                }};
            }

            svg {
                font-size: 37px;
            }

            span {
                position: relative;
                font-weight: ${({ theme }) => {
                    return theme.bold;
                }};
                top: 28px;
            }
        }
    }
    .doc__logo--wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        img {
            margin-top: 50px;
            outline: none !important;
        }
        p {
            color: white;
            font-size: 15px;
            padding-bottom: 20px;
            text-align: center;
        }
    }
    .footer__social {
        margin-top: 5rem;
        text-align: center;

        @media screen and (max-width: 480px) {
            margin-top: 2.7rem;
        }

        ul {
            display: flex;
            justify-content: center;
            li {
                margin: 10px 7px;
                a {
                    svg {
                        color: white;
                        font-size: 37px;
                    }
                }

                &:hover {
                    a {
                        svg {
                            color: rgba(255, 255, 255, 0.5);
                        }
                    }
                }
            }
        }
    }
    .footer__text {
        text-align: center;
        margin-top: 20px;
        font-size: 14px;
        vertical-align: middle;

        color: ${({ theme }) => {
            return theme.lightBluishWhite;
        }};

        a {
            color: rgba(255, 255, 255, 0.8);
            &:hover {
                color: white;
            }
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2 className="subhead">Spread the word!</h2>
                        <div className="share__social--icons">
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${domain}`}>
                                <FacebookIcon />
                                <span>Facebook</span>
                            </a>
                            <a href={twitterShare}>
                                <TwitterIcon />
                                <span>Twitter</span>
                            </a>
                        </div>
                    </Col>
                    <Col md={5} className="doc__logo--wrapper">
                        <Tilt className="Tilt" options={{ max: 20, scale: 1.05 }}>
                            <div className="Tilt-inner">
                                <Image src={DOC} fluid />
                                <p>Powered by TRACECEA</p>
                            </div>
                        </Tilt>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <div className="footer__social">
                            <ul>
                                <li>
                                    <a
                                        href={githubLink}
                                        target="_blank"
                                        title="GitHub"
                                        rel="nofollow noopener noreferrer"
                                    >
                                        <GitHubIcon />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={instagramLink}
                                        target="_blank"
                                        title="Instagram"
                                        rel="nofollow noopener noreferrer"
                                    >
                                        <InstagramIcon />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={slackLink}
                                        target="_blank"
                                        title="Slack"
                                        rel="nofollow noopener noreferrer"
                                    >
                                        <SlackIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p className="footer__text">
                            &copy; 2019 <a href={githubLink}>TRACECEA.</a> ALL RIGHTS RESERVED.
                        </p>
                    </Col>
                </Row>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
