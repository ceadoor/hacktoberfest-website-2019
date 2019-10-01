import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Details from '../components/Details';
import Layout from '../components/Layout';

const details = () => {
    return (
        <>
            <Header />
            <Layout>
                <Details />
            </Layout>
            <Footer />
        </>
    );
};

export default details;
