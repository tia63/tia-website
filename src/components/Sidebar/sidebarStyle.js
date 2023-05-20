import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'

export const SidebarContainer = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #ffffff;
  padding: 20px;
  z-index:999;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen}) => (isOpen ? '0' : '-100%')}; 
  max-height: 100vh;
  overflow-y: auto;
  
  @media screen and (min-width: 1159px) {
    display: none;
  }
`;

export const SidebarContent = styled.div`
  margin-top: 60px;
  padding: 10px;
`;

export const CloseIcon = styled(FaTimes)`
    color: #003366;

    @media screen and (min-width: 460px) {
      cursor: pointer;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.3rem;
    right: 2rem;
    background-color: transparent;
    font-size: 1.8rem;
    
    
    @media screen and (min-width: 460px) {
      cursor: pointer;
    }
`;

export const CustomSidebarItem = styled.div`
  margin-bottom: 20px;
  color: #003366;
  font-weight: bold;
  font-size: 18px;
  @media screen and (min-width: 460px) {
    cursor: pointer;
  }
`;

export const DropdownContainer = styled.div`
  padding: 15px;
  font-size: 17px;
`;

export const DropdownItem = styled.div`
  margin: 10px 0;

  @media screen and (min-width: 460px) {
    cursor: pointer;
  }
`

export const NavBtn1 = styled.nav`
    display: flex;
    align-items: center;
`

export const NavBtnLink1 = styled(LinkR)`
    border-radius: 50px;
    background-color: #FF5003;
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    color: #ffffff;
    outline: none;
    border: none;
    cursor: pointer;
    margin-left: 100px;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        color: #FFFFFF;
        background-color: #003F74;
    }
`