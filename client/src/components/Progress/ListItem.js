import React from 'react';

const ListItem = ({ item: { url, repoName, title, number, isPending, createdAt } }) => {
    // ToDo: add hacktoberfest label /
    return (
        <a href={url}>
            <div>
                <div>Icon</div>
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
