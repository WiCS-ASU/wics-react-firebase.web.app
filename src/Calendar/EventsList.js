import { Container, Row, Col, Button } from "react-bootstrap";
import Cards from "./Cards";

// Change this to the main calendar page

function EventsList() {
  return (
    <div className="bg-light">
      <div className="events-page-container">
        <h1 className="text-center p-4">Upcoming Events</h1>
        <Button className="add-calendar-button">
          <a
            style={{ color: "white" }}
            href="https://calendar.google.com/calendar/u/1?cid=Z2xyMzI3bm5jbHY0ZW80aW5xNm5pMTRzYWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
          >
            <h6 className="text-center p-4">
              Add WiCS to Calendar
            </h6>
          </a>
        </Button>
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
      </div>
    </div>
  );
}

export default EventsList;
