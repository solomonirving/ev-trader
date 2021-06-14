import React, { Component } from 'react';
import Stack from "../sdk/entry"
import { Card, Row, Col } from 'react-bootstrap';

export default class Home extends Component {

    async componentDidMount() {
        const { location } = this.props
        const result = await Stack.getEntryByUrl("page", location.pathname)
        this.setState({
            entry: result[0]
        })
    }

    render() {
        const { result } = this.props
        return (
            <div className="home">
                <div className="home-title">
                    <p><b>{console.log(result)}</b></p>
                </div>
            <div>
                

            </div>
                <div className="home-cards">
                    <Row xs={1} md={4} className="g-4">
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="#" className=".img-fluid img-thumbnail" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">{result}</Card.Title>
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
