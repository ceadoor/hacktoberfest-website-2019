import React, { useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

import api from '../../api';
import * as endpoints from '../../api/constants';

const ProgressForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        // Send POST request
        api({
            type: 'POST',
            url: endpoints.GET_PULL_REQUESTS_ENDPOINT,
        });
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="7" controlId="validationCustomUsername">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon3">https://github.com/</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                        <InputGroup.Append>
                            <Button variant="outline-secondary" type="submit">
                                Check
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form.Row>
        </Form>
    );
};

export default ProgressForm;
