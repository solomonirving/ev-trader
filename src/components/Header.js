import React, { Component } from 'react';
import Modals from "./Modals";
import { Navbar, Nav, FormControl, Form, Card } from 'react-bootstrap';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            head: [],
            categories: [],
        }
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

        //Header
        const url = "https://cdn.contentstack.io/v3/content_types/header/entries/blt2063159d6e6c183a?environment=development";
        const response = await fetch(url, requestOptions)
        const data = await response.json()
            this.setState({head: data.entry})
            console.log(data.entry)

        // Categories
        const url2 = "https://cdn.contentstack.io/v3/content_types/category/entries?environment=development";
        const response2 = await fetch(url2, requestOptions)
        const data2 = await response2.json()
            this.setState({categories: data2.entries})
            console.log(data2.entries)
            
    }

    render() {

        return (
            <div className="nav-bar align-text-bottom">
                        <Navbar className="d-flex" expand= "md">
                            <div className="mr-auto p3">
                                <Card.Img variant="top" src="https://images.contentstack.io/v3/assets/blt54c8c0f2c2a9678f/blt4585c7e2b244b118/60c9269883f9fe49a6fed270/evtrader-logo.png" className="img-fluid" />
                            </div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse  className="navbar-collapse" id="navbarScroll">
                            <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <div className="rounded ">
                                    <Form inline>
                                        <FormControl id="header-input" type="text" placeholder="Search for Car..." className="mr-lg-2 border-0" />
                                    </Form>
                                </div>
                                <div className="p2 pr-3" id="listMyCar">
                                    <p className="nav-bar-text mr-auto" id="test">List My Vehicle</p>
                                </div>
                                <Modals />
                                </Nav>
                            </Navbar.Collapse> 
                        </Navbar> 
            </div>
        )
    }
}
