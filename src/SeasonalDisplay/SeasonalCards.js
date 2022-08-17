import React from "react";
import { Card } from "react-bootstrap";

function SeasonalCards(props) {
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
      </Card>
    </div>
  );
}

/** function Date() {
  // function to deal with dates?
  // review the way that dates mess with functions?
} */

export default SeasonalCards;
