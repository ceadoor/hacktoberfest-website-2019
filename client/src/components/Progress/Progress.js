import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import FormSection from './FormSection';
import StatsHolder from './StatsHolder';
import ListItem from './ListItem';
import LoadingIndicator from '../Projects/LoadingIndicator';

import api from '../../api';
import * as endpoints from '../../api/constants';

const Progress = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [isErrored, setErrored] = useState(false);

    const fetchUserPullRequests = async username => {
        let data = {};
        setLoading(true);
        setErrored(false);
        try {
            ({ data } = await api({
                method: 'POST',
                url: endpoints.GET_PULL_REQUESTS_ENDPOINT,
                timeout: 10000,
                data: {
                    username,
                },
            }));
        } catch (err) {
            setErrored(true);
        } finally {
            setLoading(false);
            setUserData(data);
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
                {loading && <LoadingIndicator />}
                {!loading && <StatsHolder userData={userData} />}
                {!loading && (
                    <Row className="mt-4 mt-sm-5">
                        <Col md={8} className="mx-auto">
                            {userData.data &&
                                userData.data.map((item, index) => {
                                    return <ListItem item={item} key={index} />;
                                })}
                        </Col>
                    </Row>
                )}
                {!loading && isErrored && (
                    <p className="text-center">Couldn't find any data or we hit an error, try again ?</p>
                )}
            </Container>
        </section>
    );
};

export default Progress;
