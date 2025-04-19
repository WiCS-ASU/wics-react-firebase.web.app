import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


const competitions = [
  {
    year: "2025",
    image: "/WICS-Prog-Competition/2025/Hackathon-Officers.png",
    link: "/competitions/2025"
  },
  {
    year: "2024",
    image: "/WICS-Prog-Competition/2024/pic-6.png",
    link: "/competitions/2024"
  },
  {
    year: "2023",
    image: "/WICS-Prog-Competition/2023/2023 pic 12.png",
    link: "/competitions/2023"
  },
  {
    year: "2022",
    image: "/WICS-Prog-Competition/2022/IMG_3254.jpg",
    link: "/competitions/2022"
  },
  {
    year: "2019",
    image: "/WICS-Prog-Competition/2019/WiCS_Prog_Comp_20190316_103.jpg",
    link: "/competitions/2019"
  },
  {
    year: "2018",
    image: "WICS-Prog-Competition/2018/IMG_2411_brighter.JPG",
    link: "/competitions/2018"
  },
  {
    year: "2017",
    image: "WICS-Prog-Competition/2017/IMG_0950.JPG",
    link: "/competitions/2017"
  }
  
];

function CompetitionCard({ comp }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Card 
    className="h-100 shadow-sm"
    style={{ 
      borderRadius: "9px",
      overflow: "hidden",
      transition: "transform 0.2s ease",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
      {imgError ? (
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#AA336A",
          }}
        />
      ) : (
        <Card.Img
          variant="top"
          src={comp.image}
          alt={`WiCS Competition ${comp.year}`}
          onError={() => setImgError(true)}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
            backgroundColor: "#AA336A"
          }}
        />
      )}
      <Card.Body className="bg-dark text-white text-center">
        <Card.Title>{`WiCS Competition ${comp.year}`}</Card.Title>
      </Card.Body>
    </Card>
  );
}

function PastCompetitions() {
  return (
    <Container className="px-3">
      {/* Section Title */}
      <h1
  className="text-center mb-5"
  style={{
    marginTop: "40px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontWeight: 400,
    textShadow: "2px 2px 4px rgba(0,0,0,0.2)"

  }}
>
  Past Competitions
  <hr style={{ width: "500px", borderTop: "3px solid #9D4EDD", margin: "10px auto 40px" }} />
</h1>



      {/* Hero-style Description Block */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "30px",
          flexWrap: "wrap",
          maxWidth: "1000px",
          margin: "20px auto 60px" // ← top margin reduced from 100px to 20px
        }}
      >
        <h2
          style={{
            fontSize: "5.0rem",
            fontFamily: "'Raleway', sans-serif",
            fontStyle: "italic",
            lineHeight: 1,
            maxWidth: "400px",
            color: "#9D4EDD", // grape purple
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.30)",
            opacity: 0.75, // slight transparency
            margin: 0,
            transform: "translateX(-80px)"
          }}
        >
          Progress, <br />One Line of Code at a Time...
        </h2>

        <div
          style={{
            maxWidth: "300px",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            textAlign: "left",
            //marginTop: "66px" // ⬇ shifts it down a bit
          }}
        >
          <p>
          Through the years, WiCS at ASU has proudly organized programming competitions that celebrate innovation, foster collaboration, and promote inclusivity in technology.
          </p>

          <p>
          We extend our sincere thanks to the many contributors who've shaped these events.
          </p>
          <p>
          Discover the journey by exploring highlights, photos, and lasting memories in the gallery below.
          </p>
        </div>
      </div>

      {/* Card Grid */}
      <Row className="justify-content-center flex-wrap">
        {competitions.map((comp, index) => (
          <Col
            key={index}
            style={{
              flex: "0 0 272px",
              maxWidth: "272px",
              padding: "10px",
              margin: "0 14px 20px"
            }}
          >
            <a
              href={comp.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CompetitionCard comp={comp} />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


export default PastCompetitions;
