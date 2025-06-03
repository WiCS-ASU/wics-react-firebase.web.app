import { Container, Row, Col } from "react-bootstrap";
import Sponsorships from "../UI/Cards/Sponsorships";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import PlatinumTier from "../Sponsor Tiers/PlatinumTier";
import SilverTier from "../Sponsor Tiers/SilverTier";
import BronzeTier from "../Sponsor Tiers/BronzeTier";

function Sponsors() {
  const platinumSponsor = [
    { name: "", logo: "../Sponsors2024/hexagon.jpg" },
  ];

  const silverSponsors = [
    { name: "", logo: "../Sponsors2024/workiva.jpg" },
    { name: "", logo: "../Sponsors2024/general dynamics.png" },
  ];

  const bronzeSponsors = [
    { name: "", logo: "/Sponsors2024/microchip.png" },
    { name: "", logo: "/Sponsors2024/statefarm.jpg" },
    { name: "", logo: "/Sponsors2024/nationwide.jpg" },
    { name: "", logo: "/Sponsors2024/aveva.png" },
    { name: "", logo: "/Sponsors2024/mufg.png" },
    { name: "", logo: "/Sponsors2024/service now.png" },
  ];

  const renderSponsors = (sponsors) => {
    return sponsors.map((sponsor, index) => (
      <Col key={index} xs={12} sm={6} md={4} className="text-center mb-4">
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="img-fluid"
          style={{ maxHeight: "150px", objectFit: "contain" }}
        />
        <p className="mt-3">{sponsor.name}</p>
      </Col>
    ));
  };

  const headingStyle = {
    backgroundColor: "#f8f9fa", // Light gray
    border: "2px solid #6c757d", // Gray border
    borderRadius: "8px", // Rounded corners
    padding: "10px 20px", // Space inside the box
    display: "inline-block",
    margin: "auto",
    textAlign: "center",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", // Optional shadow
  };
//#E5E4E2
  const platinumStyle = {
    backgroundColor: "#E5E4E2",
    border: '2px solid gray',
    borderRadius: "8px",
    padding: "20px 20px",
    display: "inline-block",
    margin: "auto",
    textAlign: "center",
    width: "800px", // Fixed width
    height: "80px", // Fixed height
  }

  const silverStyle = {
    backgroundColor: "#C0C0C0",
    border: '2px solid gray',
    borderRadius: "8px",
    padding: "20px 20px",
    display: "inline-block",
    margin: "auto",
    textAlign: "center",
    width: "800px", // Fixed width
    height: "80px", // Fixed height
  }

  const bronzeStyle = {
    backgroundColor: "#CD7F32",
    border: '2px solid gray',
    borderRadius: "8px",
    padding: "20px 20px",
    display: "inline-block",
    margin: "auto",
    textAlign: "center",
    width: "800px", // Fixed width
    height: "80px", // Fixed height
  }

 const platinumTierStyle = {
    display: 'flex',               // Flexbox layout for centering
    justifyContent: 'center',      // Centers horizontally
    alignItems: 'center',          // Centers vertically (optional)
    backgroundColor: "#ffffff",    // Light gray background
    border: "2px solid #6c757d",   // Gray border
    borderRadius: "8px",           // Rounded corners
    padding: "13px 0px",          // Padding inside the box
    margin: "auto",                // Center the box horizontally
    textAlign: "center",           // Center text inside the box
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", // Optional shadow
    width: "100%",                  // Adjusted width for flexibility
    maxWidth: "500px",             // Maximum width
    minWidth: "300px",             // Minimum width
    height: "auto",                // Height will adjust based on content
    maxHeight: "150px",            // Maximum height
};

const silverTierStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: "#ffffff",    // Light gray
  border: "2px solid #6c757d",   // Gray border
  borderRadius: "8px",           // Rounded corners
  padding: "10px 20px",          // Space inside the box
  margin: "auto",                // Centers the container horizontally
  textAlign: "center",           // Centers the text inside the box
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", // Optional shadow for the box
  width: "70%",                  // Adjusted width for flexibility
  maxWidth: "700px",             // Maximum width
  height: "auto",                // Height will adjust based on content
  maxHeight: "150px",            // Maximum height
};


  const bronzeTierStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: "#ffffff", // Light gray
    border: "2px solid #6c757d", // Gray border
    borderRadius: "8px", // Rounded corners
    padding: "10px 20px", // Space inside the box
    margin: "auto",
    textAlign: "center",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", // Optional shadow
  };

  return (
    <div style={{ backgroundColor: "#dab7f17c", minHeight: "100vh" }}>
      <Container className="py-5">
        {/* <h2 className="text-center mb-5">
          <div style = {headingStyle}>Sponsors</div>
          </h2> */}
        <h3 className="mb-4 text-center">
          <div style={platinumStyle}> ⎯⎯⎯⎯⎯⎯⎯⎯ Platinum Sponsor ⎯⎯⎯⎯⎯⎯⎯⎯ </div>
        </h3>
          {/* <div style = {platinumTierStyle} > */}
            <Row className="justify-content-center">{renderSponsors(platinumSponsor)}</Row>
          {/* </div> */}
        <h3 className="mt-5 mb-4 text-center">
          <div style={silverStyle}> ⎯⎯⎯⎯⎯⎯⎯⎯ Silver Sponsors ⎯⎯⎯⎯⎯⎯⎯⎯ </div>
        </h3>
        {/* <div style = {silverTierStyle}> */}
            <Row className="justify-content-center">{renderSponsors(silverSponsors)}</Row>
        {/* </div> */}
        <h3 className="mt-5 mb-4 text-center">
          <div style={bronzeStyle}> ⎯⎯⎯⎯⎯⎯⎯⎯ Bronze Sponsors ⎯⎯⎯⎯⎯⎯⎯⎯ </div>
        </h3>
        {/* <div style = {bronzeTierStyle}> */}
            <Row>{renderSponsors(bronzeSponsors)}</Row>
        {/* </div> */}
      </Container>
    </div>
  );
}

export default Sponsors;