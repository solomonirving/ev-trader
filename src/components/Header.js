import React, { Component } from 'react';
import Modals from "./Modals";
import { Link } from "react-router-dom";
import { Navbar, Nav,FormControl, Form, Col } from 'react-bootstrap';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heading: [],
            searchValue: ''
        }
        this.handleChange=this.handleChange.bind(this);
        this.submitSearch=this.submitSearch.bind(this);
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
            this.setState({ heading: data.entry.navigation_menu[1].title });
            (error => console.log('Header Initial Render Error', error));
    }

    //Search Event Handler
    handleChange(event) {
        this.setState({
           searchValue: event.target.value
        })
     }

    //Click Submit Handler
    submitSearch(event) {
        event.preventDefault();
        this.props.search(this.state.searchValue);
    }

    render() {
        return (
            <div className="nav-bar align-text-bottom">
                <Navbar className="d-flex mb-4" id="header_container" expand= "md">
                    <div className="mr-auto pb-3">
                        <Link to ={`/`} style={{ textDecoration: 'none', color: 'rgb(113, 113, 113)' }}>
                            <img 
                                src="https://images.contentstack.io/v3/assets/blt54c8c0f2c2a9678f/blt4585c7e2b244b118/60c9269883f9fe49a6fed270/evtrader-logo.png"
                                alt="/" 
                                className="img-fluid" 
                            />
                        </Link>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse  className="navbar-collapse" >
                        <Nav className="mr-auto my-lg-0 justify-content-end" id="navbar-scroll" style={{ maxHeight: '200px' }}>
                            <div className="rounded" id="rounded_2">
                                <Form onSubmit={this.submitSearch}  className="search">
                                    <FormControl id="header-input" value={this.state.value} onChange={this.handleChange} type="text"  placeholder="Search for Car..." className="mr-2"/>
                                </Form>
                            </div>
                            <div className="p-0 mr-2 " id="listMyCar">
                                <Link to ={`/algolia`} style={{ textDecoration: 'none', color: 'rgb(113, 113, 113)' }}>
                                    <button type="button" className="btn nav-link-2 mr-2" id="list-my-vehicle">Algolia</button>
                                </Link>
                                <Link to ={`/list-my-car`} style={{ textDecoration: 'none', color: 'rgb(113, 113, 113)' }}>
                                    <button type="button" className="btn nav-link-2" id="list-my-vehicle">{this.state.heading}</button>
                                </Link>
                            </div>
                            <Modals />                        
                        </Nav>
                    </Navbar.Collapse> 
                </Navbar> 
            </div>
        )
    }
}
