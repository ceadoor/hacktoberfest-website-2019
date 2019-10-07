import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Register from '../components/Register';
import Layout from '../components/Layout';
import { ScrollToTop } from '../utils';

const RegisterPage = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Layout>
                <Register />
            </Layout>
            <Footer />
        </>
    );
};

export default RegisterPage;
