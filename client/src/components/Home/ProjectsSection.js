import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { heroProjects } from '../../config';

const StyledWrapper = styled(Row)`
    margin-bottom: 130px;

    h2 {
        padding-top: 40px;
    }
    p {
        margin: 20px 0 60px 0;
    }
    .projects__grid {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(3, 1fr);
        padding-bottom: 60px;
        margin: 0 auto;

        @media screen and (max-width: ${({ theme }) => {
                return theme.screenSmMax;
            }}) {
            grid-template-columns: repeat(1, 1fr);
        }

        a {
            color: ${({ theme }) => {
                return theme.lightWhite;
            }};
            .project__card {
                transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                font-size: 14px;
                text-align: left;
                margin-right: 0;
                margin-top: 0;
                width: 100%;
                padding: 1.25rem;
                background-color: ${({ theme }) => {
                    return theme.darkPink;
                }};

                &:hover {
                    transform: scale(1.04, 1.04);
                }
                h3 {
                    margin-top: 10px;
                    font-size: 1rem;
                }
                p {
                    margin: 20px 0 60px 0;
                    color: ${({ theme }) => {
                        return theme.lightBluishWhite;
                    }};
                }
            }
        }
    }
    .register__button {
        padding-bottom: 1.125em;
        padding-left: 2em;
        padding-right: 2em;
        padding-top: 1.125em;
        margin-left: 0;
    }
`;

const renderProjectCard = ({ item, index }) => {
    const { name, desc, url, language } = item;
    return (
        <React.Fragment key={index}>
            <a href={url} target="nofollow noopener noreferrer">
                <div className="project__card">
                    <div className="project__title">
                        <h3>{name}</h3>
                    </div>
                    <p>{desc}</p>
                    <div>
                        <h3>{language}</h3>
                    </div>
                </div>
            </a>
        </React.Fragment>
    );
};

const ProjectsSection = () => {
    const { text, projects } = heroProjects;
    return (
        <StyledWrapper>
            <Col md={12}>
                <h2 className="subhead">Hacktoberfest projects</h2>
                <p className="subtext">{text}</p>
                <div className="projects__grid">
                    {projects.map((item, index) => {
                        return renderProjectCard({ item, index });
                    })}
                </div>
                <Link to="/projects" className="btn register__button">
                    Browse more on GitHub
                </Link>
            </Col>
        </StyledWrapper>
    );
};

export default ProjectsSection;
