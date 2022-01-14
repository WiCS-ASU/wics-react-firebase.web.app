import React from "react";
import {Card} from 'react-bootstrap'


function Sponsorships(props){
<<<<<<< Updated upstream
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
=======
    return(   
      <Card className="SponsorCard">
      <Card.Header className= "bg-light">{props.title}</Card.Header>
      <Card.Body >
        {props.image}
      </Card.Body>
    </Card>
>>>>>>> Stashed changes
    );
}

export default Sponsorships;