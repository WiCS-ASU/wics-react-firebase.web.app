import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";

// Change this to the main calendar page

function EventsList() {
  return (
    <div className="bg-light">
      <Container className="events-list-container">
        <h1 className="text-center p-4">Upcoming Events</h1>
        <div className="events-list">
          <Cards
            title=""
            img="./images/Welcome_Week_22/4.png"
            button="Learn More!"
            link="https://asuevents.asu.edu/content/passport-asu-hayden-library?eventDate=2022-08-17"
          />
          <Cards
            title=""
            img="./images/GBM.png"
            button="RSVP"
            link="https://forms.gle/TJdJ3Q5Uy3XJKHj98"
          />
        </div>
      </Container>
    </div>
  );
}

export default EventsList;
