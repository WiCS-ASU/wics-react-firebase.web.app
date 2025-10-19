import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import WWD from "../UI/Cards/WWD";
import Scene from "../UI/Humaaans/Scene.svg";
import mentorships from "../UI/Humaaans/mentorships.svg";
import techTalks from "../UI/Humaaans/techTalks.svg";
import social from "../UI/Humaaans/social.svg";
import WhatWeDo from "../WhatWeDo/WhatWeDo.js";
import SeasonalDisplay from "../SeasonalDisplay/SeasonalDisplay.js";
import SponsorScroll from "../Components/Sponsorscroll";
import Footer from "../Navigation/Footer.jsx";
import "./About.css";

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Sample events data - replace with your actual data
  const eventsData = [
    {
      title: "SunHacks 2024",
      description: "Annual hackathon bringing together students to build innovative projects",
      image: mentorships,
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Tech Talk Series",
      description: "Industry professionals share insights on careers in technology",
      image: techTalks,
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Mentorship Program",
      description: "Connect with experienced students and professionals in tech",
      image: social,
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "Networking Night",
      description: "Build connections with peers and industry representatives",
      image: Scene,
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "Workshop Series",
      description: "Hands-on learning sessions covering various tech topics",
      image: mentorships,
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "Career Fair Prep",
      description: "Get ready for career fairs with resume reviews and mock interviews",
      image: techTalks,
      color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    }
  ];

  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(eventsData.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentEvents = eventsData.slice(
    currentSlide * cardsPerSlide,
    (currentSlide + 1) * cardsPerSlide
  );

  return (
    <div className="light-purple font-serif">
      <Container className="py-5">
        {/* Header Section */}
        <div className="text-center pb-3 fade-in-up">
          <h1 className="text-4xl md:text-6xl p-5 pb-2 gradient-text fw-bold">
            Women In Computer Science
          </h1>
          <div className="club-vision">
            <h6 className="p-0 mb-4 custom-font-size2 fw-light" style={{ fontSize: "1.3rem" }}>
              A support network to empower women and other minorities in tech
            </h6>
            <Button 
              href="https://sundevilcentral.eoss.asu.edu/wics/home/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn font-sans"
            >
              Join Now 
            </Button>
          </div>
        </div>

        {/* Animation Section */}
        <div className="my-5 text-center">
          <img
            src={Scene}
            className="img-fluid mx-auto float-animation"
            style={{ maxWidth: "600px", filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.1))" }}
            alt="WiCS Animation"
          />
        </div>

        {/* Two Transparent Boxes Section */}
        <Row className="my-5 g-4">
          {/* Info Box */}
          <Col xs={12} md={6}>
            <div className="p-4 rounded-4 h-100 glass-box">
              <h4 className="mb-3 fw-bold gradient-text">About WiCS</h4>
              <p className="mb-3" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
                Women in Computer Science is a student-led organization at
                Arizona State University, which aims to support female and other
                minority students in technology.
              </p>
              <p className="mb-3" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
                Join us to connect with like-minded students, attend tech talks,
                participate in mentorship programs, and build your professional network.
              </p>
              <Button 
                href="https://sundevilcentral.eoss.asu.edu/wics/home/" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 hero-btn"
                size="sm"
              >
                Join WiCS on Sun Devil Central
              </Button>
            </div>
          </Col>

          {/* Calendar Box */}
          <Col xs={12} md={6}>
            <div className="p-4 rounded-4 h-100 d-flex align-items-center justify-content-center glass-box" 
              style={{ minHeight: "250px" }}
            >
              <div className="text-center">
                <div className="mb-3" style={{ fontSize: "3rem" }}>📅</div>
                <h4 className="mb-3 fw-bold gradient-text">Upcoming Events</h4>
                <p className="text-muted fw-semibold" style={{ fontSize: "1.1rem" }}>Coming Soon</p>
                <small className="text-muted">
                  2-week calendar with upcoming events
                </small>
              </div>
            </div>
          </Col>
        </Row>

        {/* Events and Achievements Section with Carousel */}
        <div className="my-5 py-4">
          <h3 className="text-center mb-5 gradient-text fw-bold" style={{ fontSize: "2.5rem" }}>
            Events & Achievements
          </h3>
          
          {/* Carousel Container */}
          <div className="position-relative px-5">
            {/* Previous Arrow */}
            <button
              onClick={prevSlide}
              className="position-absolute start-0 top-50 translate-middle-y arrow-btn rounded-circle d-flex align-items-center justify-content-center"
              style={{ 
                zIndex: 10, 
                width: "50px", 
                height: "50px",
                left: "-25px",
                fontSize: "28px",
                fontWeight: "bold"
              }}
              disabled={currentSlide === 0}
            >
              ‹
            </button>

            {/* Cards Grid */}
            <Row className="g-4">
              {currentEvents.map((event, index) => (
                <Col xs={12} sm={6} lg={3} key={index}>
                  <Card 
                    className="h-100 border-0 event-card"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      borderRadius: "20px",
                    }}
                  >
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <Card.Img 
                        variant="top" 
                        src={event.image} 
                        style={{ 
                          height: "200px", 
                          objectFit: "cover",
                          borderRadius: "20px 20px 0 0"
                        }}
                      />
                      <div 
                        className="card-overlay"
                        style={{
                          borderRadius: "0 0 20px 20px"
                        }}
                      >
                        <small className="text-white">Click to learn more →</small>
                      </div>
                    </div>
                    <Card.Body className="p-4">
                      <Card.Title className="h5 fw-bold mb-3" style={{ 
                        background: event.color,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}>
                        {event.title}
                      </Card.Title>
                      <Card.Text className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                        {event.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="position-absolute end-0 top-50 translate-middle-y arrow-btn rounded-circle d-flex align-items-center justify-content-center"
              style={{ 
                zIndex: 10, 
                width: "50px", 
                height: "50px",
                right: "-25px",
                fontSize: "28px",
                fontWeight: "bold"
              }}
              disabled={currentSlide === totalSlides - 1}
            >
              ›
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="text-center mt-4 d-flex justify-content-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* What We Do Section */}
        <h3 className="text-center m-2 mt-5 gradient-text fw-bold" style={{ fontSize: "2.5rem" }}>
          What We Do
        </h3>
        <WhatWeDo />

        {/* Sponsors Section */}
        <h3 className="text-center m-2 pb-2 pt-10 gradient-text fw-bold" style={{ fontSize: "2.5rem" }}>
          Our Sponsors
        </h3>
      </Container>
        
      <SponsorScroll />
      <div className="py-10"></div>
      <Footer />
    </div>
  );
}

export default About;