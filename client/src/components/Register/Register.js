import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import FormSection from './FormSection';

const Register = () => {
    return (
        <section
            style={{
                padding: '30px auto',
                marginBottom: '110px',
            }}
        >
            <Container>
                <FormSection />
            </Container>
        </section>
    );
};

export default Register;
