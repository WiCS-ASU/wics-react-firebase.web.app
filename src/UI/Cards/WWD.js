import React from 'react';
import { Card, Carousel } from 'react-bootstrap';


function WWD({ title, description, images }) {
  return (
    <Card className="mx-auto">
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="text-center" 
        style={{ marginBottom: "-10px" }}>{title}</Card.Title>
        <Carousel className="text-center WhatWeDo-title" interval={null} style={{ height: "350px", width: "100%", padding: "10px"}}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "auto", // Maintain aspect ratio
                  height: "100%", // Fill height of the container
                  objectFit: "cover", // Ensure proper cropping
                  display: "block", // Ensure the image behaves like a block element
                  margin: "22px auto", // Center horizontally
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Text className="text-center mt-3 WhatWeDo-description">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WWD;
