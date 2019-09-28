import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Layout from '../components/Layout';

const IndexPage = () => {
    return (
        <>
            <Header />
            <Layout>
                <Home />
            </Layout>
            {/* <Footer /> */}
        </>
    );
};

export default IndexPage;
