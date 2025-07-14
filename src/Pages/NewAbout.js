import WWD from "../UI/Cards/WWD";
import Scene from "../UI/Humaaans/Scene.svg";
import mentorships from "../UI/Humaaans/mentorships.svg";
import techTalks from "../UI/Humaaans/techTalks.svg";
import social from "../UI/Humaaans/social.svg";
import WhatWeDo from "../WhatWeDo/WhatWeDo.js";
import SeasonalDisplay from "../SeasonalDisplay/SeasonalDisplay.js";

//bg-light
function NewAbout() {
  return (
    <div className="bg-[#dab7f17c] h-screen px-9 text-center ">
        <h1 className="py-4 text-5xl md:text-6x font-serif">Women in Computer Science</h1>
        <p className="text-lg">A support network and resource for female and other minority students in technology
            <br/> Women in Computer Science is a student-led organization at Arizona State University,
             which aims to support female and other minority students in technology.</p>
             <a href="https://asu.campuslabs.com/engage/organization/women-in-computer-science" 
             className="text-lg no-underline inline-block px-4 py-2 bg-[#780cdc] text-white hover:bg-[#6009b0] rounded-lg"
             target="_blank" // optional: open in new tab
             rel="noopener noreferrer" // security best practice
             > Join Now </a>
        <p>Activites: Mentorship Program, Banquets, Socials, Tech Talks, General Body Meetings </p>
    </div>
    );
}
export default NewAbout;
