import React from "react";
import { Container } from "react-bootstrap";

function AnnualCompetition() {
  return (
    <div className="bg-light pb-5">
      <Container>
        <div className="text-center">
          <h1 className=" display-3 p-3">
            WiCS 16th Annual Programming Competition
          </h1>
          <p>March 21, 2020</p>
          <p>
            {" "}
            <strong> Registration is now open! </strong>{" "}
          </p>

          <main>
            <section>
              <article>
                <p>
                  Come be a part of this year's annual programming competition!
                  Put your programming skills to the test and compete against
                  your fellow students for a chance to win some awesome prizes
                  and get an opportunity to network with representatives from
                  our sponsors!
                </p>
                <p>
                  Every current ASU student, regardless of gener and experience
                  level, is invited to participate. There will be prizes for top
                  overal, top Freshman, top Sophomore, top female/non-binary, as
                  well as a raffle! Prizes include Nintendo Switches, iPads,
                  Amazon Echo Dots, Gift Cards, and more! As always, there will
                  be free lunch, t-shirts, and swag!
                </p>
              </article>
            </section>
            <section>
              <h3>How to sign up</h3>
              <ul>
                <li>
                  Registration will take place at the registration table during
                  the week of March 16th in the BYAC lobby.
                </li>
                <li>
                  Not everyone from your team has to be present to register.
                  Teams can consist of up to three members, with a maximum of 1
                  grad student per team. If you want help finding a team, please
                  email us.
                </li>
                <li>
                  Deposits can be made at the ProgComp KickOff on Wednesday,
                  February 28th, 2018, from 6-7:30 pm, or at the registration
                  table in BYACthe week after spring break until all slots are
                  filled.
                  <strong>
                    YOUR TEAM IS NOT FULLY REGISTERED UNTIL WE HAVE YOUR
                    DEPOSIT.
                  </strong>{" "}
                  We must have your deposit ($15) by 5:00 PM on Thursday, March
                  15th/
                </li>
                <li>
                  A $15 deposit is required at registration, and will be
                  returned to you at the competition. Please pay with cash,
                  check, or venmo at our registration table.
                </li>
                <li>
                  Checks should be made payable to “Women In Computer Science”.
                  Alternatively, we are accepting payments on Venmo to @wics-asu
                  (in the comments leave your team name).
                </li>
                <li>
                  Checks should be made payable to “Women In Computer Science”.
                  Alternatively, we are accepting payments on Venmo to @wics-asu
                  (in the comments leave your team name).
                </li>
                <li>
                  It is your responsibility to make sure you get a receipt when
                  dropping off the deposit. On the day of the competition, you
                  will need to bring your receipt and student IDs.
                </li>
              </ul>
            </section>
          </main>
        </div>
      </Container>
    </div>
  );
}

export default AnnualCompetition;
