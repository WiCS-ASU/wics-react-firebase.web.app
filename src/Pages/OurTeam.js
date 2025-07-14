import { Container } from "react-bootstrap";
import TeamMembers from "../UI/Cards/TeamMembers";
import "./OurTeam.css";
// MICHELLE TEAM - NEW TEAM MEMBERS 
//--------------------------------------------------

//--------------------------------------------------
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

//<div className="bg-light pt-5">
function OurTeam() {
  return (
    <div className="bg-light pt-5">
      <Container>
        <h1 className="text-center mb-5 pb-5">Our Team</h1>
        <TeamMembers
          officer={
            <img
              src="../imagesCropped2024/Han Nguyen (2).png"
              alt="woman"
              fluid
            />
          }
          name="Han Nguyen"
          title="President"
          description="I'm a Computer Science with interest in full-stack development, algorithm, and film photography!"
          link="https://www.linkedin.com/in/hannguyen0712/"
        />
        <TeamMembers
          officer={
            <img
              src="../imagesCropped2024/Sofia Vargas.png"
              alt="woman"
              fluid
            />
          }
          name="Sofie Vargas"
          title="VP of Industry Affairs"
          description="I am a sophomore majoring in computer science and minoring in math! My other interests are in sustainability, environmental sciences, and food -- in high school I ran a food blog on Instagram for restaurants in San Diego :-)"
          link="www.linkedin.com/in/sofia-vargas-8886b5284"
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\blank-profile-circle.png"
              alt="woman"
              fluid
            />
          }

          name="Tanmayi Ghadge"
          title="VP of External Affairs"
          description="--"
          link=""
        />
        <TeamMembers
          officer={
            <img
              src="../imagesCropped2024/Ishita Ranjan (1).png"
              alt="woman"
              fluid
            />
          }
          name="Ishita Ranjan"
          title="VP Outreach"
          description="I'm a junior majoring in Computer Science and minoring in Data Science. I have been a part of WiCS since I was a freshman!"
          link="https://www.linkedin.com/in/ishita-ranjan-/"
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\blank-profile-circle.png"
              alt="woman"
              fluid
            />
          }

          name="Tiya Lath"
          title="VP of Internal Affairs"
          description="--"
          link=""
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\blank-profile-circle.png"
              alt="woman"
              fluid
            />
          }

          name="Ananya Arora"
          title="Mentorship Program Director"
          description="--"
          link=""
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\blank-profile-circle.png"
              alt="woman"
              fluid
            />
          }

          name="Diya Shrivastava"
          title="Webmaster"
          description="I'm a junior majoring in Computer Science and minoring in Business. I've been involved in WiCS since my 
          freshman year, including as a mentee and now as the web master. In my free time, I love listening to 
          music and working on side projects."
          link="https://www.linkedin.com/in/diya-shrivastava/"
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\blank-profile-circle.png"
              alt="woman"
              fluid
            />
          }

          name="Nga Vu"
          title="Professional Development & Programming Competition Director"
          description="--"
          link=""
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\blank-profile-circle.png"
              alt="woman"
              fluid
            />
          }

          name="Naiomi Sutphen"
          title="Logistics Director"
          description="--"
          link=""
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\blank-profile-circle.png"
              alt="woman"
              fluid
            />
          }

          name="Riya Nalla"
          title="Marketing Director"
          description="--"
          link=""
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\blank-profile-circle.png"
              alt="woman"
              fluid
            />
          }

          name="Neha Kanjamala"
          title="Campus Relations Director"
          description="--"
          link=""
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\blank-profile-circle.png"
              alt="woman"
              fluid
            />
          }

          name="Shashota Saha"
          title="Treasurer"
          description="--"
          link=""
        />
        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\blank-profile-circle.png"
              alt="woman"
              fluid
            />
          }

          name="Srija Ramisetty"
          title="Graphic Designer"
          description="--"
          link=""
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
            <img src="../imagesCropped2024/Samira Ghayekhloo.png" alt="woman" fluid />
          }
          name="Samira Ghayekhloo"
          title="Advisor"
          description=<div>
            <p>
            Samira Ghayekhloo is a Assistant teaching professor at the School of Computing and Augmented Intelligence in Arizona State University-Tempe since Fall 2019. She earned her PhD in Artificial Intelligence and has over ten years of teaching experience in AI courses including Knowledge Representation, Expert Systems, Data Mining, and Machine Learning.
            </p>
            <p>
            Before joining ASU, Samira served as an Assistant Professor at Azad University, Iran, in the Department of Computer Engineering for three years. During her tenure, she mentored numerous graduate and undergraduate students and provided advisory guidance for their final projects.
            </p>
          </div>
          link="https://search.asu.edu/profile/3516139"
        />

        {/* <TeamMembers
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
        /> */}
      </Container>
    </div>
  );
}

export default OurTeam;
