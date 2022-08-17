import React from "react";
import { Container, Table } from "react-bootstrap";

function AnnualCompetition() {
  return (
    <div className="bg-light pb-5">
      <Container>
        <div>
          <h1 className=" display-3 p-3 text-center">
            WiCS 17th Annual Programming Competition
          </h1>
          <p className="text-center">Saturday, March 19, 2022</p>
          <p className="text-center">
            {" "}
            <strong> Registration now closed! </strong>{" "}
          </p>

          <main>
            <section className="mb-5">
              <article>
                <h3>Application</h3>
                <p>
                  Apply  <a href="https://docs.google.com/forms/d/e/1FAIpQLScq6uEnPNvnRhiFY31xSnRq2ppszd1UCURwKID_6sStC-TbKw/viewform">here</a> 
                  for the competition! Please note that the $15
                  deposit to our PayPal must be made before you are officially
                  registered. You will get the deposit returned to you after the
                  competition. If you are a no-show to the competition, you will
                  NOT receive the deposit back.
                </p>
                <p>
                  The PayPal account to submit the $15 deposit is
                  “wics.asu@gmail.com” and must have the memo be “WiCS
                  Programming Competition 2022 Deposit: [Team Name]” where [Team
                  Name] is the official name submitted on the application.
                </p>
                <p>
                  FIRST COME FIRST SERVE. We will be accepting approximately the
                  first 60 people who apply (capped at the last team that
                  includes the 60th applicant).
                </p>
                <p className="text-danger">
                  DEADLINE IS THURSDAY, MARCH 10, 2022 (Thursday of Spring
                  Break)!
                </p>
              </article>
            </section>
            <section className="mb-5">
              <h3>Don't Forget</h3>
              <ul>
                <li>You must check in as a team.</li>
                <li>
                  Each team is only allowed to have, at most, ONE Master’s
                  student. The rest are only allowed to be Undergraduate
                  students. No PhD students allowed.{" "}
                </li>
                <li>
                  On the day of the competition, you will need to bring your
                  student ID.
                </li>
                <li>
                  On the day of the competition at check-in, you will sign a
                  photo release form. We will provide them at the time of
                  check-in. If you are a minor, you must bring the photo release
                  form signed by a parent/guardian in order to participate or
                  have the parent/guardian with you at check-in to sign it.
                </li>
                <li>
                  Late arrival may result in forfeiting the competition and
                  deposit.
                </li>
                <li>Lunch will be served.</li>
                <li>
                  Each team is allowed to only access code documentation, notes,
                  and course textbooks physically. You will not be able to
                  access any notes virtually.
                </li>
                <li>
                  Winning teams are required to stay for the duration of the
                  event to claim their prizes.
                </li>
                <li>
                  Official communication with Judges (Sponsors) at the
                  Reception.
                </li>
                <li>Raffle winners must be present to win.</li>
                <li>
                  Masks are required and please do not come if you do not meet
                  the ASU COVID-19 Mitigation policies.
                </li>
              </ul>
            </section>
            <section className="mb-5">
              <h3>Agenda</h3>

              <p>
                8:00 AM - Judges check in front of BYENG210 (Up the stairs,
                second floor, BYENG){" "}
              </p>
              <p>8:30 AM - Opening Ceremony @ BYENG210</p>
              <p>9:00 AM - Competition Begins @ BYENG Lab Room 214</p>
              <p>12:00 PM - Competition ends, Lunch Begins @ BYAC150 </p>
              <p>1:00 PM - Closing Ceremony @ BYAC150 </p>
              <p>1:30 PM - Reception @ BYAC150</p>
              <p>2:30 PM - Official Wrap-Up</p>
            </section>

            <section className="mb-5">
              <h3>Prizes</h3>
              <Table striped bordered hover>
                <thead>
                  <tr className="text-center">
                    <th>Award</th>
                    <th>Prize (for each particapating team member)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1st Place</td>
                    <td>Nintendo Switch</td>
                  </tr>
                  <tr>
                    <td>2cnd Place</td>
                    <td>GoPro Hero</td>
                  </tr>
                  <tr>
                    <td>3rd Place</td>
                    <td>Samsung SmartTV</td>
                  </tr>
                  <tr>
                    <td>4th Place</td>
                    <td>Beats headphones</td>
                  </tr>
                  <tr>
                    <td>5th Place</td>
                    <td>Polaroid camera and film</td>
                  </tr>
                  <tr>
                    <td>6th Place</td>
                    <td>Raspberry PI 3 Ultimate Starter Kit</td>
                  </tr>
                  <tr>
                    <td>7th Place</td>
                    <td>Rocketbook Fusion</td>
                  </tr>
                  <tr>
                    <td>8th Place</td>
                    <td>Gaming Keyboard</td>
                  </tr>
                  <tr>
                    <td>9th Place</td>
                    <td>Amazon Gift Card</td>
                  </tr>
                  <tr>
                    <td>Top Female/Non-Binary Team</td>
                    <td>27" monitor</td>
                  </tr>
                  <tr>
                    <td>1st Place Underclassmen Team</td>
                    <td>Kindle/Samsung Tablet</td>
                  </tr>
                  <tr>
                    <td>2nd Place Underclassmen Team</td>
                    <td>$20 Amazon Gift Card</td>
                  </tr>
                </tbody>
              </Table>
              <p className="text-primary text-center">
                Remaining prizes, in the case the team is not a team of 3, will
                be re-distributed in a raffle. Participants need to be at the
                closing ceremony to win the raffle.{" "}
              </p>
            </section>
            <section className="mb-5">
              <h3>The Competition</h3>
              <p>
                <span className="text-decoration-underline">Check-in:</span>{" "}
                Please arrive no later than 8:30 am to check in at BYENG210.{" "}
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
                Please arrive no later than 8:30 am to check in at BYENG210. The
                competition will begin at 9:00 AM and end at 12:00 PM. During
                this time you will be assigned problems to solve until the
                deadline. Submissions will only be accepted in Java, C, or C++.{" "}
              </p>
              <p>
                <span className="text-decoration-underline">Lunch:</span>{" "}
                Following the competition, we will head to BYAC150. Sponsors
                will have an opportunity to get lunch alongside participants
                from 12:00 PM to 1:00 PM. This does NOT need to be official
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
                to mainly recognize winners from 1:00 PM to 1:30 PM. We will
                then have formal short Judge introductions so that participants
                can know who to reach out to during the reception.{" "}
              </p>
              <p>
                <span className="text-decoration-underline">Reception:</span>{" "}
                Our goal for the reception is to promote networking with
                industry and participants and hope you stay to officially
                connect with all the sponsors that you are interested in. This
                will be a designated time from 1:30 PM to 2:30 PM.{" "}
              </p>
              <p>
                <span className="text-decoration-underline">Wrap Up:</span>{" "}
                Please arrive no later than 8:30 am to check in at BYENG210.You
                are free to officially leave at this time if you are not a
                winner. This is designated time for WINNERS from 2:30PM to 3:00
                PM. If you are a winner and have yet to be able to meet with
                sponsors (and they are still there after the reception), this is
                an opportunity to get final communication with them and possibly
                make plans to meet with them in the future.{" "}
              </p>
            </section>
            <section>
              <h3>Rules</h3>
              <ol>
                <li>
                  Teams have 3 hours to solve the given programming problems.
                </li>
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
              </ol>
            </section>
          </main>
        </div>
      </Container>
    </div>
  );
}

export default AnnualCompetition;
