import React, { Component } from 'react';
import Header from './Header';
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap';

export default class ListMyCar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            seller: '',
            city: '',
            states: '',
            price: '',
            year: '',
            make: '',
            model: '',
            color: '',
            odometer: '',
            selectedOption:'',
            status: '',
            condition: '',
            description: '',
        }
    }
    //Change Function For Forms
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    //Submit Function For Post Request
    handleSubmit = (e) => {
        e.preventDefault();
        const API_KEY = process.env.REACT_APP_APIKEY
        const AUTHORIZATION = process.env.REACT_APP_AUTHORIZATION
        const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN
        const LOCALE = process.env.REACT_APP_LOCALE 
        const CONTENT_TYPE_UID = process.env.REACT_APP_CONTENT_TYPE_UID
        const CONTENT_TYPE = process.env.REACT_APP_CONTENT_TYPE

        var myHeaders = new Headers();
            myHeaders.append("api_key", API_KEY);
            myHeaders.append("authorization", AUTHORIZATION);
            myHeaders.append("authtoken", AUTH_TOKEN);
            myHeaders.append("locale", LOCALE);
            myHeaders.append("Content_Type_UID", CONTENT_TYPE_UID);
            myHeaders.append("Content-Type", CONTENT_TYPE);

        var raw = JSON.stringify({
            "entry": {
                "title": this.state.title,
                "seller_name": this.state.seller,
                "location": {
                    "city": this.state.city,
                    "state": this.state.states,
                },
                "price": parseInt(this.state.price),
                "year": parseInt(this.state.year),
                "make": this.state.make,
                "title_status": this.state.status,
                "model": this.state.model,
                "color": this.state.color,
                "odometer": parseInt(this.state.odometer),
                "condition": this.state.condition,
                "description": this.state.description,
            }
        });
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const url = "https://api.contentstack.io/v3/content_types/copy_of_vehicle_listing/entries?locale=en-us";
        const response = fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('Post Request Error', error));
    }

    render() {
        const { title, seller, status, states, city, price, year, make, model, color, odometer, condition, description } = this.state
        return (
            <Container id="vehicle_detail_container">
                <Header />
                <Row className="justify-space-around" id="list_main_row">
                        <Col className="seller_details" id="col_1" sm={12} md={5}>
                            <Row className="rounded" id="detail_image_container">
                                <Card className="rounded border-0 shadow mt-2" id="detail_card_2">
                                    <Card.Body className="rounded mb-2 pl-4 py-2" id="detail_card_title">Seller Details <span className="text-danger">*</span> </Card.Body>
                                    <div className="bg-white d-flex justify-content-center">
                                        <Form className="rounded bg-white detail_container">                                          
                                            <Form.Group className="rounded">
                                                <Form.Control className="bg-light w-100 detail_form" onChange={this.changeHandler} name="title" value={title} type="text" placeholder="Title" />
                                            </Form.Group>
                                            <Form.Group className="rounded">
                                                <Form.Control className="bg-light w-100 detail_form" onChange={this.changeHandler} name="seller" value={seller} type="seller" type="text" placeholder="Sellers Name" />
                                            </Form.Group>

                                            <div className="vehicle_detail_cont_1">
                                                <Form.Control className="w-10 list_form" as="select" onChange={this.changeHandler} name="city" value={city} type="text" placeholder="City">
                                                    <option>City</option>
                                                    <option>Carson City</option>
                                                    <option>Freemont</option>
                                                    <option>Las Vegas</option> 
                                                    <option>Los Angeles</option>
                                                    <option>Sacramento</option>
                                                    <option>San Francisco</option>
                                                    <option>San Jose</option>
                                                    <option>Vacaville</option>
                                                    <option>Vallejo</option>
                                                    <option>Walnut Creek</option>
                                                </Form.Control>
                                                <Form.Control className="ml-5 w-10 list_form" as="select" onChange={this.changeHandler} name="states" value={states} type="text" placeholder="State">
                                                    <option>State</option>
                                                    <option>CA</option>
                                                    <option>FL</option>
                                                    <option>HI</option>
                                                    <option>NJ</option>                                        
                                                    <option>NV</option>
                                                    <option>NY</option>
                                                    <option>OR</option>
                                                    <option>TX</option>
                                                    <option>VA</option>
                                                    <option>WA</option>
                                                </Form.Control>
                                            </div>
                                        </Form>
                                    </div>
                                </Card>
                            </Row>
                                            
                            <Row className="rounded" id="detail_image_container">
                                <Card className="rounded shadow border-0 mt-4 mb-2 bg-white" id="list_card">
                                    <div className="detail_box bg-white w-100 rounded">
                                        <div className="bg-white rounded w-100 py-1 px-3">
                                            <div className="rounded bg-white" type="text" id="detail_card_title">Price</div>
                                            <Form.Group className="rounded w-100">
                                                <Form.Control className="bg-light w-100 detail_form" onChange={this.changeHandler} name="price" value={price} type="text" placeholder="0.00" />
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
                                    <Form className="rounded bg-white detail_container" onSubmit={this.handleSubmit}> 
                                        <Row>
                                            <Col className="bg-white">
                                                <Form.Control className="w-10 list_form" as="select" onChange={this.changeHandler} name="year" value={year} type="text" defaultValue="Year">
                                                    <option>Year</option>
                                                    <option>2021</option>
                                                    <option>2020</option>
                                                    <option>2019</option>
                                                    <option>2018</option>
                                                    <option>2017</option>
                                                    <option>2016</option>
                                                    <option>2015</option>
                                                    <option>2014</option>
                                                    <option>2013</option>
                                                    <option>2012</option>
                                                    <option>2011</option>
                                                </Form.Control>  
                                            </Col>
                                            <Col className="bg-white">
                                            <Form.Control className="w-10 list_form" as="select" onChange={this.changeHandler} name="make" value={make} type="text" defaultValue="Make">
                                                <option>Make</option>
                                                <option>Aptera</option>
                                                <option>Audi</option>
                                                <option>BMW</option>
                                                <option>Chevrolet</option>
                                                <option>Ford</option>
                                                <option>Hyundai</option>
                                                <option>Lucid</option>
                                                <option>Nissan</option>
                                                <option>Porsche</option>
                                                <option>Tesla</option>
                                            </Form.Control>
                                            </Col>
                                        </Row>
                                         

                                        <Row className="mb-3 bg-white">
                                            <Col className="bg-white rounded"> 
                                            <Form.Control className="detail_form_2" onChange={this.changeHandler} name="model" value={model} type="text" placeholder="Model" />
                                            </Col> 
                                            <Col className="bg-white rounded">
                                            <Form.Control className="detail_form_2" onChange={this.changeHandler} name="color" value={color} type="text" placeholder="Color" />
                                            </Col>
                                        </Row>

                                        <Form.Group className="bg-white rounded">
                                            <Form.Control className="align-self-end bg-light w-4" id="detail_form_3" onChange={this.changeHandler} name="odometer" value={odometer} type="text" placeholder="Odometer" />
                                        </Form.Group>

                                        <Row>
                                            <Col className="bg-white">
                                                <Card.Body className="rounded pl-0 pt-0"  id="detail_card_title">Title Status <span className="text-danger">*</span> </Card.Body>
                                                    <Form.Group className="mb-3 bg-white" id="formGridCheckbox">
                                                        <Form.Check className="bg-white" name="status" onChange={this.changeHandler} checked={status === "Clean"} value="Clean" type="radio" label="Clean" />       
                                                        <Form.Check className="bg-white" name="status" onChange={this.changeHandler} checked={status === "Salvage"} value="Salvage" type="radio" label="Salvage" />
                                                    </Form.Group>
                                            </Col>

                                            <Col className="bg-white">
                                                <Card.Body className="bg-white rounded pl-0 pt-0" id="detail_card_title">Condition <span className="text-danger">*</span></Card.Body>
                                                <Row className="bg-white">
                                                    <Col className="bg-white">
                                                        <Form.Group className="mb-3 bg-white pr-1" id="formGridCheckbox">
                                                            <Form.Check className="bg-white" name="condition" onChange={this.changeHandler} checked={condition === "Excellent"} value="Excellent" type="radio" label="Excellent" />
                                                            <Form.Check className="bg-white" name="condition" onChange={this.changeHandler} checked={condition === "Great"} value="Great" type="radio" label="Great" />
                                                            <Form.Check className="bg-white" name="condition" onChange={this.changeHandler} checked={condition === "Good"} value="Good" type="radio" label="Good" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col className="bg-white">
                                                        <Form.Group className="mb-3 bg-white pr-1" id="formGridCheckbox">
                                                            <Form.Check className="bg-white" name="condition" onChange={this.changeHandler} checked={condition === "Okay"} value="Okay" type="radio" label="Okay" />
                                                            <Form.Check className="bg-white" name="condition" onChange={this.changeHandler} checked={condition === "New"} value="New" type="radio" label="New" />
                                                            <Form.Check className="bg-white" name="condition" onChange={this.changeHandler} checked={condition === "Used"} value="Used" type="radio" label="Used" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3 mt-3 rounded" id="list_text_area" placeholder="Description">
                                            <Form.Control placeholder="Description" onChange={this.changeHandler} name="description" value={description} as="textarea" rows={3} />
                                        </Form.Group>

                                        <Button id="detail_submit" className="align-self-end mb-3 w-60 border-0" variant="primary" type="submit">
                                            Submit Listing
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
