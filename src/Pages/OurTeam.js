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
            <img src="../images2024/Krisha Raut.png" alt="woman" />
            /* <img src="../images/officer-images/shaira-alam.png" alt="woman" /> */
          }
          name="Krisha Raut"
          title="President"
          description=<div>
            <p>
             Hello! I’m a Junior majoring in computer science at ASU. A fun fact about me: I love traveling and meeting new people! {" "}
            </p>
          </div>
          link="https://www.linkedin.com/in/krisha-raut-1b31b8280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        />

        <TeamMembers
          officer={
            <img
              src="../imagesCropped2024/Evelyn Brannen.png"
              alt="woman"
              fluid
            />
          }
          name="Evelyn Brannen"
          title="VP of Internal Affairs"
          description="I'm Evelyn, and I'm a senior majoring in computer science! I got into this field because I love problem solving and seeing my ideas come to life, and I love being able to put my creativity into what I do. I'm graduating with my undergrad in December 2024, then I will be pursuing the 4+1 at ASU to get a masters in CS. In my free time I love to read and play the guitar!"
          link="https://www.linkedin.com/in/evelyn-brannen/"
        />

        <TeamMembers
          officer={
            <img
              src="..\images\officer-images\abigail-sepulveda.png"
              alt="woman"
              fluid
            />
          }
          name="Ananya Singh"
          title="Treasurer"
          description="--"
          link="http://www.linkedin.com/in/sepulveda-abigail"
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
          title="Co-Treasurer"
          description=" I’m a computer science senior. I joined WiCS as a member last semester (Spring 2022) and participated in the mentorship program as a mentee, where I got the opportunity to collaborate with other members on a project. I’m always looking for opportunities to learn and grow, which is why I enjoy being a part of WiCS. My hobbies include listening to music all the time and watching anime. "
          link="https://www.linkedin.com/in/kaushikisingh"
        />
        <TeamMembers
          officer={
            <img
              src="../imagesCropped2024/Asmita Jalote.png"
              alt="woman"
              fluid
            />
          }
          name="Asmita Jalote"
          title="VP of Industry Affairs"
          description="I am a senior in Computer Science (SWE), and WiCS has been a constant pillar of support for me throughout my college years. I spent the last two years creatively building the WiCS brand identity, and this year I look forward to strengthening relations with our industry sponsors. Leading on the executive team has given me purpose, friendship, and opportunity. I hope that I graduate having left a lasting impact on the community of women in STEM at ASU.I am an undergraduate student majoring in Computer Science, graduating in December 2024. This past summer, I interned at Wells Fargo as a software engineering intern. I have been involved with WiCS since my freshman year, and now I am the Vice President of External Affairs. Aside from school, I love traveling and studying new languages (the languages we speak, not programming languages! :))."
          link="https://www.linkedin.com/in/asmitajalote/"
        />

        <TeamMembers
          officer={
            <img
              src="../imagesCropped2024/Yeonghyeon Kim (2).png"
              alt="woman"
              fluid
            />
          }
          name="Yeonghyeon (Clara) Kim"
          title="VP of External Affairs"
          description="I am an undergraduate student majoring in Computer Science, graduating in December 2024. This past summer, I interned at Wells Fargo as a software engineering intern. I have been involved with WiCS since my freshman year, and now I am the Vice President of External Affairs. Aside from school, I love traveling and studying new languages (the languages we speak, not programming languages! :))."
          link="https://www.linkedin.com/in/yeonghyeon/"
        />

        <TeamMembers
          officer={
            <img
              src="../imagesCropped2024/Riya Ubhe.png"
              alt="woman"
              fluid
            />
          }
          name="Riya Ubhe"
          title="VP of Outreach"
          description="I am a sophomore majoring in computer science. I have been a part of WiCS since my freshman year. "
          /*link="https://www.linkedin.com/in/bushra-karim-669a101b1" */
        />

        <TeamMembers
          officer={
            <img
              src="../imagesCropped2024/Han Nguyen (2).png"
              alt="woman"
              fluid
            />
          }
          name="Han Nguyen"
          title="Logistics Director"
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
          title="Marketing Director"
          description="I am a sophomore majoring in computer science and minoring in math! My other interests are in sustainability, environmental sciences, and food -- in high school I ran a food blog on Instagram for restaurants in San Diego :-)"
          link="www.linkedin.com/in/sofia-vargas-8886b5284"
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
          title="Graphic Designer"
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
          name="Sia Sheguri"
          title="Programming Competition Director"
          description=" -- "
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

          name="Tanmayi Ghadge"
          title="Mentorship Program Director"
          description="--"
          link=""
        />

        <TeamMembers
          officer={
            <img
              src="../imagesCropped2024/Michelle Tam.png"
              alt="woman"
              fluid
            />
          }
          name="Michelle Tam"
          title="Web Master"
          description="Hi! I am a senior majoring in Computer Science! I love to cook, play games and hang out with friends! On my free time I also like to try and learn new instruments :)"
          link="www.linkedin.com/in/tammichelle830"
        />

        <TeamMembers
          officer={
            <img
              src="../imagesCropped2024/Shannen Aganon.png"
              alt="woman"
              fluid
            />
          }
          name="Shannen Aganon"
          title="Campus Relations Director"
          description="Hi, my name is Shannen Aganon and I am a Senior studying Computer Science! In my free time I like to try new foods, hang out with my friends, and spend time outside!"
          link="https://www.linkedin.com/in/shannenaganon/"
        />

        {/* <TeamMembers
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
        /> */}

        {/* <TeamMembers
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
        /> */}

        {/* <TeamMembers
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
        /> */}

        {/* <TeamMembers
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
        /> */}

        {/* <TeamMembers
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
        /> */}

        {/* <TeamMembers
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
        /> */}
{/* 
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
        /> */}

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
