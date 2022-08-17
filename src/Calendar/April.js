import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards"


function April(){
    return(
        <div className="bg-light"> 
            <Container>
                
                <h1 className="text-center p-4">April</h1>
                
                <Row>
                    <Col xs={12} md={4} className="my-3">
                        
                        <Cards 
                            date = "April 1, 2022"
                            title = "Study Break - Boba Tree"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                    <Col xs={12} md={4} className="my-3">
                        <Cards 
                            date = "April 5, 2022"
                            title = "TIPS #4"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                    <Col xs={12} md={4} className="my-3">
                        <Cards 
                            date = "April 7, 2022"
                            title = "Tech Talk #4"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                    <Col xs={12} md={4} className="my-3">
                        <Cards 
                            date = "April 13, 2022"
                            title = "GBM #7 / Elections"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                    <Col xs={12} md={4} className="my-3">
                        <Cards 
                            date = "April 15, 2022"
                            title = "Final Banquet"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                    
                </Row>
                
            </Container>
        </div>
    );
}

export default April;