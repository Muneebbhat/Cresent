import React, { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Navigation } from './headerStyle';
import data from '../../assets/local-data/Data.json';
import Logo from '../../assets/images/logo_creacent.png';
import { TbMenu2 } from 'react-icons/tb';

const Header = ({ sideMunuProp }) => {
  const [headerOffset, setHeaderOffset] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeaderOffset(window.pageYOffset);
    });
  }, []);

  const anchorTaqs = useRef();
  return (
    <Navigation opacity={headerOffset >= 320 ? '1' : '0.6'}>
      <div className='container'>
        <div className='main_container'>
          {/* logo Container */}
          <div className='logo_container'>
            <a href='/' ref={anchorTaqs}>
              <img src={Logo} alt='Logo' />
            </a>
            <a href='/'>Cresent Bakery</a>
          </div>

          {/* navigation Container */}
          <div className='nav_container'>
            <ul>
              {data.navigation.map((currEl, i) => (
                <li key={i}>
                  <Link
                    to={currEl}
                    key={i}
                    href={`#${currEl}`}
                    activeClass='active'
                    spy={true}
                    smooth={true}
                  >
                    {currEl}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Side Menu Style Icon */}

          <div className='side_menu_wrapper'>
            <TbMenu2 onClick={() => sideMunuProp()} />
          </div>
        </div>
      </div>
    </Navigation>
  );
};

export default Header;
