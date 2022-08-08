import React from "react";
import { Button, Container, Modal, Form, Col, Row } from "react-bootstrap";
import { db } from "./src/index.js"; // TODO Fix this

import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

function Modals(props) {
  const usersCollectionRef = collection(db, "events");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newASURITE, setNewASURITE] = useState(0);
  const [newMajor, setNewMajor] = useState("");
  const [newGradYear, setNewGradYear] = useState(0);

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

  //form validation code here

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  onChange={(event) => {
                    setNewFirstName(event.target.value);
                  }}
                  type="text"
                  placeholder="Enter your First Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your first name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  onChange={(event) => {
                    setNewLastName(event.target.value);
                  }}
                  type="text"
                  placeholder="Enter your Last Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your last name
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  onChange={(event) => {
                    setNewEmail(event.target.value);
                  }}
                  type="email"
                  placeholder="Enter your email address"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address
                </Form.Control.Feedback>
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
                required
                type="checkbox"
                label="Creating an account means you're ok with our Terms of Service and Privacy Policy"
                feedback="You must agree before submitting"
                feedbackType="invalid"
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
