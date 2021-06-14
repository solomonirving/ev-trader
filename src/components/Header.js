import React, { Component } from 'react';
import { Navbar, Button, FormControl, Form } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div className="nav-bar align-text-bottom">
                <Navbar className="d-flex">
                    <div className="mr-auto p2">
                        <p className="nav-bar-logo-text"><b>EV</b>TRADER</p>
                    </div>

                    <div className="mx-auto rounded">
                        <Form inline>
                            <FormControl type="text" placeholder="Search for Car..." className="mr-sm-2 border-0" />
                        </Form>
                    </div>

                    <div className="p2 pr-3">
                        <p className="nav-bar-text">List My Car</p>
                    </div>
                    <div className="p2">
                        <Button size="sm rounded-pill">Log In</Button>
                    </div>
                </Navbar>
            </div>
        )
    }
}
