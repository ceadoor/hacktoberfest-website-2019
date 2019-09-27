import React from 'react';
import { Container } from 'react-bootstrap';

import Background from '../../static/Hacktoberfest_19_Events_2050x1025.png';

const HomePage = () => {
    return (
        <Container>
            <section id="home">
                <img src={Background} alt="background" />
            </section>
        </Container>
    );
};

export default HomePage;
