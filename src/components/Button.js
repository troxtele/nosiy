import React from "react";
import { Link } from "react-scroll";

const Button = ({ styles }) => (
  <Link to="cta" smooth={true} duration={500}>
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-[#6B5DD3] rounded-[10px] outline-none ${styles}`}>
      Get Started
    </button>
  </Link>
);

export default Button;
