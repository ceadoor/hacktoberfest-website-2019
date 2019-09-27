import React from 'react';
import { Container } from 'react-bootstrap';

import './styles.scss';

const HomePage = () => {
    return (
        <Container>
            <section id="home">
                <div className="text-center">
                    <p>Hello World!</p>
                </div>
            </section>
        </Container>
    );
};

export default HomePage;
