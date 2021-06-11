import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div className="home">

                <div className="home-title">
                    <p><b>Newest Listings</b></p>
                </div>

                <div className="home-cards">
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <Col>
                            <Card>
                                <Card.Img variant="top" src="https://mdbootstrap.com/img/new/slides/041.jpg" className=".img-fluid img-thumbnail" />
                                <Card.Body>
                                    <Card.Title>Tesla</Card.Title>
                                    <Card.Text>
                                        Model 3
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

            </div>
        )
    }
}
