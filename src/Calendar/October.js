import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards"


function October(){
    return(
        <div className="bg-light"> 
            <Container>
                
                <h1 className="text-center p-4">October</h1>
                
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
                
            </Container>
        </div>
    );
}

export default October;