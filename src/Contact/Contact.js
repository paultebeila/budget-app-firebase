import React from "react";
import { BsTwitter, BsLinkedin,BsDownload,BsGithub } from "react-icons/bs";
function Contact() {
   return (
      <div className="app__social">
        <div>
            <a href="https://github.com/paultebeila">
                <BsGithub/>
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/matlale-paulos-tebeila-77595a209/">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="">
               <BsDownload />
            </a>
         </div>
        
      </div>
   );
}
export default Contact;