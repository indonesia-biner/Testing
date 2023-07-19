import React from "react";
// import components
import Socials from "./Socials";
import Logo from "../img/header/logo.png";
import MobileNav from "./MobileNav";

// import Link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[100px] flex items-center" style={{backgroundColor: "white"}}>
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo*/}
        <Link to={"/"} className="flex items-center max-w-[250px]">
            <img src={Logo} alt="" width={70}/>
            <h1 className="font-black font-primary mx-5">Tentang GW</h1>
          </Link>
        {/* Logo */}
        {/* nav - dekstop mode */}
        <nav className="hidden xl:flex gap-x-12 font-semibold font-primary">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transtition"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-primary transtition"
          >
            About me
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary transtition"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* Social */}
      <div className="hidden xl:flex ml-24">
      <Socials />
      </div>
      {/* Mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
