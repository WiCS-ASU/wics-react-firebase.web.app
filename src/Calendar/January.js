import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards"
// make this the general events page
// upcoming events page? then delete new events when they pass (hide function?)
// ability to add to calendar/rsvp link?

function January(){
    return(
        <div className="bg-light"> 
            <Container>
                
                <h1 className="text-center p-4">January</h1>
                
                <Row>
                    <Col xs={12} md={4} className="my-3">
                        
                        <Cards 
                            date = "November 25, 2021 (Insert date of event) "
                            title = "Insert title of event"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                    <Col xs={12} md={4} className="my-3">
                        <Cards 
                            date = "November 25, 2021 (Insert date of event)"
                            title = "Insert title of event"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                    <Col xs={12} md={4} className="my-3">
                        <Cards 
                            date = "November 25, 2021 (Insert date of event)"
                            title = "Insert title of event"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={12} md={4} className="my-3">
                        
                        <Cards 
                            date = "November 25, 2021 (Insert date of event) "
                            title = "Insert title of event"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                    <Col xs={12} md={4} className="my-3">
                        <Cards 
                            date = "November 25, 2021 (Insert date of event)"
                            title = "Insert title of event"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                   
                </Row>
                
            </Container>
        </div>
    );
}

export default January;