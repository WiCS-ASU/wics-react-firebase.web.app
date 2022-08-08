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
          link="https://www.linkedin.com/in/sanjana-sshah/"
        />

        <TeamMembers
          officer={<img src={Sruthi} alt="woman" fluid />}
          name="Sruthi Sathyamoorthy"
          title="VP of Industry Affairs"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          link="https://www.linkedin.com/in/sruthi1996/"
        />

        <TeamMembers
          officer={<img src={Shaira} alt="woman" fluid />}
          name="Shaira Alam"
          title="VP of Internal Affairs"
          description="Shaira is an Undergraduate Student in Barrett, the Honors College, studying Computer Systems Engineering with plans to graduate in the Spring of 2023. She has had a few internship experiences, including starting out as an IT Intern at Banner Health. She is currently Software Engineering Intern at State Farm since May 2021 and will be a Software Development Intern at Amazon for the Summer of 2022. She enjoys solving new challenges takes pride in exploring new technology, especially with the cross between Hardware and Software.
          Shaira loves to read, watch comedies, and bake (and eat!) sweets in her free time."
          link="https://www.linkedin.com/in/shaira-alam/"
        />

        <TeamMembers
          officer={<img src={Rebecca} alt="woman" fluid />}
          name="Rebecca Knoche"
          title="VP of external affairs"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          link="https://www.linkedin.com/in/rebeccaknoche/"
        />

        <TeamMembers
          officer={<img src={Aira} alt="woman" fluid />}
          name="Aira San Agustin"
          title="Marketing Director"
          description="Aira is majoring in Computer Science (Software Engineering) and minoring in Digital Culture at ASU. She is the Marketing Director for WiCS where she creates flyers with the design team and posts them in the newsletters and socials. She has been working part-time for a year as an XR developer for Immersive Creation Studio and plans to intern over the summer of 2022 with OSISoft. 
          Her hobbies include drawing, reading comics, baking, playing badminton, and karaoke. She also loves food. 
          "
          link="https://www.linkedin.com/in/aira-daniella-san-agustin-b6a5a019a/"
        />

        <TeamMembers
          officer={<img src={Emilia} alt="woman" fluid />}
          name="Emilia Ferreyra"
          title="WiCS Programming Comptetition and Professional Development Director"
          description="Throughout her academic career at ASU, Emilia has worked as a Research Assistant for three different on-campus research studies, as a Fulton Ambassador, as an Undergraduate Teaching Assistant and Grader for CSE340, and a Software Engineering Intern for Garmin and New Relic. She currently has a full-time job at New Relic lined up for her at New Relic after she graduates in May 2022. 
          Emilia’s hobbies include whatever she’s currently hyperfixating on. These include baking, running, reading, badminton, and embroidery. Emilia also spends way too much time on TikTok.
          " 
          link="https://www.linkedin.com/in/emilia-ferreyra-b3533b17b/"
        />

        <TeamMembers
          officer={<img src={Abigail} alt="woman" fluid />}
          name="Abigail Sepuvelda"
          title="Graphic Designer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          link="https://www.linkedin.com/in/sepulveda-abigail/"
        />

        <TeamMembers
          officer={<img src={Sihyeon} alt="woman" fluid />}
          name="Sihyeon Kim"
          title="Historian"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          link="https://www.linkedin.com/in/sihyeon-kim-293790199/"
        />

        <hr />
        <h1 className="headers mt-5"> Web Team</h1>
        <TeamMembers
          officer={<img src={Ariana} alt="woman" fluid />}
          name="Ariana Wells"
          title="Web Master"
          description="Ariana is a senior who designs and develops beautiful, responsive mobile and web applications. This project uses the latest technologies in order to create an efficient, easy-to-navigate website."
          link="https://www.linkedin.com/in/ariana-wells-08a57a206/"
        />

        <TeamMembers
          officer={<img src={Karen} alt="woman" fluid />}
          name="Karen Garcia"
          title="Web Developer"
          description="My name is Karen and I am a freshman at ASU, majoring in Computer Science. I'm currently inclined to specializing in web development, specifically front-end web design. I've used Java, HTML, JSX, and React in my previous projects. I like to crochet and bake on the side."
          link="https://www.linkedin.com/in/karen-garcia-8b02055a/"
        />
      </Container>
    </div>
  );
}

export default OurTeam;
