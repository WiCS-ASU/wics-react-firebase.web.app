import { useRef } from "react";
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
  return (
    <div className="bg-light ">
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
                <Form ref={form} onSubmit={sendEmail}>
                  <Row className="mb-3">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          name="from_name"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="user_email"
                        />
                      </Form.Group>
                    </div>
                  </Row>

                  <div class="form-group" className="mb-3">
                    <label for="Textarea">Your Message</label>
                    <textarea
                      class="form-control"
                      id="Textarea"
                      rows="3"
                      placeholder="Enter your message"
                      name="message"
                    ></textarea>
                  </div>

                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <div className="vh-25">

        </div>
      </Container>
    </div>
  );
}
export default ContactUs;
