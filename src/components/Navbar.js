import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
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
                </nav>
            </div>
        )
    }
}
