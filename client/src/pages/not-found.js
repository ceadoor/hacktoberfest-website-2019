import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <Layout>
                <NotFound />
            </Layout>
            <Footer />
        </>
    );
};

export default NotFoundPage;
