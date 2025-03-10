import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="flex items-baseline justify-between">
      <div className="flex items-baseline gap-6">
        <span className="text-xl">
          <CgMenuGridR></CgMenuGridR>
        </span>
        <div className="flex items-baseline font-plain gap-36 text-[#FFFFFF]">
          <h3 className="text-[30px] font-semibold">obys</h3>
          <p className="text-[14px] font-medium">
            <span className="flex items-center gap-0.5">
              Obys
              <TfiLayoutLineSolid className="text-xl"></TfiLayoutLineSolid>
            </span>
            Creative <br />
            Design <br />
            Agency
          </p>
        </div>
      </div>
      <div>
        <ul className="flex gap-10 text-[#FFFFFF]">
          <li>Works</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
