import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #2E475D;
  z-index: 2;
  position:relative;
  overflow-x: hidden;
`;

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 0.8fr 1fr 1fr;
  padding: 30px 0 0 60px;
  
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding-left: 30px;
  }
`;

export const FooterColumn = styled.div``;

export const FooterTitle = styled.h3`
  margin-top: 20px;
  color: #FF8E00;
`;

export const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

export const FooterLinkItem = styled.li`
  margin-bottom: 15px;
  white-space: pre-line;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    white-space: pre-line;
    flex-direction: row;
    user-selection: none;
    color: #FFFFFF;

    &:hover {
      color: #FF8E00;
      cursor:pointer;
    }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  color: #FF8E00;
`;

export const StyledLink2= styled(Link)`
  text-decoration: none;
  color: #ffffff;
  text-align: left;
  background-color: transparent;
  display:block;

  &:hover {
    color: #FF8E00;
    cursor:pointer;
  }
`

