import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import FormSection from './FormSection';
import StatsHolder from './StatsHolder';
import ListItem from './ListItem';

import api from '../../api';
import * as endpoints from '../../api/constants';

const Progress = () => {
    // ToDo: set default [] for data
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
                marginBottom: '110px',
            }}
        >
            <Container>
                <FormSection fetchUserData={fetchUserPullRequests} />
                <StatsHolder userData={userData} />
                <Row className="mt-4 mt-sm-5">
                    <Col md={8} className="mx-auto">
                        {userData.data &&
                            userData.data.map((item, index) => {
                                return <ListItem item={item} key={index} />;
                            })}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Progress;
