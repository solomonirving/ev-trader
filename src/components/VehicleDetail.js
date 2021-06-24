import React, { Component } from 'react'
import { Container, Col, Image, Row, Card } from 'react-bootstrap'
// import {map} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class VehicleDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [],
            image: [],
            location_city: [],
            location_state:[],
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
        let id = this.props.match.params.id;
        // console.log(typeof(id))

        const url = `https://cdn.contentstack.io/v3/content_types/copy_of_vehicle_listing/entries/${id}?environment=development`;

        const response = await fetch(url, requestOptions)
        const data = await response.json()
            this.setState({details: data.entry,
                            image: data.entry.images[0].url,
                            location_city: data.entry.location.city,
                            location_state: data.entry.location.state,
                        })
            console.log(data.entry)
    }

    render() {
        return (
            <div>
                <Container fluid id="vehicle_detail_container">
                    <Col>
                        <Row>
                            <Col id="col_1" xs={8}>
                            <Image className="rounded shadow" id="detail_image" src={this.state.image} />
                            </Col>
                            <Col>
                                {/* <Card className="rounded shadow" id="detail_card">
                                    <Card.Body className="rounded" id="detail_card_title">Sellers Price</Card.Body>
                                    <Card.Body className="rounded">{this.state.details.price}</Card.Body>
                                </Card>
                                <Card className="rounded shadow" id="detail_card">
                                    <Card.Body className="rounded" id="detail_card_title">Make An Offer</Card.Body>
                                </Card> */}
                            </Col>
                        </Row>
                        
                        <Row>
                            <Image className="rounded shadow" id="detail_thumbnail" src={this.state.image} />
                            <Image className="rounded shadow" id="detail_thumbnail" src={this.state.image} />
                            <Image className="rounded shadow" id="detail_thumbnail" src={this.state.image} />
                            <Image className="rounded shadow" id="detail_thumbnail_2" src={this.state.image} />
                        </Row>

                        <Row className="rounded">
                            <Card className="rounded shadow" id="detail_card">
                                    <Card.Body className="rounded" id="detail_card_title"> Sellers info</Card.Body>
                                    <Card.Body className="rounded">{this.state.details.seller_name}</Card.Body>   
                               <Card.Body className="rounded">{this.state.location_city}, {this.state.location_state}</Card.Body>
                            </Card>
                        </Row>

                        <Row>
                            <Card className="rounded shadow" id="detail_card">
                                <Card.Body className="rounded" id="detail_card_title">Description</Card.Body>
                                <Card.Body className="rounded">{this.state.details.description}</Card.Body>
                            </Card>
                        </Row>
                    </Col>



                </Container>
          </div>
        )
    }
}
