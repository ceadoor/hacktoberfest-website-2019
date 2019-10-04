import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import FormSection from './FormSection';
import StatsHolder from './StatsHolder';

import api from '../../api';
import * as endpoints from '../../api/constants';

const Progress = () => {
    const [userData, setUserData] = useState({});

    const fetchUserPullRequests = async username => {
        // Send POST request
        try {
            const { data } = await api({
                method: 'POST',
                url: endpoints.GET_PULL_REQUESTS_ENDPOINT,
                data: {
                    username,
                },
            });
            setUserData(data);
        } catch (err) {
            // ToDo: handle no user found
        }
    };

    return (
        <section
            style={{
                padding: '30px auto',
            }}
        >
            <Container>
                <FormSection fetchUserData={fetchUserPullRequests} />
                <StatsHolder userData={userData} />
            </Container>
        </section>
    );
};

export default Progress;
