import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar expand= "md">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <a className="nav-link" href="/#">Latest</a>
                        <a className="nav-link" href="/#">Audi</a>
                        <a className="nav-link" href="/#">BMW</a>
                        <a className="nav-link" href="/#">Chevy</a>
                        <a className="nav-link" href="/#">Ford</a>
                        <a className="nav-link" href="/#">Hyundai</a>
                        <a className="nav-link" href="/#">Lucid</a>
                        <a className="nav-link" href="/#">Nissan</a>
                        <a className="nav-link" href="/#">Porsche</a>
                        <a className="nav-link" href="/#">Tesla</a>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
