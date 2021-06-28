import React, { Component } from 'react';
import Modals from "./Modals";
import { Link } from "react-router-dom";
import { Navbar, Nav, FormControl, Form, Card } from 'react-bootstrap';

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

        //Header
        const url = "https://cdn.contentstack.io/v3/content_types/header/entries/blt2063159d6e6c183a?environment=development";
        const response = await fetch(url, requestOptions)
        const data = await response.json()
            this.setState({
                            companyLogo: data.entry.company_logo.url,
                            heading: data.entry.navigation_menu[1].title,
                        });
            // console.log(data.entry.navigation_menu[1].title)

        // Categories
    //     const url2 = "https://cdn.contentstack.io/v3/content_types/category/entries?environment=development";
    //     const response2 = await fetch(url2, requestOptions)
    //     const data2 = await response2.json()
    //         this.setState({categories: data2.entries})
    //         console.log(data2.entries)
    }

    render() {

        return (
            <div className="nav-bar align-text-bottom">

                <Navbar className="d-flex" id="header_container" expand= "md">
                    <div className="mr-auto p3">
                    <Link to ={`/`} style={{ textDecoration: 'none', color: 'rgb(113, 113, 113)' }}>
                        <Card.Img variant="top" src={this.state.companyLogo} alt="/" className="img-fluid" />
                    </Link>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse  className="navbar-collapse" >
                    <Nav className="mr-auto my-2 my-lg-0" id="navbar-scroll" style={{ maxHeight: '100px' }}>
                        <div className="rounded">
                            <Form inline>
                                <FormControl id="header-input" type="text" placeholder="Search for Car..." className="mr-2 border-0" />
                            </Form>
                        </div>
                        <Modals />                        
                        <div className="p2 pr-3" id="listMyCar">
                            {/* <p className="nav-bar-text mr-auto" id="list-my-vehicle">{this.state.heading}</p> */}
                            <button type="button" class="btn btn-sm btn-light nav-link" id="list-my-vehicle">{this.state.heading}</button>

                        </div>
      
                        {/* {this.state.categories.map(ev => (
                            <div key={ev.uid}>
                                <p>{ev.title}</p>
                            </div>
                        ))} */}
                    </Nav>
                    </Navbar.Collapse> 
                </Navbar> 

            </div>
        )
    }
}
