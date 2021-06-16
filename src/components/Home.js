import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';


export default class Home extends Component {
    state = {
        vehicle: []
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
            <div>
                <div className="home">
                    <div className="home-title">
                        <p><b>Newest Listings</b></p>
                    </div>
                </div>

                {this.state.vehicle.map(ev => (
                    <div key={ev.uid}>

                        <div className="home-cards">
                            <Row xs={1} md={4} className="g-4">
                                <Col>
                                <Card>
                                    <Card.Img variant="top" src={"ev.file"} className=".img-fluid img-thumbnail" />
                                    <Card.Body className="card-body">
                                        <Card.Title className="card-title">{ev.make}</Card.Title>
                                        <Card.Text className="card-text">
                                            {ev.model}<span className="card-text-span">{ev.odometer}</span>
                                        </Card.Text>
                                        <Card.Text className="card-text">
                                            {ev.location.city}
                                            , {ev.location.state}
                                        </Card.Text>
                                        <Card.Text className="card-text">
                                            {ev.price}

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
