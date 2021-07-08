import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ReactDom from 'react-dom';

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
        
        return ReactDom.createPortal(
            <>
                <Navbar id="category_items">
                    <div className="btn-group d-flex align-content-between flex-wrap" role="group" id="basic-navbar-nav">
                        {this.state.headers.map(ev => (
                            <Nav key={ev.uid}>  
                                <button type="button" value={ev.uid} className="btn btn-light mr-3 mb-2 nav-link" onClick={this.props.onselectCategory}>{ev.title}</button>
                            </Nav>
                        ))}
                    </div>
                </Navbar>
            </>,
            document.getElementById('buttons')
        )
    }
}
