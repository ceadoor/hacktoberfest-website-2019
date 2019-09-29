import React from 'react';
import { Container } from 'react-bootstrap';

import HeroSection from './HeroSection';
import DetailsSection from './DetailsSection';
import RulesSection from './RulesSection';
import ProjectsSection from './ProjectsSection';
import EventSection from './EventSection';

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
                <EventSection />
            </Container>
        </section>
    );
};

export default HomePage;
