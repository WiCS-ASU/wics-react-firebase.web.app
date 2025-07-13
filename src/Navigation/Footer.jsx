import React from "react";
import { FaLinkedinIn, FaInstagram,  FaFacebookSquare} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6 px-4 font-serif font-bold">
      <div className="mb-3 text-center">
          Contact Us
      </div>
      <div className="flex justify-center gap-6 mb-3">
      <a href="mailto:wics.asu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="text-3xl"
        >
          <MdOutlineMail />
        </a>
        <a href="https://www.instagram.com/wics.asu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-3xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/wics-asu/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-3xl"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.facebook.com/wics.asu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-3xl"
        >
          < FaFacebookSquare />
        </a>
      </div>
    </footer>
  );
}

