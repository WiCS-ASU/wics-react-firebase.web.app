 import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards"


function March(){
    return(
        <div className="bg-light"> 
            <Container>
                
                <h1 className="text-center p-4">March</h1>
                
                <Row>
                    <Col xs={12} md={4} className="my-3">
                        
                        <Cards 
                            date = "March 2, 2022 "
                            title = "GBM #4"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                    <Col xs={12} md={4} className="my-3">
                        <Cards 
                            date = "March 16, 2022"
                            title = "GBM #5"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                    <Col xs={12} md={4} className="my-3">
                        <Cards 
                            date = "March 19, 2022"
                            title = "Programming Competition"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className="my-3">
                        
                        <Cards 
                            date = "March 25, 2022"
                            title = "Movie Night Social"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                    <Col xs={12} md={4} className="my-3">
                        <Cards 
                            date = "March 30, 2022"
                            title = "GBM #6"
                            description = "Enter description of event and all necessary information"
                        />
                    </Col>
                   
                </Row>
                
                
            </Container>
        </div>
    );
}

export default March;