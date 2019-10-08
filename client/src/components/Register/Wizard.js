import React, { Component } from 'react';
import { Form } from 'react-final-form';
import { Button, Row, Col } from 'react-bootstrap';

class Wizard extends Component {
    static Page = ({ children }) => {
        return children;
    };

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
        };
    }

    next = values => {
        return this.setState(state => {
            return {
                page: Math.min(state.page + 1, this.props.children.length - 1),
                values,
            };
        });
    };

    previous = () => {
        return this.setState(state => {
            return {
                page: Math.max(state.page - 1, 0),
            };
        });
    };

    /**
     * NOTE: Both validate and handleSubmit switching are implemented
     * here because 🏁 Redux Final Form does not accept changes to those
     * functions once the form has been defined.
     */

    validate = values => {
        const activePage = React.Children.toArray(this.props.children)[this.state.page];
        return activePage.props.validate ? activePage.props.validate(values) : {};
    };

    handleSubmit = values => {
        const { children, onSubmit } = this.props;
        const { page } = this.state;
        const isLastPage = page === React.Children.count(children) - 1;
        if (isLastPage) {
            return onSubmit(values);
        }
        this.next(values);
    };

    render() {
        const { children } = this.props;
        const { page } = this.state;
        const activePage = React.Children.toArray(children)[page];
        const isLastPage = page === React.Children.count(children) - 1;
        return (
            <Form validate={this.validate} onSubmit={this.handleSubmit}>
                {({ handleSubmit, submitting }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            {activePage}
                            <Row className="justify-content-center">
                                <Col md={9} lg={8}>
                                    <div style={{ marginTop: '0.5rem' }}>
                                        {page > 0 && (
                                            <Button
                                                variant="primary"
                                                className="mr-2"
                                                type="button"
                                                onClick={this.previous}
                                            >
                                                « Previous
                                            </Button>
                                        )}
                                        {!isLastPage && (
                                            <Button variant="primary" type="submit">
                                                Next »
                                            </Button>
                                        )}
                                        {isLastPage && (
                                            <Button variant="primary" type="submit" disabled={submitting}>
                                                Submit
                                            </Button>
                                        )}
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    );
                }}
            </Form>
        );
    }
}

export default Wizard;
