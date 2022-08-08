import { Container, Row, Col } from "react-bootstrap";
import Sponsorships from "../UI/Cards/Sponsorships";

function BronzeTier() {
    return (
<div className="bg-light"> 
            <Container>
                
                <h1 className="bronzeTier text-center p-4">⎯⎯⎯⎯ Bronze Tier ⎯⎯⎯⎯</h1>
                
                <Row>
                    <Col md={6} className="my-3">
                        
                        <Sponsorships 
                            title = "GoDaddy"
                            color = "bg-danger"
                        />
                    </Col>
                    <Col md={6} className="my-3">
                        
                        <Sponsorships 
                            title = "Carvana"
                            color = "bg-danger"
                        />
                    </Col>
                    <Col md={6} className="my-3">
                        
                        <Sponsorships 
                            title = "Edward Jones"
                            color = "bg-danger"
                        />
                    </Col>
                 
                </Row>
                
            </Container>
        </div>
    );
}

export default BronzeTier;