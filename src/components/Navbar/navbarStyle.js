import styled, { css } from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #ffffff;
    height: 80px;
    position: sticky;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 100;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #003F74;
    justify-self: center;
    cursor: pointer;
    display: flex; 
    margin-left: 30px;

    @media screen and (min-width: 1320px) {
        margin-left:30px;
    }
    @media screen and (max-width: 1130px) {
        margin-left:10px;
    }
    @media screen and (max-width: 800px) {
        margin-left:-20px;
    }
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (min-width: 459px) {
        cursor: pointer;
    }

    @media screen and (max-width: 1159px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        color: #003F74;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: 80px;
    font-weight: bold;
    @media screen and ((min-width: 1160px) and (max-width: 1290px)) {
        margin-left: 20px;
    }
    @media screen and (max-width: 1159px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    white-space: nowrap;
`

export const NavLinks = styled(LinkS)`
    color: #003F74;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width:  1159px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
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
    @media screen and ((min-width: 1160px) and (max-width: 1290px)) {
        margin-left: 20px;
    }
    &:hover{
        transition: all 0.2s ease-in-out;
        color: #FFFFFF;
        background-color: #003F74;
    }
`

export const IconWrapper = styled.span`
  ${({ isHovered }) =>
    isHovered &&
    css`
      display: inline;
    `}
`;


export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  padding: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
  white-space: nowrap;
`;


export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ffa12b;
  }
`

export const DropdownLink = styled(NavLinks)`
  color: #003366; 
`;