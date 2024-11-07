import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

// height 415px
function WWD({ title, description, images }) {
  return (
    <Card className="mx-auto">
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="text-center">{title}</Card.Title>
        <Carousel className="text-center" interval={null} style={{ height: "350px", padding: "50px" }}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                /* className="w-100" */
                src={image.src}
                alt={image.alt}
                style={{ width: "100%", height: "600px", objectFit: "cover", padding: "0px" }}
              />
            </Carousel.Item>
          ))}
        </Carousel >
        <Card.Text className="text-center mt-3">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WWD;
