import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { renderProjectCard } from '../Home/ProjectsSection';

import api from '../../api';
import * as endpoints from '../../api/constants';

const StyledWrapper = styled(Row)`
    .subhead {
        padding-top: 50px;
        padding-bottom: 50px;
        text-align: center;
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
                min-height: 230px;
                padding: 1.25rem;
                background-color: ${({ theme }) => {
                    return theme.darkPink;
                }};

                &:hover {
                    transform: scale(1.04, 1.04);
                }
                h3 {
                    font-size: 1rem;
                }
                p {
                    flex-grow: 1;
                    margin: 20px 0 0px 0;
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

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            repos: [],
        };
    }

    componentDidMount() {
        this.fetchRepos();
    }

    fetchRepos = async () => {
        const reposList = await api.post(endpoints.GET_HACKTOBERFEST_REPOS_ENDPOINT, { page: 1, perPage: 9 });
        this.setState({
            repos: reposList.data.data,
            // eslint-disable-next-line react/no-access-state-in-setstate
            page: this.state.page + 1,
        });
    };

    loadMore = async () => {
        const reposList = await api.post(endpoints.GET_HACKTOBERFEST_REPOS_ENDPOINT, {
            // eslint-disable-next-line react/no-access-state-in-setstate
            page: this.state.page,
            perPage: 9,
        });
        this.setState({
            // eslint-disable-next-line react/no-access-state-in-setstate
            repos: [...this.state.repos, ...reposList.data.data],
            // eslint-disable-next-line react/no-access-state-in-setstate
            page: this.state.page + 1,
        });
    };

    render() {
        return (
            <StyledWrapper>
                <Container>
                    <Col md={12}>
                        <h2 className="subhead">Hacktoberfest projects</h2>
                        <p className="subtext">{this.state.text}</p>
                        <div className="projects__grid">
                            {this.state.repos.map((item, index) => {
                                return renderProjectCard({ item, index });
                            })}
                        </div>
                        <button className="register__button" type="button" onClick={this.loadMore}>
                            More
                        </button>
                    </Col>
                </Container>
            </StyledWrapper>
        );
    }
}

export default Projects;
