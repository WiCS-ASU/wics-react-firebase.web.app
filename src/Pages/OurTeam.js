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
          name="Shaira Alam"
          title="President"
          description= "Women in Computer Science was the first organization I joined at Arizona State University when I was a Freshman and it was one of the best decisions I could have made. This organization has not only provided me a multitude of opportunities to explore the industry, it has also been a beautiful organization full of dedicated and supportive women that I am so proud to be a part of. From being involved in the newest innovations to connecting to the broader community of tech-enthusiasts, my passion for the technology industry has driven my commitment to the future of this organization. As a current senior pursuing my Bachelors in Computer Systems Engineering, it is my honor to stand as the current President of Women in Computer Science at ASU this year. "
          link="https://www.linkedin.com/in/shaira-alam/"
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
          officer={<img src={Rebecca} alt="woman" fluid />}
          name="Bushra Karim"
          title="VP of Service"
          description="My name is Bushra Karim, and I am a third-year student majoring in Computer Science (Software Engineering) while minoring in Spanish. I am grateful to have been involved with WiCS since last year and now as Vice President of Outreach. In addition, I am also a Barrett Mentor, Service Chair for Alphi Phi Omega, and Source Global intern. In my free time, I love trying new foods and making art!"
          link="https://www.linkedin.com/in/bushra-karim-669a101b1"
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
          name="Yeonghyeon (Clara) Kim"
          title="Mentorship Program Director"
          description="Clara is a sophomore majoring in Computer Science and minoring in Data Science at ASU. She is the Mentorship Program Director for WiCS where she organizes socials for mentors and mentees and sets up the end-of-year showcase where mentor groups will present their projects. She is interested in Data Science, Artificial Intelligence, and cloud computing. Her hobbies include baking, karaoke, listening to music, and watching movies." 
          link="https://www.linkedin.com/in/yeonghyeon/"
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
          name="Evelyn Brannen"
          title="Historian"
          description="Hello, I'm a sophomore and I'm studying computer science! I'm not sure what I want my concentration to be yet, but right now I'm leaning towards software development. I'm in Barrett, and some other things I'm involved are Engineering Projects in Community Service (EPICS), and the Engineering Futures program at ASU. I also currently work at the Fulton Career Center as an Event Planner/Desk Assistant. Some things I love to do on my free time are reading and playing the guitar. I'm looking forward to being a part of the WiCS mentorship program in this year and meeting new people!"
          link="https://www.linkedin.com/in/evelyn-brannen"
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
