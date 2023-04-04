import React from "react";
import { Link } from "react-scroll";
import { SideMenuSection } from "./SideMenuStyle";
import data from "../../assets/local-data/Data.json";
import { IoClose } from "react-icons/io5";

const SideMenu = ({ sideMunuProp, sideMenuHandler }) => {
  return (
    <SideMenuSection left={sideMunuProp ? "0" : "-100%"}>
      <div className="menu_wrapper">
        {/* header */}
        <div className="side_menu_header">
          <a href="/" onClick={() => sideMenuHandler()}>
            Cresent Bakery
          </a>
          {/* Close Button */}
          <IoClose onClick={() => sideMenuHandler()} />
        </div>

        {/* Side Menu Navigation */}
        <div className="navigaton_wrapper">
          <ul>
            {data.navigation.map((currEl, i) => (
              <li key={i}>
                <Link
                  to={currEl}
                  key={i}
                  href={`#${currEl}`}
                  onClick={() => sideMenuHandler()}
                >
                  {currEl}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* logo  */}
        <div className="logo_wrapper">
          <img src={data.logo} alt="logo" />
        </div>
      </div>
    </SideMenuSection>
  );
};

export default SideMenu;
