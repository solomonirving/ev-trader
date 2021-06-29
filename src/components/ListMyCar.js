import React, { Component } from 'react';
import Category from "./Category";
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap';

export default class ListMyCar extends Component {
    render() {
        return (
            <div>
                <Category />
                <Container fluid id="vehicle_detail_container">
                    <Row id="main_row">
                        <Col id="col_1" sm={12} md={8}>
                            <Row className="rounded" id="detail_image_container">
                            </Row>
                            
                            <Row id="detail_image_container">
                  
                            </Row>

                            <Row className="rounded" id="detail_image_container">
                                <Card className="rounded shadow mt-2 mb-2 bg-white py-3" id="detail_card">
                                    <div className="detail_box bg-white">
                                        <div className="bg-white pl-3">
                                            <div className="rounded bg-white p-1" id="detail_card_title"><alarm /> Seller Details</div>
                                            <Form.Group className="bg-white"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="Title" />
                                            </Form.Group>
                                            <Form.Group className="bg-white"  controlId="formBasicEmail">
                                                <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="Sellers Name" />
                                            </Form.Group>
                                            <Form.Group className="bg-white"  controlId="formBasicEmail">
                                                <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="City" />
                                            </Form.Group>
                                            <Form.Group className="bg-white"  controlId="formBasicEmail">
                                                <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="State" />
                                            </Form.Group>
                                        </div> 
                                    </div>
                                </Card>
                            </Row>
                                            
                            <Row className="rounded" id="detail_image_container">
                                <Card className="rounded shadow mt-2 mb-2 bg-white py-3" id="detail_card">
                                    <div className="detail_box bg-white">
                                        <div className="bg-white pl-3">
                                            <div className="rounded bg-white p-1" id="detail_card_title"><alarm />Price</div>
                                            <Form.Group className="bg-white"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="$0.00" />
                                            </Form.Group>
                                        </div> 
                                    </div>
                                </Card>
                            </Row>
                        </Col> 

                        <Col id="col_2" md={4} sm={12}>
                            <Card className="rounded shadow mt-2" id="detail_card_2">
                                <Card.Body className="rounded mb-2 pl-4" id="detail_card_title">Vehicle Details</Card.Body>
                                
                                <div className="bg-white d-flex justify-content-center">
                                    <Form className="rounded bg-white" id="detail_container"> 
                                        <Form.Group className="bg-white"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="Year" />
                                        </Form.Group>

                                        <Form.Group className="bg-white" controlId="formBasicPassword">
                                            <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="Make" />
                                        </Form.Group>
                                        <Form.Group className="bg-white"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="Model" />
                                        </Form.Group>
                                        <Form.Group className="bg-white"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="Color" />
                                        </Form.Group>


                                        <Form.Group className="bg-white" controlId="formBasicPassword">
                                            <Form.Control className="align-self-end bg-light w-100 border-0" id="detail_form" type="password" placeholder="Odometer" />
                                        </Form.Group>
                                        <Form.Group className="bg-white"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="Description" />
                                        </Form.Group>

                                        <Button id="detail_submit" className="align-self-end badge-pill mb-3 w-100 border-0" variant="primary" type="submit">
                                            Upload Image
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
