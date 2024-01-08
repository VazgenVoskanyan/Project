import { FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Flag from "react-world-flags";
import NavigationMenuStyle from "./NavigationMenu.module.css";
import { NavLink } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { CgToolbox } from "react-icons/cg";
import { LuCar } from "react-icons/lu";
import { PiPlant } from "react-icons/pi";
import { PiPawPrintBold } from "react-icons/pi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";

const NavigationMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={NavigationMenuStyle.navigate}>
      <nav>
        <button className={NavigationMenuStyle.bars} onClick={toggleMenu}>
          <FaBars color="gray" size={30} />
        </button>
        <div className={NavigationMenuStyle.logoInput}>
          <CiSearch />
          <input type="text" placeholder="search" />
        </div>
        <NavLink to="/">Home</NavLink>
        <Flag code="US" style={{ width: '40px', height: '20px', borderRadius:"0" }} />
      </nav>

      {menuOpen && (
        <div className={NavigationMenuStyle.openedMenu}>
          <NavLink to="apartments">
            <BsHouse color="gray" size={20} /> Houses
          </NavLink>
          <NavLink to="cars">
            <LuCar color="gray" size={20} /> Transport
          </NavLink>
          <NavLink to="jobs">
            <CgToolbox color="gray" size={20} /> Jobs
          </NavLink>
          <NavLink>
            <HiOutlineWrenchScrewdriver color="gray" size={20} /> Technique
          </NavLink>
          <NavLink>
            <PiPlant color="gray" size={20} /> Plants
          </NavLink>
          <NavLink>
            <PiPawPrintBold color="gray" size={20} /> Animals
          </NavLink>
          <NavLink>
            <AiOutlineCustomerService color="gray" size={20} /> Service
          </NavLink>
          <NavLink>
            <IoFastFoodOutline color="gray" size={20} /> Food
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavigationMenu;
