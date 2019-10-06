import React from 'react';
import { GitMergeIcon, GitPROpenIcon, GitPRClosedIcon } from '../Icons';

const ListItem = ({ item: { url, repoName, title, number, isOpen, isMerged, isPending, createdAt } }) => {
    // ToDo: add hacktoberfest label /
    return (
        <a href={url}>
            <div>
                <div>{(isOpen && <GitPROpenIcon />) || (isMerged && <GitMergeIcon />) || <GitPRClosedIcon />}</div>
                <div>
                    <span>
                        {repoName}#{number}
                    </span>
                    <em>{isPending ? 'Pending' : 'Completed'}</em>
                </div>
                <div>
                    {title} on {createdAt}
                </div>
            </div>
        </a>
    );
};

export default ListItem;
