import React from "react";
import {Card} from 'react-bootstrap'
import './Sponsorships.js'


function Sponsorships(props){
    return(
  <Card className="text-center">
  <Card.Header className={props.color}></Card.Header>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    {props.image}
    
  </Card.Body>
  <Card.Footer ></Card.Footer>
  </Card>
    );
}

export default Sponsorships;