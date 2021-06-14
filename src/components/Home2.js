import React, { Component } from 'react';
import Stack from "../sdk/entry"
import { Card, Row, Col } from 'react-bootstrap';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entry: undefined,
            header: undefined,
            navigation: undefined,
        }
    }

    async componentDidMount() {
        try {
            const result = await Stack.getEntry("home")
        this.setState({
            entry: result[0],
            header: undefined,
            navigation: [0][0],
        }) 
        }
        catch (error) {
            this.setState({
                error: { errorStatus: true, errorCode: 404, errorData: error},
            })
        }
    }

    render() {
        const { result } = this.props
        return (
            <div className="home">
                <div className="home-title">
                    <p><b>console.log(result)</b></p>
                </div>
            <div>
                

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
