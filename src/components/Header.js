import React, { Component } from 'react';
import Modals from "./Modals";
import { Link } from "react-router-dom";
import { Navbar, Nav, FormControl, Form } from 'react-bootstrap';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            companyLogo:[],
            heading: [],
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
        const url = "https://cdn.contentstack.io/v3/content_types/header/entries/blt2063159d6e6c183a?environment=development";
        const response = await fetch(url, requestOptions)
        const data = await response.json()
            this.setState({
                            companyLogo: data.entry.company_logo.url,
                            heading: data.entry.navigation_menu[1].title,
                        });
            // console.log(data.entry.navigation_menu[1].title)
    }

    render() {
        return (
            
            <div className="nav-bar align-text-bottom">
                <Navbar className="d-flex" id="header_container" expand= "md">
                    <div className="mr-auto p3">
                    <Link to ={`/`} style={{ textDecoration: 'none', color: 'rgb(113, 113, 113)' }}>
                        {/* <Navbar.Brand className="navbar-brand"> */}
                        <img 
                            src={this.state.companyLogo} 
                            alt="/" 
                            className="img-fluid" 
                        />
                        {/* </Navbar.Brand> */}
                    </Link>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse  className="navbar-collapse" >
                    <Nav className="mr-auto my-2 my-lg-0 justify-content-end" id="navbar-scroll" style={{ maxHeight: '200px' }}>
                        <div className="rounded" id="rounded_2">
                            <Form inline className="search">
                                <FormControl id="header-input" type="text"  placeholder="Search for Car..." className="mr-2 border-0" 
                                // onChange={this.props.search} />
                                onChange={this.props.search} />

                            </Form>
                        </div>
                        <div className="p5 mr-2 " id="listMyCar">
                            <Link to ={`/list_my_car/`} style={{ textDecoration: 'none', color: 'rgb(113, 113, 113)' }}>
                                <button type="button" className="btn btn-light nav-link-2" id="list-my-vehicle">{this.state.heading}</button>
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
