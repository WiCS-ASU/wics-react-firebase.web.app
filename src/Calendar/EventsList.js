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
            <h6 className="">Add WiCS to Your Personal Calendar</h6>
          </a>
        </Button>

        <div className="events-list">
          <Cards
            title=""
            img="./images/TT1-1.png"
            button="RSVP"
            link="https://forms.gle/KCy9NG21C4vzmkRP9"
          />
          <Cards
            title=""
            img="./images/WoCo_Women's_Welcome.png"
            button="RSVP"
            link="https://asu.campuslabs.com/engage/event/8219028"
          />
          <Cards
            title=""
            img="./images/Social_1.png"
            button="RSVP Soon"
            link=""
          />
          <Cards
            title=""
            img="./images/Tips_1.png"
            button="RSVP"
            link="https://forms.gle/aH7o5L3tz3uX5dxu8"
          />
          <Cards title="" img="./images/TT2-1.png" button="RSVP Soon" link="" />
          <Cards
            title=""
            img="./images/Social_2.png"
            button="RSVP Soon"
            link=""
          />
        </div>
        <h1 className="text-center p-4">Past Events</h1>

        <div className="events-list">
          <Cards title="" img="./images/GHC_Info.png" button="♥" link="" />
          <Cards title="" img="./images/GBM.png" button="♥" link="" />
        </div>
      </div>
    </div>
  );
}

export default EventsList;
