import React from 'react';
import { Container } from 'react-bootstrap';

import HeroSection from './HeroSection';
import DetailsSection from './DetailsSection';
import RulesSection from './RulesSection';

const HomePage = () => {
    return (
        <section
            style={{
                padding: '30px auto',
                height: '100vh',
            }}
        >
            <Container>
                <HeroSection />
                <DetailsSection />
                <RulesSection />
            </Container>
        </section>
    );
};

export default HomePage;
