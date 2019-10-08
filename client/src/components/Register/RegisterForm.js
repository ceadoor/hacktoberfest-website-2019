/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field } from 'react-final-form-html5-validation';
import { Form, Col } from 'react-bootstrap';

import Wizard from './Wizard';
import * as endpoints from '../../api/constants.js';
import api from '../../api';

const onSubmit = async values => {
    try {
        const {
            data: { status, message },
        } = await api({
            method: 'POST',
            url: endpoints.REGISTER_FOR_EVENT_ENDPOINT,
            data: values,
        });
    } catch (err) {
        console.log('Reg failed');
    }
};

const Error = ({ name }) => {
    return (
        <Field
            name={name}
            subscribe={{ touched: true, error: true }}
            render={({ meta: { touched, error } }) => {
                return touched && error ? <span className="invalid__feedback">{error}</span> : null;
            }}
        />
    );
};

const RegisterForm = () => {
    return (
        <>
            <Wizard onSubmit={onSubmit}>
                <Wizard.Page
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        }
                        if (values.name && values.name.length < 6) {
                            errors.name = 'Name must be atleast 6 characters';
                        }
                        return errors;
                    }}
                >
                    <Form.Row className="justify-content-center">
                        <Form.Group as={Col} md="9" lg="8">
                            <Field
                                name="name"
                                className="form-control"
                                placeholder="What's your full name?"
                                component="input"
                                type="text"
                            />
                            <Error name="name" />
                        </Form.Group>
                    </Form.Row>
                </Wizard.Page>
                <Wizard.Page
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        }
                        if (!values.contactNumber) {
                            errors.contactNumber = 'Required';
                        }
                        if (values.contactNumber && values.contactNumber.length < 10) {
                            errors.contactNumber = 'Contact number must be atleast 10 digits';
                        }
                        return errors;
                    }}
                >
                    <Form.Row className="justify-content-center">
                        <Form.Group as={Col} md="9" lg="8">
                            <Field
                                name="email"
                                className="form-control"
                                placeholder="What's you email?"
                                component="input"
                                type="email"
                            />
                            <Error name="email" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="justify-content-center">
                        <Form.Group as={Col} md="9" lg="8">
                            <Field
                                name="contactNumber"
                                className="form-control"
                                placeholder="And your contact number?"
                                component="input"
                                type="number"
                            />
                            <Error name="contactNumber" />
                        </Form.Group>
                    </Form.Row>
                </Wizard.Page>
                <Wizard.Page
                    validate={values => {
                        const errors = {};
                        if (!values.year) {
                            errors.year = 'Required';
                        }
                        if (!values.department) {
                            errors.department = 'Required';
                        }
                        return errors;
                    }}
                >
                    <Form.Row className="justify-content-center">
                        <Form.Group as={Col} xs="3" md="2">
                            <label>Year</label>
                            <Field name="year" className="form-control" component="select">
                                <option />
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </Field>
                            <Error name="year" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="justify-content-center">
                        <Form.Group as={Col} xs="4" md="3">
                            <label>Department</label>
                            <Field name="department" className="form-control" component="select">
                                <option />
                                <option value="CSE">CSE</option>
                                <option value="EC">EC</option>
                                <option value="Mech">Mech</option>
                                <option value="EEE">EEE</option>
                            </Field>
                            <Error name="department" />
                        </Form.Group>
                    </Form.Row>
                </Wizard.Page>
                <Wizard.Page
                    validate={values => {
                        const errors = {};
                        if (!values.consent) {
                            errors.consent = 'Please agree to continue';
                        }
                        if (values.consent === 'disagree') {
                            errors.consent = 'Please agree to continue';
                        }
                        return errors;
                    }}
                >
                    <Form.Row className="justify-content-center">
                        <Form.Group as={Col} md="8">
                            <label className="form-check-label">
                                I<Field name="consent" className="ml-2" component="input" type="radio" value="agree" />{' '}
                                Agree
                            </label>
                            <label className="form-check-label">
                                <Field
                                    name="consent"
                                    className="ml-2"
                                    component="input"
                                    type="radio"
                                    value="disagree"
                                />{' '}
                                Disagree
                            </label>
                            <label className="ml-2">that the information entered is true.</label>
                            <Error name="consent" />
                        </Form.Group>
                    </Form.Row>
                </Wizard.Page>
            </Wizard>
        </>
    );
};

export default RegisterForm;
