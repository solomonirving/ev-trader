import React, { Component } from 'react';
import Header from './Header'
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap';

export default class ListMyCar extends Component {
    render() {
        return (
                <Container fluid id="vehicle_detail_container">
                <Header />
                    <Row className="justify-space-around" id="list_main_row">
                        <Col className="seller_details" id="col_1" sm={12} md={5}>
                            <Row className="rounded" id="detail_image_container">
                            <Card className="rounded border-0 shadow mt-2" id="detail_card_2">
                                <Card.Body className="rounded mb-2 pl-4 py-2" id="detail_card_title">Seller Details</Card.Body>
                                <div className="bg-white d-flex justify-content-center">
                                    <Form className="rounded bg-white detail_container">                                          
                                        <Form.Group className="rounded"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0 detail_form" type="email" placeholder="Title" />
                                        </Form.Group>
                                        <Form.Group className="rounded"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0 detail_form" type="email" placeholder="Sellers Name" />
                                        </Form.Group>

                                        <div className="vehicle_detail_cont_1">
                                        <Form.Control className="border-0 w-10 list_form" as="select" defaultValue="City">
                                                <option disabled>City</option>
                                                <option>Los Angeles</option>
                                                <option>San Francisco</option>
                                                <option>Freemont</option>
                                                <option>San Jose</option>
                                                <option>Walnut Creek</option>
                                                <option>Sacramento</option>
                                                <option>Vacaville</option>
                                                <option>Vallejo</option>
                                                <option>Carson City</option>
                                                <option>Las Vegas</option> 
                                        </Form.Control>
                                        <Form.Control className="border-0 ml-5 w-10 list_form" as="select" defaultValue="State">
                                                <option disabled>State</option>
                                                <option>CA</option>
                                                <option>NV</option>
                                                <option>TX</option>
                                                <option>OR</option>
                                                <option>FL</option>
                                                <option>NY</option>
                                                <option>WA</option>
                                                <option>HA</option>
                                                <option>VA</option>
                                                <option>NJ</option>                                        </Form.Control>
                                        </div>
                                    </Form>
                                </div>
                            </Card>
                            </Row>
                                            
                            <Row className="rounded" id="detail_image_container">
                                <Card className="rounded shadow border-0 mt-3 mb-2 bg-white" id="list_card">
                                    <div className="detail_box bg-white w-100 rounded">
                                        <div className="bg-white rounded w-100 py-1 px-3">
                                            <div className="rounded bg-white" id="detail_card_title">Price</div>
                                            <Form.Group className="rounded w-100"  controlId="formBasicEmail">
                                            <Form.Control className="bg-light w-100 border-0 detail_form" type="email" placeholder="$0.00" />
                                            </Form.Group>
                                        </div> 
                                    </div>
                                </Card>
                            </Row>
                        </Col> 

                        <Col className="mt-2" id="col_2" sm={12} md={6}>
                            <Card className="rounded shadow" id="detail_card_2">
                                <Card.Body className="rounded border-0 mb-2 pl-4 py-2" id="detail_card_title">Vehicle Details</Card.Body>
                                <div className="bg-white d-flex justify-content-center">
                                    <Form className="rounded bg-white detail_container"> 

                                        <Row>
                                            <Col className="bg-white">
                                            <Form.Control className="border-0 w-10 list_form" as="select" defaultValue="Year">
                                                        <option disabled>Year</option>
                                                        <option>2011</option>
                                                        <option>2012</option>
                                                        <option>2013</option>
                                                        <option>2014</option>
                                                        <option>2015</option>
                                                        <option>2016</option>
                                                        <option>2017</option>
                                                        <option>2018</option>
                                                        <option>2019</option>
                                                        <option>2020</option>
                                                        <option>2021</option>
                                            </Form.Control>  
                                            </Col>
                                            <Col className="bg-white">
                                            <Form.Control className="border-0 w-10 list_form" as="select" defaultValue="Make">
                                                        <option disabled>Make</option>
                                                        <option>Nissan</option>
                                                        <option>Hyundai</option>
                                                        <option>Ford</option>
                                                        <option>Chevrolet</option>
                                                        <option>BMW</option>
                                                        <option>Audi</option>
                                                        <option>Porsche</option>
                                                        <option>Aptera</option>
                                                        <option>Lucid</option>
                                                        <option>Tesla</option>
                                            </Form.Control>
                                            </Col>
                                        </Row>
                                         

                                        <Row className="mb-3 bg-white">
                                            <Col className="bg-white rounded"> 
                                            <Form.Control className="border-0 detail_form_2" type="email" placeholder="Model" />
                                            </Col> 
                                            <Col className="bg-white rounded">
                                            <Form.Control className="border-0 detail_form_2" type="email" placeholder="Color" />
                                            </Col>
                                        </Row>

                                        <Form.Group className="bg-white rounded" controlId="formBasicPassword">
                                            <Form.Control className="align-self-end bg-light w-4 border-0" id="detail_form_3" type="password" placeholder="Odometer" />
                                        </Form.Group>

                                        <Row>
                                            <Col className="bg-white">
                                                <Card.Body className="rounded pl-0 pt-0" id="detail_card_title">Title Status</Card.Body>
                                                <Form.Group className="mb-3 bg-white" id="formGridCheckbox">
                                                    <Form.Check className="bg-white" type="radio" name="groupOptions1" label="Clean" />
                                                </Form.Group>
                                                <Form.Group className="mb-3 bg-white" id="formGridCheckbox">
                                                    <Form.Check className="bg-white" type="radio" name="groupOptions1" label="Salvage" />
                                                </Form.Group>
                                            </Col>

                                            <Col className="bg-white">
                                            <Card.Body className="bg-white rounded pl-0 pt-0" id="detail_card_title">Condition</Card.Body>
                                                <Row className="bg-white">
                                                    <Col className="bg-white">
                                                        <Form.Group className="mb-3 bg-white pr-1" id="formGridCheckbox">
                                                            <Form.Check className="bg-white" type="radio" name="groupOptions" label="Excellent" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3 bg-white pr-1" id="formGridCheckbox">
                                                            <Form.Check className="bg-white" type="radio" name="groupOptions" label="Great" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3 bg-white pr-1" id="formGridCheckbox">
                                                            <Form.Check className="bg-white" type="radio" name="groupOptions" label="Good" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col className="bg-white">
                                                        <Form.Group className="mb-3 bg-white pr-1" id="formGridCheckbox">
                                                            <Form.Check className="bg-white" type="radio" name="groupOptions" label="Okay" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3 bg-white pr-1" id="formGridCheckbox">
                                                            <Form.Check className="bg-white" type="radio" name="groupOptions" label="New" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3 bg-white pr-1" id="formGridCheckbox">
                                                            <Form.Check className="bg-white" type="radio" name="groupOptions" label="Used" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3 mt-3 rounded" id="list_text_area" controlId="exampleForm.ControlTextarea1" placeholder="Description">
                                            <Form.Control  placeholder="Description" as="textarea" rows={3} />
                                        </Form.Group>

                                        <Button id="detail_submit" className="align-self-end mb-3 w-60 border-0" variant="primary" type="submit">
                                            Upload Image
                                        </Button>
                                    </Form>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        )
    }
}
