import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h3 className="text-2xl mx-auto font-bold">Genta Arimbawa</h3>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/genta-arimbawa">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Mastayxz">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/bagusgenta._/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
