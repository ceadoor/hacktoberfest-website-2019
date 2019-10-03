import React, { useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

import api from '../../api';
import * as endpoints from '../../api/constants';

const ProgressForm = () => {
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');

    const handleChange = event => {
        const form = event.currentTarget;
        if (form.checkValidity()) {
            setValidated(true);
        }
        const { value } = event.target;
        setUsername(value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        // Send POST request
        api({
            method: 'POST',
            url: endpoints.GET_PULL_REQUESTS_ENDPOINT,
            data: {
                username,
            },
        });
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row className="justify-content-center">
                <Form.Group as={Col} md="9" lg="8" controlId="GitHub__username">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend className="d-sm-block d-none">
                            <InputGroup.Text id="url__prefix">https://github.com/</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            value={username}
                            onChange={e => {
                                return handleChange(e);
                            }}
                            type="text"
                            placeholder="Username"
                            aria-describedby="url__prepend"
                            required
                        />
                        <InputGroup.Append>
                            <Button className="btn button__main ml-0" type="submit">
                                Check
                            </Button>
                        </InputGroup.Append>
                        <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Form.Row>
        </Form>
    );
};

export default ProgressForm;
