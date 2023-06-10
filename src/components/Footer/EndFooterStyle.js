import styled from "styled-components";
import { Link } from 'react-router-dom';

export const EndFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top:20px;

  @media (max-width: 800px) {
    margin-top: 40px;
    grid-gap: 10px;
  }
`;

export const Column = styled.div`
  flex: 1;
  text-align: left;
  margin: 0 0 10px 20px;
  font-weight: bold;
  
  @media (max-width: 800px) {
    flex-basis: 100%;
    text-align: left;
  }
`;

export const Text = styled.div`
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ImgColumn = styled(Column)`
  flex: 0 0 150px;
  
  @media (max-width: 800px) {
    flex-basis: 100%;
    text-align: left;
  }
`;

export const Image = styled.img`
  height: auto;  
`;

export const Column1 = styled.div`
  flex: 1;
  text-align: right;
  margin: 0 20px 10px 20px;
  font-weight: bold;

  @media (max-width: 800px) {
    flex-basis: 100%;
    text-align: left;
  }
`;

export const StyledLink1= styled(Link)`
text-decoration: none;
color: #ffffff;
text-align: right;
background-color: transparent;

&:hover {
  color: #FF8E00;
  cursor:pointer;
}
`

export const Pipe = styled.span`
  color: #FFFFFF;
  display: inline-block;
  margin: 0 15px;
`;

