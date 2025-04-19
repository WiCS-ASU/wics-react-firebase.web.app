import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// Example images
const images = [
  "/WICS-Prog-Competition/2019/IMG_2019.jpg",
  "/WICS-Prog-Competition/2019/IMG_2391.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_25.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_41.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_101.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_103.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_104.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_105.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_106.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_110.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_111.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_112.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_113.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_115.jpg",
  "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_117.jpg"
];

function Competition2019() {
  return (
    <div style={{ backgroundColor: "#dab7f17c", minHeight: "100vh", padding: "60px 0" }}>
    <Container className="py-5">
      {/* Heading */}
      <h1 className="text-center mb-4">WiCS Programming Competition 2019</h1>
      <p className="text-center mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
      💻 In 2019, our programming competition brought together aspiring developers to tackle challenging prompts, showcase their skills, and grow through friendly competition. 🧠
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

export default Competition2019;
