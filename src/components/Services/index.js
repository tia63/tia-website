import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ServicesWrapper, ServicesTitle, SlideIndicatorsContainer, SlideIndicator,
         SliderContainer, SliderButton, CardContainer, CardWrapper, CardTitle,
         CardTitleText, CardImage, CardText, CardButtonContainer, CardButtonText} from "./ServicesStyle";
import cardsData from './ServicesData'
import { useNavigate } from "react-router-dom";


const Card = ({ title, image, text, link }) => {

    const navigate = useNavigate();

    const handleExploreMore = () => {
      navigate(link);
    };

    return (
        <CardWrapper>
          <CardTitle>
            <CardTitleText>{title}</CardTitleText>
          </CardTitle>

          <CardImage src={image} alt={text} />
          <CardText>{text}</CardText>

          <CardButtonContainer>
            <CardButtonText onClick={handleExploreMore}>Explore More</CardButtonText>
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
            <SlideIndicatorsContainer>
              {cardsData.map((_, index) => (
                <SlideIndicator
                  key={index}
                  active={index === currentSlide}
                  onClick={() => handleSlideIndicatorClick(index)}
                />
              ))}
            </SlideIndicatorsContainer>
          </>
        ) : (
          <CardContainer>
            {cardsData.map((card) => (
              <Card key={card.id} title={card.title} image={card.image} text={card.text} link={card.link} />
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
          link={cardsData[currentSlide].link}
        />
        <SliderButton direction="right" onClick={nextSlide}>
          <FaChevronRight size={37} />
        </SliderButton>
      </SliderContainer>
    );
  };
  
export default Services;
