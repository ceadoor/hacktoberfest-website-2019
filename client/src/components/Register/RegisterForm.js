/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field } from 'react-final-form-html5-validation';

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
                return touched && error ? <span>{error}</span> : null;
            }}
        />
    );
};

const required = value => {
    return value ? undefined : 'Required';
};

const RegisterForm = () => {
    return (
        <>
            <Wizard onSubmit={onSubmit}>
                <Wizard.Page>
                    <div>
                        <label>Full Name</label>
                        <Field name="name" component="input" type="text" validate={required} />
                        <Error name="name" />
                    </div>
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
                        return errors;
                    }}
                >
                    <div>
                        <label>Email</label>
                        <Field name="email" component="input" type="email" />
                        <Error name="email" />
                    </div>
                    <div>
                        <label>Contact Number</label>
                        <Field name="contactNumber" component="input" type="number" />
                        <Error name="contactNumber" />
                    </div>
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
                    <div>
                        <label>Year</label>
                        <Field name="year" component="select">
                            <option />
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </Field>
                        <Error name="year" />
                    </div>
                    <div>
                        <label>Department</label>
                        <Field name="department" component="select">
                            <option />
                            <option value="CSE">CSE</option>
                            <option value="EC">EC</option>
                            <option value="Mech">Mech</option>
                            <option value="EEE">EEE</option>
                        </Field>
                        <Error name="department" />
                    </div>
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
                    <div>
                        <label>
                            I
                            <Field name="consent" component="input" type="radio" value="agree" /> Agree
                        </label>
                        <label>
                            <Field name="consent" component="input" type="radio" value="disagree" /> Disagree
                        </label>
                        <label>that the information entered is true.</label>
                        <Error name="consent" />
                    </div>
                </Wizard.Page>
            </Wizard>
        </>
    );
};

export default RegisterForm;
