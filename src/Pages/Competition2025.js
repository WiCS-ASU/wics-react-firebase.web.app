import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const images = [
  "/WICS-Prog-Competition/2025/IMG_9348.jpg",
  "/WICS-Prog-Competition/2025/IMG_9293.jpg",
  "/WICS-Prog-Competition/2025/IMG_9370.jpg",
  "/WICS-Prog-Competition/2025/Hackathon-Officers.png",
  "/WICS-Prog-Competition/2025/IMG_9299.jpg",
  "/WICS-Prog-Competition/2025/IMG_9306.jpg",
  "/WICS-Prog-Competition/2025/IMG_9324.jpg",
  "/WICS-Prog-Competition/2025/IMG_9352.jpg",
  "/WICS-Prog-Competition/2025/IMG_9354.jpg",
  "/WICS-Prog-Competition/2025/IMG_9355.jpg",
  "/WICS-Prog-Competition/2025/IMG_9360.jpg",
  "/WICS-Prog-Competition/2025/IMG_9362.jpg",
  "/WICS-Prog-Competition/2025/IMG_9367.jpg",
  "/WICS-Prog-Competition/2025/IMG_9372.jpg"
];

function Competition2025() {
  return (
    <div style={{ backgroundColor: "#dab7f17c", minHeight: "100vh", padding: "60px 0" }}>
    <Container className="py-5">
      {/* Heading */}
      <h1 className="text-center mb-4">WiCS Hackathon 2025</h1>
      <p className="text-center mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
        🎉 Here's everything that happened during our very first Hackathon, a space where creativity met community and innovation took off! 
      </p>

      {/* Photo Grid */}
      <Row className="justify-content-center">
        {images.map((src, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-4 d-flex justify-content-center"
          >
            <Image
              src={src}
              alt={`Competition 2025 photo ${index + 1}`}
              fluid
              rounded
              style={{
                objectFit: "cover",
                height: "240px",
                width: "100%",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
              }}
            />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default Competition2025;
