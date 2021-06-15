import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default class Home extends Component {

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
        const url = "https://cdn.contentstack.io/v3/content_types/vehicle_listing/entries?environment=development";
        const response = await fetch(url, requestOptions)
        const data = await response.json()
        console.log(data.entries)
    }


    render() { 
     
        return (
                
            <div>
                <div className="home">
                    <div className="home-title">
                        <p><b>Newest Listings</b></p>
                    </div>
                </div>
    
                <div className="home-cards">
                    <Row xs={1} md={4} className="g-4">
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="#" className=".img-fluid img-thumbnail" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Tesla</Card.Title>
                                <Card.Text className="card-text">
                                    Model 3
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
