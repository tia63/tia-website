import styled from "styled-components";

export const IconSection = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
    width: 180px;
    height: 3px;
    background-color: #FF8E00;

  @media (max-width: 930px) {
    width: 3px;
    height: 80px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 600px;

  @media (max-width: 480px) {
    max-width: 320px;
  }
`;

export const SocialIcon = styled.a`
  color: #FF8E00;
  font-size: 32px;
  margin: 20px;
  transition: color 0.2s ease;

  @media (max-width: 570px) {
    margin:10px;
  }

  &:hover {
    color: #FFFFFF;
  }
`;