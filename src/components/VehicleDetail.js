import React, { Component } from 'react'
import { Container, Col, Image, Row, Card, Form, Button } from 'react-bootstrap'
import { IoPersonOutline, IoLocationOutline } from "react-icons/io5";

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
        const url = `https://cdn.contentstack.io/v3/content_types/copy_of_vehicle_listing/entries/${id}?environment=development`;
        const response = await fetch(url, requestOptions)
        const data = await response.json()
            this.setState({details: data.entry,
                            image: data.entry.images[0].url,
                            location_city: data.entry.location.city,
                            location_state: data.entry.location.state,
                        })
            // console.log(data.entry)
    }

    render() {
        return (
            <div>
                <Container fluid id="vehicle_detail_container">
                    <Row id="main_row">
                        <Col id="col_1" sm={12} md={8}>
                            <Row className="rounded mt-2" id="detail_image_container">
                                <Image className="rounded border-0" id="detail_image" src={this.state.image} />
                            </Row>
                            
                            <Row id="detail_image_container">
                                <Image className="rounded mt-2 detail_thumbnail" src={this.state.image} />
                                <Image className="rounded mt-2 detail_thumbnail" src={this.state.image} />
                                <Image className="rounded mt-2 detail_thumbnail" src={this.state.image} />
                                <Image className="rounded mt-2 detail_thumbnail" id="detail_thumbnail_2" src={this.state.image} />
                            </Row>

                            <Row className="rounded" id="detail_image_container">
                                <Card className="rounded shadow mt-2  border-0 mb-2 bg-white py-3" id="detail_card">
                                    <div className="detail_box bg-white">
                                    <div className="bg-white pl-3">
                                        <div className="rounded bg-white p-1" id="detail_card_title">Sellers Info</div>
                                        <div className="rounded bg-white p-1 detail-text"><IoPersonOutline /> {this.state.details.seller_name}</div>   
                                        <div className="rounded bg-white p-1 detail-text"><IoLocationOutline /> {this.state.location_city}, {this.state.location_state}</div> 
                                    </div> 
                                    <div className="bg-white pl-4">
                                        <div className="rounded bg-white p-1" id="detail_card_title">Vehicle Details</div>
                                        <div className="rounded bg-white p-1 detail-text"><b className="detail_bold bg-white pr-1 mr-4">VIN</b>{this.state.details.vin}</div>   
                                        <div className="rounded bg-white p-1 detail-text"><b className="detail_bold bg-white mr-4">Year</b> {this.state.details.year}</div>   
                                        <div className="rounded bg-white p-1 detail-text"><b className="detail_bold bg-white mr-3">Make</b> {this.state.details.make}</div>   
                                        <div className="rounded bg-white p-1 detail-text"><b className="detail_bold bg-white mr-2">Model</b> {this.state.details.model}</div>   
                                        <div className="rounded bg-white p-1 detail-text"><b className="detail_bold bg-white mr-3">Miles</b> {this.state.details.odometer}</div>   
                                    </div>
                                    </div>
                                </Card>        
                            </Row>
                                            
                            <Row id="detail_image_container">
                                <Card className="rounded border-0 shadow mt-2 mb-2" id="detail_card">
                                    <Card.Body className="rounded" id="detail_card_title">Description</Card.Body>
                                    <Card.Body className="rounded" id="detail_description">{this.state.details.description}</Card.Body>
                                </Card>
                            </Row>
                        </Col> 

                        <Col id="col_2" md={4} sm={12}>
                            <Card className="rounded shadow border-0 mt-2" id="detail_card_2">
                                <Card.Body className="rounded" id="detail_card_title">Sellers Price</Card.Body>
                                <Card.Body id="details_price" className="rounded h2 mb-2 pt-0">${this.state.details.price}</Card.Body>
                            </Card>
                            <Card className="rounded shadow border-0 mt-3" id="detail_card_2">
                                <Card.Body className="rounded mb-2 pl-4" id="detail_card_title">Make An Offer</Card.Body>
                                
                                <div className="bg-white d-flex justify-content-center">
                                    <Form className="rounded bg-white" id="detail_container"> 
                                        <Form.Group className="bg-white"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0 detail_form" type="email" placeholder="Name" />
                                        </Form.Group>
                                        <Form.Group className="bg-white" controlId="formBasicPassword">
                                            <Form.Control className="bg-light w-100 border-0 detail_form" type="email" placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group className="bg-white d-flex justify-content-start" controlId="formBasicPassword">
                                        <Form.Label id="detail_offer" className="bg-white font-weight-bold pr-1 align-self-center ">Offer Amount</Form.Label>
                                            <Form.Control className="bg-light w-50 align-self-end ml-4 border-0 detail_form" type="password" placeholder="$0.00" />
                                        </Form.Group>
                                        <Form.Group className="bg-white" controlId="formBasicPassword">
                                            <Form.Control className="align-self-end bg-light w-100 border-0 detail_form" type="password" placeholder="Notes" />
                                        </Form.Group>
                                        <Button id="detail_submit" className="align-self-end badge-pill mb-3 w-100 border-0" variant="primary" type="submit">
                                            Send Offer
                                        </Button>
                                    </Form>
                                </div>
                                
                            </Card>
                        </Col>
                    </Row>
                </Container>
          </div>
        )
    }
}
