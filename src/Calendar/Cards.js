import React from "react";
import { Card, Button } from "react-bootstrap";

function Cards(props) {
  return (
    <div className="event-card">
      <Card className="text-center">
        <Card.Body>
          <img
            src={props.img}
            className="card-img"
            //style = {{padding:0.5}}
          />
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">
            <a style={{ color: "white" }} href={props.link}>
              {props.button}
            </a>
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

/** function Date() {
  // function to deal with dates?
  // review the way that dates mess with functions?
} */

export default Cards;
