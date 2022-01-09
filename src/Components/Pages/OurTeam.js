import { Container } from "react-bootstrap";
import TeamMembers from "../UI/Cards/TeamMembers";

import Sanjana from "../UI/Humaaans/Sanjana.svg";
import Sruthi from "../UI/Humaaans/Sruthi.svg";
import Shaira from "../UI/Humaaans/Shaira.svg";
import Rebecca from "../UI/Humaaans/Rebecca.svg";
import Aira from "../UI/Humaaans/Aira.svg";
import Emilia from "../UI/Humaaans/Emilia.svg";
import Abigail from "../UI/Humaaans/Abigail.svg";
import Sihyeon from "../UI/Humaaans/Sihyeon.svg";
import Ariana from "../UI/Humaaans/Ariana.svg";
import Karen from "../UI/Humaaans/Karen.svg";

function OurTeam() {
  return (
    <div className="bg-light pt-5">
      <Container>
          <h1 className="text-center mb-5 pb-5">Our Team</h1>
        <TeamMembers
          officer={<img src={Sanjana} alt="woman" />}
          name="Sanjana Shah"
          title="President"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          link="https://www.linkedin.com/in/ariana-wells-08a57a206/"
        />

        <TeamMembers
        officer={<img src={Sruthi} alt="woman" fluid />}
          name="Sruthi Sathyamoorthy"
          title="VP of Industry Affairs"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <TeamMembers
        officer={<img src={Shaira} alt="woman" fluid />}
          name="Shaira Alam"
          title="VP of Internal Affairs"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <TeamMembers
          officer={<img src={Rebecca} alt="woman" fluid />}
          name="Rebecca Knoche"
          title="President"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <TeamMembers
          officer={<img src={Aira} alt="woman" fluid />}
          name="Aira San Agustin"
          title="President"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <TeamMembers
          officer={<img src={Emilia} alt="woman" fluid />}
          name="Emilia Ferreyra"
          title="President"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <TeamMembers
          officer={<img src={Abigail} alt="woman" fluid />}
          name="Abigail Sepuvelda"
          title="President"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <TeamMembers
          officer={<img src={Sihyeon} alt="woman" fluid />}
          name="Sihyeon Kim"
          title="President"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <hr />
        <h1 className="headers mt-5"> Web Team</h1>
        <TeamMembers
        officer={<img src={Ariana} alt="woman" fluid />}
          name="Ariana Wells"
          title="Web Developer"
          description="Description"
        />


        <TeamMembers
        officer={<img src={Karen} alt="woman" fluid />}
          name="Karen Garcia"
          title="Web Developer"
          description="My name is Karen and I am a freshman at ASU, majoring in Computer Science. I'm currently inclined to specializing in web development, specifically front-end web design. I've used Java, HTML, JSX, and React in my previous projects. I like to crochet and bake on the side."
        />
      </Container>
    </div>
  );
}

export default OurTeam;
