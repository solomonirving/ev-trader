import React, { Component } from 'react';
import Modals from "./Modals"
import { Navbar, FormControl, Form, Card } from 'react-bootstrap';

export default class Header extends Component {
    state = {
        heading: [],
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
        const url = "https://cdn.contentstack.io/v3/content_types/header/entries/blt2063159d6e6c183a?environment=development";
        const response = await fetch(url, requestOptions)
        const data = await response.json()
            this.setState({heading: data.entry})
            console.log(data.entry)
    }

    render() {

        return (
            <div className="nav-bar align-text-bottom">
                <Navbar className="d-flex" expand= "md">
                    <div className="mr-auto p3">
                        <Card.Img variant="top" src="https://images.contentstack.io/v3/assets/blt54c8c0f2c2a9678f/blt4585c7e2b244b118/60c9269883f9fe49a6fed270/evtrader-logo.png" className="img-fluid" />
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse  id="basic-navbar-nav ml-auto">
                        <div className="ml-auto rounded ">
                            <Form inline>
                                <FormControl type="text" placeholder="Search for Car..." className="mr-sm-2 border-0" />
                            </Form>
                        </div>
                        <div className="p2 pr-3">
                            <p className="nav-bar-text mr-auto">List My Car</p>
                        </div>
                        <Modals />
                    </Navbar.Collapse> 
                </Navbar>
            </div>
        )
    }
}
