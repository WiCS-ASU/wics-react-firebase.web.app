import React from "react";
import {Card} from 'react-bootstrap'


function Sponsorships(props){
    return(
        <Card className="text-center">
  <Card.Header className={props.color}></Card.Header>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
    
  </Card.Body>
  <Card.Footer ></Card.Footer>
</Card>
    );
}

export default Sponsorships;