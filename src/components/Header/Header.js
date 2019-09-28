import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Image } from 'react-bootstrap';
import styled from 'styled-components';

import TraceLogo from '../../static/trace-logo.png';

import { registerButton, navLinks } from '../../config';

const StyledNavbar = styled(Navbar)`
    img {
        outline: none !important;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        &:hover {
            transform: scale(1.2);
        }
    }
    .nav-link {
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        margin-left: 1.875rem;
        font-size: 0.875rem;
        letter-spacing: 3px;
        color: #fff !important;
        text-transform: uppercase;
        text-align: center;
        &:hover {
            padding-bottom: 5px;
            border-bottom: 2px solid rgb(255, 249, 34);
        }
    }
    @media screen and (max-width: ${({ theme }) => {
            return theme.screenXxsMax;
        }}) {
        .navbar-nav {
            flex-direction: column;
            .nav-link,
            .register__button {
                margin-left: 1rem;
            }
        }
    }
`;

const Header = () => {
    return (
        <StyledNavbar>
            <Link to="/" className="navbar-brand">
                <Image width="70px" src={TraceLogo} alt="Trace" fluid />
            </Link>
            <Nav className="ml-auto">
                {navLinks.map(item => {
                    return (
                        <Link to={item.url} key={item.name} className="nav-link">
                            {item.name}
                        </Link>
                    );
                })}
                <Link to={registerButton.url || '/'} className="btn register__button">
                    {registerButton.name || 'Register'}
                </Link>
            </Nav>
        </StyledNavbar>
    );
};

export default Header;
