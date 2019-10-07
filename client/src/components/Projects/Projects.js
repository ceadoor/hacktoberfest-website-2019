/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { renderProjectCard } from '../Home/ProjectsSection';
import LoadingIndicator from './LoadingIndicator';

import api from '../../api';
import * as endpoints from '../../api/constants';

const StyledWrapper = styled(Row)`
    margin-bottom: 130px;
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
    h2 {
        text-align: center;
    }
    .button__main {
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
            page: 2,
            repos: [],
            loading: true,
        };
    }

    async componentDidMount() {
        const reposList = await this.fetchRepos({ page: this.state.page });
        this.setState({
            repos: reposList.data.data,
            page: this.state.page + 1,
            loading: false,
        });
    }

    // The API fetch function
    fetchRepos = async ({ page }) => {
        try {
            const reposList = await api({
                method: 'POST',
                url: endpoints.GET_HACKTOBERFEST_REPOS_ENDPOINT,
                timeout: 10000,
                data: { page, perPage: 9 },
            });
            return reposList;
        } catch (err) {
            return { data: { data: [] } };
        }
    };

    loadMore = async () => {
        this.setState({
            loading: true,
        });
        const reposList = await this.fetchRepos({ page: this.state.page });
        this.setState({
            repos: [...this.state.repos, ...reposList.data.data],
            page: this.state.page + 1,
            loading: false,
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
                        {this.state.loading && <LoadingIndicator />}
                        {!this.state.loading && (
                            <div className="text-center">
                                <button className="btn button__main" type="button" onClick={this.loadMore}>
                                    Load More
                                </button>
                            </div>
                        )}
                    </Col>
                </Container>
            </StyledWrapper>
        );
    }
}

export default Projects;
