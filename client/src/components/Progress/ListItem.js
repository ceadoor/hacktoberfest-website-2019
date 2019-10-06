import React from 'react';
import styled from 'styled-components';

import { GitMergeIcon, GitPROpenIcon, GitPRClosedIcon } from '../Icons';

const StyledLink = styled.a`
    margin-bottom: 1.5rem;
    display: block;
    background-color: ${({ theme }) => {
        return theme.darkPink;
    }};
    color: ${({ theme }) => {
        return theme.lightWhite;
    }};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    svg {
        ${({ theme }) => {
            return theme.lightBluishWhite;
        }};
    }
    .header {
        margin-bottom: 1rem;
        span {
            color: ${({ theme }) => {
                return theme.lightWhite;
            }};
        }
        em {
            color: ${({ theme }) => {
                return theme.lightBluishWhite;
            }};
        }
    }
    .title {
        color: rgba(255, 255, 255, 0.4);
    }

    &:hover {
        transform: scale(1.04, 1.04);
    }
`;

const ListItem = ({ item: { url, repoName, title, number, isOpen, isMerged, isPending, createdAt } }) => {
    // ToDo: add hacktoberfest label /
    return (
        <StyledLink href={url}>
            <div className="d-flex p-4">
                <div className="mr-4">
                    {(isOpen && <GitPROpenIcon />) || (isMerged && <GitMergeIcon />) || <GitPRClosedIcon />}
                </div>
                <div>
                    <div className="header">
                        <span>
                            {repoName}#{number}
                        </span>
                        <em>{isPending ? ' Pending' : ' Completed'}</em>
                    </div>
                    <div className="title">
                        {title} on {createdAt}
                    </div>
                </div>
            </div>
        </StyledLink>
    );
};

export default ListItem;
