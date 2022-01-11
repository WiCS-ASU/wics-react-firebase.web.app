import React from "react";
import {BsDash} from "react-icons/bs"

import { Card, Row, Col } from "react-bootstrap";

function TeamMember(props) {
  return (
    <Card border="light" className="bg-light">
      <Card.Body>
        <Row>
          <Col className="d-none d-md-block text-center"> {props.officer} </Col>
          <Col>
            <Card.Title className="name">{props.name}</Card.Title>
            <Card.Subtitle className="title text-warning mx-auto my-auto">
              {props.title}
            </Card.Subtitle>
            <Card.Text className="description"> {props.description} </Card.Text>
           <a  className = "link text-warning" href={props.link}>Learn More ⎯⎯</a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default TeamMember;
