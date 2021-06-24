import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Category extends Component {
    state = {
        headers: []
    }

    async componentDidMount() {
        const API_KEY = process.env.REACT_APP_APIKEY
        const DELIVERY_TOKEN = process.env.REACT_APP_DELIVERY_TOKEN
        var myHeaders = new Headers();
            myHeaders.append("api_key", API_KEY);
            myHeaders.append("access_token", DELIVERY_TOKEN);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
    };
        const url = "https://cdn.contentstack.io/v3/content_types/category/entries?environment=development";
        const response = await fetch(url, requestOptions)
        const data = await response.json()
            this.setState({headers: data.entries})
            // console.log(data.entries)
    }

    render() {
        return (
            <div>
                <Navbar expand= "md">
                <Navbar.Collapse  id="basic-navbar-nav">
                    <a className="nav-link" href="/#">Latest</a>
                    {this.state.headers.map(ev => (
                        <div key={ev.uid}>
                            <Nav className="mr-auto">    
                                <a className="nav-link" href="/#">{ev.title}</a>
                            </Nav>
                        </div>
                    ))}
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}