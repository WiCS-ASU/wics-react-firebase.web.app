import { useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import ContactCard from "../UI/Cards/ContactCard";
import { BsMailbox } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import emailjs from "emailjs-com";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v2ojf1j",
        "template_9865b1r",
        form.current,
        "user_RqnhQe3YjEVTbANjWXNY2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  //form validation code below
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
    <div className="bg-light vh-100">
      <Container className="pb-5">
        <div className="text-center">
          <h1 className="pt-5">Contact Us</h1>
          <p className="mb-5">
            Any questions or remarks? Just write us a message!
          </p>
        </div>
        <Card className="border-0">
          <Card.Body>
            <Row>
              <Col className="d-none d-md-block">
                <Card.Title>Contact Information</Card.Title>
                <Card.Text>
                  Fill out the form and our Team will get back to you within 24
                  hours.
                </Card.Text>
                <ContactCard icon={<BsMailbox />} text="wics.asu@gmail.com" />
                <ContactCard icon={<BsGeoAlt />} text="699 S Mill Ave" />
              </Col>
              <Col>

                <Form
                  noValidate
                  validated={validated}
                  ref={form}
                  onSubmit={ handleSubmit, sendEmail }
                >
                  <Row className="mb-3">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter your name"
                          name="from_name"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter your name
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Enter email"
                          name="user_email"
                        />
                        <Form.Control.Feedback type="invalid">
                          Email address required
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </Row>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Your message</Form.Label>
                    <Form.Control
                      as="textarea"
                      required
                      placeholder="Enter your message"
                      name="message"
                      rows={3}
                    />
                    <Form.Control.Feedback type="invalid">
                      Message required
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <div className="vh-25"></div>
      </Container>
    </div>
  );
}
export default ContactUs;
