import React from "react";
import { Table } from "react-bootstrap";

function OHacks() {
  return (
    <div className="light-purple pb-5 font-serif mx-10 py-4 px-1">
      <div className="bg-white max-w-5xl mx-auto p-8 shadow-xl rounded-lg">
        <h1 className="text-4xl md:text-6xl p-3 text-center">
          OHacks: Nonprofit Innovation Challenge
        </h1>
        <p className="text-center md:text-lg">
          Saturday, March 28 – Sunday, March 29, 2026 <br />
          <span className="font-bold">
            In collaboration with{" "}
            <a href="https://www.ohack.dev" target="_blank" rel="noreferrer">
              Opportunity Hack
            </a>
          </span>
          <br />
          <span className="font-bold">Registration is OPEN!</span>
        </p>
        <main>

          {/* APPLICATION SECTION */}
          <section className="mb-5">
            <article>
              <h3 className="text-2xl font-bold mb-4 border-b pb-2"> Application </h3>
              <p>
                Apply{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSekznfyRRbuaFhKmDbRwkSuJNpQWUL_RnBTXLzoaP3ReimW8w/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                to register for OHacks!
              </p>
              <p>
                This event is open to undergraduate and graduate students. You
                do not have to be an ASU student to participate.
              </p>
              <p>
                FIRST COME FIRST SERVE. We will be accepting approximately the
                first 100 people who apply.
              </p>
              <p>Anyone is allowed to participate, regardless of gender.</p>
            </article>
          </section>

          {/* DON'T FORGET SECTION */}
          <section className="mb-5">
            <h3 className="text-2xl font-bold mb-4 border-b pb-2">Don't Forget</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>You must check in as a team.</li>
              <li>
                On the day of the hackathon, you will need to bring your student
                ID.
              </li>
              <li>
                On the day of the competition at check-in, you will sign a photo
                release form. We will provide them at the time of check-in. <br/> If
                you are a minor, you must bring the photo release form signed by
                a parent/guardian in order to participate, or have the
                parent/guardian with you at check-in to sign it.
              </li>
              <li>
                Late arrival may result in forfeiting your spot in the
                hackathon.
              </li>
              <li>
                Winning teams are required to stay for the duration of the event
                to claim their prizes.
              </li>
              <li>Raffle winners must be present to win.</li>
              <li>
                The venue is open Saturday 8:00 AM – 11:00 PM and Sunday 7:00
                AM – 6:00 PM. The venue closes overnight (11 PM – 7 AM) —
                hacking during this window must be done remotely.
              </li>
              <li>
                Parking is available at the <strong>Fulton Center</strong>{" "}
                parking garage.
              </li>
            </ul>
          </section>

          {/* AGENDA SECTION */}
          <section className="mb-5">
            <h3 className="text-2xl font-bold mb-4 border-b pb-2">Agenda</h3>
            <p className="font-bold mt-3">Saturday, March 28, 2026</p>
            <p>8:00 AM – Doors Open — Registration & Staff Check-in. Only first 100 admitted.</p>
            <p>9:10 AM – Keynote — Opening presentation.</p>
            <p>9:30 AM – Nonprofit Pitches — Review nonprofit problem statements.</p>
            <p>10:00 AM – Team Formation</p>
            <p>10:15 AM – Hacking Begins</p>
            <p>12:00 PM – Lunch Served (Italian catering)</p>
            <p>1:30 PM – Breakout Session — Technical workshops & direct mentoring.</p>
            <p>6:00 PM – Mentor support ends; hacking continues.</p>
            <p>11:00 PM – Day 1 End — Venue closes for the night.</p>

            <p className="font-bold mt-3">Sunday, March 29, 2026</p>
            <p>7:00 AM – Breakfast — Bagels & coffee served.</p>
            <p>9:00 AM – Day 2 Kickoff — Review of judging criteria.</p>
            <p>12:00 PM – Lunch Served</p>
            <p>
              3:00 PM – Hacking Ends — All video submissions and code frozen.
              DevPost closes. Strict deadline, no exceptions.
            </p>
            <p>3:05 PM – Judging Round 1 — 4 min video + 2 min Q&A per team.</p>
            <p>4:35 PM – Finalists Selection — Top teams selected for live demos.</p>
            <p>
              4:40 PM – Judging Round 2 — Live demos: 4 min demo + 2 min
              Q&A (~5 finalist teams).
            </p>
            <p>5:30 PM – Awards — Winners announced across all prize tracks.</p>
            <p>6:00 PM – Event End — Cleanup and exit.</p>
          </section>

          {/* LOCATION SECTION */}
          <section className="mb-5">
            <h3 className="text-2xl font-bold mb-4 border-b pb-2">Location</h3>
            <p>
              <strong>Tooker eSpaces</strong> — 500 E University Dr, Tempe, AZ
              85281
            </p>
            <p>
              Parking is available at the <strong>Fulton Center</strong> parking
              garage.
            </p>
          </section>

          {/* PRIZES SECTION */}
          <section className="mb-5">
            <h3 className="text-2xl font-bold mb-4 border-b pb-2">Prizes</h3>
            <Table striped bordered hover>
              <thead>
                <tr className="text-center">
                  <th>Award</th>
                  <th>Prize (per team member)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Founding Engineer — Best Nonprofit Solution
                    <br />
                    <small>(awarded once per nonprofit partner, 2 total)</small>
                  </td>
                  <td>$500 + Monitor</td>
                </tr>
                <tr>
                  <td>Best AI Usage</td>
                  <td>Keyboard</td>
                </tr>
                <tr>
                  <td>Social Impact</td>
                  <td>To be Announced</td>
                </tr>
                <tr>
                  <td>Accessibility</td>
                  <td>To be Announced</td>
                </tr>
                <tr>
                  <td>Top Majority Female Team</td>
                  <td>To be Announced</td>
                </tr>
                <tr>
                  <td>Top Freshman/Sophomore Team</td>
                  <td>To be Announced</td>
                </tr>
                <tr>
                  <td>Best Security Build</td>
                  <td>To be Announced</td>
                </tr>
              </tbody>
            </Table>
            <p className="text-primary text-center">
              Additional raffle prizes will be distributed at the closing
              ceremony. Participants must be present to win.
            </p>
          </section>

          {/* NONPROFITS SECTION */}
          <section className="mb-5">
            <h3 className="text-2xl font-bold mb-4 border-b pb-2">Partnered Nonprofits</h3>
            <p>
              This hackathon challenges participants to build real software
              solutions for partnered nonprofits. Nonprofit project details will
              be published to registered hackers ahead of the event via DevPost.
            </p>
            <ul>
              <li>
                <a
                  href="https://wial.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  World Institute for Action Learning (WIAL)
                </a>
              </li>
              <li>Client Case Management (details TBA)</li>
            </ul>
          </section>

          {/* THE COMPETITION SECTION */}
          <section className="mb-5">
            <h3 className="text-2xl font-bold mb-4 border-b pb-2">The Competition</h3>
            <p>
              <span className="text-decoration-underline">Check-in:</span>{" "}
              Please arrive no later than 9:00 AM to check in at Tooker eSpaces.
              Doors open at 8:00 AM. Only the first 100 participants will be
              admitted.
            </p>
            <p>
              <span className="text-decoration-underline">
                Opening Ceremony:
              </span>{" "}
              The event kicks off with a keynote and opening presentation,
              followed by nonprofit pitches so teams understand the problems
              they'll be solving.
            </p>
            <p>
              <span className="text-decoration-underline">Competition:</span>{" "}
              Hacking begins at 10:15 AM on Saturday and ends at 3:00 PM on
              Sunday. All submissions must be made via{" "}
              <a
                href="https://devpost.com"
                target="_blank"
                rel="noreferrer"
              >
                DevPost
              </a>{" "}
              with code committed to GitHub. The DevPost deadline is strict — no
              late submissions will be accepted.
            </p>
            <p>
              <span className="text-decoration-underline">Judging:</span>{" "}
              Round 1 consists of a 4-minute video walkthrough plus a 2-minute
              Q&A per team. Top finalist teams will then present live demos in
              Round 2 (4 min demo + 2 min Q&A).
            </p>
            <p>
              <span className="text-decoration-underline">
                Awards Ceremony:
              </span>{" "}
              Winners will be announced at 5:30 PM on Sunday. Winning teams must
              be present to receive their prizes.
            </p>
            <p>
              <span className="text-decoration-underline">Mentors:</span>{" "}
              Mentors will be available throughout the event to support teams.
              Visit the{" "}
              <a
                href="https://www.ohack.dev/hack/2026_spring_wics_asu#mentor"
                target="_blank"
                rel="noreferrer"
              >
                OHacks mentor page
              </a>{" "}
              for more information.
            </p>
          </section>

          {/* RULES SECTION */}
          <section>
            <h3 className="text-2xl font-bold mb-4 border-b pb-2">Rules</h3>

            <p>
              <strong>Team Formation</strong>
            </p>
            <ul>
              <li>Teams can consist of 1 to 4 members. Individuals may compete solo.</li>
              <li>
                You do not need a team finalized at registration — team
                formation will take place Saturday morning at the event.
              </li>
            </ul>

            <p>
              <strong>Hackathon Duration</strong>
            </p>
            <ul>
              <li>
                The hackathon runs Saturday, March 28 at 10:15 AM through
                Sunday, March 29 at 3:00 PM.
              </li>
              <li>
                The venue closes overnight from 11:00 PM – 7:00 AM. Hacking
                during this window must be done remotely.
              </li>
              <li>
                All submissions must be made by the 3:00 PM Sunday deadline. No
                exceptions.
              </li>
            </ul>

            <p>
              <strong>Project Focus</strong>
            </p>
            <ul>
              <li>
                Projects must address one of the provided nonprofit problem
                statements, which will be shared in advance via DevPost.
              </li>
              <li>
                The goal is to build a working prototype that meaningfully
                advances the nonprofit's mission.
              </li>
            </ul>

            <p>
              <strong>Submission Requirements</strong>
            </p>
            <ul>
              <li>Submissions must be made via DevPost.</li>
              <li>Code must be committed to a public GitHub repository.</li>
              <li>
                A live demo must be presented in front of judges during judging
                rounds (may be recorded).
              </li>
              <li>
                Clear documentation and setup instructions are required.
              </li>
            </ul>

            <p>
              <strong>AI Assistance Usage</strong>
            </p>
            <ul>
              <li>Use of AI tools and resources is permitted.</li>
            </ul>
            <p>
              <strong>Mandatory Disclosure:</strong> If you incorporate
              AI-generated code or content, you must:
            </p>
            <ul>
              <li>Clearly state the sources of the AI assistance.</li>
              <li>
                Identify which parts of your code or project are AI-generated.
              </li>
              <li>
                <strong>Judging Consideration:</strong> The extent and
                transparency of AI usage will be factored into the judging
                process.
              </li>
            </ul>

            <p>
              <strong>Originality &amp; Code of Conduct</strong>
            </p>
            <ul>
              <li>
                Projects must be primarily developed during the hackathon
                period.
              </li>
              <li>Collaboration should remain within each registered team.</li>
              <li>
                All participants are expected to adhere to the WiCS code of
                conduct and maintain professional integrity.
              </li>
              <li>Plagiarism or unauthorized collaboration is prohibited.</li>
            </ul>

            <p>
              <strong>Judging Criteria</strong>
            </p>
            <ul>
              <li>
                Projects will be judged on creativity, technical difficulty,
                design, usability, social impact, and overall advancement of
                the nonprofit's mission.
              </li>
              <li>
                Transparent disclosure of AI usage is mandatory and will be
                considered during judging.
              </li>
            </ul>

            <p>
              <strong>Eligibility</strong>
            </p>
            <ul>
              <li>
                Open to undergraduate and graduate students. ASU enrollment is
                not required.
              </li>
              <li>Capped at the first 100 registrants.</li>
            </ul>

            <p>
              <strong>Dispute Resolution &amp; Amendments</strong>
            </p>
            <ul>
              <li>
                WiCS and Opportunity Hack organizers reserve the right to make
                final decisions on rule interpretations and any disputes.
              </li>
              <li>
                Rules may be amended on the day of the hackathon; all
                participants will be informed of any changes as they occur.
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default OHacks;
