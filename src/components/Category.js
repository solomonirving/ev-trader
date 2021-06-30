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
                <Navbar id="category_items">
                    <div class="btn-group" role="group" id="basic-navbar-nav">
                        <button type="button" class="btn btn-block btn-light mr-2 mb-1 mt-2 nav-link" id="latest">Latest</button>
                        {this.state.headers.map(ev => (
                            <Nav key={ev.uid} >    
                                <button type="button" class="btn btn-block btn-light mr-2 mb-1 mt-2 nav-link">{ev.title}</button>
                            </Nav>
                        ))}
                    </div>
                </Navbar>
            </div>
        )
    }
}
