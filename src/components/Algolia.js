import React, { Component } from 'react';
import algoliasearch from 'algoliasearch';
import { Link } from "react-router-dom";
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { Card, Container, Badge } from 'react-bootstrap';


const searchClient = algoliasearch('VQI5TOVS3P', 'c303f0377410aa3d69834c9fafcfd7c4');

const Hit = ({ hit }) => 

    <Container fluid>
        <div className="contain">                                        
            <Link to ={'/algolia'} style={{ textDecoration: 'none', color: 'rgb(113, 113, 113)' }}>
                <div className="home-cards">
                    <Card className="cards shadow mb-3 border-0 bg-white rounded">
                    <Card.Img variant="top" src={hit.images[0].url} className=".img-fluid rounded-top" />
                        <Card.Body className="card-body rounded-bottom">
                            <Card.Title>{hit.title}</Card.Title>
                            <Card.Text>
                                {hit.make}, {hit.model}<span className="card-mileage-span">{hit.odometer} MI</span>
                            </Card.Text>
                            <Card.Text>
                                {hit.location.city}
                                , {hit.location.state}
                            </Card.Text>
                            <div className="card-text-price">
                                <Badge pill variant="light" id="card-price">
                                    ${hit.price}
                                </Badge>
                            </div> 
                        </Card.Body>
                    </Card>
                </div>
            </Link>
        </div>
    </Container>;

export default class Algolia extends Component {


    
    render() {

        return (
            
            <InstantSearch searchClient={searchClient} indexName="Ev-trader">
            
            <SearchBox 
              reset={<img src="/reset.png" alt=""/>}
              />
            <Hits hitComponent={Hit} />
            </InstantSearch>
        )
    }
}
