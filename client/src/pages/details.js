import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Details from '../components/Details';
import Layout from '../components/Layout';
import { ScrollToTop } from '../utils';

const details = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Layout>
                <Details />
            </Layout>
            <Footer />
        </>
    );
};

export default details;
