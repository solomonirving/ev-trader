import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div className="nav-bar align-text-bottom">
                <Navbar className="d-flex">
                    <div className="mr-auto p2">
                        <Navbar.Brand className="nav-bar-brand-text"><b>EV</b>TRADER</Navbar.Brand>
                    </div>
                    <div className="p2 pr-3">
                        <p className="nav-bar-text">Sign up</p>
                    </div>
                    <div className="p2">
                        <Button size="sm rounded-pill">Log In</Button>
                    </div>
                </Navbar>
            </div>
        )
    }
}
