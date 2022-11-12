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

        <h1 className="text-center p-4">Upcoming Events</h1>
        <div className="events-list">
          {/** upcoming events start from soonest */}
          {/**
           * GBM #6: GoDaddy: 11/16
           * Last Career/TIPS: Trivia Time (with prizes)!: 11/18
           * WiCS Final Banquet Celebration!: 11/19
           */}
          <Cards title="" img="" button="♥" link="" />
        </div>

        <h1 className="text-center p-4">Past Events</h1>
        <div className="events-list">
          {/** passed events from most recent to least recent */}
          {/**
           * Are there missing tips session????
           * 
           * Grace Hopper: 9/20-23
           * Grace Hopper Day: 9/27
           * GBM #3: Blue Yonder: 9/28
           * Tech Talk #3: State Farm: 10/12
           * Career Prep / TIPS Session #4: 10/14
           * Social #3: Painting Session: 10/14
           * GBM #4: L3Harris: 10/19
           * Career Prep / TIPS Session #5: 10/21
           * Mentorship Social #2: Check-in: 10/21
           * Tech Talk #4: GA-ASI: 10/26
           * AVEVA Company Tour: 10/28
           * GBM #5: Workiva: 11/2
           * Career Prep / TIPS Session #6: 11/4
           * Social #5: Cookie Decorating: 11/4
           * Tech Talk #5: General Dynamics: 11/9
           */}
          <Cards title="" img="./images/Socials/Social_2.png" button="♥" link="" />
          <Cards title="" img="./images/Tech_Talks/TT2-1.png" button="♥" link="" />
          <Cards title="" img="./images/TIPS/Tips_1.png" button="♥" link="" />
          <Cards title="" img="./images/Socials/Social_1.png" button="♥" link="" />
          <Cards title="" img="./images/WoCo_Women's_Welcome.png" button="♥" link=""/>
          <Cards title="" img="./images/Tech_Talks/TT1-1.png" button="♥" link=""/>
          <Cards title="" img="./images/GHC_Info.png" button="♥" link="" />
          <Cards title="" img="./images/GBMS/GBM-1.png" button="♥" link="" />
          <Cards title="" img="./images/Tech_Talks/TT1-1.png" button="♥" link="" />
        </div>
      </div>
    </div>
  );
}

export default EventsList;
