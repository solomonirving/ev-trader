import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicle: [], 
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
        const url = "https://cdn.contentstack.io/v3/content_types/copy_of_vehicle_listing/entries?environment=development";
        const response = await fetch(url, requestOptions)
        const data = await response.json()
            this.setState({vehicle: data.entries})
            // console.log(data.entries)
    }

    render() { 
        return (
            <div className="home-main">
                <div className="home">
                    <div className="home-title">
                        <h5 className="newest-listings"><b>Newest Listings</b></h5>
                    </div>
                </div>

                    <div className="contain">                                        
                        {this.state.vehicle.map(ev => (
                            <div key={ev.uid}>
                                <Link to ={`/vehicle_detail/${ev.uid}`} style={{ textDecoration: 'none', color: 'rgb(113, 113, 113)' }}>
                                    <div className="home-cards">
                                        <Card className="cards shadow mb-3 bg-white rounded">
                                            <Card.Img variant="top" src={ev.images[0].url} className=".img-fluid rounded-top" />
                                            <Card.Body className="card-body rounded-bottom">
                                                <Card.Title className="card-title">{ev.make}</Card.Title>
                                                <Card.Text className="card-text">
                                                    {ev.model}<span className="card-mileage-span">{ev.odometer} MI</span>
                                                </Card.Text>
                                                <Card.Text className="card-text">
                                                    {ev.location.city}
                                                    , {ev.location.state}
                                                </Card.Text>
                                                <div className="card-text-price">
                                                    <Card.Text className="card-text">
                                                        ${ev.price}
                                                    </Card.Text>
                                                </div> 
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
            </div>
        )
    }
}
