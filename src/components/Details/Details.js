import React from 'react';
import { Container } from 'react-bootstrap';

import EventSection from './EventSection';
import DetailsSection from './DetailsSection';

const Details = () => {
    return (
        <section
            style={{
                padding: '30px auto',
            }}
        >
            <Container>
                <EventSection />
                <DetailsSection />
            </Container>
        </section>
    );
};

export default Details;
