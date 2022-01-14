import { Carousel } from "react-bootstrap";
import { useState } from "react";

import January from "../Calendar/Months/January";
import February from "../Calendar/Months/February";
import March from "../Calendar/Months/March";
import May from "../Calendar/Months/May";
import April from "../Calendar/Months/April";
import June from "../Calendar/Months/June";
import July from "../Calendar/Months/July";
import August from "../Calendar/Months/August";
import September from "../Calendar/Months/September";
import October from "../Calendar/Months/October";
import November from "../Calendar/Months/November";
import December from "../Calendar/Months/December";

function Events() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      variant="dark"
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      indicators={null}
    >
      <Carousel.Item>
        <January />
      </Carousel.Item>

      <Carousel.Item>
        <February />
      </Carousel.Item>

      <Carousel.Item>
        <March />
      </Carousel.Item>

      <Carousel.Item>
        <April />
      </Carousel.Item>

      <Carousel.Item>
        <May />
      </Carousel.Item>

      <Carousel.Item>
        <June />
      </Carousel.Item>

      <Carousel.Item>
        <July />
      </Carousel.Item>

      <Carousel.Item>
        <August />
      </Carousel.Item>

      <Carousel.Item>
        <September />
      </Carousel.Item>

      <Carousel.Item>
        <October />
      </Carousel.Item>

      <Carousel.Item>
        <November />
      </Carousel.Item>

      <Carousel.Item className="mb-5">
        <December />
      </Carousel.Item>
      
      
    </Carousel>
  );
}

export default Events;
