import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import Layout from '../components/Layout';
import { ScrollToTop } from '../utils';

const FaqPage = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Layout>
                <Faq />
            </Layout>
            <Footer />
        </>
    );
};

export default FaqPage;
