import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Layout from '../components/Layout';

const ProjectsPage = () => {
    return (
        <>
            <Header />
            <Layout>
                <Projects />
            </Layout>
            <Footer />
        </>
    );
};

export default ProjectsPage;
