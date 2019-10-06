import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LoadingIndicator from '../Projects/LoadingIndicator';
import { heroProjects } from '../../config';
import api from '../../api';
import * as endpoints from '../../api/constants';

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
                return theme.white;
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
                min-height: 230px;
                padding: 1.25rem;
                background-color: ${({ theme }) => {
                    return theme.darkPink;
                }};

                &:hover {
                    transform: scale(1.04, 1.04);
                }
                h3 {
                    font-size: 0.8rem;
                }
                h2 {
                    padding-top: 0px;
                    font-size: 0.9rem;
                    text-align: right;
                    color: ${({ theme }) => {
                        return theme.lightWhite;
                    }};
                }
                p {
                    flex-grow: 1;
                    margin: 20px 0 0px 0;
                    color: ${({ theme }) => {
                        return theme.lightBluishWhite;
                    }};
                }
                .issue {
                    p {
                        font-size: 0.7rem;
                    }
                    .issue__span {
                        color: white;
                        background: #152347;
                        padding: 2px;
                        margin-right: 5px;
                    }
                }
            }
        }
    }
    .button__main {
        padding-bottom: 1.125em;
        padding-left: 2em;
        padding-right: 2em;
        padding-top: 1.125em;
        margin-left: 0;
    }
`;

export const renderProjectCard = ({ item, index }) => {
    const { repoName, issueTitle, description, number, language, url } = item;
    return (
        <React.Fragment key={index}>
            <a href={url} target="nofollow noopener noreferrer">
                <div className="project__card">
                    <Row>
                        <Col className="project__title">
                            <h3>{repoName}</h3>
                        </Col>
                        <Col>
                            <h2>{language}</h2>
                        </Col>
                    </Row>
                    <p>{description}</p>
                    <div className="issue">
                        <p>
                            <span className="issue__span">#{number}</span>
                            {issueTitle}
                        </p>
                    </div>
                </div>
            </a>
        </React.Fragment>
    );
};

class ProjectsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: heroProjects.text,
            repos: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.fetchRepos();
    }

    fetchRepos = async () => {
        try {
            const reposList = await api({
                method: 'POST',
                url: endpoints.GET_HACKTOBERFEST_REPOS_ENDPOINT,
                data: { page: 1, perPage: 6 },
            });
            this.setState({
                repos: reposList.data.data,
                loading: false,
            });
        } catch (err) {
            this.setState({ loading: false });
        }
    };

    render() {
        return (
            <StyledWrapper>
                <Col md={12}>
                    <h2 className="subhead">Hacktoberfest projects</h2>
                    <p className="subtext">{this.state.text}</p>
                    <div className="projects__grid">
                        {this.state.repos.map((item, index) => {
                            return renderProjectCard({ item, index });
                        })}
                    </div>
                    {this.state.loading ? (
                        <LoadingIndicator />
                    ) : (
                        <Link to="/projects" className="btn button__main">
                            Browse more
                        </Link>
                    )}
                </Col>
            </StyledWrapper>
        );
    }
}

export default ProjectsSection;
