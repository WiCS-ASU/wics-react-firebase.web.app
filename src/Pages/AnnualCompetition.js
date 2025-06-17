import React from "react";
import { Container, Table } from "react-bootstrap";

function AnnualCompetition() {
  return (
    <div className="light-purple pb-5">
      <Container>
        <div>
          <h1 className=" display-3 p-3 text-center">
            WiCS 20th Annual Tech Competition: 2025 Hackathon
          </h1>
          <p className="text-center">Saturday, March 29, 2025</p>
          <p className="text-center">
            {" "}
            <strong> Registration is OPEN! </strong>{" "}
          </p>

          <main>
            <section className="mb-5">
              <article>
                <h3>Application</h3>
                <p>
                  Apply  <a href="https://docs.google.com/forms/d/e/1FAIpQLSerF9LnsUV5Q2dcWopuCyEQ5MfXCuWhupQC8-d27SE7QVIbrw/viewform">here </a>
                  for the hackathon! Please note that the $15
                  deposit to our PayPal must be made before you are officially
                  registered. You will get the deposit returned to you after the
                  competition. If you are a no-show to the competition, you will
                  NOT receive the deposit back.
                </p>
                <p>
                  The PayPal account to submit the $15 deposit is
                  “wics.asu@gmail.com” and must have the memo be “WiCS
                  Hackathon 2025 Deposit: [Team Name]” where [Team
                  Name] is the official name submitted on the application.
                </p>
                <p>
                  FIRST COME FIRST SERVE. We will be accepting approximately the
                  first 100 people who apply (capped at the last team that
                  includes the 60th applicant).
                </p>
                <p>
                  Anyone is allowed to participate, regardless of gender.
                </p>
                <p>
                  Graduates and Undergratuates are allowed to participate.
                </p>
                <p className="text-danger">
                  DEADLINE IS THURSDAY, MARCH 12TH, 11:59PM MST!
                </p>
              </article>
            </section>
            <section className="mb-5">
              <h3>Don't Forget</h3>
              <ul>
                <li>You must check in as a team.</li>
                {/* <li>
                  Each team is only allowed to have, at most, ONE Master’s
                  student. The rest are only allowed to be Undergraduate
                  students. No PhD students allowed.{" "}
                </li> */}
                <li>
                  On the day of the hackathon, you will need to bring your
                  student ID.
                </li>
                <li>
                  On the day of the competition at check-in, you will sign a
                  photo release form. We will provide them at the time of
                  check-in. If you are a minor, you must bring the   
                  
                  <a href= "https://docs.google.com/document/d/1yiNlDjGZmIHfgQaubL9n33YEKd5wlGFnfhqx0Fmg94U/edit?usp=sharing">photo release form </a>
                  signed by a parent/guardian in order to participate or
                  have the parent/guardian with you at check-in to sign it.
                </li>
                <li>
                  Late arrival may result in forfeiting the hackathon and
                  deposit.
                </li>
                <li>Breakfast will be served on 3/29 and Lunch will be served on 3/30.</li>
                {/* <li>
                  Each team is allowed to only access code documentation, notes,
                  and course textbooks physically. You will not be able to
                  access any notes virtually.
                </li> */}
                <li>
                  Winning teams are required to stay for the duration of the
                  event to claim their prizes.
                </li>
                <li>
                  Official communication with Judges (Sponsors) at the
                  Reception.
                </li>
                <li>Raffle winners must be present to win.</li>
              </ul>
            </section>
            <section className="mb-5">
              <h3>Agenda</h3>

              <p>
                3/29 (Saturday) - 8:00 AM - Check in begins{" "}
              </p>
              <p>3/29 (Saturday) - 8:30 AM - Opening Ceremony @ LSA191 with free breakfast</p>
              <p>3/29 (Saturday) - 9:30 AM - Competition Begins</p>
              <p>3/30 (Sunday) - 9:30 AM - Competition ends, closing ceremony + free lunch @ LSA191 </p>

            </section>

            <section className="mb-5">
              <h3>Prizes</h3>
              <Table striped bordered hover>
                <thead>
                  <tr className="text-center">
                    <th>Award</th>
                    <th>Prize (for each participating team member)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> - </td>
                    <td>To be Announced</td>
                  </tr>
                  {/* <tr>
                    <td>2nd Place</td>
                    <td>Drone</td>
                  </tr>
                  <tr>
                    <td>3rd Place</td>
                    <td>Polaroid</td>
                  </tr>
                  <tr>
                    <td>4th Place</td>
                    <td>Raspberry Pi 3 Kit</td>
                  </tr>
                  <tr>
                    <td>5th Place</td>
                    <td>Portable Printer</td>
                  </tr>
                  <tr>
                    <td>6th Place</td>
                    <td>Mini Projector</td>
                  </tr>
                  <tr>
                    <td>7th Place</td>
                    <td>$25 Amazon Gift Card</td>
                  </tr>
                  <tr>
                    <td>8th Place</td>
                    <td>$20 Amazon Gift Card</td>
                  </tr>
                  <tr>
                    <td>9th Place</td>
                    <td>$15 Amazon Gift Card</td>
                  </tr>
                  <tr>
                    <td>Most Innovative</td>
                    <td>Google Nest</td>
                  </tr>
                  <tr>
                    <td>Most Efficient</td>
                    <td>JBL Portable Speaker</td>
                  </tr>
                  <tr>
                    <td>Most Well-Structured</td>
                    <td>Logitech Wireless Mouse</td>
                  </tr>
                  <tr>
                    <td>Top Female/Non-Binary Team</td>
                    <td>Samsung 27" Monitor</td>
                  </tr>
                  <tr>
                    <td>Top Underclassmen Team</td>
                    <td>Amazon Tablet</td>
                  </tr>
                  <tr>
                    <td>2nd Place Underclassmen Team</td>
                    <td>Amazon Gift Card</td>
                  </tr> */}
                </tbody>
              </Table>
              <p className="text-primary text-center">
                Remaining prizes, in the case the team is not a team of 3, will
                be re-distributed in a raffle. Participants need to be at the
                closing ceremony to win the raffle.{" "}
              </p>
            </section>
            <section className="mb-5">
              <h3>Sponsors</h3>
              <ul>
                <li>Hexagon</li>
                <li>GoDaddy</li>
                <li>Workiva</li>
                <li>General Dynamics Mission Systems</li>
                <li>W. L. Gore </li>
                <li>Aveva</li>
                <li>MUFG</li>
                <li>Statefarm</li>
                <li>Microchip</li>
                <li>Nationwide</li>
                <li>ServiceNow</li>
              </ul>
            </section>
            <section className="mb-5">
              <h3>The Competition</h3>
              <p>
                <span className="text-decoration-underline">Check-in:</span>{" "}
                Please arrive no later than 8:30 am to check in at LSA191.{" "}
              </p>
              <p>
                <span className="text-decoration-underline">
                  Opening Ceremony:
                </span>{" "}
                The event will start with a short welcome where we will give an
                overview of the rules and briefly introduce our sponsors and
                judges to participants.{" "}
              </p>
              <p>
                <span className="text-decoration-underline">Competition</span>{" "}
                Please arrive no later than 8:30 am to check in at LSA191. The
                competition will begin on 3/29 (Saturday) at 9:00 AM and end on 3/30 (Sunday) at 9:30 AM . During
                this time you will have time to work on your solutions.{" "}
              </p>
              <p>
                <span className="text-decoration-underline">Lunch:</span>{" "}
                Following the competition, we will head back to LSA191. Sponsors
                will have an opportunity to get lunch alongside participants. This does NOT need to be official
                communication with them, so do not feel pressure at that time.
                Reception will be an opportunity for that.
              </p>
              <p>
                <span className="text-decoration-underline">
                  Closing Ceremony:
                </span>{" "}
                Winners will be announced and awards and raffle prizes will be
                distributed. Judges will have an opportunity to be briefly
                introduced with their associated companies. This will be brief
                to mainly recognize winners. We will
                then have formal short Judge introductions so that participants
                can know who to reach out to during the reception.{" "}
              </p>
              <p>
                <span className="text-decoration-underline">Reception:</span>{" "}
                Our goal for the reception is to promote networking with
                industry and participants and hope you stay to officially
                connect with all the sponsors that you are interested in.{" "}
              </p>
              <p>
                <span className="text-decoration-underline">Wrap Up:</span>{" "}
                You are free to officially leave at this time if you are not a
                winner. This is designated time for WINNERS. If you are a winner and have yet to be able to meet with
                sponsors (and they are still there after the reception), this is
                an opportunity to get final communication with them and possibly
                make plans to meet with them in the future.{" "}
              </p>
            </section>
            <section>
            <h3>Rules</h3>
              <p><strong>Team Formation</strong></p>
              <ul>
                  <li>Teams can consist of 1 to 3 members. Individuals may also compete solo.</li>
              </ul>

              <p><strong>Hackathon Duration</strong></p>
              <ul>
                  <li>The hackathon will run continuously for 24 hours.</li>
                  <li>Projects must be submitted by the deadline at the end of the 24-hour period.</li>
              </ul>
                    
              <p><strong>Project Categories & Prizes</strong></p>
              <ul>
                  <li>Participants can submit projects in one or more categories.</li>
                  <li>The specific categories and corresponding prizes will be announced on the day of the hackathon.</li>
                  <li>Projects may be eligible for multiple prizes if they meet the criteria for several categories.</li>
              </ul>

              <p><strong>AI Assistance Usage</strong></p>
              <ul>
                  <li>Use of AI tools and resources is permitted.</li>
              </ul>

              <p><strong>Mandatory Disclosure:</strong> If you incorporate AI-generated code or content, you must:</p>
              <ul>
                <li>Clearly state the sources of the AI assistance.</li>
                <li>Identify which parts of your code or project are AI-generated.</li>
                <li><strong>Judging Consideration:</strong> The extent and transparency of AI usage will be factored into the judging process.</li>
              </ul>

              <p><strong>Submission Guidelines</strong></p>
              <ul>
                  <li>Submissions must include a working demo or a link to a functioning project.</li>
                  <li>A code repository (e.g., GitHub, GitLab) must be provided along with clear documentation.</li>
                  <li>Ensure all dependencies and setup instructions are well-documented.</li>
              </ul>

              <p><strong>Originality & Code of Conduct</strong></p>
              <ul>
                  <li>Projects must be primarily developed during the hackathon period.</li>
                  <li>Collaboration should remain within each registered team.</li>
                  <li>All participants are expected to adhere to the WiCS code of conduct and maintain professional integrity.</li>
                  <li>Plagiarism or unauthorized collaboration is prohibited.</li>
              </ul>

              <p><strong>Judging Criteria</strong></p>
              <ul>
                  <li>Projects will be judged based on creativity, technical difficulty, design, usability, and overall impact.</li>
                  <li>Transparent disclosure of AI usage, as described above, is mandatory and will be taken into account during judging.</li>
              </ul>

              <p><strong>Dispute Resolution & Amendments</strong></p>
              <ul>
                  <li>WiCS organizers reserve the right to make final decisions on rule interpretations and any disputes.</li>
                  <li>The rules may be amended on the day of the hackathon; all participants will be informed of any changes as they occur.</li>
              </ul>

              {/* <h3>Rules</h3>
              <ol>
                <li>
                  Teams have 3 hours to solve the given programming problems.
                </li>
                <li>
                  Teams may only use Java, C, or C++; however it is not required
                  to use the same language for each question.
                </li>
                <li>
                  ONLY the team lead is allowed to make the submission on behalf
                  of the team. If your team lead does not show up to the event,
                  but the rest of the team does, we will designate a new team
                  lead. Be prepared to know who that individual is. That person
                  is to be designated in the participant application.
                </li>
                <li>
                  Each team is allowed 2 attempts (A and B) for each problem.
                  Additional submissions will be disregarded.
                </li>
                <li>
                  You can also bring a reasonable amount of paper reference
                  materials, from notes to course textbooks. If you need code
                  documentation, you need to have it physically available.{" "}
                </li>
                <li>
                  Teams may use one and only one workstation during the
                  competition.
                </li>
                <li>
                  Teams may program solutions using only the tools available on
                  the hard drives of the assigned workstation.
                </li>
                <li>
                  It is the responsibility of the team to ensure submitted
                  solutions run with the listed software requirements.
                </li>
                <li>
                  Failure to follow instructions when submitting solutions will
                  result in a score of “Incorrect" for that attempt.
                </li>
                <li>
                  {" "}
                  Any use of the Internet (other than that required to submit
                  solutions and view the scoreboard) will result in elimination.
                </li>
                <li>
                  Communication, verbally or otherwise, with anyone other than
                  team members or competition volunteers will result in
                  elimination.
                </li>
                <li>
                  Any team found in violation of these rules is subject to
                  elimination.
                </li> 
              </ol> */}
            </section>
          </main>
        </div>
      </Container>
    </div>
  );
}

export default AnnualCompetition;
