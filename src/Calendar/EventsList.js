import { Container, Row, Col, Button } from "react-bootstrap";
import Cards from "./Cards";

// Change this to the main calendar page

function EventsList() {
  return (
    <div className="bg-light">
      <div className="events-page-container">
        <Button className="add-calendar-button">
          <a
            style={{ color: "white" }}
            href="https://calendar.google.com/calendar/u/1?cid=Z2xyMzI3bm5jbHY0ZW80aW5xNm5pMTRzYWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
          >
            <h6 className="">Add WiCS to Your Personal Calendar</h6>
          </a>
        </Button>
        {/**<h1 className="text-center p-4">Upcoming Events</h1> */}

        <div className="events-list">
          {/** upcoming events start from soonest */}
          {/**
           * GBM #6: GoDaddy: 11/16
           * Last Career/TIPS: Trivia Time (with prizes)!: 11/18
           * WiCS Final Banquet Celebration!: 11/19
           */}
        </div>
        {/** <h1 className="text-center p-4">Past Events</h1> */}
        <div className="events-list"></div>
      </div>
    </div>
  );
}

export default EventsList;
