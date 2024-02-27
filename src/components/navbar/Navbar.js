import React from "react";
import { Link } from "react-scroll";
import { logo2 } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  return (
    <div className="w-full h-30 sticky top-0 z-50  bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 ">
      <div>
        <img className="rounded-full " src={logo2} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-300 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
