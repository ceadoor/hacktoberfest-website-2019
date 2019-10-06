import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Layout from '../components/Layout';
import { ScrollToTop } from '../utils';

const ProjectsPage = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Layout>
                <Projects />
            </Layout>
            <Footer />
        </>
    );
};

export default ProjectsPage;
