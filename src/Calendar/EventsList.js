import { Container, Row, Col, Button } from "react-bootstrap";
import Cards from "./Cards";
import { gapi } from 'gapi-script';
import { useEffect, useState } from "react";
import Event from "./Event";
// Change this to the main calendar page

function EventsList() {
  var CLIENT_ID = "542881808938-k65nq0al4n8vfb7ivmdksgk45g1h7nhd.apps.googleusercontent.com";
  var API_KEY = "AIzaSyDIj8yyPkFkf0zaL6ylb3FAYIHBs-nexfY";
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";
  var CALENDAR_ID = "ubcqbjtuf4vhsf9313d0fvthac@group.calendar.google.com";
  
  const [events, setEvents] = useState([]);
  const getEvents = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        /*
            Uncomment the following block to get events
        */
        // get events
        gapi.client.calendar.events.list({
          'calendarId': CALENDAR_ID,
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(response => {
          const events = response.result.items
          setEvents(events);
          console.log('EVENTS: ', events); 
          console.log("Title: "+ events[0].summary);
          console.log("Start date: " + events[0].start.dateTime);
          var convertStringtoDate = new Date(events[0].start.dateTime);
          console.log("String formatted date: " + convertStringtoDate);
        })

      })
    })
  }

  useEffect(() => {
    const events = getEvents();
    setEvents(events);
  }, []);

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
          <button style={{width: 100, height: 50}} onClick={getEvents}>Get Events</button>
          <ul>
          {events?.map((event) => (
            <li key={event.id} className="flex justify-center">
              <Event description={event.summary} />
            </li>
          ))}
        </ul>
        </div>
        <div className="events-list"></div>
      </div>
    </div>
  );
}

export default EventsList;
