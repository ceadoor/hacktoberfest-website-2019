import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center" style={{ marginTop: '20px', marginBottom: '30px', textTransform: 'uppercase' }}>
            <section>
                &copy; 2019{' '}
                <a href="https://github.com/ceadoor" style={{ color: 'rgb(146,234,255)' }}>
                    TRACECEA.
                </a>{' '}
                ALL RIGHTS RESERVED.
            </section>
        </footer>
    );
};

export default Footer;
