import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks,
  NavItem, NavBtn, NavBtnLink, IconWrapper, DropdownMenu, DropdownItem, DropdownLink } from './navbarStyle';
import logo from './logoItirana.jpg';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';


const Navbar = ({ toggle }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState([]);

  const handleMouseEnter = (index) => {
    setIsHovered((prev) => {
      const updatedHovered = [...prev];
      updatedHovered[index] = true;
      return updatedHovered;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prev) => {
      const updatedHovered = [...prev];
      updatedHovered[index] = false;
      return updatedHovered;
    });
  };

 const navItems = [
    { to: 'services', 
      label: 'SERVICES',
      dropdown: [
        { to: '', label: 'Data Transmissions' },
        { to: '', label: 'Dark Fiber' },
        { to: '', label: 'Dedicated Internet' },
        { to: '', label: 'Co-Location' },
        { to: '', label: 'Web Hosting' },
        { to: '', label: 'Managed & Proffesional' },
        { to: '', label: 'Virtual Desktop Infrastructure' },
        { to: '', label: 'Bussines Drive & Archive' }],
      showIcon: true,
    },

    { to: '', label: 'SOLUTIONS', showIcon: false },

    { to: '', label: 'SUPPORT', 
    dropdown: [
      { to: '', label: 'Equipment Setup Guide' },
      { to: '', label: 'Speed Test' },
      { to: '', label: 'Price Calculator' },
      { to: '', label: 'Subnet Calculator' },
      { to: '', label: 'Connection Checker' },
      { to: '', label: 'Ticket System' },
      { to: '', label: 'Blog' },],
    showIcon: true,
    },
    { to: '', label: 'CLOUD', showIcon: false },
    { to: '', label: 'WHY US?', showIcon: false },

    { to: '', 
      label: 'COMPANY', 
      dropdown: [
        { to: '/Company/Team', label: 'Team' },
        { to: '', label: 'Contact Us' },
        { to: '', label: 'Organigram' },
        { to: '', label: 'Standards' },
        { to: '', label: 'Terms of use' },
        { to: '', label: 'Privacy' },
        { to: '', label: 'Return Policy' },], 
      showIcon: true },
  ];

  const handleNavItemClicked = (to) => {
    if (to) {
      navigate(to);
    }
  };
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          
          <NavLogo to="/">
            <img src={logo} alt="Logo e Itiranes" width="202" height="70" />
          </NavLogo>
          
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          
          <NavMenu>
            { navItems.map((item, index) => ( 
              <NavItem
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleNavItemClicked(item.to)}
              >
                
                <NavLinks to={item.to}>
                  <span>{item.label}</span>
                  {item.showIcon && (
                    <IconWrapper isHovered={isHovered[index]}>
                      {isHovered[index] ? ( <RiArrowDropUpLine size={32} />) : (<RiArrowDropDownLine size={32}/>)}
                    </IconWrapper>
                  )}
                </NavLinks>
                
                {item.dropdown && isHovered[index] && (
                  <DropdownMenu>
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <DropdownItem key={dropdownIndex}>
                        <DropdownLink onClick={() => handleNavItemClicked(dropdownItem.to)}> 
                          {dropdownItem.label}
                        </DropdownLink>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </NavItem>
            ))}
            
            <NavBtn>
              <NavBtnLink to="login">LOGIN</NavBtnLink>
            </NavBtn>
          
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
