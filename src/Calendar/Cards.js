import React from "react";
import {Card} from 'react-bootstrap'
import Buttons from "./Buttons";

function Cards(props){
    return(
        <Card className="text-center">
  <Card.Header>{props.date}</Card.Header>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
    <Buttons text="RSVP" />
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
    );
}

export default Cards;