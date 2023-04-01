import React, { useRef } from "react";
import { Navigation } from "./headerStyle";
import data from "../../assets/local-data/Data.json";
import Logo from "../../assets/images/logo_creacent.png";
import { TbMenu2 } from "react-icons/tb";

const Header = ({ sideMunuProp }) => {
  const anchorTaqs = useRef();
  return (
    <Navigation>
      <div className="container">
        <div className="main_container">
          {/* logo Container */}
          <div className="logo_container">
            <a href="/" ref={anchorTaqs}>
              <img src={Logo} alt="Logo" />
            </a>
            <a href="/">Cresent Bakery</a>
          </div>

          {/* navigation Container */}
          <div className="nav_container">
            <ul>
              {data.navigation.map((currEl, i) => (
                <li key={i}>
                  <a href="#" key={i}>
                    {currEl}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Side Menu Style Icon */}

          <div className="side_menu_wrapper">
            <TbMenu2 onClick={() => sideMunuProp()} />
          </div>
        </div>
      </div>
    </Navigation>
  );
};

export default Header;
