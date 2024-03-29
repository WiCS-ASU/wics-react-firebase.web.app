import { Container } from "react-bootstrap";
import TeamMembers from "../UI/Cards/TeamMembers";
import "./OurTeam.css";

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
          officer={
            <img src="../images/officer-images/shaira-alam.png" alt="woman" />
          }
          name="Shaira Alam"
          title="President"
          description=<div>
            <p>
              Women in Computer Science was the first organization I joined at
              Arizona State University when I was a Freshman and it was one of
              the best decisions I could have made. This organization has not
              only provided me a multitude of opportunities to explore the
              industry, it has also been a beautiful organization full of
              dedicated and supportive women that I am so proud to be a part of.
              From being involved in the newest innovations to connecting to the
              broader community of tech-enthusiasts, my passion for the
              technology industry has driven my commitment to the future of this
              organization. As a current senior pursuing my Bachelors in
              Computer Systems Engineering, it is my honor to stand as the
              current President of Women in Computer Science at ASU this year.{" "}
            </p>
            <p>
              With regard to my experience with WiCS, I was previously a mentee
              in the first year of the Mentorship Program as a Sophomore, the
              Vice President of Internal Affairs and Mentor as a Junior, and
              currently have the honor of being President as a Senior. Aside
              from WiCS, my experience lies in being an intern at Banner Health,
              State Farm, and most recently at Amazon for the Summer of 2022. I
              hope to graduate with my Bachelors in Computer Systems Engineering
              with a minor in Business through Barrett, the Honors College in
              the Spring of 2023! I also love to spend my free time reading
              books and watching some good comedies.
            </p>
          </div>
          link="https://www.linkedin.com/in/shaira-alam/"
        />

        <TeamMembers
          officer={
            <img
              src="../images/officer-images/aira-sanagustin.png"
              alt="woman"
              fluid
            />
          }
          name="Aira Daniella San Agustin"
          title="VP of Internal Affairs"
          description="Aira is majoring in Computer Science (Software Engineering) and minoring in Digital Culture at ASU. She graduated Fall 2022 with her Bachelor's degree, and will be continuing her 4+1 track for a Master's degree in CS. She has been working part-time for over a year as an XR developer at ASU, and have interned as a Frontend Developer at AVEVA in Summer 2022. Her hobbies include drawing, baking, playing badminton, and karaoke."
          link="https://www.linkedin.com/in/aira-daniella-san-agustin-b6a5a019a"
        />

        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\abigail-sepulveda.png"
              alt="woman"
              fluid
            />
          }
          name="Abigail Sepulveda"
          title="Treasurer"
          description="Abigail is a senior at Arizona State University studying computer science. She has been actively involved in the student-led organization Women in Computer Science since 2021, where she served as a graphic designer and now holds the role of Treasurer. With a passion for learning, she works as a Student Data Engineering Specialist at Arizona State University Enterprise Partners and enjoys utilizing their technical skills for the benefit of others. Outside of this, she enjoys activities such as hiking, rock climbing, cooking, baking, and watching movies."
          link="http://www.linkedin.com/in/sepulveda-abigail"
        />

        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\simran-kaur.png"
              alt="woman"
              fluid
            />
          }
          name="Simran Kaur"
          title="VP of Industry Affairs"
          description="I am a Computer Science Honors student who plans to graduate in May 2023 with a BS. Additionally, I work at Intel as a Data Governance and Architecture intern. As one of the Vice Presidents for Women in Computer Science (WiCS), I seek to cultivate the local female and minority tech community and provide students with the opportunities to network in an engaging environment. My dedication to becoming a future leader within a STEM field has awarded me multiple opportunities, including the Grace Hopper, New American University, and Grand Challenge scholars programs. I was selected for the university's Desert WAVE team, a women's autonomous vehicle engineering team, to compete in RoboNation Inc.'s annual International RoboSub Competition. "
          link="www.linkedin.com/in/simran-k-2000"
        />

        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\sihyeon-kim.png"
              alt="woman"
              fluid
            />
          }
          name="Sihyeon (Stella) Kim"
          title="VP of External Affairs"
          description="Senior in Computer Science graduating Spring 23. 
          Software Engineer Intern at AVEVA, Summer 22."
          link="https://www.linkedin.com/in/sihyeon-kim-293790199"
        />

        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\bushra-karim.png"
              alt="woman"
              fluid
            />
          }
          name="Bushra Karim"
          title="VP of Outreach"
          description="My name is Bushra Karim, and I am a third-year student majoring in Computer Science (Software Engineering) while minoring in Spanish. I am grateful to have been involved with WiCS since last year and now as Vice President of Outreach. In addition, I am also a Barrett Mentor, Service Chair for Alphi Phi Omega, and Source Global intern. In my free time, I love trying new foods and making art!"
          link="https://www.linkedin.com/in/bushra-karim-669a101b1"
        />

        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\sumana-konatam.png"
              alt="woman"
              fluid
            />
          }
          name="Saisumana (Sumana) Konatam"
          title="Logistics Director"
          description="Hello! I'm Sumana, the 2022-2023 Logistics Director of WICS. I am an Honors student majoring in Computer science. I've had 3 (including summer 2023) internship experiences so far. I love exploring upcoming technologies, constantly learning and evolving. I hope to graduate with my B.S in Computer science in 2024. In my free time I like to read, play tennis, and watch tv!"
          link="https://www.linkedin.com/in/sumanakonatam/"
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\asmita-jalote.png"
              alt="woman"
              fluid
            />
          }
          name="Asmita Jalote"
          title="Marketing Director"
          description="I am a Sophomore majoring in Computer Science with a concentration in Software Engineering. In my free time I enjoy drawing, reading, and ice skating!"
          link="https://www.linkedin.com/in/asmitajalote/"
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\tasneema-azad.png"
              alt="woman"
              fluid
            />
          }
          name="Fahim (Tasneema) Azad"
          title="Programming Competition Director"
          description="Tasneema is a Ph.D. student and Research Assistant at Arizona State University. Her research focuses on time series analysis, machine learning, attention mechanism and data science. Moreover, she is interested to explore causal inferences in the time series domain."
          link="https://www.linkedin.com/in/fahimtasneemaazad16/"
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\ariana-bui.png"
              alt="woman"
              fluid
            />
          }
          name="Ariana Bui"
          title="Professional Development Director"
          description="---"
          // link="---"
        />

        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\yeonghyeon-kim.png"
              alt="woman"
              fluid
            />
          }
          name="Yeonghyeon (Clara) Kim"
          title="Mentorship Program Director"
          description="Clara is a sophomore majoring in Computer Science and minoring in Data Science at ASU. She is the Mentorship Program Director for WiCS where she organizes socials for mentors and mentees and sets up the end-of-year showcase where mentor groups will present their projects. She is interested in Data Science, Artificial Intelligence, and cloud computing. Her hobbies include baking, karaoke, listening to music, and watching movies."
          link="https://www.linkedin.com/in/yeonghyeon/"
        />

        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\krisha-vekaria.png"
              alt="woman"
              fluid
            />
          }
          name="Krisha Vekaria"
          title="Graphic Designer"
          description="I am an undergraduate student majoring in Data Science with a concentration in Mathematics and graduating in May 2023. This past summer I interned as a Software Developer for Poolular, a pool tech startup based out of New Jersey. I also work part-time as a Technology Consultant at the University Technology Office. In my free time, I love to read books, travel and explore new places!"
          link="http://www.linkedin.com/in/krisha-vekaria"
        />

        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\evelyn-brannen.png"
              alt="woman"
              fluid
            />
          }
          name="Evelyn Brannen"
          title="Historian"
          description="Hello, I'm a sophomore and I'm studying computer science! I'm not sure what I want my concentration to be yet, but right now I'm leaning towards software development. I'm in Barrett, and some other things I'm involved are Engineering Projects in Community Service (EPICS), and the Engineering Futures program at ASU. I also currently work at the Fulton Career Center as an Event Planner/Desk Assistant. Some things I love to do on my free time are reading and playing the guitar. I'm looking forward to being a part of the WiCS mentorship program in this year and meeting new people!"
          link="https://www.linkedin.com/in/evelyn-brannen"
        />

        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\kaushiki-singh.png"
              alt="woman"
              fluid
            />
          }
          name="Kaushiki Singh"
          title="Campus Relations Director"
          description="I’m a computer science sophomore in my fourth semester. I joined WiCS as a member last semester (Spring 2022) and participated in the mentorship program as a mentee, where I got the opportunity to collaborate with other members on a project. I’m always looking for opportunities to learn and grow, which is why I enjoy being a part of WiCS. My hobbies include listening to music all the time and watching anime. "
          link="https://www.linkedin.com/in/kaushikisingh"
        />

        <hr />
        <h1 className="headers mt-5"> Web Team</h1>
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\leyli-ghavami.png"
              alt="woman"
              fluid
            />
          }
          name="Leyli Ghavami"
          title="Web Master"
          description="Leyli is a sophomore studying Computer Science, and has been a member of WiCS since the beginning of her freshman year. When she's not working on the WiCS website, she loves to draw, paint, and explore the world!"
          link="https://www.linkedin.com/in/leyli-ghavami/"
        />

        <hr />
        <h1 className="headers mt-5"> Our Advisors</h1>
        <TeamMembers
          officer={
            <img src="..\images\officer-images\navabi.png" alt="woman" fluid />
          }
          name="Farideh Tadayon-Navabi"
          title="Advisor"
          description=<div>
            <p>
              Farideh Tadayon-Navabi is a principal lecturer in the School of
              Computing, Informatics, and Decision System Engineering. Prior to
              ASU, she held a teaching position at University of Louisiana in
              Monroe.
            </p>
            <p>
              Tadayon-Navabi’s interested in improving the undergraduate program
              curriculum. She works on developing strategies to help students
              succeed in introductory courses and to retain students in the
              program. Her research focuses on computer science education,
              programming languages and software development.
            </p>
          </div>
          link="https://search.asu.edu/profile/71640"
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\nakamura.png"
              alt="woman"
              fluid
            />
          }
          name="Mutsumi Nakamura"
          title="Advisor"
          description=<div>
            <p>
              Mutsumi Nakamura is a teaching professor in the School of
              Computing and Augmented Intelligence in the Ira A. Fulton Schools
              of Engineering at Arizona State University.{" "}
            </p>
            <p>
              Nakamura’s research focuses on active/web-based database systems,
              and deep learning. She has taught courses in database management,
              data structures and algorithms, automata theory, software
              engineering, computer organization and assembly language, and
              Java, C++, C# programming languages.
            </p>
          </div>
          link="https://search.asu.edu/profile/262996"
        />
      </Container>
    </div>
  );
}

export default OurTeam;
