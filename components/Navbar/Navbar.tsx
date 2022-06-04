import React, { useContext, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillMessage, AiFillGithub } from "react-icons/ai";
import { HiDesktopComputer } from "react-icons/hi";
import { BsSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarToggle from "./NavbarToggle";
import { Theme, ThemeContext } from "../../context/ThemeContext";
type Props = {};

function Navbar({}: Props) {
  const color = 'white'
  const {theme , handleTheme} = useContext<Theme>(ThemeContext)

  console.log(theme)
  const [showToggle, setShowToggle] = useState<boolean>(false);

  return (
    <div className="w-screen h-16 md:w-16 md:h-screen bg-black flex flex-row md:flex-col justify-between px-5 md:justify-between  items-center py-5 z-10 relative">
      <div className="cursor-pointer" onClick={handleTheme}>
        <BsSunFill size="30" color="white" />
      </div>
      <div className="md:hidden" onClick={() => setShowToggle(!showToggle)}>
        <GiHamburgerMenu size="30" color="white" />
      </div>
      <NavbarToggle showToggle={showToggle} />
      <div className="md:flex md:flex-col justify-between items-center hidden">
        <div className="my-12 p-2 rounded-md hover:bg-slate-400 cursor-pointer">
          <FaUserAlt size="30" color="white" />
        </div>
        <div className="my-5 mx-3 md:mx-0 p-2 rounded-md hover:bg-slate-400 cursor-pointer">
          <HiDesktopComputer size="30" color="white" />
        </div>
        <div className="my-12 p-2 rounded-md hover:bg-slate-400 cursor-pointer">
          <AiFillMessage size="30" color={color} />
        </div>
        <div></div>
      </div>
      <div className="cursor-pointer hidden md:block">
        <AiFillGithub size="30" color="white" />
      </div>
    </div>
  );
}

export default Navbar;
