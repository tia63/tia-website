import React, { useState } from "react";
import styled from "styled-components";
import datatransmission from './images/datatransmission.png'
import dedicated from './images/dedicatedinternet.png'
import colocation from './images/colocation.png'
import managed from './images/managed.png'
import cloud from './images/cloud.png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const cardsData = [
  {
    id: 1,
    image: datatransmission,
    title: "DATA TRANSMISSION",
    text: "Provide turnkey network integration services that ensure high-speed, secure and reliable transport for large volumes of broadband traffic.",    
  },
  {
    id: 2,
    image: dedicated,
    title: "DEDICATED INTERNET",
    text: "Get your customers and employees in the “first class” lane to the global information highway."
  },
  {
    id: 3,
    image: colocation,
    title: "COLOCATION",
    text: "Our Colocation Center, located directly in our IP Network, provides secure content delivery and operating, while eliminating the cost of building, powering, cooling your own data center."
  },
  {
    id: 4,
    image: managed,
    title: "MANAGED",
    text: "Our professional services provides connection to the expertise you need, to effectively design, implement and manage communication networks."
  },
  {
    id: 5,
    image: cloud,
    title: "CLOUD",
    text: "Our managed Cloud delivers full virtualization of servers, storage, databases, frameworks for software development and much more."
  },
];

const ServicesWrapper = styled.div`
padding-bottom:30px;
`

const ServicesTitle = styled.h3`
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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; 
  margin-top:20px;
`;
const CardWrapper = styled.div`
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


const CardTopButtonContainer = styled.div`
position: absolute;
margin-bottom: 10px;
margin-top:-27px;
width: 100%;
display: flex;
justify-content: center;
z-index:1;
`;

const CardButtonContainer = styled.div`
  position: absolute;
  bottom: -18px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index:1;
`;

const CardButton = styled.button`
  border: none;
  background-color: #FF8E00;
  color: #fff;
  padding: 5px 15px;
  border-radius:15px;
  font-size:17px;
  font-weight:bold;
`;

const CardButton1 = styled.button`
  border: none;
  background-color: #FF8E00;
  color: #fff;
  padding: 5px 15px;
  font-weight:bold;
  border-radius:7px;
`;

const CardImage = styled.img`
margin-top:25px;
  width: 150px; 
  height: 150px;
`;

const CardText = styled.p`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
margin: 0;
color:#002347;
font-weight:bold;
`;



const SliderContainer = styled.div`
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

const SliderButton = styled.button`
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

const SlideIndicators = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: -100px;
  z-index:1;
`;


const SlideIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#FF8E00" : "#ccc")};
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;

`;

const Card = ({ title, image, text }) => {
    return (
      <CardWrapper>
          <CardTopButtonContainer>
            <CardButton>{title}</CardButton>
          </CardTopButtonContainer>
        <CardImage src={image} alt={text} />
        <CardText>{text}</CardText>
        <CardButtonContainer>
          <CardButton1>Explore More </CardButton1>
        </CardButtonContainer>
      </CardWrapper>
    );
  };

  const Services = () => {
    const isMobile = window.innerWidth <= 400;
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handleSlideIndicatorClick = (index) => {
      setCurrentSlide(index);
    };
  
    const cardLayout = (
      <ServicesWrapper>
        <ServicesTitle>OUR SERVICES</ServicesTitle>
        {isMobile ? (
          <>
            <CardSlider currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
            <SlideIndicators>
              {cardsData.map((_, index) => (
                <SlideIndicator
                  key={index}
                  active={index === currentSlide}
                  onClick={() => handleSlideIndicatorClick(index)}
                />
              ))}
            </SlideIndicators>
          </>
        ) : (
          <CardContainer>
            {cardsData.map((card) => (
              <Card key={card.id} title={card.title} image={card.image} text={card.text} />
            ))}
          </CardContainer>
        )}
      </ServicesWrapper>
    );
    
  
    return <div>{cardLayout}</div>;
  };
      
  
  const CardSlider = ({ currentSlide, setCurrentSlide }) => {
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % cardsData.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? cardsData.length - 1 : prevSlide - 1
      );
    };
  
    return (
      <SliderContainer>
        <SliderButton direction="left" onClick={prevSlide}>
          <FaChevronLeft size={37} />
        </SliderButton>
        <Card
          title={cardsData[currentSlide].title}
          image={cardsData[currentSlide].image}
          text={cardsData[currentSlide].text}
        />
        <SliderButton direction="right" onClick={nextSlide}>
          <FaChevronRight size={37} />
        </SliderButton>
      </SliderContainer>
    );
  };
  
export default Services;
