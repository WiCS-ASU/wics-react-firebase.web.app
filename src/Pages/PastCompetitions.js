import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const competitions = [
  {
    year: "2024",
    image: "WICS Prog Competition/2024/pic 6.png",
    link: "/competitions/2024"
  },
  {
    year: "2023",
    image: "/images/2023.jpg",
    link: "/competitions/2023"
  },
  {
    year: "2022",
    image: "/images/2022.jpg",
    link: "/competitions/2022"
  }
  // Add more as needed
];

function PastCompetitions() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Past Competitions</h1>
      <Row>
        {competitions.map((comp, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <a href={comp.link} style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={comp.image} alt={`Competition ${comp.year}`} />
                <Card.Body className="bg-dark text-white text-center">
                  <Card.Title>{`Competition ${comp.year}`}</Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PastCompetitions;
