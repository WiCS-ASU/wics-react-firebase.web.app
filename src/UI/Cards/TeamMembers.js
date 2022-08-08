import React from "react";


import { Card, Row, Col } from "react-bootstrap";

function TeamMember(props) {
  return (
    <div className="row align-items-center">
    <Card border="light" className="bg-light">
      <Card.Body>
        <Row className="align-items-center">
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
    </div>
  );
}

export default TeamMember;
