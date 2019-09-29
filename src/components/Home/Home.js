import React from 'react';
import { Container } from 'react-bootstrap';

import HeroSection from './HeroSection';
import DetailsSection from './DetailsSection';
import RulesSection from './RulesSection';
import ProjectsSection from './ProjectsSection';
import RouteSection from './RouteSection';

const HomePage = () => {
    return (
        <section
            style={{
                padding: '30px auto',
            }}
        >
            <Container>
                <HeroSection />
                <DetailsSection />
                <RulesSection />
                <ProjectsSection />
                <RouteSection />
            </Container>
        </section>
    );
};

export default HomePage;
