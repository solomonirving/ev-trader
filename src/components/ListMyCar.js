import React, { Component } from 'react';
// import Category from "./Category";
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap';
// import { IoTriangle } from "react-icons/io5";

export default class ListMyCar extends Component {
    render() {
        return (
            <div>
                {/* <Category /> */}
                <Container fluid id="vehicle_detail_container">
                    <Row class="justify-content-between" id="list_main_row">
                        <Col className="seller_details" id="col_1" sm={12} md={5}>
                            <Row className="rounded" id="detail_image_container">
                            <Card className="rounded border-0 shadow mt-2" id="detail_card_2">
                                <Card.Body className="rounded mb-2 pl-4" id="detail_card_title">Seller Details</Card.Body>
                                <div className="bg-white d-flex justify-content-center">
                                    <Form className="rounded bg-white" id="detail_container">                                          
                                        <Form.Group className="bg-white"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="Title" />
                                        </Form.Group>
                                        <Form.Group className="bg-white"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="Sellers Name" />
                                        </Form.Group>

                                        <div className="vehicle_detail_cont_1">
                                        <Form.Control className="border-0 w-10" id="list_form" as="select" defaultValue="City">
                                                <option>City</option>
                                                <option>1</option> 
                                        </Form.Control>
                                        <Form.Control className="border-0 ml-5 w-10" id="list_form" as="select" defaultValue="State">
                                                <option>State</option>
                                                <option>1</option>
                                        </Form.Control>
                                        </div>
                                    </Form>
                                </div>
                            </Card>
                            </Row>
                                            
                            <Row className="rounded" id="detail_image_container">
                                <Card className="rounded shadow border-0 mt-3 mb-2 bg-white py-3" id="list_card">
                                    <div className="detail_box bg-white">
                                        <div className="bg-white rounded pl-3">
                                            <div className="rounded bg-white p-1" id="detail_card_title"><alarm />Price</div>
                                            <Form.Group className="bg-white"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0" id="detail_form" type="email" placeholder="$0.00" />
                                            </Form.Group>
                                        </div> 
                                    </div>
                                </Card>
                            </Row>
                        </Col> 

                        <Col className="mt-2" id="col_2" sm={12} md={6}>
                            <Card className="rounded shadow" id="detail_card_2">
                                <Card.Body className="rounded border-0 mb-2 pl-4" id="detail_card_title">Vehicle Details</Card.Body>
                                <div className="bg-white d-flex justify-content-center">
                                    <Form className="rounded bg-white" id="detail_container"> 

                                        <Row>
                                            <Col className="bg-white">
                                            <Form.Control className="border-0 w-10" id="list_form" as="select" defaultValue="Year">
                                                        <option>Year</option>
                                                        <option>1</option>
                                            </Form.Control>  
                                            </Col>
                                            <Col className="bg-white">
                                            <Form.Control className="border-0 w-10" id="list_form" as="select" defaultValue="Make">
                                                        <option>Make</option>
                                                        <option>1</option>
                                            </Form.Control>
                                            </Col>
                                        </Row>
                                         

                                        <Row className="mb-3">
                                            <Col className="bg-white"> 
                                            <Form.Control className="bg-light w-10 border-0"  type="email" placeholder="Model" />
                                            </Col> 
                                            <Col className="bg-white">
                                            <Form.Control className="bg-light w-4 border-0" id="detail_form_2" type="email" placeholder="Color" />
                                            </Col>
                                        </Row>

                                        <Form.Group className="bg-white rounded" controlId="formBasicPassword">
                                            <Form.Control className="align-self-end bg-light w-4 border-0" id="detail_form_3" type="password" placeholder="Odometer" />
                                        </Form.Group>

                                        <Row>
                                            <Col className="bg-white">
                                                <Card.Body className="rounded pl-0 pt-0" id="detail_card_title">Title Status</Card.Body>
                                                <Form.Group className="mb-3 bg-white" id="formGridCheckbox">
                                                    <Form.Check className="bg-white" type="checkbox" label="Clean" />
                                                </Form.Group>
                                                <Form.Group className="mb-3 bg-white" id="formGridCheckbox">
                                                    <Form.Check className="bg-white" type="checkbox" label="Salvage" />
                                                </Form.Group>
                                            </Col>

                                            <Col className="bg-white">
                                            <Card.Body className="rounded pl-0 pt-0" id="detail_card_title">Condition</Card.Body>

                                                <Form.Group className="mb-3 bg-white" id="formGridCheckbox">
                                                    <Form.Check className="bg-white" type="checkbox" label="Excellent!" />
                                                </Form.Group>
                                                <Form.Group className="mb-3 bg-white" id="formGridCheckbox">
                                                    <Form.Check className="bg-white" type="checkbox" label="Great!" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3 mt-2 rounded" id="list_text_area" controlId="exampleForm.ControlTextarea1" placeholder="Description">
                                            <Form.Control  placeholder="Description" as="textarea" rows={3} />
                                        </Form.Group>

                                        <Button id="detail_submit" className="align-self-end badge-pill mb-3 w-60 border-0" variant="primary" type="submit">
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
