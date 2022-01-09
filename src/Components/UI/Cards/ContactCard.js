import { Card, Col, Row } from "react-bootstrap";


function ContactCard(props){
    return(
        <Card className="border-0">
            <Card.Body>
                <Row>
                    <Col md="auto">
                    {props.icon}
                    </Col>
                    <Col>
                    {props.text}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ContactCard;