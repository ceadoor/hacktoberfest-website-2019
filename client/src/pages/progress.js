import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Progress from '../components/Progress';
import Layout from '../components/Layout';
import { ScrollToTop } from '../utils';

const ProgressPage = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Layout>
                <Progress />
            </Layout>
            <Footer />
        </>
    );
};

export default ProgressPage;
