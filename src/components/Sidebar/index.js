import React, { useState } from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarContent, CustomSidebarItem, DropdownContainer,
   DropdownItem, NavBtn1, NavBtnLink1  } from './sidebarStyle';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const DropdownIcon = ({ open }) => {
  return open ? (
    <RiArrowDropUpLine/>
  ) : (
    <RiArrowDropDownLine />
  );
};

const DropdownContent = ({ dropdown, onItemClick }) => {
  return (
    <DropdownContainer>
      {dropdown &&
        dropdown.map((item) => (
          <DropdownItem key={item.to} onClick={() => onItemClick(item)}>
            {item.label}
          </DropdownItem>
        ))}
    </DropdownContainer>
  );
};

const SidebarItem = ({ item }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const onDropdownItemClick = (item) => {
    setSelectedDropdownItem(item);
    setDropdownOpen(false);
    navigate(item.to);
  };


  return (
    <CustomSidebarItem>
      <div onClick={toggleDropdown}>
        <span>{item.label}</span>
        {item.showIcon && <DropdownIcon open={dropdownOpen} />}
      </div>
      {dropdownOpen && item.dropdown && (
        <DropdownContent dropdown={item.dropdown} onItemClick={onDropdownItemClick} />
      )}
      {selectedDropdownItem && (<div></div>)}
    </CustomSidebarItem>
  );
};

const Sidebar = ({ isOpen, toggle }) => {
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
      
      return (
      <>
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        
        <SidebarContent>
          {navItems.map((item) => (
            <SidebarItem key={item.to} item={item} />
          ))}
          
          <NavBtn1>
              <NavBtnLink1 to="login">LOGIN</NavBtnLink1>
          </NavBtn1>

        </SidebarContent>
      </SidebarContainer>
      </>
      );
  };
      
export default Sidebar;