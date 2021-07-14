import React, { Component } from 'react';
import Category from './Category';
import Header from './Header';
import { Link } from "react-router-dom";
import { Card, Container, Navbar, Badge } from 'react-bootstrap';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicle: [],
        }
        this.selectCategory = this.selectCategory.bind(this)
        this.textHandler = this.textHandler.bind(this)
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
        const url = "https://cdn.contentstack.io/v3/content_types/copy_of_vehicle_listing/entries?environment=development";
        const response = await fetch(url, requestOptions)
        const data = await response.json()
            this.setState({vehicle: data.entries});
            // console.log(data.entries)
    }

    // Function to get listing by MAKE
    async selectCategory(e) {
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
        const newvar = e.target.value
        const url = `https://cdn.contentstack.io/v3/content_types/copy_of_vehicle_listing/entries?environment=development&query=%7B%22category.uid%22:%20%22${newvar}%22%7D`;
        const response = await fetch(url, requestOptions)
        const data = await response.json()
            this.setState({vehicle: data.entries});
            // console.log(data.entries)
    }

    // Function to get all listings
    async allListings(e) {
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
        const url = "https://cdn.contentstack.io/v3/content_types/copy_of_vehicle_listing/entries?environment=development";
        const response = await fetch(url, requestOptions)
        const data = await response.json()
            this.setState({vehicle: data.entries});
    }

    // Function to get search results
     async textHandler(e) {
        console.log(e)
        const API_KEY = process.env.REACT_APP_APIKEY
        const DELIVERY_TOKEN = process.env.REACT_APP_DELIVERY_TOKEN
        var myHeaders = new Headers();
            myHeaders.append("api_key", API_KEY);
            myHeaders.append("access_token", DELIVERY_TOKEN);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // redirect: 'follow'
        };
        if (!e) {
            this.allListings();
        } else {
            const url = `https://cdn.contentstack.io/v3/content_types/copy_of_vehicle_listing/entries?environment=development&query={"title":"${e}"}`;
            const response = await fetch(url, requestOptions)
            const data = await response.json()
            this.setState({vehicle: data.entries});
        }

    }

    render() {
        return ( 
            <Container fluid>
                < Header search = {this.textHandler} />

                    <div className="home-main">
                        
                        <div className="buttons" id="buttons">
                            <Navbar id="latest" className="d-flex flex-wrap">
                                <button type="submit" className="btn btn-light mt-2 mb-2 mr-2 nav-link latestButton align-self-start" onClick={ () => this.allListings() }>All</button>                    
                            </Navbar>                 
                            <Category onselectCategory = {this.selectCategory} />
                        </div>
                        <div className="home">
                            <div className="home-title">
                                <h5 className="newest-listings"><b>Newest Listings</b></h5>
                            </div>
                        </div>
    
                        <div className="contain">                                        
                            {this.state.vehicle.map(ev => (                        
                                <div key={ev.uid}>
                                    <Link to ={`/vehicle-detail/${ev.uid}`} style={{ textDecoration: 'none', color: 'rgb(113, 113, 113)' }}>
                                        <div className="home-cards">
                                            <Card className="cards shadow mb-3 border-0 bg-white rounded">
                                            <Card.Img variant="top" src={ev.images[0].url} className=".img-fluid rounded-top" />
                                                <Card.Body className="card-body rounded-bottom">
                                                    <Card.Title>{ev.title}</Card.Title>
                                                    <Card.Text>
                                                        {ev.make}, {ev.model}<span className="card-mileage-span">{ev.odometer} MI</span>
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {ev.location.city}
                                                        , {ev.location.state}
                                                    </Card.Text>
                                                    <div className="card-text-price">
                                                        <Badge pill variant="light" id="card-price">
                                                            ${ev.price}
                                                        </Badge>
                                                    </div> 
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
            </Container>
        )
    }
}
