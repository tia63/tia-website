import styled from "styled-components";

export const ServicesWrapper = styled.div`
    padding-bottom:30px;
`

export const ServicesTitle = styled.h3`
    color: #FF8E00;
    margin: 100px 0 45px 0;
    text-align:center;
    font-size:28px;
    font-weight:bold;
    
    @media screen and ((min-width: 401px) and (max-width: 806px)){
      margin: 150px 0 45px 0;
    }
    
    @media screen and (max-width: 400px){
      margin: 140px 0 -40px 0;
  }
  
`

export const SlideIndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: -100px;
  z-index:1;
`;

export const SlideIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#FF8E00" : "#ccc")};
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 400px;
  margin: 0 auto;
  padding-top:100px;
  padding-bottom:100px;
  max-width:100%;
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  color: #FF8E00;
  background-color:transparent;
  padding: 5px 10px;
  cursor: pointer;
  user-selection:none;
  ${({ direction }) => (direction === "left" ? "left: 0;" : "right: 0;")}
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; 
  margin-top:20px;
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 260px;
  height:400px;
  padding: 10px;
  border: 7px solid #FF8E00;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-bottom:60px;
`;

export const CardTitle = styled.div`
  position: absolute;
  margin-bottom: 10px;
  margin-top:-27px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardTitleText = styled.button`
  border: none;
  background-color: #FF8E00;
  color: #fff;
  padding: 5px 15px;
  border-radius:15px;
  font-size:17px;
  font-weight:bold;
`;

export const CardImage = styled.img`
  margin-top:25px;
  width: 150px; 
  height: 150px;
`;

export const CardText = styled.p`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: #002347;
  font-weight: bold;
`;

export const CardButtonContainer = styled.div`
  position: absolute;
  bottom: -18px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardButtonText = styled.button`
  border: none;
  background-color: #FF8E00;
  color: #fff;
  padding: 5px 15px;
  font-weight:bold;
  border-radius:7px;
  cursor:pointer;
`;

