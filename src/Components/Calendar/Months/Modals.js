import React from "react";
import { Button, Container, Modal, Form, Col, Row } from "react-bootstrap";
import { db } from "C:/Users/kgirl/Documents/GitHub/wics-react-firebase.web.app/src/index.js";

import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

function Modals(props) {
  const usersCollectionRef = collection(db, "users");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newASURITE, setNewASURITE] = useState("");
  const [newMajor, setNewMajor] = useState("");
  const [newGradYear, setNewGradYear] = useState("");
  
  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      major: newMajor,
      ASURITE: newASURITE,
      gradYear: newGradYear,
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-primary display-5"
        >
          RSVP
        </Modal.Title>
      </Modal.Header>
      <Modal.Body closeButton>
        <Container>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  onChange={(event) => {
                    setNewFirstName(event.target.value);
                  }}
                  type="text"
                  placeholder="Enter your First Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={(event) => {
                    setNewLastName(event.target.value);
                  }}
                  type="text"
                  placeholder="Enter your Last Name"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(event) => {
                    setNewEmail(event.target.value);
                  }}
                  type="email"
                  placeholder="Enter your email address"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>ASURITE</Form.Label>
                <Form.Control
                  onChange={(event) => {
                    setNewASURITE(event.target.value);
                  }}
                  type="number"
                  placeholder="Enter your ASU ID"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Major</Form.Label>
                <Form.Control
                  onChange={(event) => {
                    setNewMajor(event.target.value);
                  }}
                  type="text"
                  placeholder="Enter your Major"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Enter your Degree Type</Form.Label>
                <Form.Select id="disabledSelect">
                  <option>Bachelor</option>
                  <option>Master</option>
                  <option>PHD</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Graduation Date</Form.Label>
                <Form.Control
                  onChange={(event) => {
                    setNewGradYear(event.target.value);
                  }}
                  type="number"
                  placeholder="Enter your grad year"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Creating an account means you're ok with our Terms of Service and Privacy Policy"
              />
            </Form.Group>

            <Button onClick={createUser} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Modals;
