import { Carousel } from "react-bootstrap";
import { useState } from "react";
import EventsList from "../Calendar/EventsList";

function Events() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="vh-100 bg-light">
      <EventsList />
    </div>
  );
}

export default Events;
