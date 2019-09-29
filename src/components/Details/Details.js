import React from 'react';
import { Container } from 'react-bootstrap';

import EventSection from './EventSection';

const Details = () => {
    return (
        <section
            style={{
                padding: '30px auto',
            }}
        >
            <Container>
                <EventSection />
            </Container>
        </section>
    );
};

export default Details;
